"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-6 h-[1px] bg-[#c9a96e]" />
              <span className="font-ui-light text-[#c9a96e] text-[10px] tracking-dramatic uppercase">
                {siteData.personal.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-4"
            >
              {siteData.personal.firstName}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-white/20 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-6"
            >
              {siteData.personal.lastName}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-ui-light text-[#c9a96e] text-xs tracking-wide-custom uppercase mb-6"
            >
              {siteData.personal.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-ui-light text-white/40 text-sm leading-[1.8] max-w-md mb-8"
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
                href="#work"
                className="inline-flex items-center gap-2 bg-[#c9a96e] text-[#0a0a0a] px-6 py-3 font-ui-medium text-[10px] tracking-dramatic uppercase hover:bg-[#c9a96e]/90 transition-all duration-300"
              >
                VER TRABAJO
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/15 text-white px-6 py-3 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-white/30 transition-all duration-300"
              >
                CONTACTAR
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[3/4] max-h-[500px] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${siteData.heroImage}')` }}
            />
            <div className="absolute inset-0 border border-white/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
