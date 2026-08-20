"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Marcas() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-xl md:text-2xl font-bold mb-12"
        >
          MARCAS QUE HAN <span className="text-[#E53935] font-black">CONFIADO</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {siteData.brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <span className="text-lg md:text-xl font-bold tracking-wider uppercase">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
