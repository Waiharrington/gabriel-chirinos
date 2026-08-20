"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Comunidad() {
  const { community } = siteData;

  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-2xl md:text-3xl font-black mb-4">
                MI <span className="text-[#E53935]">COMUNIDAD</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
                {community.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-white/10 p-6 inline-block"
            >
              <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase mb-2">
                AUDIENCIA PRINCIPAL
              </p>
              <p className="text-white text-2xl font-black mb-4">
                {community.ageRange}
              </p>
              <div className="flex items-center gap-6">
                {community.gender.map((g) => (
                  <div key={g.type} className="flex items-center gap-2">
                    <span className="text-white text-2xl font-black">{g.percentage}%</span>
                    <span className="text-white/40 text-[10px] font-medium tracking-wider uppercase">
                      {g.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {community.videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-44 md:w-48 group cursor-pointer"
              >
                <div className="aspect-[9/16] bg-[#141414] rounded-xl overflow-hidden relative border border-white/10 group-hover:border-[#E53935]/50 transition-colors shadow-lg">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="text-white text-[11px] font-bold bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
                      <span className="text-[#E53935] text-[9px]">▶</span> {video.views}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-3 right-3">
                    <p className="text-white text-xs font-black uppercase whitespace-pre-line leading-tight">
                      {video.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
