"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

function StatItem({
  value,
  label,
  numericValue,
  delay,
}: {
  value: string;
  label: string;
  numericValue: number;
  delay: number;
}) {
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
      <div ref={ref} className="font-heading text-white text-[clamp(1.5rem,3vw,2.2rem)] leading-none mb-2">
        {displayValue}
      </div>
      <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
        {label}
      </p>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20">
      <div className="w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              numericValue={stat.numericValue}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
