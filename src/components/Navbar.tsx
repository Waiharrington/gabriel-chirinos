"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span className="font-heading text-white text-xl tracking-tight">
              {siteData.personal.monogram}
            </span>
            <span className="hidden sm:block font-ui-light text-white/40 text-[9px] tracking-dramatic uppercase">
              {siteData.personal.firstName}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui-light text-white/40 text-[10px] tracking-wide-custom uppercase hover:text-white transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[4px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, width: "20px" }
                  : { rotate: 0, y: 0, width: "20px" }
              }
              transition={{ duration: 0.3 }}
              className="block h-[1px] bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: "20px" }}
              transition={{ duration: 0.3 }}
              className="block h-[1px] bg-white"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, width: "20px" }
                  : { rotate: 0, y: 0, width: "20px" }
              }
              transition={{ duration: 0.3 }}
              className="block h-[1px] bg-white"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {siteData.navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="font-heading-light text-white/50 text-3xl tracking-wide-custom hover:text-white transition-colors duration-500"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
