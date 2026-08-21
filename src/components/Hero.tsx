"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-4 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Copy, and CTAs */}
        <div className="lg:col-span-7 z-20">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block border border-[#E53935] bg-[#E53935]/15 px-3 py-1 mb-4 rounded-xs"
          >
            <span className="text-[#E53935] text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase font-bebas">
              {siteData.personal.tagline}
            </span>
          </motion.div>

          {/* 2-Line Athletic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[3.6rem] sm:text-[4.8rem] lg:text-[5.4rem] font-black leading-[0.88] uppercase tracking-tight font-bebas"
          >
            CONECTO MARCAS<br />
            CON PERSONAS
          </motion.h1>

          {/* Signature Script Accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-[#E53935] text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] -mt-2 sm:-mt-3 mb-4 select-none"
          >
            {siteData.personal.headlineScript}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-xs sm:text-[13px] leading-relaxed max-w-md mb-6 font-inter"
          >
            {siteData.personal.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3.5"
          >
            <a
              href="#contact"
              className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 rounded-xs uppercase font-bebas text-sm"
            >
              VER MEDIA KIT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-[#121212] hover:bg-[#1a1a1a] border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-xs uppercase font-bebas text-sm"
            >
              TRABAJEMOS JUNTOS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait of Gabriel with Vertical Watermark */}
        <div className="lg:col-span-5 relative flex justify-end items-end h-[420px] sm:h-[480px] lg:h-[540px] select-none">
          
          {/* Vertical Watermark behind athlete on Right Edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none hidden lg:flex flex-col items-center opacity-40">
            <span className="outline-text text-[6rem] xl:text-[7.5rem] font-black uppercase font-bebas leading-none tracking-tighter [writing-mode:vertical-rl] rotate-180">
              LA VUELTA.
            </span>
            <span className="text-[#E53935] text-xs font-black tracking-[0.4em] uppercase font-bebas [writing-mode:vertical-rl] rotate-180 mt-3">
              RUN CLUB
            </span>
          </div>

          {/* Athlete Photo cleanly blended into background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-full flex items-end justify-center"
          >
            <div className="relative w-full h-full overflow-hidden [mask-image:radial-gradient(ellipse_95%_90%_at_50%_45%,black_50%,transparent_100%)]">
              <img
                src="/photos/WhatsApp Image 2026-08-20 at 4.56.59 PM (3).jpeg"
                alt="Gabriel Chirinos Atleta"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
