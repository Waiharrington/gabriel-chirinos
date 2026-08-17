"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const socialIcons = [
    {
      name: "Instagram",
      url: siteData.socialLinks[0].url,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: siteData.socialLinks[1].url,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 004.77 1.52V11.3a4.85 4.85 0 01-.81-.07 4.8 4.8 0 01-.38-.05V6.69z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: siteData.socialLinks[2].url,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: `mailto:${siteData.personal.email}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url('${siteData.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {siteData.categories.map((cat, i) => (
              <span key={cat} className="flex items-center gap-3">
                <span className="font-ui text-white/50 text-[11px] tracking-[0.35em] uppercase">
                  {cat}
                </span>
                {i < siteData.categories.length - 1 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-white/30" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-white leading-[0.82] mb-8"
          >
            <span className="block text-[clamp(3rem,9vw,8.5rem)]">
              {siteData.personal.firstName}
            </span>
            <span className="block text-[clamp(3rem,9vw,8.5rem)]">
              {siteData.personal.lastName}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-white text-[clamp(1.1rem,2.5vw,1.8rem)] tracking-[0.1em] mb-6"
          >
            {siteData.personal.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-ui text-white/60 text-sm md:text-[15px] leading-[1.7] max-w-lg mb-10"
          >
            {siteData.personal.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-white text-black px-9 py-4 font-ui-medium text-[11px] tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300"
            >
              VIEW WORK
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-white/25 text-white px-9 py-4 font-ui-medium text-[11px] tracking-[0.25em] uppercase hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              LET&apos;S COLLABORATE
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>

          {/* Location + Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-4 text-white/30 font-ui text-[10px] tracking-[0.2em] uppercase"
          >
            <span>{siteData.personal.location}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
            <span>{siteData.personal.availability}</span>
          </motion.div>
        </div>
      </div>

      {/* Social Icons - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-5"
      >
        <span className="font-ui text-white/40 text-[9px] tracking-[0.4em] uppercase writing-mode-vertical mb-3">
          FOLLOW ME
        </span>
        {socialIcons.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-ui text-white/30 text-[9px] tracking-[0.3em] uppercase">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
