"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] rounded-2xl overflow-hidden flex items-center bg-black shadow-2xl border border-white/5">
      {/* Full Hero Background Image (Gabriel on the right, black on the left) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/hero-banner.png"
          alt="Gabriel Chirinos Hero"
          className="w-full h-full object-cover object-right filter contrast-[1.05]"
        />
        {/* Dark gradient fade on the left to guarantee 100% crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Content Layer (Left-aligned over the black background area) */}
      <div className="relative z-10 w-full max-w-2xl px-6 sm:px-10 lg:px-12 py-10 sm:py-16">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center border border-[#E53935] bg-[#2a0e0e]/90 px-4 py-1.5 mb-5 rounded-full shadow-sm"
        >
          <span className="text-[#E53935] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-inter">
            {siteData.personal.tagline}
          </span>
        </motion.div>

        {/* 2-Line Athletic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-[3.8rem] sm:text-[5.2rem] lg:text-[6.4rem] font-black leading-[0.88] uppercase tracking-tight font-bebas drop-shadow-lg"
        >
          CONECTO MARCAS<br />
          CON PERSONAS
        </motion.h1>

        {/* Signature Script Accent */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-script text-[#E53935] text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] -mt-3 sm:-mt-5 mb-4 select-none drop-shadow-md"
        >
          {siteData.personal.headlineScript}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-inter"
        >
          {siteData.personal.description}
        </motion.p>

        {/* Prominent Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          {/* Button 1: VER MEDIA KIT */}
          <a
            href="#contact"
            className="bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-4 rounded-lg text-sm sm:text-base font-extrabold tracking-wider uppercase flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-red-950/50"
          >
            VER MEDIA KIT
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* Button 2: TRABAJEMOS JUNTOS */}
          <a
            href="#contact"
            className="bg-black/60 hover:bg-black/90 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-sm sm:text-base font-extrabold tracking-wider uppercase flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md"
          >
            TRABAJEMOS JUNTOS
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
