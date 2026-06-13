import { heroBadges, profile } from "@/data/profile";
import { ProfileImage } from "@/components/ProfileImage";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <div className="tech-grid pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-sm font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(114,240,180,0.85)]" />
            Backend IA, APIs intelligentes, RAG, agents et n8n
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {profile.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-xl leading-8 text-slate-100 sm:text-2xl">
            {profile.heroStatement}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            {profile.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-md bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-[0_18px_44px_rgba(40,215,255,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded-md border border-cyan-300/30 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10"
            >
              Télécharger mon CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/[0.24] hover:bg-white/[0.08]"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-cyan-300/[0.18] bg-cyan-300/[0.08] px-3 py-2 text-sm font-medium text-cyan-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-in-up animation-delay-200 lg:ml-auto">
          <div className="absolute -inset-5 rounded-lg bg-cyan-300/10 blur-3xl" />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
