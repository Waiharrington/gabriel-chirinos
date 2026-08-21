"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="w-full py-2">
      {/* Section Header with Horizontal Lines */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent to-[#E53935]/40 flex-1 max-w-[120px]" />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-lg sm:text-xl font-black uppercase tracking-wider font-bebas"
        >
          LO QUE DICEN LAS <span className="text-[#E53935] italic">MARCAS</span>
        </motion.h2>
        <div className="h-[1px] bg-gradient-to-l from-transparent to-[#E53935]/40 flex-1 max-w-[120px]" />
      </div>

      {/* 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {siteData.testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.brand}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-[#111111] border border-white/10 p-5 rounded-xl relative hover:border-[#E53935]/50 transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="text-[#E53935] text-2xl font-serif font-black leading-none mb-2 select-none">
                ““
              </div>
              <p className="text-white/80 text-xs sm:text-[12px] leading-relaxed mb-5 font-inter italic">
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-black text-xs font-bebas shadow">
                {testimonial.logo.charAt(0)}
              </div>
              <div>
                <p className="text-white text-xs font-black tracking-wider uppercase font-bebas">{testimonial.brand}</p>
                <p className="text-white/40 text-[9px] font-medium font-inter">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
