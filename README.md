# Yacouba Berthe - AI / GenAI Backend Developer Portfolio

Landing page portfolio premium, responsive et prête pour Vercel. Le site présente le profil de Yacouba Berthe comme AI / GenAI Backend Developer, avec un focus sur FastAPI, LangGraph, LangChain, RAG, PostgreSQL, Docker, agents IA et automatisations.

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

Sur Windows, `scripts/next.mjs` force automatiquement le fallback SWC WebAssembly avec Webpack si le binaire natif Next.js ne se charge pas. Sur Vercel/Linux, le comportement Next.js standard est conservé.

## Déploiement sur Vercel

Si Vercel CLI est installé et connecté :

```bash
vercel
vercel --prod
```

Sinon :

1. Connecter GitHub a Vercel.
2. Importer le repository dans Vercel.
3. Choisir le preset Next.js.
4. Lancer le déploiement.

## Éléments à remplacer

- Photo professionnelle : placer le fichier dans `public/images/yacouba-berthe-profile.jpg`.
- CV PDF : placer le fichier dans `public/CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf`. Tant que ce fichier n'est pas ajouté, le lien de téléchargement est seulement un placeholder.
- Lien GitHub profil : modifier `profile.links.github` dans `src/data/profile.ts`.
- Lien LinkedIn : modifier `profile.links.linkedin` dans `src/data/profile.ts`.
- Liens GitHub projets : modifier `githubHref` dans `src/data/profile.ts`.
- Liens Details projets : modifier `detailsHref` dans `src/data/profile.ts`.
- Domaine personnalisé : mettre à jour la configuration Vercel et les métadonnées si un domaine officiel est disponible.

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
  images/
    yacouba-berthe-profile.jpg
  CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf
```
