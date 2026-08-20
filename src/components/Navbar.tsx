"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-heading text-white text-lg">{siteData.personal.monogram}</span>
            <span className="hidden sm:block text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase">{siteData.personal.firstName}</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {siteData.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-white/40 text-[10px] font-medium tracking-[0.15em] uppercase hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
            <div className="flex flex-col gap-1.5">
              <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-white" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-6">
            {siteData.navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ delay: i * 0.05 }} onClick={() => setMobileOpen(false)} className="text-white/50 text-xl font-light tracking-[0.1em] uppercase hover:text-white transition-colors">
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
