"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-2 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Copy, and CTAs */}
        <div className="lg:col-span-7 z-20">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center border border-[#E53935]/80 bg-[#250d0d] px-3.5 py-1 mb-5 rounded-full shadow-sm"
          >
            <span className="text-[#E53935] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase font-bebas">
              {siteData.personal.tagline}
            </span>
          </motion.div>

          {/* 2-Line Athletic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[3.8rem] sm:text-[5.2rem] lg:text-[6.2rem] font-black leading-[0.85] uppercase tracking-tight font-bebas drop-shadow-md"
          >
            CONECTO MARCAS<br />
            CON PERSONAS
          </motion.h1>

          {/* Signature Script Accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-[#E53935] text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] -mt-3 sm:-mt-4 mb-4 select-none drop-shadow"
          >
            {siteData.personal.headlineScript}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-lg mb-7 font-inter"
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
            <a
              href="#contact"
              className="bg-[#E53935] hover:bg-[#D32F2F] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-md font-bebas text-base sm:text-lg tracking-wider flex items-center justify-center gap-2.5 font-bold shadow-xl shadow-red-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              VER MEDIA KIT
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-[#141414] hover:bg-[#202020] border border-white/25 hover:border-white/50 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-md font-bebas text-base sm:text-lg tracking-wider flex items-center justify-center gap-2.5 font-bold transition-all transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
            >
              TRABAJEMOS JUNTOS
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: New Athlete Photo provided by User with Vertical Watermark */}
        <div className="lg:col-span-5 relative flex justify-end items-end h-[420px] sm:h-[480px] lg:h-[540px] select-none">
          
          {/* Vertical Watermark behind athlete on Right Edge */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none hidden lg:flex flex-col items-center opacity-30">
            <span className="outline-text text-[6.5rem] xl:text-[8rem] font-black uppercase font-bebas leading-none tracking-tighter [writing-mode:vertical-rl] rotate-180">
              LA VUELTA.
            </span>
            <span className="text-[#E53935] text-xs font-black tracking-[0.4em] uppercase font-bebas [writing-mode:vertical-rl] rotate-180 mt-3">
              RUN CLUB
            </span>
          </div>

          {/* New Athlete Photo from ChatGPT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full h-full flex items-end justify-end overflow-hidden"
          >
            <img
              src="/photos/hero-banner.png"
              alt="Gabriel Chirinos Atleta"
              className="w-full h-full object-cover object-right filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-40" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
