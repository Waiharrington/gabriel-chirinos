"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function FooterCTA() {
  return (
    <footer id="contact" className="w-full flex flex-col gap-6 py-4 select-none relative">
      {/* Background ambient aura */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-radial from-[#E53935]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Hero Banner Card of Gabriel running */}
      <div id="footer-card" data-editable-name="Footer: Tarjeta Banner Principal" className="relative min-h-[380px] sm:min-h-[420px] bg-[#0c0c0c]/95 border border-white/[0.09] rounded-3xl overflow-hidden flex items-center shadow-2xl group transition-all">
        
        {/* Background Image of Gabriel running with deep atmospheric fade */}
        <div className="absolute inset-0 z-0">
          <img
            src="/photos/WhatsApp Image 2026-08-20 at 4.57.00 PM (1).jpeg"
            alt="Gabriel Chirinos Running"
            className="w-full h-full object-cover object-left opacity-35 sm:opacity-45 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent w-full md:w-[70%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full p-7 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div id="footer-badge" data-editable-name="Footer: Badge 'TRABAJEMOS EN TU MARCA'" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E53935]/30 bg-[#250a0a]/70 text-[#E53935] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 font-inter transition-all">
                  TRABAJEMOS EN TU MARCA
                </div>

                <h2 id="footer-title" data-editable-name="Footer: Título 'HAGAMOS ALGO'" className="text-white text-3.5xl sm:text-5xl lg:text-[3.6rem] font-black uppercase leading-[0.9] mb-1 tracking-tight font-bebas drop-shadow-lg transition-all">
                  HAGAMOS ALGO
                </h2>
                <p id="footer-script" data-editable-name="Footer: Subtítulo Script 'ÉPICO JUNTOS.'" className="font-script text-[#E53935] text-4xl sm:text-5xl lg:text-[4rem] mb-4 italic leading-none drop-shadow-[0_4px_12px_rgba(229,57,53,0.35)] transition-all">
                  ÉPICO JUNTOS.
                </p>
                <p id="footer-desc" data-editable-name="Footer: Descripción" className="text-white/75 text-xs sm:text-[13.5px] leading-relaxed max-w-md mb-7 font-inter transition-all">
                  Si tu marca busca impacto real, conexión auténtica y resultados medibles, estoy listo para sumarme a tu próximo proyecto.
                </p>

                {/* Action Buttons */}
                <div id="footer-buttons" data-editable-name="Footer: Contenedor Botones" className="flex flex-wrap gap-4 mb-8 transition-all">
                  {/* Button 1: VER MEDIA KIT */}
                  <motion.a
                    id="footer-btn-primary"
                    data-editable-name="Footer: Botón 'VER MEDIA KIT'"
                    href="#"
                    whileHover={{ scale: 1.03, translateY: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group/btn overflow-hidden bg-gradient-to-r from-[#E53935] via-[#ea4335] to-[#C62828] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center gap-2.5 shadow-xl shadow-red-950/60 hover:shadow-red-600/40 transition-all font-inter"
                  >
                    <span className="relative z-10">VER MEDIA KIT</span>
                    <svg className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {/* Shimmer */}
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform ease-out" />
                  </motion.a>

                  {/* Button 2: HABLEMOS */}
                  <motion.a
                    id="footer-btn-secondary"
                    data-editable-name="Footer: Botón 'HABLEMOS'"
                    href={`mailto:${siteData.personal.email}`}
                    whileHover={{ scale: 1.03, translateY: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group/btn bg-[#0c0c0c]/85 hover:bg-[#181818] border border-white/20 hover:border-[#E53935] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center gap-2.5 backdrop-blur-xl transition-all font-inter shadow-lg"
                  >
                    <span>HABLEMOS</span>
                    <svg className="w-4 h-4 text-[#E53935] group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Social & Contact info */}
                <div id="footer-socials" data-editable-name="Footer: Enlaces de Contacto" className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/60 text-[11px] font-inter transition-all">
                  <a
                    href={siteData.socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {siteData.personal.instagram}
                  </a>
                  <a
                    href={`mailto:${siteData.personal.email}`}
                    className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteData.personal.email}
                  </a>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {siteData.personal.location}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Watermark */}
            <div id="footer-watermark" data-editable-name="Footer: Logo Watermark 'LA VUELTA'" className="lg:col-span-4 hidden lg:flex justify-end items-center transition-all">
              <div className="text-right border-l-2 border-[#E53935] pl-7 py-3">
                <div className="text-white text-[3.8rem] xl:text-[4.8rem] font-black leading-none tracking-tighter uppercase font-bebas drop-shadow-md">
                  LA<br />VUELTA.
                </div>
                <div className="text-[#E53935] text-[11px] font-black tracking-[0.38em] uppercase font-bebas mt-1.5 glow-text-red">
                  RUN CLUB
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div id="footer-copyright" data-editable-name="Footer: Copyright" className="py-3 transition-all">
        <p className="text-white/30 text-[10.5px] text-center tracking-wider font-inter">
          {siteData.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
