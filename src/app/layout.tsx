import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Chirinos | Creador de Contenido & Atleta",
  description:
    "Creador de contenido fitness y running. Conecto marcas con personas en movimiento. Fundador de La Vuelta Run Club.",
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
    title: "Gabriel Chirinos | Creador de Contenido & Atleta",
    description:
      "Creador de contenido fitness y running. Conecto marcas con personas en movimiento.",
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
    <html lang="es" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
