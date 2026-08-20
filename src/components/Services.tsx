"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 md:py-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <ScrollReveal className="mb-12">
          <h2 className="font-heading text-[#EFE9E4] text-[2.5rem] md:text-[3.5rem] leading-[0.95] uppercase">
            Servicios
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#EFE9E4]/10">
          {siteData.services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="bg-black p-8 md:p-10">
                <p className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/30 uppercase mb-4 font-medium">
                  0{i + 1}
                </p>
                <h3 className="text-[#EFE9E4] text-lg font-medium mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#EFE9E4]/40 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
