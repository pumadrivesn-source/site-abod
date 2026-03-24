// ============================================================
//  PAPSA — Serverless Mailer (Next.js → Vercel)
//  Emplacement : pages/api/mailer.js
//  Remplace MailerController.php (Laravel OVH SMTP)
//  + Logging dans Supabase (emails_queue)
//
//  Variables d'environnement Vercel :
//    MAILER_API_SECRET, SMTP_HOST, SMTP_PORT,
//    SMTP_USER, SMTP_PASS, SMTP_FROM_NAME,
//    SUPABASE_URL, SUPABASE_KEY
// ============================================================

import nodemailer from "nodemailer";

// ── Sécurité : comparaison à temps constant ──────────────────
const API_SECRET = process.env.MAILER_API_SECRET;
function safeEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// ── Transport SMTP OVH ───────────────────────────────────────
const transporter = nodemailer.createTransport({
  host  : process.env.SMTP_HOST || "ssl0.ovh.net",
  port  : parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth  : { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls   : { rejectUnauthorized: false },
  pool  : true,
  maxConnections: 5,
  rateLimit     : 50,
});

// ── Supabase : insert dans emails_queue ──────────────────────
async function logEmail({ recipient, subject, status, error_message }) {
  try {
    const url = process.env.SUPABASE_URL + "/rest/v1/emails_queue";
    const key  = process.env.SUPABASE_KEY;
    const body = {
      recipient,
      subject,
      body    : "(html)",
      status,
      ...(status === "sent" ? { sent_at: new Date().toISOString() } : {}),
      ...(error_message     ? { error_message }                     : {}),
    };
    await fetch(url, {
      method : "POST",
      headers: {
        "apikey"       : key,
        "Authorization": "Bearer " + key,
        "Content-Type" : "application/json",
        "Prefer"       : "return=minimal",
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.error("[PAPSA-MAILER] Log Supabase échoué :", e.message);
  }
}

// ── Handler Next.js ──────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Api-Key");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")   return res.status(405).json({ ok: false, error: "Méthode non autorisée" });

  // ── Auth ─────────────────────────────────────────────────
  const key = req.headers["x-api-key"] || "";
  if (!API_SECRET || !safeEqual(API_SECRET, key)) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  // ── Parsing body ─────────────────────────────────────────
  const data = req.body;
  if (!data || typeof data !== "object") {
    return res.status(400).json({ ok: false, error: "JSON invalide" });
  }

  let messages;
  if (Array.isArray(data.messages)) {
    messages = data.messages;
  } else if (data.to && data.subject && data.html) {
    messages = [{ to: data.to, subject: data.subject, html: data.html }];
  } else {
    return res.status(400).json({ ok: false, error: "Missing: to/subject/html or messages[]" });
  }

  messages = messages.filter(m => m && m.to && m.subject && m.html);
  if (!messages.length) return res.status(200).json({ ok: true, sent: 0, errors: [] });

  // ── Envoi + Log ──────────────────────────────────────────
  const FROM_ADDR = process.env.SMTP_USER;
  const FROM_NAME = process.env.SMTP_FROM_NAME || "PAPSA — Demandes & Réclamations";

  let sent = 0;
  const errors = [];
  const tasks  = [];

  for (const msg of messages) {
    const toList = Array.isArray(msg.to)
      ? msg.to
      : String(msg.to).split(",").map(s => s.trim()).filter(Boolean);

    const ccList = Array.isArray(msg.cc)
      ? msg.cc.filter(e => e && e.includes("@"))
      : [];

    for (const addr of toList) {
      if (!addr || !addr.includes("@")) {
        errors.push(`${addr}: adresse invalide`);
        tasks.push(logEmail({ recipient: addr, subject: msg.subject, status: "failed", error_message: "Adresse invalide" }));
        continue;
      }

      tasks.push(
        transporter.sendMail({
          from   : `"${FROM_NAME}" <${FROM_ADDR}>`,
          to     : addr,
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
          const errMsg = `${addr}: ${err.message}`;
          errors.push(errMsg);
          console.error(`[PAPSA-MAILER] ❌ ${errMsg}`);
          await logEmail({ recipient: addr, subject: msg.subject, status: "failed", error_message: err.message });
        })
      );
    }
  }

  await Promise.allSettled(tasks);
  return res.status(200).json({ ok: true, sent, errors });
}
