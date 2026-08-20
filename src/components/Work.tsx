"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof siteData.work)[0];
  index: number;
  onSelect: (p: (typeof siteData.work)[0]) => void;
}) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111] mb-3">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-all duration-300" />
          <div className="absolute top-3 left-3">
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/70 uppercase bg-[#0a0a0a]/60 backdrop-blur-sm px-2 py-1">
              {project.brand}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/70 uppercase bg-[#0a0a0a]/60 backdrop-blur-sm px-2 py-1">
              {project.reach}
            </span>
          </div>
        </div>
        <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase mb-1">
          {project.type}
        </p>
        <p className="font-heading text-white text-base">{project.title}</p>
      </motion.div>
    </ScrollReveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof siteData.work)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-[#111] max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#0a0a0a]/70 text-white/50 flex items-center justify-center hover:text-white transition-colors text-xs"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <div className="aspect-video bg-[#0a0a0a]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/30 uppercase">{project.type}</span>
            <span className="w-1 h-1 rounded-full bg-[#c9a96e]/40" />
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/30 uppercase">{project.brand}</span>
          </div>
          <h3 className="font-heading text-xl text-white mb-3">{project.title}</h3>
          <div className="flex gap-6 pt-3 border-t border-white/5">
            <div>
              <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-1">Alcance</p>
              <p className="font-ui-medium text-sm text-white">{project.reach}</p>
            </div>
            <div>
              <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-1">Formato</p>
              <p className="font-ui-medium text-sm text-white">{project.format}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<(typeof siteData.work)[0] | null>(null);

  return (
    <section id="work" className="bg-[#111] py-20 md:py-28">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#c9a96e]/30" />
              <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">TRABAJO SELECCIONADO</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.work.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
