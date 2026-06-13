import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://yacouba-berthe-portfolio.vercel.app";
const profileImageUrl = `${siteUrl}/images/yacouba-berthe-profile.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yacouba Berthe | AI / GenAI Backend Developer & AI Automation Specialist",
  description:
    "Portfolio de Yacouba Berthe, développeur Backend IA / GenAI basé à Bamako, spécialisé en FastAPI, LangGraph, RAG, agents IA, n8n, API integrations et automatisations business.",
  keywords: [
    "Yacouba Berthe",
    "AI Backend Developer",
    "GenAI Backend Developer",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "RAG",
    "n8n",
    "AI Automation",
    "AI Agents",
    "API integrations",
    "CRM integrations",
    "Telegram automation",
    "PostgreSQL",
    "Docker",
    "Bamako",
    "Mali",
  ],
  authors: [{ name: "Yacouba Berthe" }],
  creator: "Yacouba Berthe",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yacouba Berthe | AI / GenAI Backend Developer & AI Automation Specialist",
    description:
      "Backends IA, APIs intelligentes, systèmes RAG, workflows multi-agents, automatisations n8n et intégrations business.",
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    siteName: "Yacouba Berthe Portfolio",
    images: [
      {
        url: profileImageUrl,
        width: 720,
        height: 960,
        alt: "Portrait professionnel de Yacouba Berthe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacouba Berthe | AI / GenAI Backend Developer & AI Automation Specialist",
    description:
      "Développeur Backend IA / GenAI spécialisé en FastAPI, LangGraph, RAG, agents IA, n8n et automatisation business.",
    images: [profileImageUrl],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
