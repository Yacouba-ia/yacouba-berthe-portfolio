import { certifications } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Certifications"
          title="Formation continue autour de Python, FastAPI, LLMs et automatisations IA."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            >
              <p className="font-semibold text-white">{certification}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
