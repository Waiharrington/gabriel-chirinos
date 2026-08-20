"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.aboutImage}')` }}
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="font-heading text-[#785345] text-[2.5rem] md:text-[3.5rem] leading-[0.95] uppercase mb-8">
                {siteData.about.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mb-10">
                {siteData.about.text.map((t, i) => (
                  <p key={i} className="text-[#785345]/70 text-sm leading-[1.6]">
                    {t}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#785345]/10">
                {siteData.about.details.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase mb-1 font-medium">
                      {detail.label}
                    </p>
                    <p className="text-[#785345] text-xs font-medium">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
