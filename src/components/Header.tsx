"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] w-full transition-all">
      {/* Subtle top red glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />
      
      <div className="w-full max-w-[1200px] mx-auto px-8 sm:px-16 lg:px-24 py-3.5 flex items-center justify-between">
        {/* Brand Logo aligned with Hero text column */}
        <motion.a
          id="header-logo"
          data-editable-name="Header: Logo 'GABRIEL CHIRINOS'"
          href="#home"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col leading-none group cursor-pointer lg:translate-x-[158px] transition-all"
        >
          <span className="text-white text-xl sm:text-2xl font-black italic tracking-wider font-bebas group-hover:text-white transition-colors">
            GABRIEL
          </span>
          <span className="text-white/80 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase -mt-0.5 font-inter group-hover:text-[#E53935] group-hover:glow-text-red transition-all">
            CHIRINOS
          </span>
        </motion.a>

        {/* Right side: Social links & Contact CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            {siteData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] hover:scale-110 active:scale-95 transition-all"
              >
                {link.platform === "Instagram" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {link.platform === "TikTok" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-3.77-1.72z"/>
                  </svg>
                )}
                {link.platform === "YouTube" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative group overflow-hidden bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#f04541] hover:to-[#d32f2f] text-white px-5 py-2 sm:px-6 sm:py-2.5 text-xs font-black tracking-wider uppercase rounded-lg shadow-lg shadow-red-950/50 hover:shadow-red-600/30 transition-all font-inter inline-flex items-center gap-1.5"
          >
            <span className="relative z-10">CONTACTO</span>
            <span className="relative z-10 group-hover:translate-x-0.5 transition-transform">→</span>
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-out" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
