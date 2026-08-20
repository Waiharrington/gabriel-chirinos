"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section id="brands" className="bg-[#0a0a0a] py-16 md:py-20 border-t border-white/5">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">MARCAS CON LAS QUE HE TRABAJADO</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand} delay={i * 0.05}>
              <div className="flex items-center justify-center h-10 opacity-25 hover:opacity-60 transition-all duration-500">
                <span className="font-heading-light text-sm text-white tracking-wide-custom">{brand}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
