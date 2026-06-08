import { aboutParagraphs } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

const focusAreas = [
  "APIs IA robustes",
  "Streaming de réponse",
  "Authentification JWT",
  "Persistance PostgreSQL",
  "Monitoring LangSmith",
  "Workflows LangGraph",
] as const;

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Profil"
          title="Un backend developer orienté produits IA utiles et exploitables."
          description="Je conçois des fondations techniques claires pour transformer les idees IA en APIs, workflows et assistants fiables."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="premium-card rounded-lg p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <p className="font-mono text-sm text-cyan-300">
                  0{index + 1}
                </p>
                <p className="mt-2 font-semibold text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
