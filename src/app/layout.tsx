import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yacouba Berthe | AI / GenAI Backend Developer",
  description:
    "Portfolio de Yacouba Berthe, développeur Backend IA / GenAI spécialisé en FastAPI, LangGraph, LangChain, RAG, PostgreSQL, Docker et automatisations IA.",
  keywords: [
    "Yacouba Berthe",
    "AI Backend Developer",
    "GenAI Backend Developer",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "RAG",
    "PostgreSQL",
    "Docker",
    "Bamako",
    "Mali",
  ],
  authors: [{ name: "Yacouba Berthe" }],
  creator: "Yacouba Berthe",
  openGraph: {
    title: "Yacouba Berthe | AI / GenAI Backend Developer",
    description:
      "Backends IA, APIs intelligentes, systèmes RAG, workflows multi-agents et automatisations GenAI.",
    type: "website",
    locale: "fr_FR",
    siteName: "Yacouba Berthe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacouba Berthe | AI / GenAI Backend Developer",
    description:
      "Développeur Backend IA / GenAI spécialisé en FastAPI, LangGraph, LangChain, RAG et PostgreSQL.",
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
