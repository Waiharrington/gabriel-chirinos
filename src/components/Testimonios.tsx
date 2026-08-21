"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="bg-[#0a0a0a] py-14 sm:py-20 px-6 sm:px-10 lg:px-12 border-t border-white/10 w-full">
      <div className="w-full max-w-[1240px] mx-auto">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-[#E53935]/40 flex-1 max-w-[140px] sm:max-w-[200px]" />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white text-xl sm:text-2xl font-black uppercase tracking-wider font-bebas"
          >
            LO QUE DICEN LAS <span className="text-[#E53935] italic">MARCAS</span>
          </motion.h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-[#E53935]/40 flex-1 max-w-[140px] sm:max-w-[200px]" />
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.brand}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#111111] border border-white/10 p-5 sm:p-6 rounded-xl relative hover:border-[#E53935]/50 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-[#E53935] text-2xl font-serif font-black leading-none mb-2 select-none">
                  ““
                </div>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-6 font-inter italic">
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
      </div>
    </section>
  );
}
