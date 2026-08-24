"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[540px] sm:h-[600px] lg:h-[640px] overflow-hidden flex items-center bg-[#050505]">
      {/* Hero Background Image from SVG */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/hero-bg.svg"
          alt="Gabriel Chirinos Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent w-full md:w-[60%]" />
      </div>

      {/* Content Container positioned exactly in the dark pocket marked by user */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center h-full">
        <div className="max-w-xl py-6">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center border border-[#E53935] bg-[#2a0e0e]/85 px-3.5 py-1 mb-4 rounded-full shadow-sm"
          >
            <span className="text-[#E53935] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase font-inter">
              {siteData.personal.tagline}
            </span>
          </motion.div>

          {/* 2-Line Athletic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[3.2rem] sm:text-[4.4rem] lg:text-[5.2rem] font-black leading-[0.88] uppercase tracking-tight font-bebas drop-shadow-xl"
          >
            CONECTO MARCAS<br />
            CON PERSONAS
          </motion.h1>

          {/* Signature Script Accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-[#E53935] text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] -mt-1.5 sm:-mt-2.5 mb-4 select-none drop-shadow-md leading-none"
          >
            {siteData.personal.headlineScript}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-md mb-7 font-inter"
          >
            {siteData.personal.description}
          </motion.p>

          {/* Prominent Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3.5 items-center"
          >
            {/* Button 1: VER MEDIA KIT */}
            <a
              href="#contact"
              className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-xs sm:text-sm font-extrabold tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-950/40 font-inter"
            >
              <span>VER MEDIA KIT</span>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
 
            {/* Button 2: TRABAJEMOS JUNTOS */}
            <a
              href="#contact"
              className="bg-black/75 hover:bg-black/95 border border-white/20 hover:border-white text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-xs sm:text-sm font-extrabold tracking-wider uppercase inline-flex items-center justify-center gap-2 backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 font-inter"
            >
              <span>TRABAJEMOS JUNTOS</span>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
