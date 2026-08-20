"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function FooterCTA() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                HAGAMOS ALGO
              </h2>
              <p className="font-script text-[#E53935] text-3xl md:text-4xl lg:text-5xl mb-6">
                ÉPICO JUNTOS.
              </p>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-8">
                Si tu marca busca impacto real, conexión auténtica y resultados medibles, estoy listo para sumarme a tu próximo proyecto.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#"
                  className="bg-[#E53935] hover:bg-[#C62828] text-white px-6 py-3 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
                >
                  VER MEDIA KIT
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="border border-white/30 hover:border-white text-white px-6 py-3 text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
                >
                  HABLEMOS
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="space-y-2">
                <a href={siteData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {siteData.personal.instagram}
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteData.personal.email}
                </a>
                <div className="flex items-center gap-3 text-white/40 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {siteData.personal.location}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-end"
          >
            <div className="text-right">
              <div className="text-white/10 text-[5rem] xl:text-[7rem] font-black leading-none tracking-tighter">
                LA
              </div>
              <div className="text-white/10 text-[5rem] xl:text-[7rem] font-black leading-none tracking-tighter -mt-4">
                VUELTA.
              </div>
              <div className="text-[#E53935] text-xs font-bold tracking-[0.3em] mt-2">
                RUN CLUB
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/20 text-[10px] text-center tracking-wider">
            {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
