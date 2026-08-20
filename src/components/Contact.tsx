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
    <section id="contact" className="bg-black py-24 md:py-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-[#EFE9E4] text-[2.5rem] md:text-[3.5rem] leading-[0.95] uppercase mb-6">
                Vamos A Trabajar Juntos.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[#EFE9E4]/40 text-sm leading-relaxed mb-10">
                ¿Tienes una idea o campaña? Hablemos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 mb-10">
                <a href={siteData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#EFE9E4]/50 hover:text-[#EFE9E4] transition-colors">
                  <span className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase font-medium w-20">Instagram</span>
                  <span className="text-sm underline underline-offset-4">{siteData.personal.instagram}</span>
                </a>
                <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-4 text-[#EFE9E4]/50 hover:text-[#EFE9E4] transition-colors">
                  <span className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase font-medium w-20">Email</span>
                  <span className="text-sm underline underline-offset-4">{siteData.personal.email}</span>
                </a>
                <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#EFE9E4]/50 hover:text-[#EFE9E4] transition-colors">
                  <span className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase font-medium w-20">WhatsApp</span>
                  <span className="text-sm underline underline-offset-4">{siteData.personal.whatsapp}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase block mb-2 font-medium">Nombre</label>
                <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full bg-transparent border-b border-[#EFE9E4]/10 text-[#EFE9E4] py-3 text-sm focus:outline-none focus:border-[#EFE9E4]/30 transition-colors placeholder:text-[#EFE9E4]/15" placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase block mb-2 font-medium">Email</label>
                <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full bg-transparent border-b border-[#EFE9E4]/10 text-[#EFE9E4] py-3 text-sm focus:outline-none focus:border-[#EFE9E4]/30 transition-colors placeholder:text-[#EFE9E4]/15" placeholder="tu@email.com" required />
              </div>
              <div>
                <label className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase block mb-2 font-medium">Marca</label>
                <input type="text" value={formState.brand} onChange={(e) => setFormState({ ...formState, brand: e.target.value })} className="w-full bg-transparent border-b border-[#EFE9E4]/10 text-[#EFE9E4] py-3 text-sm focus:outline-none focus:border-[#EFE9E4]/30 transition-colors placeholder:text-[#EFE9E4]/15" placeholder="Nombre de la marca" />
              </div>
              <div>
                <label className="text-[9px] tracking-[0.2em] text-[#EFE9E4]/25 uppercase block mb-2 font-medium">Mensaje</label>
                <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows={4} className="w-full bg-transparent border-b border-[#EFE9E4]/10 text-[#EFE9E4] py-3 text-sm focus:outline-none focus:border-[#EFE9E4]/30 transition-colors resize-none placeholder:text-[#EFE9E4]/15" placeholder="Cuéntame sobre tu proyecto..." />
              </div>
              <button type="submit" className="text-[#EFE9E4] text-[10px] tracking-[0.2em] uppercase font-bold underline underline-offset-4 hover:text-[#EFE9E4]/60 transition-colors mt-4">
                {submitted ? "Enviado ✓" : "Enviar Mensaje"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
