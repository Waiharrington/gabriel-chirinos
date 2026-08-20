"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] bg-[#0a0a0a] overflow-hidden flex items-center pt-8 pb-12">
      {/* Background Glow / Atmosphere */}
      <div className="absolute inset-0 bg-radial from-[#181818] via-[#0a0a0a] to-[#0a0a0a] opacity-90 pointer-events-none" />

      {/* Main 2-Column Content Grid */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Copy, and CTAs */}
          <div className="lg:col-span-7 z-20">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block border border-[#E53935]/70 bg-[#E53935]/10 px-3 py-1 mb-5 rounded-xs"
            >
              <span className="text-[#E53935] text-[10px] font-black tracking-[0.25em] uppercase font-bebas">
                {siteData.personal.tagline}
              </span>
            </motion.div>

            {/* Massive Athletic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white text-[3.2rem] sm:text-[4.5rem] lg:text-[5.2rem] font-black leading-[0.88] uppercase tracking-tight mb-2 font-bebas drop-shadow-md"
            >
              {siteData.personal.headline}
            </motion.h1>

            {/* Signature Script Accent */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-script text-[#E53935] text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mb-6 -mt-2 drop-shadow"
            >
              {siteData.personal.headlineScript}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-lg mb-8 font-inter"
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
                className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 rounded-xs uppercase font-bebas text-sm"
              >
                VER MEDIA KIT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="bg-[#121212]/80 hover:bg-[#1c1c1c] border border-white/20 hover:border-white/50 text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-xs uppercase font-bebas text-sm"
              >
                TRABAJEMOS JUNTOS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Gabriel Photo with Side Watermark */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
            
            {/* Background Watermark Text on Far Right */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:flex flex-col items-end opacity-15">
              <div className="text-white text-[7.5rem] xl:text-[9rem] font-black leading-none tracking-tighter uppercase font-bebas rotate-90 origin-right translate-x-12">
                LA VUELTA.
              </div>
            </div>

            {/* Gabriel Featured Athletic Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="/photos/WhatsApp Image 2026-08-20 at 4.57.00 PM (2).jpeg"
                alt="Gabriel Chirinos"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
