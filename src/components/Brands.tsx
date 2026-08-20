"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[10px] tracking-dramatic text-white/25 uppercase">
              BRANDS I&apos;VE WORKED WITH
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.08}>
              <div className="group flex items-center justify-center h-16 md:h-20 opacity-20 hover:opacity-60 transition-all duration-700 cursor-default">
                <span className="font-heading-light text-sm md:text-base text-white tracking-wide-custom group-hover:text-[#c9a96e] transition-colors duration-700">
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
