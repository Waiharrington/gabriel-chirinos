"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/siteData";

const icons: Record<string, React.ReactNode> = {
  users: (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E53935] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  eye: (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  signal: (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5a5 5 0 000 7m7-7a5 5 0 010 7M5.5 5.5a9 9 0 000 13m13-13a9 9 0 010 13" />
    </svg>
  ),
  trending: (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E53935] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21v-4m5 4v-7m5 7v-5m5 5v-9" />
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
    <section className="w-full">
      {/* Exact replica of the reference box with generous internal space */}
      <div className="w-full bg-[#0a0a0a] border border-white/[0.12] rounded-2xl px-6 py-7 sm:px-10 sm:py-8 lg:px-10 lg:py-8 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
          {siteData.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center justify-between lg:justify-start w-full">
              {/* Stat Item Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 sm:gap-5 w-full lg:px-6 xl:px-8 justify-start"
              >
                {/* Standalone Red Icon */}
                <div className="flex items-center justify-center">
                  {icons[stat.icon]}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <div className="text-white text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] font-black font-inter tracking-tight leading-none mb-1">
                    <AnimatedCounter rawValue={stat.value} />
                  </div>
                  <div className="text-white/60 text-[9.5px] sm:text-[10px] xl:text-[10.5px] font-bold tracking-wider whitespace-pre-line uppercase font-inter leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>

              {/* Vertical Red Divider Line between items on desktop */}
              {i < siteData.stats.length - 1 && (
                <div className="hidden lg:block w-[1px] h-10 xl:h-12 bg-[#E53935]/50 flex-shrink-0 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
