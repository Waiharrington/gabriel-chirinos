"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-[#111] py-20 md:py-28">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/5] bg-[#0a0a0a] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.aboutImage}')` }}
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#c9a96e]/30" />
                <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
                  SOBRE MÍ
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-[clamp(1.3rem,2.5vw,2rem)] leading-[1.1] mb-6">
                {siteData.about.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-3 mb-8">
                {siteData.about.text.map((t, i) => (
                  <p key={i} className="font-ui-light text-white/40 text-sm leading-[1.8]">
                    {t}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6">
                {siteData.about.details.map((detail) => (
                  <div key={detail.label}>
                    <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-1">
                      {detail.label}
                    </p>
                    <p className="font-ui-medium text-sm text-white">{detail.value}</p>
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
