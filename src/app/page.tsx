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
    <div className="w-full bg-[#050505] min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      <main className="w-full max-w-[1150px] bg-[#0a0a0a] shadow-2xl relative border-x border-white/5 my-0 sm:my-3">
        <Header />
        <Hero />
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
