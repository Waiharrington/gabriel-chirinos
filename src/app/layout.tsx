import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Chirinos | Fitness, Running & Lifestyle",
  description:
    "Gabriel Chirinos, creador venezolano de fitness, running y lifestyle. Fundador de La Vuelta Run Club. Contenido que mueve, motiva y conecta.",
  keywords: [
    "Gabriel Chirinos",
    "fitness Venezuela",
    "running Venezuela",
    "creador de contenido",
    "embajador de marcas",
    "La Vuelta Run Club",
  ],
  authors: [{ name: "Gabriel Chirinos" }],
  creator: "Gabriel Chirinos",
  metadataBase: new URL("https://gabrielchirinos.com"),
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://gabrielchirinos.com",
    siteName: "Gabriel Chirinos",
    title: "Gabriel Chirinos | Fitness, Running & Lifestyle",
    description:
      "Creador venezolano de fitness, running y lifestyle. Fundador de La Vuelta Run Club.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gabriel Chirinos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
