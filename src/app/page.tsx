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
    <main>
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
  );
}
