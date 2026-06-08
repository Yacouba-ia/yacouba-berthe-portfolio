import { education } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  return (
    <section id="education" className="border-y border-cyan-300/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Education"
          title="Un parcours en communication et ressources humaines, utile pour comprendre les besoins métier."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {education.map((item) => (
            <article
              key={item.degree}
              className="premium-card rounded-lg p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-slate-300">{item.school}</p>
                </div>
                <span className="w-fit rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                  {item.mention}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
