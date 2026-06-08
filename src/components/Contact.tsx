import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Location",
    value: profile.location,
    href: "#contact",
  },
  {
    label: "LinkedIn",
    value: "Placeholder",
    href: profile.links.linkedin,
  },
  {
    label: "GitHub",
    value: "Placeholder",
    href: profile.links.github,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="premium-card overflow-hidden rounded-lg">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <SectionHeader
                eyebrow="Contact"
                title="Construisons un backend IA propre, utile et déployable."
                description={profile.availability}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-md bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Envoyer un email
                </a>
                <a
                  href={profile.cvPath}
                  download
                  className="rounded-md border border-cyan-300/30 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
                >
                  Télécharger mon CV
                </a>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {item.label}
                  </p>
                  <p className="mt-3 break-words text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
