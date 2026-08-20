"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section id="brands" className="bg-white border-t border-[#785345]/10 py-16 md:py-20">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <ScrollReveal className="mb-10">
          <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">
            Marcas Con Las Que He Trabajado
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand} delay={i * 0.05}>
              <div className="text-center opacity-25 hover:opacity-60 transition-opacity duration-300">
                <span className="text-[#785345] text-sm font-light tracking-[0.1em] uppercase">{brand}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
