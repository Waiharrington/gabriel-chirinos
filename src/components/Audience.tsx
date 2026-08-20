"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-white py-24 md:py-32 border-t border-[#785345]/10">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <ScrollReveal className="mb-12">
          <h2 className="font-heading text-[#785345] text-[2.5rem] md:text-[3.5rem] leading-[0.95] uppercase">
            Mi Audiencia
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-[#785345] text-[2rem] md:text-[2.5rem] leading-none mb-1">{audience.followers}</p>
                  <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">Seguidores</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-[#785345] text-[2rem] md:text-[2.5rem] leading-none mb-1">{audience.monthlyViews}</p>
                  <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">Visitas/mes</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-[#785345] text-[2rem] md:text-[2.5rem] leading-none mb-1">{audience.accountsReached}</p>
                  <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">Alcance</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <a href="#contact" className="inline-block text-[#785345] text-[10px] tracking-[0.2em] uppercase font-bold underline underline-offset-4 hover:text-[#785345]/60 transition-colors">
                Descargar Media Kit
              </a>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div>
                <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium mb-3">Distribución Por Edad</p>
                <div className="space-y-2">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-3">
                      <span className="text-xs text-[#785345]/50 w-10">{age.range}</span>
                      <div className="flex-1 h-0.5 bg-[#785345]/10 overflow-hidden">
                        <div className="h-full bg-[#785345]/40" style={{ width: `${age.percentage}%` }} />
                      </div>
                      <span className="text-xs text-[#785345]/30 w-8 text-right">{age.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex gap-6">
                {audience.demographics.gender.map((g) => (
                  <div key={g.type} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#785345]/40 rounded-full" />
                    <span className="text-sm text-[#785345]/50">{g.type} {g.percentage}%</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium mb-2">Top Países</p>
                <p className="text-sm text-[#785345]/50">{audience.demographics.topCountries.join(" · ")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
