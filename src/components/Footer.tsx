import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name} — {profile.title}</p>
        <a href="#top" className="font-semibold text-cyan-200 transition hover:text-cyan-100">
          Retour en haut
        </a>
      </div>
    </footer>
  );
}
