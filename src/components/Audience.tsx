"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-[#111] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c9a96e]/40" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
              Mi Audiencia
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-white text-2xl md:text-3xl mb-1">{audience.followers}</p>
                  <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase">Seguidores</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-white text-2xl md:text-3xl mb-1">{audience.monthlyViews}</p>
                  <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase">Visitas/mes</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-white text-2xl md:text-3xl mb-1">{audience.accountsReached}</p>
                  <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase">Alcance</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <a href="#contact" className="inline-block border border-[#c9a96e]/40 text-[#c9a96e] px-6 py-3 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e]/10 transition-colors">
                Descargar Media Kit
              </a>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div>
                <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase mb-3">Distribución Por Edad</p>
                <div className="space-y-2">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-3">
                      <span className="text-xs text-white/40 w-10">{age.range}</span>
                      <div className="flex-1 h-0.5 bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#c9a96e]/60" style={{ width: `${age.percentage}%` }} />
                      </div>
                      <span className="text-xs text-white/30 w-8 text-right">{age.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex gap-6">
                {audience.demographics.gender.map((g) => (
                  <div key={g.type} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c9a96e]/60 rounded-full" />
                    <span className="text-sm text-white/50">{g.type} {g.percentage}%</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase mb-2">Top Países</p>
                <p className="text-sm text-white/50">{audience.demographics.topCountries.join(" · ")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
