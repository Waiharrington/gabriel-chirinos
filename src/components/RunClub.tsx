"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function RunClub() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="runclub-section" data-editable-name="Run Club: Sección Completa" className="w-full py-3 transition-all">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-7"
      >
        <div id="runclub-badge" data-editable-name="Run Club: Badge 'COMUNIDAD & DISCIPLINA'" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E53935]/30 bg-[#250a0a]/60 text-[#E53935] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 font-inter transition-all">
          COMUNIDAD & DISCIPLINA
        </div>
        <h2 id="runclub-title" data-editable-name="Run Club: Título 'LA VUELTA RUN CLUB'" className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider font-bebas transition-all">
          LA VUELTA <span className="text-[#E53935] italic font-bebas">RUN CLUB</span>
        </h2>
        <p id="runclub-desc" data-editable-name="Run Club: Descripción" className="text-white/60 text-xs sm:text-[13px] max-w-md mx-auto font-inter mt-1.5 leading-relaxed transition-all">
          {siteData.runClub.description}
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div id="runclub-carousel" data-editable-name="Run Club: Carrusel de Fotos" className="relative group px-1 transition-all">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-black/80 hover:bg-[#E53935] text-white border border-white/20 hover:border-[#E53935] rounded-full flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Photos list */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth mask-edges-fade"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {siteData.runClub.images.map((img, i) => (
            <motion.div
              key={i}
              id={`runclub-photo-${i}`}
              data-editable-name={`Run Club: Foto ${i + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex-shrink-0 w-52 sm:w-64 aspect-[4/3] bg-[#121212] rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#E53935]/60 shadow-lg hover:shadow-[0_0_20px_rgba(229,57,53,0.25)] transition-all duration-300 group/img relative"
            >
              <img
                src={img}
                alt={`La Vuelta Run Club ${i + 1}`}
                className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          aria-label="Siguiente"
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-black/80 hover:bg-[#E53935] text-white border border-white/20 hover:border-[#E53935] rounded-full flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
