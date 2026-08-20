"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Work() {
  const [selected, setSelected] = useState<(typeof siteData.work)[0] | null>(null);

  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <ScrollReveal className="mb-12">
          <h2 className="font-heading text-[#785345] text-[2.5rem] md:text-[3.5rem] leading-[0.95] uppercase">
            Trabajo Seleccionado
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteData.work.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <div
                className="group cursor-pointer"
                onClick={() => setSelected(project)}
              >
                <div className="bg-gray-100 overflow-hidden mb-3" style={{ paddingTop: i % 3 === 0 ? "140%" : i % 3 === 1 ? "100%" : "120%" }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase mb-1 font-medium">
                  {project.type}
                </p>
                <p className="text-[#785345] text-sm font-medium">{project.title}</p>
                <p className="text-[#785345]/40 text-xs">{project.reach}</p>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[3/4] bg-gray-100">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${selected.image})` }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">{selected.type}</span>
                  <span className="w-1 h-1 rounded-full bg-[#785345]/30" />
                  <span className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">{selected.brand}</span>
                </div>
                <h3 className="text-[#785345] text-lg font-medium mb-3">{selected.title}</h3>
                <div className="flex gap-6 pt-3 border-t border-[#785345]/10">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] text-[#785345]/30 uppercase mb-1 font-medium">Alcance</p>
                    <p className="text-[#785345] text-sm">{selected.reach}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] text-[#785345]/30 uppercase mb-1 font-medium">Formato</p>
                    <p className="text-[#785345] text-sm">{selected.format}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/10 text-[#785345] flex items-center justify-center hover:bg-black/20 text-xs"
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
