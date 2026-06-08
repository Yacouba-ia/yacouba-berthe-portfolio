# Yacouba Berthe Portfolio

Landing page portfolio premium pour Yacouba Berthe, AI / GenAI Backend Developer basé à Bamako, Mali.

Le site présente un profil orienté backends IA, APIs intelligentes, systèmes RAG, workflows multi-agents, automatisations IA et solutions GenAI utiles pour les entreprises.

## Stack

- Next.js avec App Router
- TypeScript
- Tailwind CSS
- SEO metadata et Open Graph
- Déploiement Vercel

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

Ouvrir ensuite `http://localhost:3000`.

## Build production

```bash
npm run build
```

Le script `scripts/next.mjs` garde un fallback compatible Windows pour Next/SWC. Sur Vercel/Linux, le comportement Next.js standard reste conservé.

## Déploiement sur Vercel

Si Vercel CLI est installé et connecté :

```bash
vercel
vercel --prod
```

Sinon :

1. Connecter GitHub à Vercel.
2. Importer le repository `Yacouba-ia/yacouba-berthe-portfolio`.
3. Choisir le preset Next.js.
4. Laisser Vercel détecter `npm run build`.
5. Lancer le déploiement.

## GitHub

Repository prévu :

```bash
git remote add origin https://github.com/Yacouba-ia/yacouba-berthe-portfolio.git
git branch -M main
git push -u origin main
```

## Éléments à remplacer plus tard

- CV : `public/CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf`
- Photo : `public/images/yacouba-berthe-profile.jpg`
- Profil GitHub : `profile.links.github` dans `src/data/profile.ts`
- Profil LinkedIn : `profile.links.linkedin` dans `src/data/profile.ts`
- Liens GitHub projets : `githubHref` dans `src/data/profile.ts`
- Liens détails projets : `detailsHref` dans `src/data/profile.ts`
- Domaine personnalisé : `metadataBase` dans `src/app/layout.tsx`

## Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    Certifications.tsx
    Contact.tsx
    Education.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    ProfileImage.tsx
    Projects.tsx
    SectionHeader.tsx
    Services.tsx
    TechStack.tsx
  data/
    profile.ts
public/
  favicon.svg
  CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf
  images/
    yacouba-berthe-profile.jpg
```
