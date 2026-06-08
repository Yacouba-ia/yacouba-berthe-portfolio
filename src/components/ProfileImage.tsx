"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileImage() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="premium-card relative overflow-hidden rounded-lg p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(40,215,255,0.18),transparent_45%)]" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-cyan-300/25 bg-slate-950">
        {hasImage ? (
          <Image
            src={profile.photoPath}
            alt="Portrait professionnel de Yacouba Berthe"
            fill
            priority
            sizes="(max-width: 768px) 82vw, 420px"
            className="object-cover"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[linear-gradient(145deg,rgba(8,47,73,0.9),rgba(15,23,42,0.98))] px-8 text-center">
            <span className="grid h-24 w-24 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-3xl font-bold text-cyan-100">
              YB
            </span>
            <p className="mt-6 text-lg font-semibold text-white">{profile.name}</p>
            <p className="mt-2 text-sm text-slate-300">{profile.title}</p>
          </div>
        )}
      </div>
      <div className="relative mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
          <p className="text-slate-400">Focus</p>
          <p className="mt-1 font-semibold text-white">RAG & Agents</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
          <p className="text-slate-400">Base</p>
          <p className="mt-1 font-semibold text-white">{profile.location}</p>
        </div>
      </div>
    </div>
  );
}
