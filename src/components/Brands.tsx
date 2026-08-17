"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase">
            BRANDS I&apos;VE WORKED WITH
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
          {siteData.brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.06}>
              <div className="group flex items-center justify-center h-14 md:h-16 grayscale opacity-30 hover:opacity-70 hover:grayscale-0 transition-all duration-500 cursor-default">
                <span className="font-heading-semibold text-sm md:text-base text-black tracking-wider">
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
