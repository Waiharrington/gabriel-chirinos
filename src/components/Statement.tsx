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
  const y1 = useTransform(scrollYProgress, [0.15, 0.4], [60, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55], [30, 0]);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-40 md:py-56 lg:py-64 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="space-y-1">
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading text-white text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line1}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading text-white text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line2}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            <h2 className="font-heading-light text-white/15 text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.line3}
            </h2>
          </motion.div>
        </div>

        <div className="space-y-1 mt-24 md:mt-36">
          <motion.div style={{ opacity: opacity2, y: y2 }}>
            <h2 className="font-heading text-[#c9a96e] text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal1}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity3, y: y3 }}>
            <h2 className="font-heading-light text-white/40 text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal2}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: opacity3, y: y3 }}>
            <h2 className="font-heading text-white text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
              {siteData.statement.reveal3}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
