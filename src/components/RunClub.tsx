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
    <section className="w-full py-2">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-white text-xl sm:text-2xl font-black uppercase tracking-wider font-bebas">
          LA VUELTA <span className="text-[#E53935] italic">RUN CLUB</span>
        </h2>
        <p className="text-white/60 text-xs sm:text-[13px] max-w-md mx-auto font-inter mt-1">
          {siteData.runClub.description}
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative px-2">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#E53935] hover:text-white transition-all shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Photos list */}
        <div
          ref={scrollRef}
          className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {siteData.runClub.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex-shrink-0 w-48 sm:w-56 aspect-[4/3] bg-[#141414] rounded-lg overflow-hidden border border-white/10 shadow-md"
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
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#E53935] hover:text-white transition-all shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
