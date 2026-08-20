"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-[#E53935]/40 flex-1 max-w-[200px]" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white text-2xl md:text-3xl font-black tracking-wide"
          >
            LO QUE DICEN LAS <span className="text-[#E53935]">MARCAS</span>
          </motion.h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-[#E53935]/40 flex-1 max-w-[200px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl relative hover:border-[#E53935]/50 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-[#E53935] text-3xl font-serif leading-none mb-2">
                  &ldquo;&ldquo;
                </div>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs shadow">
                  {testimonial.logo.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-xs font-black tracking-wider uppercase">{testimonial.brand}</p>
                  <p className="text-white/40 text-[10px] font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
