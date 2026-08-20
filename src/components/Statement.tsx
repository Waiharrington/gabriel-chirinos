"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/siteData";

export default function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.15, 0.4], [50, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5], [30, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55], [20, 0]);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-32 md:py-44 lg:py-52 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="space-y-1">
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading text-white text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line1}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading text-white text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line2}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading-light text-white/15 text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line3}
            </h2>
          </motion.div>
        </div>

        <div className="space-y-1 mt-16 md:mt-28">
          <motion.div style={{ opacity: opacity2, y: y2 }}>
            <h2 className="font-heading text-[#c9a96e] text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal1}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity3, y: y3 }}>
            <h2 className="font-heading-light text-white/40 text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal2}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity3, y: y3 }}>
            <h2 className="font-heading text-white text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal3}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
