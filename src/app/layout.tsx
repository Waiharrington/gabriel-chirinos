import type { Metadata } from "next";
import { Inter, Bebas_Neue, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  variable: "--font-script",
  subsets: ["latin"],
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
  openGraph: {
    title: "Gabriel Chirinos | Creador de Contenido & Atleta",
    description:
      "Conecto marcas con personas en movimiento. Creador fitness, running y fundador de La Vuelta Run Club.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${bebasNeue.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen bg-[#050505] text-white antialiased font-inter selection:bg-red-600/40 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
