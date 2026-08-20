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
      <div ref={ref} className="font-heading text-[#785345] text-[2.5rem] md:text-[3rem] leading-none mb-2">{displayValue}</div>
      <p className="text-[9px] tracking-[0.2em] text-[#785345]/40 uppercase font-medium">{label}</p>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-white border-t border-[#785345]/10 py-16 md:py-20">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} numericValue={stat.numericValue} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
