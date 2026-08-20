"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-[#111] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-[3/4] bg-[#0a0a0a] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.aboutImage}')` }}
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#c9a96e]/40" />
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
                  Sobre Mí
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-6">
                Creo contenido que mueve, motiva y conecta.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 mb-8">
                {siteData.about.text.map((t, i) => (
                  <p key={i} className="text-white/45 text-sm leading-relaxed">
                    {t}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                {siteData.about.details.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase mb-1">
                      {detail.label}
                    </p>
                    <p className="text-white text-sm font-medium">{detail.value}</p>
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
