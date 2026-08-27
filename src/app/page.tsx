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
import VisualEditor from "@/components/VisualEditor";

export default function Home() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white flex flex-col items-center justify-start antialiased selection:bg-[#E53935]/40 selection:text-white">
      {/* Visual Live Editor for moving elements and adjusting margins */}
      <VisualEditor />

      {/* Full-width Header */}
      <Header />

      {/* Full-width Hero Banner */}
      <Hero />

      {/* Main Container for rest of sections */}
      <main
        id="main-container"
        className="w-full max-w-[1200px] mx-auto px-8 sm:px-16 lg:px-24 py-8 sm:py-12 flex flex-col gap-16 sm:gap-20 lg:gap-24 transition-all"
      >
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
