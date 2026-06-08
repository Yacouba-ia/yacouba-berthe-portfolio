"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020814]/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Retour en haut">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            YB
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/20 text-slate-100 md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-cyan-300/10 bg-[#020814] md:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 rounded-md bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Me contacter
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
