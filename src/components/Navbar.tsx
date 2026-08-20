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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-heading text-white text-lg">{siteData.personal.monogram}</span>
            <span className="hidden sm:block font-ui-light text-white/40 text-[9px] tracking-dramatic uppercase">{siteData.personal.firstName}</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {siteData.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-ui-light text-white/40 text-[10px] tracking-wide-custom uppercase hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-[4px] p-2" aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1px] bg-white" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[1px] bg-white" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1px] bg-white" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-7">
            {siteData.navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: i * 0.06 }} onClick={() => setMobileOpen(false)} className="font-heading-light text-white/50 text-2xl tracking-wide-custom hover:text-white transition-colors duration-300">
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
