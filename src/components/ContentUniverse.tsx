"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function ContentUniverse() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] text-white/40 uppercase">
            CONTENT UNIVERSE
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {siteData.contentPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <motion.h3
                    className="font-heading text-white text-[clamp(1.4rem,2.5vw,2.2rem)] leading-none mb-2"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.title}
                  </motion.h3>
                  <p className="font-ui text-white/50 text-sm tracking-wide">
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
