"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-[#111] py-20 md:py-28">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">MI AUDIENCIA</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-white text-[clamp(1.2rem,2.5vw,1.8rem)] leading-none mb-1">{audience.followers}</p>
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">Seguidores</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-white text-[clamp(1.2rem,2.5vw,1.8rem)] leading-none mb-1">{audience.monthlyViews}</p>
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">Visitas/mes</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-white text-[clamp(1.2rem,2.5vw,1.8rem)] leading-none mb-1">{audience.accountsReached}</p>
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">Alcance</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 text-white px-6 py-3 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300">
                DESCARGAR MEDIA KIT
              </a>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-3">DISTRIBUCIÓN POR EDAD</p>
                <div className="space-y-2">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-3">
                      <span className="font-ui-light text-xs text-white/40 w-10">{age.range}</span>
                      <div className="flex-1 h-[2px] bg-white/5 overflow-hidden">
                        <div className="h-full bg-[#c9a96e]/60" style={{ width: `${age.percentage}%` }} />
                      </div>
                      <span className="font-ui-light text-xs text-white/25 w-8 text-right">{age.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex gap-8">
                {audience.demographics.gender.map((g) => (
                  <div key={g.type} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c9a96e]/60 rounded-full" />
                    <span className="font-ui-light text-sm text-white/50">{g.type} {g.percentage}%</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-2">TOP PAÍSES</p>
                <p className="font-ui-light text-sm text-white/50">{audience.demographics.topCountries.join(" · ")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
