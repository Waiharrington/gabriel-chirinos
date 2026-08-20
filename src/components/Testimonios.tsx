"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Testimonios() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-xl md:text-2xl font-bold mb-12"
        >
          LO QUE DICEN LAS <span className="text-[#E53935] font-black">MARCAS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 p-6 relative"
            >
              <div className="text-[#E53935] text-4xl font-serif absolute top-4 left-4">
                &ldquo;
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 pt-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">
                    {testimonial.logo.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{testimonial.brand}</p>
                  <p className="text-white/40 text-[10px]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
