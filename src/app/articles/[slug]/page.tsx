import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { articles } from "@/data/articles";
import Link from "next/link";

function renderBlock(
  block:
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-8 text-lg font-semibold tracking-tight text-neutral-900">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-5 text-sm font-semibold tracking-tight text-neutral-900">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "p":
      return <p className="mt-3 text-sm leading-6 text-neutral-700">{block.text}</p>;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <div className="text-base font-semibold tracking-tight text-neutral-900">
              Article introuvable
            </div>
            <div className="mt-2 text-sm text-neutral-700">
              <Link className="underline" href="/articles">
                Retour aux articles
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">
        <Reveal>
          <header className="rounded-3xl border border-neutral-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <div className="text-xs text-neutral-500">{article.dateLabel}</div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900">
              {article.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700">
              {article.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap">
              {article.tags.map((t) => (
                <SkillBadge key={t} label={t} />
              ))}
            </div>
            <div className="mt-4 text-sm">
              <Link className="font-medium underline" href="/articles">
                ← Tous les articles
              </Link>
            </div>
          </header>
        </Reveal>

        <Reveal lazy>
          <Section title="Article">
            <article className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
              {article.blocks.map((b, i) => (
                <div key={i}>{renderBlock(b)}</div>
              ))}
            </article>
          </Section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
