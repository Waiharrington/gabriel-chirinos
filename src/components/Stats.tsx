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
  const isPercentage = value.includes("%");
  const hasPlus = value.includes("+");
  const hasK = value.includes("K");
  const hasM = value.includes("M");

  let suffix = "";
  let prefix = "";

  if (hasPlus) prefix = "+";
  if (hasK) suffix = "K";
  if (hasM) suffix = "M";
  if (isPercentage) suffix = "%";

  const { count, ref } = useCountUp(numericValue, 2200);

  let displayValue = "";
  if (isPercentage) {
    displayValue = `${prefix}${count}${suffix}`;
  } else if (hasM) {
    const val = count >= 1000000 ? count / 1000000 : count;
    displayValue = `${prefix}${val >= 3 ? Math.round(val) : val.toFixed(1)}${suffix}`;
  } else if (hasK) {
    const val = count >= 1000 ? count / 1000 : count;
    displayValue = `${prefix}${val.toFixed(1)}${suffix}`;
  } else {
    displayValue = `${prefix}${count.toLocaleString()}`;
  }

  return (
    <ScrollReveal delay={delay} className="flex flex-col items-center text-center">
      <div
        ref={ref}
        className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] text-white leading-none mb-3"
      >
        {displayValue}
      </div>
      <div className="w-6 h-[1px] bg-[#c9a96e]/30 mb-3" />
      <div className="font-ui-light text-[8px] md:text-[9px] tracking-dramatic text-white/30 uppercase">
        {label}
      </div>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[9px] tracking-dramatic text-white/25 uppercase">
              RENDIMIENTO
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-6">
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

        <ScrollReveal delay={0.6} className="mt-16 text-right">
          <p className="font-ui-light text-[8px] tracking-wide-custom text-white/15 uppercase">
            *Últimos 30 días · Rendimiento de Instagram
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
