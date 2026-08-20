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
  title: "Gabriel Chirinos | Fitness, Running & Lifestyle Creator",
  description:
    "Gabriel Chirinos is a Venezuelan fitness, running and lifestyle creator, founder of La Vuelta Run Club, collaborating with brands through content, campaigns and community.",
  keywords: [
    "Gabriel Chirinos",
    "Gabriel Chirinos Venezuela",
    "fitness creator Venezuela",
    "running creator Venezuela",
    "fitness influencer Venezuela",
    "running influencer Venezuela",
    "creador de contenido fitness Venezuela",
    "fitness content creator",
    "running community",
    "brand partnerships",
  ],
  authors: [{ name: "Gabriel Chirinos" }],
  creator: "Gabriel Chirinos",
  metadataBase: new URL("https://gabrielchirinos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gabrielchirinos.com",
    siteName: "Gabriel Chirinos",
    title: "Gabriel Chirinos | Fitness, Running & Lifestyle Creator",
    description:
      "Venezuelan fitness, running and lifestyle creator. Founder of La Vuelta Run Club. Building content that moves, motivates and connects.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gabriel Chirinos - Fitness, Running & Lifestyle Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Chirinos | Fitness, Running & Lifestyle Creator",
    description:
      "Venezuelan fitness, running and lifestyle creator. Founder of La Vuelta Run Club.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Chirinos",
    url: "https://gabrielchirinos.com",
    jobTitle: "Content Creator",
    description:
      "Venezuelan fitness, running and lifestyle creator, founder of La Vuelta Run Club.",
    nationality: {
      "@type": "Country",
      name: "Venezuela",
    },
    sameAs: [
      "https://instagram.com/gabrielechirinos",
      "https://tiktok.com/@gabrielechirinos",
      "https://youtube.com/@gabrielechirinos",
    ],
    knowsAbout: [
      "Fitness",
      "Running",
      "Lifestyle",
      "Content Creation",
      "Brand Partnerships",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
