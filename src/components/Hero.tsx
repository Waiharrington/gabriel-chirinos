"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Background Subtle Pattern / Glow */}
      <div className="absolute inset-0 bg-radial from-[#151515] to-[#0a0a0a] opacity-80" />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-[#E53935]/50 px-3 py-1 mb-6"
            >
              <span className="text-[#E53935] text-[11px] font-bold tracking-[0.2em] uppercase">
                {siteData.personal.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-[3.2rem] sm:text-[4.5rem] lg:text-[5.2rem] font-black leading-[0.88] uppercase tracking-tight mb-2"
            >
              {siteData.personal.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-script text-[#E53935] text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] mb-6 -mt-3 italic"
            >
              {siteData.personal.headlineScript}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg mb-8"
            >
              {siteData.personal.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-[#E53935] hover:bg-[#C62828] text-white px-7 py-3.5 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors rounded-sm"
              >
                VER MEDIA KIT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="border border-white/40 hover:border-white text-white px-7 py-3.5 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors rounded-sm"
              >
                TRABAJEMOS JUNTOS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Image of Gabriel + Big Text */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            {/* Watermark Text behind Gabriel */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none z-0 opacity-20 hidden lg:block">
              <div className="text-white text-[7rem] xl:text-[8.5rem] font-black leading-none tracking-tighter">
                LA VUELTA.
              </div>
              <div className="text-[#E53935] text-sm font-bold tracking-[0.4em] mt-1">
                RUN CLUB
              </div>
            </div>

            {/* Gabriel Hero Cutout / Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10 w-full max-w-[420px] lg:max-w-[480px] aspect-[3/4] overflow-hidden rounded-lg shadow-2xl border border-white/10"
            >
              <img
                src="/photos/WhatsApp Image 2026-08-20 at 4.56.59 PM (1).jpeg"
                alt="Gabriel Chirinos"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
