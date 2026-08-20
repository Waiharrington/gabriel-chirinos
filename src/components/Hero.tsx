"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center pt-20 pb-12">
      {/* Background Image of Gabriel with dark gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/WhatsApp Image 2026-08-20 at 4.57.00 PM (2).jpeg"
          alt="Gabriel Chirinos Hero"
          className="w-full h-full object-cover object-top opacity-50 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Watermark Right */}
      <div className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none z-0 hidden lg:block opacity-20">
        <div className="text-white text-[8rem] xl:text-[10rem] font-black leading-none tracking-tighter uppercase font-heading">
          LA VUELTA.
        </div>
        <div className="text-[#E53935] text-base font-bold tracking-[0.4em] -mt-4">
          RUN CLUB
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-[#E53935] bg-[#E53935]/10 px-3 py-1 mb-6 rounded-sm"
          >
            <span className="text-[#E53935] text-[11px] font-extrabold tracking-[0.25em] uppercase">
              {siteData.personal.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem] font-black leading-[0.88] uppercase tracking-tight mb-2 drop-shadow-md"
          >
            {siteData.personal.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-[#E53935] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] mb-6 -mt-2 drop-shadow"
          >
            {siteData.personal.headlineScript}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal"
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
              className="bg-[#E53935] hover:bg-[#C62828] text-white px-7 py-3.5 text-xs font-bold tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 rounded-sm"
            >
              VER MEDIA KIT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-black/40 backdrop-blur-sm border border-white/30 hover:border-white text-white px-7 py-3.5 text-xs font-bold tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-sm"
            >
              TRABAJEMOS JUNTOS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
