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
    <section id="contact" className="bg-[#111] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${siteData.contactBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/90 to-[#111]/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-white text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-10">
                <span className="block">LET&apos;S</span>
                <span className="block">WORK</span>
                <span className="block text-white/15">TOGETHER.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-ui-light text-white/35 text-sm leading-[1.9] max-w-md mb-14">
                Have a campaign, launch or idea in mind? Let&apos;s build
                something people actually want to watch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 mb-14">
                <a
                  href={siteData.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 text-white/35 hover:text-white transition-colors duration-500 group"
                >
                  <span className="font-ui-light text-[9px] tracking-dramatic uppercase w-24 text-white/20">
                    Instagram
                  </span>
                  <span className="font-ui-light text-sm">{siteData.personal.instagram}</span>
                </a>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="flex items-center gap-6 text-white/35 hover:text-white transition-colors duration-500 group"
                >
                  <span className="font-ui-light text-[9px] tracking-dramatic uppercase w-24 text-white/20">
                    Email
                  </span>
                  <span className="font-ui-light text-sm">{siteData.personal.email}</span>
                </a>
                <a
                  href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 text-white/35 hover:text-white transition-colors duration-500 group"
                >
                  <span className="font-ui-light text-[9px] tracking-dramatic uppercase w-24 text-white/20">
                    WhatsApp
                  </span>
                  <span className="font-ui-light text-sm">{siteData.personal.whatsapp}</span>
                </a>
                <div className="flex items-center gap-6 text-white/35">
                  <span className="font-ui-light text-[9px] tracking-dramatic uppercase w-24 text-white/20">
                    Location
                  </span>
                  <span className="font-ui-light text-sm">{siteData.personal.location}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6">
                <a
                  href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 border border-white/15 text-white px-10 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500"
                >
                  WHATSAPP
                  <span className="group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </a>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="group inline-flex items-center gap-4 text-white/30 px-10 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:text-white transition-all duration-500"
                >
                  EMAIL
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div>
                  <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-3">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 text-white py-4 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors duration-500 placeholder:text-white/15"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 text-white py-4 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors duration-500 placeholder:text-white/15"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div>
                  <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-3">
                    BRAND / COMPANY
                  </label>
                  <input
                    type="text"
                    value={formState.brand}
                    onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 text-white py-4 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors duration-500 placeholder:text-white/15"
                    placeholder="Brand name"
                  />
                </div>
                <div>
                  <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-3">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 text-white py-4 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors duration-500 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#111]">Select project type...</option>
                    <option value="partnership" className="bg-[#111]">Brand Partnership</option>
                    <option value="ambassadorship" className="bg-[#111]">Ambassadorship</option>
                    <option value="campaign" className="bg-[#111]">Social Campaign</option>
                    <option value="event" className="bg-[#111]">Event Coverage</option>
                    <option value="paid" className="bg-[#111]">Paid Media Content</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-3">
                  TELL ME ABOUT YOUR PROJECT
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 text-white py-4 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors duration-500 resize-none placeholder:text-white/15"
                  placeholder="Describe your project, timeline and goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex items-center gap-4 border border-white/15 text-white px-12 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500 mt-6"
              >
                {submitted ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
                {!submitted && (
                  <span className="group-hover:translate-x-2 transition-transform duration-500">
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
