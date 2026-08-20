"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function ContentUniverse() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
              UNIVERSO DE CONTENIDO
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.contentPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#111]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-[#0a0a0a]/50 transition-all duration-500" />
                <div className="absolute inset-0 border border-white/5 group-hover:border-[#c9a96e]/20 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.h3
                    className="font-heading text-white text-[clamp(1.2rem,2vw,1.8rem)] leading-none mb-2"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.title}
                  </motion.h3>
                  <p className="font-ui-light text-white/40 text-xs tracking-wide-custom">
                    {pillar.subtitle}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
