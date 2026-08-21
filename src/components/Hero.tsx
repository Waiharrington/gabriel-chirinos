"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[560px] lg:min-h-[620px] bg-[#0a0a0a] overflow-hidden flex items-center pt-8 pb-10">
      {/* Cinematic Background Glow */}
      <div className="absolute inset-0 bg-radial from-[#1e1e1e]/60 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

      {/* Main 2-Column Grid */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline, Tagline, Copy, and CTAs */}
          <div className="lg:col-span-7 z-20">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block border border-[#E53935] bg-[#E53935]/15 px-3 py-1 mb-4 rounded-xs"
            >
              <span className="text-[#E53935] text-[11px] font-black tracking-[0.25em] uppercase font-bebas">
                {siteData.personal.tagline}
              </span>
            </motion.div>

            {/* Massive Athletic 3-Line Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white text-[3.8rem] sm:text-[5rem] lg:text-[6.4rem] font-black leading-[0.82] uppercase tracking-tight font-bebas drop-shadow-lg"
            >
              CONECTO<br />
              MARCAS CON<br />
              PERSONAS
            </motion.h1>

            {/* Signature Script Accent */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-script text-[#E53935] text-[3rem] sm:text-[4rem] lg:text-[4.8rem] -mt-3 sm:-mt-5 mb-4 select-none drop-shadow"
            >
              {siteData.personal.headlineScript}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md mb-7 font-inter"
            >
              {siteData.personal.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-[#E53935] hover:bg-[#C62828] text-white px-7 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 rounded-xs uppercase font-bebas text-sm"
              >
                VER MEDIA KIT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="bg-[#121212]/80 hover:bg-[#1c1c1c] border border-white/30 hover:border-white text-white px-7 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-xs uppercase font-bebas text-sm"
              >
                TRABAJEMOS JUNTOS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait of Gabriel with Vertical Watermark */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-[500px] sm:h-[560px] lg:h-[620px] select-none">
            
            {/* Massive Vertical Watermark behind athlete on Right Edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none hidden lg:flex flex-col items-center opacity-40">
              <span className="outline-text text-[6.5rem] xl:text-[8.5rem] font-black uppercase font-bebas leading-none tracking-tighter [writing-mode:vertical-rl] rotate-180">
                LA VUELTA.
              </span>
              <span className="text-[#E53935] text-xs font-black tracking-[0.4em] uppercase font-bebas [writing-mode:vertical-rl] rotate-180 mt-3">
                RUN CLUB
              </span>
            </div>

            {/* Seamless Cutout-Style Hero Athlete Photo (NO box, NO borders) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-full flex items-end justify-center"
            >
              <div className="relative w-full h-full overflow-hidden [mask-image:radial-gradient(ellipse_95%_90%_at_50%_40%,black_50%,transparent_100%)]">
                <img
                  src="/photos/WhatsApp Image 2026-08-20 at 4.56.59 PM (3).jpeg"
                  alt="Gabriel Chirinos Atleta"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                />

                {/* Smooth Multi-directional Edge Gradients to blend into #0a0a0a */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
