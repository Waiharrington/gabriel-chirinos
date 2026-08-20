"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-[#111] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
              MI COMUNIDAD
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-12">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-none mb-2">
                    {audience.followers}
                  </p>
                  <div className="w-5 h-[1px] bg-[#c9a96e]/30 mb-2" />
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">
                    Seguidores Instagram
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-none mb-2">
                    {audience.monthlyViews}
                  </p>
                  <div className="w-5 h-[1px] bg-[#c9a96e]/30 mb-2" />
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">
                    Visitas Mensuales
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-none mb-2">
                    {audience.accountsReached}
                  </p>
                  <div className="w-5 h-[1px] bg-[#c9a96e]/30 mb-2" />
                  <p className="font-ui-light text-[7px] tracking-dramatic text-white/25 uppercase">
                    Alcance
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-5">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 border border-white/15 text-white px-8 py-4 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500"
                >
                  VER MEDIA KIT
                  <span className="group-hover:translate-x-1 transition-transform duration-500">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 text-white/30 px-8 py-4 font-ui-light text-[10px] tracking-dramatic uppercase hover:text-white transition-all duration-500"
                >
                  DESCARGAR
                  <span className="group-hover:translate-y-1 transition-transform duration-500">
                    ↓
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-10">
            <ScrollReveal>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-4">
                  DISTRIBUCIÓN POR EDAD
                </p>
                <div className="space-y-3">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-4">
                      <span className="font-ui-light text-xs text-white/40 w-12">
                        {age.range}
                      </span>
                      <div className="flex-1 h-[2px] bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-[#c9a96e]/60 transition-all duration-1000"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                      <span className="font-ui-light text-xs text-white/25 w-8 text-right">
                        {age.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-3">
                  GÉNERO
                </p>
                <div className="flex gap-8">
                  {audience.demographics.gender.map((g) => (
                    <div key={g.type} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c9a96e]/60 rounded-full" />
                      <span className="font-ui-light text-sm text-white/50">
                        {g.type} {g.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-3">
                    TOP PAÍSES
                  </p>
                  <div className="space-y-1.5">
                    {audience.demographics.topCountries.map((country, i) => (
                      <p key={country} className="font-ui-light text-sm text-white/50">
                        {i + 1}. {country}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-3">
                    TOP CIUDADES
                  </p>
                  <div className="space-y-1.5">
                    {audience.demographics.topCities.map((city, i) => (
                      <p key={city} className="font-ui-light text-sm text-white/50">
                        {i + 1}. {city}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
