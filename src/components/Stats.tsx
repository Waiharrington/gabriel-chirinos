"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/siteData";

const icons: Record<string, React.ReactNode> = {
  users: (
    <svg className="w-10 h-10 text-[#E53935] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  eye: (
    <svg className="w-10 h-10 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.8} />
    </svg>
  ),
  signal: (
    <svg className="w-10 h-10 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5a5 5 0 000 7m7-7a5 5 0 010 7M5.7 5.7a9 9 0 000 12.6m12.6-12.6a9 9 0 010 12.6" />
    </svg>
  ),
  trending: (
    <svg className="w-10 h-10 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19v-3m5 3v-6m5 3v-9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14l5-5 4 3 6-7m0 0h-4m4 0v4" />
    </svg>
  ),
};

// Animated count up component
function AnimatedCounter({ rawValue }: { rawValue: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const hasPlus = rawValue.startsWith("+");
    const cleanStr = rawValue.replace(/[^0-9]/g, "");
    const target = parseInt(cleanStr, 10);
    if (isNaN(target)) {
      setDisplayValue(rawValue);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

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
    <section id="stats-section" data-editable-name="Sección de Estadísticas" className="w-full flex justify-center py-2 transition-all">
      {/* Centered card matching exact reference dimensions and ample internal space */}
      <div
        id="stats-card"
        data-editable-name="Tarjeta de Estadísticas (Caja)"
        className="w-full max-w-[1040px] bg-[#090909] border border-white/[0.14] rounded-2xl px-8 py-8 sm:px-12 sm:py-9 lg:px-8 lg:py-8 shadow-2xl transition-all"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          {siteData.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center justify-between lg:justify-start w-full relative">
              {/* Stat Content Block */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 sm:gap-5 w-full lg:px-5 xl:px-6 justify-start"
              >
                {/* Red Standalone Vector Icon */}
                <div className="flex items-center justify-center flex-shrink-0">
                  {icons[stat.icon]}
                </div>

                {/* Number and Description */}
                <div className="flex flex-col justify-center">
                  <div className="text-white text-2xl sm:text-3xl font-black font-inter tracking-tight leading-none mb-1">
                    <AnimatedCounter rawValue={stat.value} />
                  </div>
                  <div className="text-white/60 text-[10px] sm:text-[10.5px] font-bold tracking-wider whitespace-pre-line uppercase font-inter leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>

              {/* Red Vertical Divider Line between items */}
              {i < siteData.stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#E53935]/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
