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
  project: (typeof siteData.selectedWork)[0];
  index: number;
  onSelect: (p: (typeof siteData.selectedWork)[0]) => void;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5 }}
        className="group cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-all duration-700" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
            <span className="font-ui-light text-white text-[9px] tracking-dramatic uppercase border border-white/30 px-8 py-4 backdrop-blur-sm group-hover:border-[#c9a96e]/50 transition-colors duration-500">
              VIEW PROJECT
            </span>
          </div>
          <div className="absolute top-5 left-5">
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/70 uppercase bg-[#0a0a0a]/60 backdrop-blur-sm px-4 py-2.5">
              {project.brand}
            </span>
          </div>
        </div>
        <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase mb-2">
          {project.type}
        </p>
        <p className="font-heading text-white text-xl mb-1.5">{project.title}</p>
        <p className="font-ui-light text-xs text-white/30">{project.views}</p>
      </motion.div>
    </ScrollReveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof siteData.selectedWork)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-[#111] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-[#0a0a0a]/70 backdrop-blur-sm text-white/50 flex items-center justify-center hover:text-white transition-colors text-sm"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative aspect-video bg-[#0a0a0a]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/30 uppercase">
              {project.type}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c9a96e]/40" />
            <span className="font-ui-light text-[8px] tracking-dramatic text-white/30 uppercase">
              {project.brand}
            </span>
          </div>
          <h3 className="font-heading text-4xl md:text-5xl text-white mb-6">
            {project.title}
          </h3>
          <p className="font-ui-light text-sm text-white/40 leading-[1.9] mb-10">
            {project.description}
          </p>
          <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
            <div>
              <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase mb-2">
                Format
              </p>
              <p className="font-ui-medium text-sm text-white">{project.format}</p>
            </div>
            <div>
              <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase mb-2">
                Reach
              </p>
              <p className="font-ui-medium text-sm text-white">{project.reach}</p>
            </div>
            <div>
              <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase mb-2">
                Interactions
              </p>
              <p className="font-ui-medium text-sm text-white">{project.interactions}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const [selected, setSelected] = useState<
    (typeof siteData.selectedWork)[0] | null
  >(null);

  return (
    <section id="work" className="bg-[#0a0a0a] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#c9a96e]/30" />
              <p className="font-ui-light text-[10px] tracking-dramatic text-white/25 uppercase">
                SELECTED WORK
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#"
              className="group font-ui-light text-[9px] tracking-dramatic text-white/20 uppercase hover:text-[#c9a96e] transition-colors duration-500 flex items-center gap-3"
            >
              VIEW ALL
              <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {siteData.selectedWork.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
