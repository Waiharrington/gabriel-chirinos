"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

const icons: Record<string, React.ReactNode> = {
  camera: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  award: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  package: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  video: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Servicios() {
  return (
    <section id="services" className="w-full py-2">
      {/* Title */}
      <motion.div
        id="services-title"
        data-editable-name="Servicios: Título '¿QUÉ PUEDO HACER...?'"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 transition-all"
      >
        <h2 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider font-bebas">
          ¿QUÉ PUEDO HACER POR <span className="text-[#E53935] italic font-bebas">TU MARCA?</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#E53935] to-transparent mx-auto mt-2" />
      </motion.div>

      {/* 5 Service Cards Grid */}
      <div id="services-grid" data-editable-name="Servicios: Cuadrícula Completa" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 transition-all">
        {siteData.services.map((service, i) => (
          <motion.div
            key={service.title}
            id={`service-card-${i}`}
            data-editable-name={`Servicio ${i + 1}: ${service.title}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="relative bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#E53935]/60 p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-start shadow-lg hover:shadow-[0_0_25px_rgba(229,57,53,0.25)]"
          >
            {/* Top gradient highlight */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/0 group-hover:via-[#E53935] to-transparent transition-all duration-500" />

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E53935]/20 to-transparent border border-[#E53935]/30 flex items-center justify-center text-[#E53935] mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(229,57,53,0.35)] transition-all duration-300">
              {icons[service.icon]}
            </div>

            <h3 className="text-white group-hover:text-[#E53935] text-sm sm:text-[15px] font-black tracking-wider uppercase mb-2 leading-tight font-bebas transition-colors">
              {service.title}
            </h3>

            <p className="text-white/60 text-[11px] leading-relaxed font-inter">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
