export const profile = {
  name: "Yacouba Berthe",
  title: "AI / GenAI Backend Developer",
  location: "Bamako, Mali",
  email: "yacoubaberthe990@gmail.com",
  cvPath: "/CV_Yacouba_Berthe_AI_GenAI_Backend_Developer.pdf",
  photoPath: "/images/yacouba-berthe-profile.jpg",
  heroStatement:
    "I build intelligent backend systems for RAG, AI agents, automation workflows, and GenAI applications.",
  heroSubtitle:
    "Développeur Backend IA / GenAI basé à Bamako, spécialisé en FastAPI, LangGraph, LangChain, RAG, PostgreSQL, Docker et automatisation n8n.",
  availability:
    "Disponible pour opportunités remote, freelance, contrat, stage technique ou poste junior en Backend IA / GenAI.",
  links: {
    github: "https://github.com/Yacouba-ia",
    linkedin: "https://www.linkedin.com/in/yacouba-berthe-80a335321",
  },
} as const;

export const navItems = [
  { label: "Profil", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Automation", href: "#automation" },
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
  "n8n",
] as const;

export const aboutParagraphs = [
  "Je construis des backends IA capables d'intégrer des agents, des workflows multi-agents, des systèmes RAG, de l'authentification JWT, du streaming de réponse, de la persistance PostgreSQL et du monitoring avec LangSmith.",
  "À travers mes projets de portfolio, je développe des solutions backend autour des APIs IA, chatbots documentaires, workflows LangGraph, automatisations n8n et intégrations LLM.",
  "J'aime connecter les modèles IA aux outils métier : CRM, messageries, calendriers, bases de données, webhooks et services externes pour automatiser des processus concrets.",
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
      "Automatisations IA avec n8n, OpenAI, webhooks, CRM, Gmail, Telegram, calendriers et intégrations business.",
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
    githubHref: "https://github.com/Yacouba-ia/ai-research-strategy-backend",
    detailsHref: "https://github.com/Yacouba-ia/ai-research-strategy-backend#readme",
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
    githubHref: "https://github.com/Yacouba-ia/Agent-RAG",
    detailsHref: "https://github.com/Yacouba-ia/Agent-RAG#readme",
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
    githubHref: "https://github.com/Yacouba-ia/multimodal-ai-agent-backend",
    detailsHref: "https://github.com/Yacouba-ia/multimodal-ai-agent-backend#readme",
  },
] as const;

export const workflowProjects = [
  {
    title: "Agent RAG n8n + Pinecone",
    description:
      "A document-based AI assistant that processes files, stores embeddings in Pinecone and answers user questions using retrieval-augmented generation.",
    technologies: ["n8n", "Pinecone", "OpenAI", "RAG", "Google Drive"],
    imageSrc: "/images/workflows/rag-pinecone-workflow.png",
    imageAlt:
      "n8n workflow for a RAG assistant using Google Drive, Pinecone, OpenAI embeddings and a chat agent.",
  },
  {
    title: "Assistant personnel multi-outils sur Telegram",
    description:
      "An intelligent Telegram assistant connected to email, calendar, contacts, web research and business tools through automated workflows.",
    technologies: ["n8n", "Telegram", "Gmail", "Google Calendar", "OpenAI"],
    imageSrc: "/images/workflows/telegram-assistant-workflow.png",
    imageAlt:
      "n8n workflow for a Telegram personal assistant connected to Gmail, Google Calendar, contacts, OpenAI and a vector store.",
  },
  {
    title: "Agent vocal IA ElevenLabs pour support et ventes",
    description:
      "An AI voice agent designed to answer customer questions, retrieve business information and automate support or sales conversations.",
    technologies: ["n8n", "ElevenLabs", "Webhooks", "OpenAI", "Vector Database"],
    imageSrc: "/images/workflows/elevenlabs-voice-agent-workflow.png",
    imageAlt:
      "n8n workflow for an ElevenLabs voice agent with webhooks, OpenAI, Pinecone and document retrieval.",
  },
  {
    title: "Automatisation des nouveaux leads CRM et emails",
    description:
      "A workflow that captures new leads, analyzes their requests with AI, generates summaries and prepares personalized email responses.",
    technologies: ["n8n", "CRM", "Gmail", "OpenAI", "Google Sheets"],
    imageSrc: "/images/workflows/crm-leads-workflow.png",
    imageAlt:
      "n8n workflow for new client intake, AI email generation, lead summaries and Google Sheets recording.",
  },
  {
    title: "Équipe multi-agents IA avec superviseur",
    description:
      "A coordinated multi-agent system where a supervisor routes tasks between specialized agents for email, calendar, research and contact management.",
    technologies: [
      "n8n",
      "AI Agents",
      "Telegram",
      "Gmail",
      "Google Calendar",
      "OpenAI",
    ],
    imageSrc: "/images/workflows/multi-agent-team-workflow.png",
    imageAlt:
      "n8n workflow for a supervised multi-agent Telegram system with email, calendar, contact and research agents.",
  },
  {
    title: "Automatisation de création de contenu IA",
    description:
      "An automated content-production workflow that generates structured ideas, prompts and visual content, then saves the results to business tools.",
    technologies: [
      "n8n",
      "OpenAI",
      "Google Drive",
      "Google Sheets",
      "Image Generation API",
    ],
    imageSrc: "/images/workflows/ai-content-workflow.png",
    imageAlt:
      "n8n workflow for AI content creation with style generation, image prompt generation, Google Drive upload and Google Sheets logging.",
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
    items: [
      "n8n",
      "AI Agents",
      "Workflow Automation",
      "API Integrations",
      "CRM Integrations",
      "Messaging Integrations",
      "Voice Agents",
    ],
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
