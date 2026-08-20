"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", brand: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", brand: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#111] py-20 md:py-28">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#c9a96e]/30" />
                <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">CONTACTO</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] mb-4">
                VAMOS A TRABAJAR
              </h2>
              <h2 className="font-heading text-white/15 text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] mb-6">
                JUNTOS.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-ui-light text-white/35 text-sm leading-[1.8] max-w-sm mb-8">
                ¿Tienes una idea o campaña? Hablemos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 mb-8">
                <a href={siteData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/35 hover:text-white transition-colors duration-300">
                  <span className="font-ui-light text-[8px] tracking-dramatic uppercase w-16 text-white/20">Instagram</span>
                  <span className="font-ui-light text-sm">{siteData.personal.instagram}</span>
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-4 text-white/35 hover:text-white transition-colors duration-300">
                  <span className="font-ui-light text-[8px] tracking-dramatic uppercase w-16 text-white/20">Email</span>
                  <span className="font-ui-light text-sm">{siteData.personal.email}</span>
                </a>
                <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/35 hover:text-white transition-colors duration-300">
                  <span className="font-ui-light text-[8px] tracking-dramatic uppercase w-16 text-white/20">WhatsApp</span>
                  <span className="font-ui-light text-sm">{siteData.personal.whatsapp}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-4">
                <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#c9a96e] text-[#0a0a0a] px-6 py-3 font-ui-medium text-[10px] tracking-dramatic uppercase hover:bg-[#c9a96e]/90 transition-all duration-300">
                  WHATSAPP
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="inline-flex items-center gap-2 border border-white/15 text-white px-6 py-3 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-white/30 transition-all duration-300">
                  EMAIL
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-2">NOMBRE</label>
                <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors placeholder:text-white/15" placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-2">EMAIL</label>
                <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors placeholder:text-white/15" placeholder="tu@email.com" required />
              </div>
              <div>
                <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-2">MARCA</label>
                <input type="text" value={formState.brand} onChange={(e) => setFormState({ ...formState, brand: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors placeholder:text-white/15" placeholder="Nombre de la marca" />
              </div>
              <div>
                <label className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase block mb-2">MENSAJE</label>
                <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows={4} className="w-full bg-transparent border-b border-white/10 text-white py-3 font-ui-light text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors resize-none placeholder:text-white/15" placeholder="Cuéntame sobre tu proyecto..." />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-3 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 mt-2">
                {submitted ? "ENVIADO ✓" : "ENVIAR"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
