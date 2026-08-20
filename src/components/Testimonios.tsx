"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-2xl md:text-3xl font-black mb-12 tracking-wide"
        >
          LO QUE DICEN LAS <span className="text-[#E53935]">MARCAS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#121212] border border-white/10 p-8 rounded-xl relative hover:border-[#E53935]/30 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-[#E53935] text-4xl font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-[#E53935]/15 border border-[#E53935]/30 rounded-full flex items-center justify-center">
                  <span className="text-[#E53935] text-xs font-black">
                    {testimonial.logo.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-black tracking-wider uppercase">{testimonial.brand}</p>
                  <p className="text-white/40 text-[11px] font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
