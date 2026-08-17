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
    <ScrollReveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="font-ui-medium text-white text-[10px] tracking-[0.25em] uppercase border border-white/40 px-7 py-3.5 backdrop-blur-sm">
              VIEW PROJECT →
            </span>
          </div>
          {/* Brand badge */}
          <div className="absolute top-4 left-4">
            <span className="font-ui-medium text-[9px] tracking-[0.25em] text-white/90 uppercase bg-black/70 backdrop-blur-sm px-3 py-2">
              {project.brand}
            </span>
          </div>
        </div>
        <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-1.5">
          {project.type}
        </p>
        <p className="font-ui-medium text-sm text-black mb-1">{project.title}</p>
        <p className="font-ui text-xs text-black/45">{project.views}</p>
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
      className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative aspect-video bg-zinc-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-ui text-[9px] tracking-[0.25em] text-black/40 uppercase">
              {project.type}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="font-ui text-[9px] tracking-[0.25em] text-black/40 uppercase">
              {project.brand}
            </span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-black mb-4">
            {project.title}
          </h3>
          <p className="font-ui text-sm text-black/50 leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-black/10 pt-6">
            <div>
              <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-1.5">
                Format
              </p>
              <p className="font-ui-medium text-sm text-black">{project.format}</p>
            </div>
            <div>
              <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-1.5">
                Reach
              </p>
              <p className="font-ui-medium text-sm text-black">{project.reach}</p>
            </div>
            <div>
              <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-1.5">
                Interactions
              </p>
              <p className="font-ui-medium text-sm text-black">{project.interactions}</p>
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
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-14">
          <ScrollReveal>
            <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase">
              SELECTED WORK
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#"
              className="group font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase hover:text-black transition-colors flex items-center gap-2"
            >
              VIEW ALL WORK
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
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
