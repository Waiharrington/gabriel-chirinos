import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Statement from "@/components/Statement";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import ContentUniverse from "@/components/ContentUniverse";
import RunClub from "@/components/RunClub";
import Brands from "@/components/Brands";
import Audience from "@/components/Audience";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Statement />
        <SelectedWork />
        <About />
        <ContentUniverse />
        <RunClub />
        <Brands />
        <Audience />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
