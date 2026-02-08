import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
          Contact
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-neutral-600">
          Pour une opportunité, un projet ou une collaboration.
        </p>

        <Section title="Me joindre">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg">
            <div className="text-sm text-neutral-700">
              Email :{" "}
              <a className="font-medium underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="mt-2 text-sm text-neutral-700">
              Téléphone : <span className="font-medium">{profile.phone}</span>
            </div>
            {profile.linkedin ? (
              <div className="mt-2 text-sm text-neutral-700">
                LinkedIn :{" "}
                <a
                  className="font-medium underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.linkedin}
                </a>
              </div>
            ) : null}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
