import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ArticlesIndex from "@/components/ArticlesIndex";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">
        <Reveal>
          <header className="rounded-3xl border border-neutral-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
              Articles
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-700">
              Réflexions et analyses personnelles sur le travail, la technologie et les dynamiques
              économiques contemporaines.
            </p>
            <div className="mt-4 text-sm">
              <Link className="font-medium underline" href="/articles/a-propos">
                À propos du blog
              </Link>
            </div>
          </header>
        </Reveal>

        <Reveal lazy>
          <Section title="Blog">
            <ArticlesIndex items={articles} />
          </Section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
