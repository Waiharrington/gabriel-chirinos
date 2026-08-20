"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function RunClub() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-white text-2xl md:text-3xl font-black mb-2">
            LA VUELTA <span className="text-[#E53935]">RUN CLUB</span>
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto">
            {siteData.runClub.description}
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors -ml-2 md:ml-0"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {siteData.runClub.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-64 md:w-72 aspect-[4/3] bg-[#111] overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors -mr-2 md:mr-0"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
