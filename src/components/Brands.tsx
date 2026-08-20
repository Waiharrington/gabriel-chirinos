"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
              MARCAS CON LAS QUE HE TRABAJADO
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.06}>
              <div className="group flex items-center justify-center h-12 md:h-14 opacity-20 hover:opacity-60 transition-all duration-700 cursor-default">
                <span className="font-heading-light text-xs md:text-sm text-white tracking-wide-custom group-hover:text-[#c9a96e] transition-colors duration-700">
                  {brand.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
