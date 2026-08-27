"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/siteData";

const icons: Record<string, React.ReactNode> = {
  users: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  eye: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  signal: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

// Helper component for animated count up
function AnimatedCounter({ rawValue }: { rawValue: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse prefix like "+"
    const hasPlus = rawValue.startsWith("+");
    const cleanStr = rawValue.replace(/[^0-9]/g, "");
    const target = parseInt(cleanStr, 10);
    if (isNaN(target)) {
      setDisplayValue(rawValue);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // EaseOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      // Format with dot separator (e.g. 22.885, 3.097.230)
      const formatted = current.toLocaleString("de-DE");
      setDisplayValue(`${hasPlus ? "+" : ""}${formatted}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(rawValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, rawValue]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  return (
    <section className="w-full relative">
      {/* Background ambient red glow behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#E53935]/15 via-transparent to-[#E53935]/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

      {/* Main floating card */}
      <div className="relative bg-[#0d0d0d]/90 backdrop-blur-xl border border-white/[0.09] hover:border-white/[0.16] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all">
        {/* Top ambient highlight line */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
          {siteData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 lg:px-8 justify-start group cursor-default"
            >
              {/* Glowing Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E53935]/20 via-[#E53935]/10 to-transparent border border-[#E53935]/35 flex items-center justify-center text-[#E53935] flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,57,53,0.35)] transition-all duration-300">
                {icons[stat.icon]}
              </div>

              {/* Stats Value & Label */}
              <div>
                <div className="text-white text-3xl sm:text-4xl lg:text-[2.6rem] font-black font-bebas leading-none mb-1.5 tracking-tight group-hover:text-[#E53935] transition-colors">
                  <AnimatedCounter rawValue={stat.value} />
                </div>
                <div className="text-white/45 group-hover:text-white/70 text-[9.5px] sm:text-[10px] font-bold tracking-wider whitespace-pre-line uppercase font-inter leading-tight transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
