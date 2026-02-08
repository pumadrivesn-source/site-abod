"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  once = true,
  lazy = false,
  rootMargin = "0px 0px -10% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  lazy?: boolean;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    setMounted(true);
    setPrefersReducedMotion(
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    );
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    if (!mounted) return;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { root: null, threshold: 0.15, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, once, rootMargin, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={
        "will-change-transform " +
        (!mounted
          ? "translate-y-3 opacity-0"
          : visible || prefersReducedMotion
            ? "animate-fade-in-up"
            : "translate-y-3 opacity-0") +
        " " +
        className
      }
    >
      {lazy ? (visible ? children : null) : children}
    </div>
  );
}
