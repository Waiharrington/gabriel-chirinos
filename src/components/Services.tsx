"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

const icons: Record<string, string> = {
  handshake: "🤝",
  star: "⭐",
  megaphone: "📢",
  calendar: "📅",
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c9a96e]/40" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
              Servicios
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="border border-white/10 p-6 hover:border-[#c9a96e]/30 transition-colors duration-300">
                <div className="text-2xl mb-3">{icons[service.icon]}</div>
                <h3 className="text-white text-base font-medium mb-2">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
