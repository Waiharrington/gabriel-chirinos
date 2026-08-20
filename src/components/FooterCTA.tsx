"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      {/* Full-width Hero Banner of Gabriel running */}
      <div className="relative min-h-[460px] sm:min-h-[500px] flex items-center">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/photos/WhatsApp Image 2026-08-20 at 4.56.59 PM (3).jpeg"
            alt="Gabriel Chirinos Banner"
            className="w-full h-full object-cover object-left opacity-35 sm:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-none mb-1 tracking-tight font-bebas">
                  HAGAMOS ALGO
                </h2>
                <p className="font-script text-[#E53935] text-3xl sm:text-4xl lg:text-5xl mb-4 italic">
                  ÉPICO JUNTOS.
                </p>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md mb-6 font-inter">
                  Si tu marca busca impacto real, conexión auténtica y resultados medibles, estoy listo para sumarme a tu próximo proyecto.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3.5 mb-7">
                  <a
                    href="#"
                    className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-xs shadow-lg shadow-red-900/30 font-bebas text-sm"
                  >
                    VER MEDIA KIT
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${siteData.personal.email}`}
                    className="bg-[#121212]/80 hover:bg-[#1c1c1c] border border-white/30 hover:border-white text-white px-6 py-3 text-xs font-black tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5 rounded-xs font-bebas text-sm"
                  >
                    HABLEMOS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Social & Contact info */}
                <div className="flex flex-wrap items-center gap-5 text-white/50 text-[11px] font-inter">
                  <a href={siteData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {siteData.personal.instagram}
                  </a>
                  <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
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
            <div className="lg:col-span-4 hidden lg:flex justify-end items-center">
              <div className="text-right border-l border-[#E53935]/80 pl-6 py-3">
                <div className="text-white/20 text-[4rem] xl:text-[5rem] font-black leading-none tracking-tighter uppercase font-bebas">
                  LA VUELTA.
                </div>
                <div className="text-[#E53935] text-[10px] font-black tracking-[0.35em] uppercase font-bebas mt-1">
                  RUN CLUB
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="border-t border-white/10 py-5 bg-[#070707]">
        <p className="text-white/30 text-[10px] sm:text-[11px] text-center tracking-wider font-inter">
          {siteData.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
