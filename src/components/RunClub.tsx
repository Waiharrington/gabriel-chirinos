"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function RunClub() {
  const { runClub } = siteData;

  return (
    <section id="runclub" className="bg-[#111] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-[#c9a96e]/30" />
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase">
                  FUNDADOR DE
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-[clamp(1.5rem,4vw,3rem)] leading-[0.95] mb-6">
                {runClub.name.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="font-heading-light text-[#c9a96e]/70 text-[clamp(0.8rem,1.4vw,1rem)] tracking-wide-custom mb-5">
                {runClub.headline}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-ui-light text-sm text-white/35 leading-[1.8] mb-10 max-w-md">
                {runClub.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-10 mb-10">
                {runClub.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-white text-lg md:text-xl mb-1">
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
                className="group inline-flex items-center gap-3 border border-white/15 text-white px-8 py-4 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500"
              >
                UNIRSE AL CLUB
                <span className="group-hover:translate-x-1 transition-transform duration-500">
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
