"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    brand: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", brand: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${siteData.contactBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-white text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.9] mb-8">
                <span className="block">LET&apos;S</span>
                <span className="block">WORK</span>
                <span className="block">TOGETHER.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-ui text-white/50 text-sm leading-[1.8] max-w-md mb-12">
                Have a campaign, launch or idea in mind? Let&apos;s build
                something people actually want to watch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-5 mb-12">
                <a
                  href={siteData.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-white/50 hover:text-white transition-colors group"
                >
                  <span className="font-ui text-[10px] tracking-[0.2em] uppercase w-20 text-white/30">
                    Instagram
                  </span>
                  <span className="font-ui text-sm">{siteData.personal.instagram}</span>
                </a>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="flex items-center gap-5 text-white/50 hover:text-white transition-colors group"
                >
                  <span className="font-ui text-[10px] tracking-[0.2em] uppercase w-20 text-white/30">
                    Email
                  </span>
                  <span className="font-ui text-sm">{siteData.personal.email}</span>
                </a>
                <a
                  href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-white/50 hover:text-white transition-colors group"
                >
                  <span className="font-ui text-[10px] tracking-[0.2em] uppercase w-20 text-white/30">
                    WhatsApp
                  </span>
                  <span className="font-ui text-sm">{siteData.personal.whatsapp}</span>
                </a>
                <div className="flex items-center gap-5 text-white/50">
                  <span className="font-ui text-[10px] tracking-[0.2em] uppercase w-20 text-white/30">
                    Location
                  </span>
                  <span className="font-ui text-sm">{siteData.personal.location}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-ui-medium text-[10px] tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300"
                >
                  WHATSAPP
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="group inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 font-ui-medium text-[10px] tracking-[0.25em] uppercase hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  EMAIL
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className="font-ui text-[9px] tracking-[0.25em] text-white/30 uppercase block mb-2.5">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white py-3.5 font-ui text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-ui text-[9px] tracking-[0.25em] text-white/30 uppercase block mb-2.5">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white py-3.5 font-ui text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className="font-ui text-[9px] tracking-[0.25em] text-white/30 uppercase block mb-2.5">
                    BRAND / COMPANY
                  </label>
                  <input
                    type="text"
                    value={formState.brand}
                    onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white py-3.5 font-ui text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    placeholder="Brand name"
                  />
                </div>
                <div>
                  <label className="font-ui text-[9px] tracking-[0.25em] text-white/30 uppercase block mb-2.5">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white py-3.5 font-ui text-sm focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select project type...</option>
                    <option value="partnership" className="bg-black">Brand Partnership</option>
                    <option value="ambassadorship" className="bg-black">Ambassadorship</option>
                    <option value="campaign" className="bg-black">Social Campaign</option>
                    <option value="event" className="bg-black">Event Coverage</option>
                    <option value="paid" className="bg-black">Paid Media Content</option>
                    <option value="other" className="bg-black">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-ui text-[9px] tracking-[0.25em] text-white/30 uppercase block mb-2.5">
                  TELL ME ABOUT YOUR PROJECT
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 text-white py-3.5 font-ui text-sm focus:outline-none focus:border-white/50 transition-colors resize-none placeholder:text-white/20"
                  placeholder="Describe your project, timeline and goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex items-center gap-3 bg-white text-black px-10 py-4 font-ui-medium text-[10px] tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 mt-4"
              >
                {submitted ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
                {!submitted && (
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
