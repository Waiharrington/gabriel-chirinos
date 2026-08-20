import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Brands from "@/components/Brands";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Work />
        <Brands />
        <Audience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
