"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section id="brands" className="bg-[#0a0a0a] py-16 md:py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c9a96e]/40" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
              Marcas Con Las Que He Trabajado
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand} delay={i * 0.05}>
              <div className="text-center opacity-30 hover:opacity-70 transition-opacity duration-300">
                <span className="text-white text-sm font-light tracking-[0.1em]">{brand}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
