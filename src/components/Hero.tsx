"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('${siteData.heroImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-[11px] font-medium tracking-[0.2em] uppercase">
                {siteData.personal.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-white text-5xl md:text-7xl leading-none mb-2"
            >
              {siteData.personal.firstName}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-white/20 text-5xl md:text-7xl leading-none mb-8"
            >
              {siteData.personal.lastName}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#c9a96e] text-xs font-medium tracking-[0.15em] uppercase mb-4"
            >
              {siteData.personal.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/50 text-sm leading-relaxed max-w-md mb-10"
            >
              {siteData.personal.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="#work"
                className="bg-[#c9a96e] text-[#0a0a0a] px-7 py-3.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e]/90 transition-colors"
              >
                VER TRABAJO
              </a>
              <a
                href="#contact"
                className="border border-white/20 text-white px-7 py-3.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-white/40 transition-colors"
              >
                CONTACTAR
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
