"use client";

import { motion } from "framer-motion";

const brandLogos = [
  {
    name: "adidas",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 100 60">
        <path d="M12 52 L30 52 L20 30 Z" />
        <path d="M35 52 L55 52 L40 20 Z" />
        <path d="M60 52 L82 52 L60 8 Z" />
      </svg>
    ),
  },
  {
    name: "GATORADE",
    svg: (
      <div className="flex items-center gap-1">
        <svg className="h-8 w-auto fill-current text-[#E53935]" viewBox="0 0 40 48">
          <path d="M22 2 L6 26 L18 26 L12 46 L32 20 L20 20 Z" />
        </svg>
        <span className="font-black tracking-tighter text-lg font-bebas">GATORADE</span>
      </div>
    ),
  },
  {
    name: "GARMIN.",
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-xl tracking-widest font-bebas">GARMIN</span>
        <svg className="h-4 w-4 fill-current text-[#E53935]" viewBox="0 0 24 24">
          <polygon points="12,2 22,20 2,20" />
        </svg>
      </div>
    ),
  },
  {
    name: "HOKA",
    svg: (
      <span className="font-black text-2xl tracking-tight font-bebas italic">HOKA</span>
    ),
  },
  {
    name: "DECATHLON",
    svg: (
      <span className="font-black text-lg tracking-[0.2em] font-bebas border border-white/40 px-2 py-0.5 rounded-xs">DECATHLON</span>
    ),
  },
  {
    name: "SUUNTO",
    svg: (
      <span className="font-black text-xl tracking-[0.25em] font-bebas">SUUNTO</span>
    ),
  },
  {
    name: "wahoo",
    svg: (
      <span className="font-extrabold text-xl tracking-tight lowercase italic">wahoo</span>
    ),
  },
];

export default function Marcas() {
  return (
    <section className="bg-[#0a0a0a] py-14 sm:py-18 px-6 sm:px-10 lg:px-12 border-t border-white/10">
      <div className="w-full">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1 max-w-[140px] sm:max-w-[200px]" />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white text-xl sm:text-2xl font-black uppercase tracking-wider font-bebas"
          >
            MARCAS QUE HAN <span className="text-[#E53935] italic">CONFIADO</span>
          </motion.h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1 max-w-[140px] sm:max-w-[200px]" />
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-14 opacity-75 hover:opacity-100 transition-opacity">
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-white/80 hover:text-white transition-colors flex items-center justify-center"
            >
              {brand.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
