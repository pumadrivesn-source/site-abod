"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white/80 px-4 text-sm font-medium text-neutral-900 shadow-lg backdrop-blur transition-colors hover:bg-white"
      aria-label="Revenir en haut"
    >
      Haut
    </button>
  );
}
