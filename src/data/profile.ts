export const profile = {
  name: "Yacouba Berthe",
  title: "AI / GenAI Backend Developer",
  location: "Bamako, Mali",
  email: "yacoubaberthe990@gmail.com",
  cvPath: "/CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf",
  photoPath: "/images/yacouba-berthe-profile.jpg",
  heroStatement:
    "I build intelligent backend systems for RAG, AI agents, automation and GenAI applications.",
  heroSubtitle:
    "Développeur Backend IA / GenAI basé à Bamako, spécialisé en FastAPI, LangGraph, LangChain, RAG, PostgreSQL et Docker.",
  availability:
    "Disponible pour opportunités remote, freelance, contrat, stage technique ou poste junior en Backend IA / GenAI.",
  links: {
    github: "#",
    linkedin: "#",
  },
} as const;

export const navItems = [
  { label: "Profil", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroBadges = [
  "FastAPI",
  "LangGraph",
  "LangChain",
  "RAG",
  "PostgreSQL",
  "Docker",
] as const;

export const aboutParagraphs = [
  "Je construis des backends IA capables d'intégrer des agents, des workflows multi-agents, des systèmes RAG, de l'authentification JWT, du streaming de réponse, de la persistance PostgreSQL et du monitoring avec LangSmith.",
  "À travers mes projets de portfolio, je développe des solutions backend autour des APIs IA, chatbots documentaires, workflows LangGraph, automatisations IA et intégrations LLM.",
  "En parallèle, je suis titulaire d'un DUT et d'une Licence en Gestion des Ressources Humaines et Communication d'Entreprise.",
] as const;

export const services = [
  {
    title: "AI Backend APIs",
    description:
      "APIs backend IA avec FastAPI, JWT, PostgreSQL, streaming et intégrations LLM.",
  },
  {
    title: "RAG & Document AI",
    description:
      "Assistants documentaires avec upload PDF, stockage des chunks, recherche documentaire et génération de réponses.",
  },
  {
    title: "Multi-Agent Workflows",
    description:
      "Workflows IA avec LangGraph, agents spécialisés, routing intelligent, recherche web et génération de rapports.",
  },
  {
    title: "AI Automation",
    description:
      "Automatisations IA avec n8n, OpenAI, outils LLM et intégrations business.",
  },
] as const;

export const projects = [
  {
    name: "AI Operations & Research Backend",
    description:
      "Backend GenAI multi-agent qui transforme une demande utilisateur en workflow IA structuré : routage intelligent, recherche web, analyse stratégique, génération de rapport business, streaming, JWT et sauvegarde des conversations.",
    stack: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Tavily Search",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "Docker",
      "Pytest",
      "GitHub Actions",
      "LangSmith",
    ],
    githubHref: "#",
    detailsHref: "#",
  },
  {
    name: "FastAPI RAG Assistant",
    description:
      "API backend RAG permettant l'inscription, la connexion, l'upload de PDF, le stockage de chunks en PostgreSQL, les questions sur documents et l'historique des conversations.",
    stack: [
      "FastAPI",
      "RAG",
      "Hugging Face",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Alembic",
      "LangSmith",
      "Pytest",
      "Railway",
    ],
    githubHref: "#",
    detailsHref: "#",
  },
  {
    name: "Multimodal AI Agent Backend",
    description:
      "API backend multimodale pour assistant IA capable de traiter texte, audio, image, PDF, Word et Excel avec orchestration LangGraph et monitoring LangSmith.",
    stack: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Tavily Search",
      "PostgreSQL",
      "Docker",
      "LangSmith",
    ],
    githubHref: "#",
    detailsHref: "#",
  },
] as const;

export const techGroups = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "JWT", "Pytest"],
  },
  {
    title: "GenAI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI",
      "Hugging Face",
      "Tavily Search",
      "LangSmith",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Railway",
      "GitHub Actions",
      "Vercel",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Automation",
    items: ["n8n", "AI Agents", "Workflow Automation", "Voice Agents"],
  },
] as const;

export const certifications = [
  "Python - Udemy",
  "Backend Python avec FastAPI et PostgreSQL - Udemy",
  "LangChain avec Python : LLM, RAG et apps IA - Udemy",
  "n8n : Agents IA, automatisations IA et agents vocaux IA - Udemy",
] as const;

export const education = [
  {
    degree:
      "Licence professionnelle en Management des Ressources Humaines et Communication",
    school: "HETEC Mali",
    mention: "Mention Très Bien",
  },
  {
    degree: "DUT / Bac+2 en Communication d'Entreprise",
    school: "HETEC Mali",
    mention: "Mention Très Bien",
  },
] as const;
