"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coords relative to hero container for dynamic light
  const mouseX = useMotionValue(400);
  const mouseY = useMotionValue(300);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(229, 57, 53, 0.12), transparent 80%)`;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[560px] sm:h-[620px] lg:h-[660px] overflow-hidden flex items-center bg-[#050505] select-none"
    >
      {/* Hero Background Image from SVG with Parallax Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/hero-bg.svg"
          alt="Gabriel Chirinos Hero Background"
          className="w-full h-full object-cover object-center scale-[1.01] transform transition-transform duration-1000 ease-out"
        />

        {/* Ambient Dark Pocket Gradients ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-32 bottom-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent h-24 top-0" />

        {/* Interactive Dynamic Spotlight following cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: spotlightBackground,
            opacity: isHovered ? 1 : 0.4,
          }}
        />
      </div>

      {/* Hero Content Container positioned in the open area */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 sm:px-16 lg:px-24 flex items-center h-full">
        <div id="hero-content" className="max-w-xl py-6 transition-all" data-editable-name="Hero: Contenedor Completo">
          {/* Tagline Badge with Pulsing Live Status Dot */}
          <motion.div
            id="hero-badge"
            data-editable-name="Hero: Badge Etiqueta"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#E53935]/40 bg-[#1c0808]/85 backdrop-blur-md px-3.5 py-1.5 mb-4 rounded-full shadow-lg shadow-red-950/30 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E53935] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E53935]" />
            </span>
            <span className="text-[#E53935] text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase font-inter">
              {siteData.personal.tagline}
            </span>
          </motion.div>

          {/* 2-Line Athletic Headline */}
          <motion.h1
            id="hero-title"
            data-editable-name="Hero: Título 'CONECTO MARCAS'"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[3.4rem] sm:text-[4.6rem] lg:text-[5.4rem] font-black leading-[0.88] uppercase tracking-tight font-bebas drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-all"
          >
            CONECTO MARCAS<br />
            <span className="text-white">CON PERSONAS</span>
          </motion.h1>

          {/* Signature Script Accent */}
          <motion.p
            id="hero-script"
            data-editable-name="Hero: Subtítulo Script 'en movimiento'"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-[#E53935] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.2rem] -mt-2 sm:-mt-3 mb-4 select-none drop-shadow-[0_4px_12px_rgba(229,57,53,0.35)] leading-none transition-all"
          >
            {siteData.personal.headlineScript}
          </motion.p>

          {/* Description */}
          <motion.p
            id="hero-desc"
            data-editable-name="Hero: Párrafo de Descripción"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/85 text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-md mb-8 font-inter drop-shadow transition-all"
          >
            {siteData.personal.description}
          </motion.p>

          {/* Prominent Action Buttons */}
          <motion.div
            id="hero-buttons"
            data-editable-name="Hero: Botones CTA"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center transition-all"
          >
            {/* Button 1: VER MEDIA KIT */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative group overflow-hidden bg-gradient-to-r from-[#E53935] via-[#ea4335] to-[#C62828] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center gap-2.5 shadow-xl shadow-red-950/60 hover:shadow-red-600/40 transition-all font-inter"
            >
              <span className="relative z-10">VER MEDIA KIT</span>
              <svg className="w-4 h-4 flex-shrink-0 relative z-10 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {/* Light beam shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform ease-out" />
            </motion.a>

            {/* Button 2: TRABAJEMOS JUNTOS */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-[#0c0c0c]/80 hover:bg-[#151515] border border-white/20 hover:border-[#E53935]/80 text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center gap-2.5 backdrop-blur-xl transition-all font-inter shadow-lg hover:shadow-red-950/30"
            >
              <span className="group-hover:text-white transition-colors">TRABAJEMOS JUNTOS</span>
              <svg className="w-4 h-4 flex-shrink-0 text-[#E53935] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
