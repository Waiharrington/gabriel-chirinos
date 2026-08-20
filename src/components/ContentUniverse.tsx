"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function ContentUniverse() {
  return (
    <section className="bg-[#0a0a0a] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[10px] tracking-dramatic text-white/25 uppercase">
              CONTENT UNIVERSE
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.contentPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#111]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-[#0a0a0a]/60 transition-all duration-700" />
                <div className="absolute inset-0 border border-white/5 group-hover:border-[#c9a96e]/20 transition-all duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-12">
                  <motion.h3
                    className="font-heading text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-none mb-3"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4 }}
                  >
                    {pillar.title}
                  </motion.h3>
                  <p className="font-ui-light text-white/40 text-sm tracking-wide-custom">
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
