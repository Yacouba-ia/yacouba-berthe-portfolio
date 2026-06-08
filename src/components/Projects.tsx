import { projects } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Portfolio"
          title="Trois projets backend IA pour montrer l'architecture, pas seulement l'interface."
          description="Chaque projet est présenté comme une réalisation de portfolio, avec un focus sur les APIs, la persistance, l'orchestration et la qualité backend."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="premium-card flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/[0.36]"
            >
              <div className="mb-5 inline-flex w-fit rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Backend GenAI
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {project.name}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-md border border-cyan-300/30 px-4 py-2.5 text-center text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
                >
                  GitHub
                </a>
                <a
                  href={project.detailsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-md bg-cyan-300 px-4 py-2.5 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Détails
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
