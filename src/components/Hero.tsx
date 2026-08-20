"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1400&q=80&auto=format&fit=crop')`,
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block border border-[#E53935]/50 px-3 py-1 mb-6"
              >
                <span className="text-[#E53935] text-[10px] font-bold tracking-[0.2em]">
                  {siteData.personal.tagline}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black leading-[0.95] uppercase mb-4"
              >
                {siteData.personal.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-script text-[#E53935] text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-6 -mt-2"
              >
                {siteData.personal.headlineScript}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/60 text-sm leading-relaxed max-w-md mb-8"
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
                  className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
                >
                  VER MEDIA KIT
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="border border-white/30 hover:border-white text-white px-6 py-3 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
                >
                  TRABAJEMOS JUNTOS
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex justify-end items-center"
            >
              <div className="text-right">
                <div className="text-white/20 text-[4rem] xl:text-[5rem] font-black leading-none tracking-tighter">
                  LA VUELTA.
                </div>
                <div className="text-[#E53935] text-xs font-bold tracking-[0.3em] mt-2">
                  RUN CLUB
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
