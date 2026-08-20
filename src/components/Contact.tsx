"use client";

import { useState } from "react";
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
    <section id="contact" className="bg-[#111] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#c9a96e]/40" />
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
                  Contacto
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-6">
                Vamos A Trabajar Juntos.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                ¿Tienes una idea o campaña? Hablemos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 mb-8">
                <a href={siteData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/40 hover:text-white transition-colors">
                  <span className="text-[9px] font-medium tracking-[0.15em] uppercase w-16 text-white/25">Instagram</span>
                  <span className="text-sm">{siteData.personal.instagram}</span>
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-4 text-white/40 hover:text-white transition-colors">
                  <span className="text-[9px] font-medium tracking-[0.15em] uppercase w-16 text-white/25">Email</span>
                  <span className="text-sm">{siteData.personal.email}</span>
                </a>
                <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/40 hover:text-white transition-colors">
                  <span className="text-[9px] font-medium tracking-[0.15em] uppercase w-16 text-white/25">WhatsApp</span>
                  <span className="text-sm">{siteData.personal.whatsapp}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-4">
                <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="bg-[#c9a96e] text-[#0a0a0a] px-6 py-3 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e]/90 transition-colors">
                  WhatsApp
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="border border-white/20 text-white px-6 py-3 text-[10px] font-medium tracking-[0.15em] uppercase hover:border-white/40 transition-colors">
                  Email
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase block mb-2">Nombre</label>
                <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors placeholder:text-white/15" placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase block mb-2">Email</label>
                <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors placeholder:text-white/15" placeholder="tu@email.com" required />
              </div>
              <div>
                <label className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase block mb-2">Marca</label>
                <input type="text" value={formState.brand} onChange={(e) => setFormState({ ...formState, brand: e.target.value })} className="w-full bg-transparent border-b border-white/10 text-white py-3 text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors placeholder:text-white/15" placeholder="Nombre de la marca" />
              </div>
              <div>
                <label className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase block mb-2">Mensaje</label>
                <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows={4} className="w-full bg-transparent border-b border-white/10 text-white py-3 text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors resize-none placeholder:text-white/15" placeholder="Cuéntame sobre tu proyecto..." />
              </div>
              <button type="submit" className="border border-[#c9a96e]/40 text-[#c9a96e] px-8 py-3 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e]/10 transition-colors mt-2">
                {submitted ? "Enviado ✓" : "Enviar"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
