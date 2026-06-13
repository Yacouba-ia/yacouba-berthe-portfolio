# Yacouba Berthe Portfolio

Portfolio personnel de Yacouba Berthe, développeur Backend IA / GenAI basé à Bamako, Mali.

Le site présente un profil orienté systèmes backend IA, applications RAG, agents IA, workflows LangGraph, automatisations n8n, intégrations API et backends FastAPI prêts au déploiement.

## Points clés

- Hero premium avec positionnement AI / GenAI Backend Developer
- Section services pour APIs IA, RAG, agents et automatisation
- Projets backend IA avec liens GitHub
- Section dédiée `AI Automation & n8n Workflows`
- Galerie de 6 workflows n8n avec captures réelles
- Stack technique backend, GenAI, DevOps et automation
- SEO metadata et Open Graph
- Design responsive dark navy avec accents cyan

## Workflows n8n

Les captures workflow utilisées par le site sont dans :

```text
public/images/workflows/rag-pinecone-workflow.png
public/images/workflows/telegram-assistant-workflow.png
public/images/workflows/elevenlabs-voice-agent-workflow.png
public/images/workflows/crm-leads-workflow.png
public/images/workflows/multi-agent-team-workflow.png
public/images/workflows/ai-content-workflow.png
```

Les projets affichés couvrent :

- Agent RAG n8n + Pinecone
- Assistant personnel multi-outils sur Telegram
- Agent vocal IA ElevenLabs pour support et ventes
- Automatisation des nouveaux leads CRM et emails
- Équipe multi-agents IA avec superviseur
- Automatisation de création de contenu IA

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- `next/image` pour les images optimisées
- ESLint

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Ouvrir ensuite :

```text
http://localhost:3000
```

## Vérifications

```bash
npm run lint
npm run build
```

## Déploiement

Le projet est prêt pour Vercel. Après connexion du dépôt GitHub à Vercel, le build standard `npm run build` suffit.

Repository :

```text
https://github.com/Yacouba-ia/yacouba-berthe-portfolio
```

## Structure principale

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    AutomationWorkflows.tsx
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
  images/
    workflows/
    yacouba-berthe-profile.jpg
  CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf
```
