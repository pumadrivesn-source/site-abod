"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/articles", label: "Articles" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const contactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/55 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-black/5">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-semibold">
            {profile.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0])
              .join("")}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-neutral-900">
              {profile.name}
            </span>
            <span className="block text-xs text-neutral-500">{profile.title}</span>
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-3">
          <ul className="hidden items-center gap-1 text-sm sm:flex">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      "rounded-full px-3 py-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 " +
                      (active
                        ? "bg-accent text-white shadow-sm"
                        : "text-neutral-700 hover:bg-white/70 hover:text-accent")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {profile.cvUrl ? (
              <a
                className="inline-flex h-9 items-center justify-center rounded-full border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50 hover:text-accent"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
              >
                CV PDF
              </a>
            ) : null}

            <Link
              className={
                "inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 " +
                (contactActive
                  ? "bg-accent text-white"
                  : "border border-neutral-200 bg-white/70 text-neutral-900 hover:bg-white hover:text-accent")
              }
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
