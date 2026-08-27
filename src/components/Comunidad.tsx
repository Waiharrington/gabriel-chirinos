"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Comunidad() {
  const { community } = siteData;

  return (
    <section id="comunidad-section" className="w-full py-3 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Community description & Demographics Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[2.6rem] font-black mb-2 uppercase font-bebas tracking-wide leading-none">
              MI <span className="text-[#E53935] italic font-bebas">COMUNIDAD</span>
            </h2>
            <p className="text-white/65 text-xs sm:text-[13px] leading-relaxed max-w-sm mb-6 font-inter">
              {community.description}
            </p>
          </motion.div>

          {/* Demographics Card with Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative group"
          >
            {/* Glow backdrop */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E53935]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <div className="relative bg-[#0e0e0e]/95 backdrop-blur-xl border border-white/[0.09] p-5 rounded-xl shadow-xl">
              <p className="text-[#E53935] text-[9px] font-bold tracking-[0.25em] uppercase mb-1 font-inter">
                AUDIENCIA PRINCIPAL
              </p>
              <p className="text-white text-2xl sm:text-3xl font-black mb-4 font-bebas tracking-wide">
                {community.ageRange}
              </p>

              {/* Gender Donut Chart Graphic & Percentages */}
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                {/* 68% Hombres */}
                <div className="flex flex-col">
                  <span className="text-white text-2xl font-black font-bebas leading-none">68%</span>
                  <span className="text-white/45 text-[9px] font-bold tracking-wider uppercase font-inter mt-0.5">
                    HOMBRES
                  </span>
                </div>

                {/* Donut Chart SVG */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background Ring (Women 32%) */}
                    <path
                      className="text-white/15"
                      strokeWidth="3.8"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Foreground Ring (Men 68%) */}
                    <path
                      className="text-[#E53935]"
                      strokeDasharray="68, 100"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute w-2 h-2 rounded-full bg-[#E53935] shadow-[0_0_8px_#E53935]" />
                </div>

                {/* 32% Mujeres */}
                <div className="flex flex-col text-right">
                  <span className="text-white text-2xl font-black font-bebas leading-none">32%</span>
                  <span className="text-white/45 text-[9px] font-bold tracking-wider uppercase font-inter mt-0.5">
                    MUJERES
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Exactly 5 Reels in 9:16 vertical cards (8 cols) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {community.videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group cursor-pointer w-full relative"
              >
                <div className="aspect-[9/16] bg-[#121212] rounded-xl overflow-hidden relative border border-white/[0.09] group-hover:border-[#E53935] transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(229,57,53,0.35)] group-hover:-translate-y-1">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/25 group-hover:via-black/20 transition-all" />
                  
                  {/* Center Play Button with Pop & Glow on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-[0_0_20px_#E53935] transform scale-75 group-hover:scale-100 transition-transform duration-300 pl-0.5">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title overlay at top */}
                  <div className="absolute top-2.5 left-2 right-2 text-center">
                    <p className="text-white text-[10px] sm:text-[11px] font-black uppercase whitespace-pre-line leading-tight font-bebas tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {video.title}
                    </p>
                  </div>

                  {/* Bottom Views Badge */}
                  <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-center">
                    <div className="bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 text-white text-[9.5px] font-bold font-inter">
                      <span className="text-[#E53935] text-[8px]">▶</span>
                      <span>{video.views}</span>
                    </div>
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
