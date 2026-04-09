import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infraestructura Colombia 2026-2030 | Analisis Exhaustivo",
  description:
    "Dashboard interactivo del estado de la infraestructura de transporte en Colombia: vias, aeropuertos, ferrocarriles, puertos, transporte masivo y proyectos estrategicos.",
  openGraph: {
    title: "Infraestructura Colombia 2026-2030",
    description: "Analisis exhaustivo de infraestructura de transporte en Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
