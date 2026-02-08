import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { profile } from "@/data/profile";
import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-12">
        <Reveal lazy>
          <div id="about" className="scroll-mt-24" />
          <Section title="À propos">
            <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg">
              <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-start">
                <div className="min-w-0">
                  <p className="text-sm leading-6 text-neutral-700">{profile.summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                    {profile.about.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:justify-self-end">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm md:w-[220px]">
                    {profile.photoUrl ? (
                      <Image
                        src={profile.photoUrl}
                        alt={profile.name}
                        fill
                        className="object-cover"
                        sizes="220px"
                        priority={false}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-neutral-50 text-sm font-semibold text-neutral-500">
                        {profile.name
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((p) => p[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal lazy>
          <div id="articles" className="scroll-mt-24" />
          <Section title="Articles">
            <div className="space-y-4">
              <ul className="grid gap-4">
                {articles
                  .slice()
                  .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
                  .slice(0, 2)
                  .map((a) => (
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
                            <div className="text-base font-semibold tracking-tight text-neutral-900">
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
              <div>
                <Link className="text-sm font-medium underline" href="/articles">
                  Voir tous les articles
                </Link>
              </div>
            </div>
          </Section>
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
