"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import SkillBadge from "@/components/SkillBadge";
import type { Article, ArticleCategory } from "@/data/articles";

const categories: ArticleCategory[] = [
  "Travail & Employabilité",
  "Technologie & Société",
  "Économie & Finance",
  "Notes & Réflexions",
];

type Filter = "Tous" | ArticleCategory;

export default function ArticlesIndex({ items }: { items: Article[] }) {
  const [filter, setFilter] = useState<Filter>("Tous");

  const filtered = useMemo(() => {
    const base = items
      .slice()
      .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

    if (filter === "Tous") return base;
    return base.filter((a) => a.category === filter);
  }, [filter, items]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("Tous")}
          className={
            "rounded-full px-3 py-1.5 text-sm font-medium transition-colors " +
            (filter === "Tous"
              ? "bg-accent text-white shadow-sm"
              : "border border-neutral-200 bg-white/70 text-neutral-800 hover:bg-white hover:text-accent")
          }
        >
          Tous
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors " +
              (filter === c
                ? "bg-accent text-white shadow-sm"
                : "border border-neutral-200 bg-white/70 text-neutral-800 hover:bg-white hover:text-accent")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="grid gap-4">
        {filtered.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/articles/${a.slug}`}
              className="block rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {a.coverImage ? (
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-neutral-200/70 sm:h-24 sm:w-40">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                      priority={false}
                    />
                  </div>
                ) : null}

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-neutral-500">
                    {a.category}
                  </div>
                  <div className="mt-1 text-base font-semibold tracking-tight text-neutral-900">
                    {a.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {a.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap">
                    {a.tags.map((t) => (
                      <SkillBadge key={t} label={t} />
                    ))}
                  </div>
                </div>

                <div className="text-xs text-neutral-500">{a.dateLabel}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 text-sm text-neutral-700 shadow-sm backdrop-blur">
          Aucun article dans cette catégorie.
        </div>
      ) : null}
    </div>
  );
}
