"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${siteData.heroImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[#EFE9E4]/60 text-[10px] tracking-[0.25em] uppercase mb-6 font-medium">
              {siteData.personal.availability}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-[#EFE9E4] text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] uppercase mb-4"
          >
            {siteData.personal.firstName}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-heading text-[#EFE9E4]/30 text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] uppercase mb-10"
          >
            {siteData.personal.lastName}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="text-[#EFE9E4]/70 text-xs tracking-[0.15em] uppercase mb-3 font-medium">
              {siteData.personal.tagline}
            </p>
            <p className="text-[#EFE9E4]/40 text-sm leading-relaxed max-w-md">
              {siteData.personal.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-6 mt-10"
          >
            <a
              href="#work"
              className="text-[#EFE9E4] text-[10px] tracking-[0.2em] uppercase font-bold underline underline-offset-4 hover:text-[#EFE9E4]/70 transition-colors"
            >
              Ver Trabajo
            </a>
            <a
              href="#contact"
              className="text-[#EFE9E4]/50 text-[10px] tracking-[0.2em] uppercase font-bold underline underline-offset-4 hover:text-[#EFE9E4] transition-colors"
            >
              Contactar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
