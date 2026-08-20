"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function RunClub() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0a0a0a] py-14 sm:py-20 px-6 sm:px-10 lg:px-12 border-t border-white/10">
      <div className="w-full">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider font-bebas">
            LA VUELTA <span className="text-[#E53935] italic">RUN CLUB</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto font-inter mt-1">
            {siteData.runClub.description}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#E53935] hover:border-[#E53935] transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Photos list */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {siteData.runClub.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex-shrink-0 w-52 sm:w-60 aspect-[4/3] bg-[#141414] rounded-lg overflow-hidden border border-white/10 shadow-md"
              >
                <img
                  src={img}
                  alt={`La Vuelta Run Club ${i + 1}`}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#E53935] hover:border-[#E53935] transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
