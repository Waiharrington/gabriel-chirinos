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
      <div className="flex items-center gap-1.5">
        <svg className="h-7 w-auto fill-current text-[#E53935]" viewBox="0 0 40 48">
          <path d="M22 2 L6 26 L18 26 L12 46 L32 20 L20 20 Z" />
        </svg>
        <span className="font-black tracking-tighter text-xl font-bebas">GATORADE</span>
      </div>
    ),
  },
  {
    name: "GARMIN.",
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-xl tracking-widest font-bebas">GARMIN</span>
        <svg className="h-3.5 w-3.5 fill-current text-[#E53935]" viewBox="0 0 24 24">
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
      <span className="font-black text-base tracking-[0.2em] font-bebas border border-white/30 px-2.5 py-0.5 rounded-sm">
        DECATHLON
      </span>
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
    <section id="marcas-section" className="w-full py-4 overflow-hidden select-none transition-all">
      {/* Section Header with Horizontal Accent Lines */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/40 to-white/20 flex-1 max-w-[140px]" />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-base sm:text-lg lg:text-xl font-black uppercase tracking-wider font-bebas"
        >
          MARCAS QUE HAN <span className="text-[#E53935] italic font-bebas">CONFIADO</span>
        </motion.h2>
        <div className="h-[1px] bg-gradient-to-l from-transparent via-[#E53935]/40 to-white/20 flex-1 max-w-[140px]" />
      </div>

      {/* Infinite Seamless Scrolling Marquee with Edge Fade */}
      <div className="relative w-full mask-edges-fade py-2">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20">
          {/* First loop of brands */}
          {brandLogos.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className="flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}

          {/* Second duplicate loop of brands for seamless looping */}
          {brandLogos.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className="flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
