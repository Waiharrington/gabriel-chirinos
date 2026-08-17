"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function RunClub() {
  const { runClub } = siteData;

  return (
    <section id="runclub" className="bg-zinc-950 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.runClubImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="font-ui text-[9px] tracking-[0.35em] text-white/30 uppercase mb-5">
                FOUNDER OF
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.9] mb-6">
                {runClub.name.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="font-heading-semibold text-white/70 text-[clamp(0.9rem,1.8vw,1.2rem)] tracking-wide mb-5">
                {runClub.headline}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-ui text-sm text-white/45 leading-[1.8] mb-10 max-w-md">
                {runClub.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-10 mb-10">
                {runClub.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-white text-xl md:text-2xl mb-1">
                      {stat.value}
                    </p>
                    <p className="font-ui text-[9px] tracking-[0.2em] text-white/30 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <a
                href="#"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-ui-medium text-[11px] tracking-[0.25em] uppercase hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                JOIN THE CLUB
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">
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
