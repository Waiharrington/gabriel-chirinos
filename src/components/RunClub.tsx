"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function RunClub() {
  const { runClub } = siteData;

  return (
    <section id="runclub" className="bg-[#111] py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.runClubImage}')` }}
              />
              <div className="absolute inset-0 border border-white/5" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-[#c9a96e]/30" />
                <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
                  FOUNDER OF
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-[clamp(2rem,5vw,4rem)] leading-[0.9] mb-8">
                {runClub.name.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="font-heading-light text-[#c9a96e]/70 text-[clamp(0.9rem,1.8vw,1.2rem)] tracking-wide-custom mb-6">
                {runClub.headline}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-ui-light text-sm text-white/35 leading-[1.9] mb-12 max-w-md">
                {runClub.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-12 mb-12">
                {runClub.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-white text-2xl md:text-3xl mb-2">
                      {stat.value}
                    </p>
                    <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <a
                href="#"
                className="group inline-flex items-center gap-4 border border-white/15 text-white px-10 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500"
              >
                JOIN THE CLUB
                <span className="group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
