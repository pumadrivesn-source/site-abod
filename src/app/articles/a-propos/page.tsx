import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function BlogAboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">
        <Reveal>
          <header className="rounded-3xl border border-neutral-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
              À propos du blog
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-700">
              Ce blog propose des analyses et réflexions personnelles sur le travail, la technologie
              et les dynamiques économiques contemporaines.
            </p>
          </header>
        </Reveal>

        <Reveal lazy>
          <div className="mt-6 rounded-3xl border border-neutral-200/70 bg-white/70 p-6 text-sm leading-6 text-neutral-700 shadow-sm backdrop-blur">
            <p>
              J’écris avec un ton neutre, analytique et posé, en privilégiant des articles structurés
              (introduction, développement en quelques parties, conclusion ouverte).
            </p>
            <p className="mt-3">
              Objectif : clarifier des idées, partager des observations et mettre en perspective des
              tendances, sans discours militant et sans surenchère.
            </p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
