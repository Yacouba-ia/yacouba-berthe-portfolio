import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { workflowProjects } from "@/data/profile";

export function AutomationWorkflows() {
  return (
    <section
      id="automation"
      className="border-y border-cyan-300/10 bg-[#03101f] py-20 sm:py-24"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="n8n & AI automation"
          title="AI Automation & n8n Workflows"
          description="I design intelligent automation workflows that connect AI models, APIs, CRMs, messaging platforms, email services and business tools. These systems help companies automate repetitive tasks, process information and improve customer operations."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflowProjects.map((workflow) => (
            <article
              key={workflow.title}
              className="premium-card group flex h-full flex-col overflow-hidden rounded-lg p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/[0.36]"
            >
              <div className="relative aspect-video overflow-hidden rounded-md border border-cyan-300/15 bg-slate-950/70">
                <Image
                  src={workflow.imageSrc}
                  alt={workflow.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 352px"
                  className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col p-2 pt-5">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {workflow.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {workflow.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {workflow.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-300/[0.18] bg-cyan-300/[0.08] px-2.5 py-1.5 text-xs font-medium text-cyan-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
