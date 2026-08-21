"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Comunidad() {
  const { community } = siteData;

  return (
    <section className="w-full py-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Community description & Demographics Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-black mb-2 uppercase font-bebas tracking-wide">
              MI <span className="text-[#E53935] italic font-bebas">COMUNIDAD</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed max-w-sm mb-5 font-inter">
              {community.description}
            </p>
          </motion.div>

          {/* Demographics Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border border-white/10 bg-[#111111] p-4 rounded-xl shadow-lg"
          >
            <p className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase mb-1 font-inter">
              AUDIENCIA PRINCIPAL
            </p>
            <p className="text-white text-2xl font-black mb-3 font-bebas tracking-wide">
              {community.ageRange}
            </p>

            {/* Gender Donut Chart Graphic & Percentages */}
            <div className="flex items-center justify-between pt-2.5 border-t border-white/10">
              
              {/* 68% Hombres */}
              <div className="flex flex-col">
                <span className="text-white text-xl font-black font-bebas leading-none">68%</span>
                <span className="text-white/40 text-[9px] font-bold tracking-wider uppercase font-inter mt-0.5">
                  HOMBRES
                </span>
              </div>

              {/* Donut Chart SVG */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Ring (Women 32%) */}
                  <path
                    className="text-white/20"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Foreground Ring (Men 68%) */}
                  <path
                    className="text-[#E53935]"
                    strokeDasharray="68, 100"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>

              {/* 32% Mujeres */}
              <div className="flex flex-col text-right">
                <span className="text-white text-xl font-black font-bebas leading-none">32%</span>
                <span className="text-white/40 text-[9px] font-bold tracking-wider uppercase font-inter mt-0.5">
                  MUJERES
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Column: Exactly 5 Reels in 9:16 vertical cards (8 cols) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
            {community.videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group cursor-pointer w-full"
              >
                <div className="aspect-[9/16] bg-[#141414] rounded-lg overflow-hidden relative border border-white/10 group-hover:border-[#E53935]/70 transition-all shadow-md">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />
                  
                  {/* Title overlay */}
                  <div className="absolute top-2 left-1.5 right-1.5 text-center">
                    <p className="text-white text-[9px] sm:text-[10px] font-black uppercase whitespace-pre-line leading-tight font-bebas tracking-wide">
                      {video.title}
                    </p>
                  </div>

                  {/* Bottom Play Icon + Views */}
                  <div className="absolute bottom-2 left-1.5 right-1.5 flex items-center justify-center gap-1 text-white/90 text-[9px] sm:text-[10px] font-bold">
                    <span className="text-white text-[8px]">▶</span> {video.views}
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
