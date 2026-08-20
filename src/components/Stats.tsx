"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

function StatItem({ value, label, numericValue, delay }: { value: string; label: string; numericValue: number; delay: number }) {
  const { count, ref } = useCountUp(numericValue, 2000);
  const hasPlus = value.includes("+");
  const hasK = value.includes("K");
  const hasM = value.includes("M");

  let displayValue = "";
  if (hasM) {
    const val = count >= 1000000 ? count / 1000000 : count;
    displayValue = `${hasPlus ? "+" : ""}${val >= 3 ? Math.round(val) : val.toFixed(1)}M`;
  } else if (hasK) {
    const val = count >= 1000 ? count / 1000 : count;
    displayValue = `${hasPlus ? "+" : ""}${val.toFixed(1)}K`;
  } else {
    displayValue = `${hasPlus ? "+" : ""}${count}%`;
  }

  return (
    <ScrollReveal delay={delay} className="text-center">
      <div ref={ref} className="font-heading text-white text-3xl md:text-4xl mb-2">{displayValue}</div>
      <p className="text-[10px] font-medium tracking-[0.15em] text-white/30 uppercase">{label}</p>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} numericValue={stat.numericValue} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
