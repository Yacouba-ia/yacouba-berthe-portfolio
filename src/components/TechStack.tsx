import { SectionHeader } from "@/components/SectionHeader";
import { techGroups } from "@/data/profile";

export function TechStack() {
  return (
    <section id="tech-stack" className="border-y border-cyan-300/10 bg-[#03101f] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Tech stack"
          title="Une stack backend IA pensée pour produire, tester et déployer."
          description="Technologies utilisées dans les projets de portfolio : APIs, RAG, agents, automatisation et livraison cloud."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {techGroups.map((group) => (
            <article key={group.title} className="premium-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-cyan-300/[0.18] bg-cyan-300/[0.08] px-3 py-2 text-sm font-medium text-cyan-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
