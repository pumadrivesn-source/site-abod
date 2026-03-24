import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const API_SECRET = process.env.MAILER_API_SECRET;

function safeEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const transporter = nodemailer.createTransport({
  host  : process.env.SMTP_HOST || "ssl0.ovh.net",
  port  : parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth  : { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls   : { rejectUnauthorized: false },
});

// ── Log dans emails_queue ─────────────────────────────────────
async function logEmail({ recipient, subject, status, error_message }) {
  try {
    const res = await fetch(process.env.SUPABASE_URL + "/rest/v1/emails_queue", {
      method : "POST",
      headers: {
        "apikey"       : process.env.SUPABASE_KEY,
        "Authorization": "Bearer " + process.env.SUPABASE_KEY,
        "Content-Type" : "application/json",
        "Prefer"       : "return=minimal",
      },
      body: JSON.stringify({
        recipient,
        subject,
        body        : "(html)",
        status,
        ...(status === "sent" ? { sent_at: new Date().toISOString() } : {}),
        ...(error_message     ? { error_message }                     : {}),
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error("[PAPSA-MAILER] Log Supabase HTTP", res.status, txt);
    }
  } catch (e) {
    console.error("[PAPSA-MAILER] Log Supabase échoué :", e.message);
  }
}

const CORS = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Api-Key",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS });
}

export async function POST(req) {
  const key = req.headers.get("x-api-key") || "";
  if (!API_SECRET || !safeEqual(API_SECRET, key))
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401, headers: CORS });

  let data;
  try { data = await req.json(); } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400, headers: CORS });
  }

  let messages;
  if (Array.isArray(data.messages))               messages = data.messages;
  else if (data.to && data.subject && data.html)  messages = [data];
  else return NextResponse.json({ ok: false, error: "Missing: to/subject/html" }, { status: 400, headers: CORS });

  messages = messages.filter(m => m?.to && m?.subject && m?.html);
  if (!messages.length) return NextResponse.json({ ok: true, sent: 0, errors: [] }, { headers: CORS });

  const FROM_ADDR = process.env.SMTP_USER;
  const FROM_NAME = process.env.SMTP_FROM_NAME || "PAPSA — Demandes & Réclamations";
  let sent = 0;
  const errors = [];
  const tasks  = [];

  for (const msg of messages) {
    const toList = Array.isArray(msg.to)
      ? msg.to
      : String(msg.to).split(",").map(s => s.trim()).filter(Boolean);
    const ccList = Array.isArray(msg.cc) ? msg.cc.filter(e => e?.includes("@")) : [];

    for (const addr of toList) {
      if (!addr || !addr.includes("@")) {
        errors.push(`${addr}: adresse invalide`);
        tasks.push(logEmail({ recipient: addr, subject: msg.subject, status: "failed", error_message: "Adresse invalide" }));
        continue;
      }

      tasks.push(
        transporter.sendMail({
          from: `"${FROM_NAME}" <${FROM_ADDR}>`,
          to  : addr,
          subject: msg.subject,
          html   : msg.html,
          ...(ccList.length ? { cc: ccList.join(", ") } : {}),
        })
        .then(async () => {
          sent++;
          console.log(`[PAPSA-MAILER] ✅ → ${addr}`);
          await logEmail({ recipient: addr, subject: msg.subject, status: "sent" });
        })
        .catch(async (err) => {
          errors.push(`${addr}: ${err.message}`);
          console.error(`[PAPSA-MAILER] ❌ ${addr}: ${err.message}`);
          await logEmail({ recipient: addr, subject: msg.subject, status: "failed", error_message: err.message });
        })
      );
    }
  }

  await Promise.allSettled(tasks);
  return NextResponse.json({ ok: true, sent, errors }, { headers: CORS });
}
