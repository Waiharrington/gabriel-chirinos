"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="w-full py-3">
      {/* Section Header with Horizontal Lines */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/40 to-white/20 flex-1 max-w-[140px]" />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-base sm:text-lg lg:text-xl font-black uppercase tracking-wider font-bebas"
        >
          LO QUE DICEN LAS <span className="text-[#E53935] italic font-bebas">MARCAS</span>
        </motion.h2>
        <div className="h-[1px] bg-gradient-to-l from-transparent via-[#E53935]/40 to-white/20 flex-1 max-w-[140px]" />
      </div>

      {/* 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {siteData.testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.brand}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#E53935]/50 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(229,57,53,0.2)] flex flex-col justify-between group"
          >
            {/* Top red accent highlight */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/0 group-hover:via-[#E53935]/70 to-transparent transition-all duration-500" />

            <div>
              <div className="text-[#E53935] text-3xl font-serif font-black leading-none mb-3 select-none opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#E53935] transition-all">
                ““
              </div>
              <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-6 font-inter italic">
                {testimonial.quote}
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.07]">
              <div className="w-9 h-9 bg-gradient-to-br from-white to-gray-200 text-black rounded-full flex items-center justify-center font-black text-sm font-bebas shadow-md">
                {testimonial.logo.charAt(0)}
              </div>
              <div>
                <p className="text-white text-xs sm:text-sm font-black tracking-wider uppercase font-bebas group-hover:text-[#E53935] transition-colors">
                  {testimonial.brand}
                </p>
                <p className="text-white/45 text-[9.5px] font-medium font-inter">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
