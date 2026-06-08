import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/profile";

export function Services() {
  return (
    <section id="services" className="border-y border-cyan-300/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Des services centrés sur les backends IA modernes."
          description="Une approche concrète : architecture API, orchestration d'agents, recherche documentaire et automatisations business."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="premium-card group rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/[0.36]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
