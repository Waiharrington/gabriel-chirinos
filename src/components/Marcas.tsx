"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Marcas() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1 max-w-[200px]" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white text-2xl md:text-3xl font-black tracking-wide"
          >
            MARCAS QUE HAN <span className="text-[#E53935]">CONFIADO</span>
          </motion.h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1 max-w-[200px]" />
        </div>

        {/* Brand Logos / Text */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-80">
          {siteData.brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-white/60 hover:text-white transition-colors"
            >
              <span className="text-xl md:text-2xl font-black tracking-widest uppercase font-heading">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
