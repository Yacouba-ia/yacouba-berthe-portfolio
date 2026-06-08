import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yacouba-berthe-portfolio.vercel.app"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yacouba Berthe | AI / GenAI Backend Developer",
    description:
      "Backends IA, APIs intelligentes, systèmes RAG, workflows multi-agents et automatisations GenAI.",
    url: "/",
    type: "website",
    locale: "fr_FR",
    siteName: "Yacouba Berthe Portfolio",
    images: [
      {
        url: "/images/yacouba-berthe-profile.jpg",
        width: 720,
        height: 960,
        alt: "Portrait professionnel de Yacouba Berthe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacouba Berthe | AI / GenAI Backend Developer",
    description:
      "Développeur Backend IA / GenAI spécialisé en FastAPI, LangGraph, LangChain, RAG et PostgreSQL.",
    images: ["/images/yacouba-berthe-profile.jpg"],
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
