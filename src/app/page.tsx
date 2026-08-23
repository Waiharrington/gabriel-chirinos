import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Nichos from "@/components/Nichos";
import Comunidad from "@/components/Comunidad";
import Servicios from "@/components/Servicios";
import RunClub from "@/components/RunClub";
import Marcas from "@/components/Marcas";
import Testimonios from "@/components/Testimonios";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white flex flex-col items-center justify-start antialiased selection:bg-[#E53935]/40 selection:text-white">
      {/* Full-width Header */}
      <Header />

      {/* Full-width Hero Banner */}
      <Hero />

      {/* Main Container for rest of sections */}
      <main className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-12 sm:gap-16">
        <Stats />
        <Nichos />
        <Comunidad />
        <Servicios />
        <RunClub />
        <Marcas />
        <Testimonios />
        <FooterCTA />
      </main>
    </div>
  );
}
