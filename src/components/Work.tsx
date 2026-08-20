"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Work() {
  const [selected, setSelected] = useState<(typeof siteData.work)[0] | null>(null);

  return (
    <section id="work" className="bg-[#111] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c9a96e]/40" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
              Trabajo Seleccionado
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.work.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <div
                className="group cursor-pointer"
                onClick={() => setSelected(project)}
              >
                <div className="aspect-[4/3] bg-[#0a0a0a] overflow-hidden mb-3">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <p className="text-[9px] font-medium tracking-[0.15em] text-white/30 uppercase mb-1">
                  {project.type}
                </p>
                <p className="text-white text-base font-medium">{project.title}</p>
                <p className="text-white/40 text-xs">{project.reach}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#111] max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-[#0a0a0a]">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${selected.image})` }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-medium tracking-[0.15em] text-white/30 uppercase">{selected.type}</span>
                  <span className="w-1 h-1 rounded-full bg-[#c9a96e]/50" />
                  <span className="text-[9px] font-medium tracking-[0.15em] text-white/30 uppercase">{selected.brand}</span>
                </div>
                <h3 className="text-white text-xl font-medium mb-3">{selected.title}</h3>
                <div className="flex gap-6 pt-3 border-t border-white/10">
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase mb-1">Alcance</p>
                    <p className="text-white text-sm">{selected.reach}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.15em] text-white/25 uppercase mb-1">Formato</p>
                    <p className="text-white text-sm">{selected.format}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-[#0a0a0a]/70 text-white/50 flex items-center justify-center hover:text-white text-xs"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
