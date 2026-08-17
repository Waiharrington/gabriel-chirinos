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

  let displayEnd = numericValue;
  let suffix = "";
  let prefix = "";

  if (hasPlus) prefix = "+";
  if (hasK) suffix = "K";
  if (hasM) suffix = "M";
  if (isPercentage) suffix = "%";

  const { count, ref } = useCountUp(displayEnd, 2200);

  let displayValue = "";
  if (isPercentage) {
    displayValue = `${prefix}${count}${suffix}`;
  } else if (hasM) {
    const val = count >= 1000000 ? count / 1000000 : count;
    displayValue = `${prefix}${val >= 3 ? Math.round(val) : val.toFixed(1)}${suffix}`;
  } else if (hasK) {
    const val = count >= 1000 ? count / 1000 : count;
    displayValue = `${prefix}${val >= 10 ? val.toFixed(1) : val.toFixed(1)}${suffix}`;
  } else {
    displayValue = `${prefix}${count.toLocaleString()}`;
  }

  return (
    <ScrollReveal delay={delay} className="flex flex-col items-center text-center">
      <div
        ref={ref}
        className="font-heading text-[clamp(2.5rem,4.5vw,4.2rem)] text-black leading-none mb-3"
      >
        {displayValue}
      </div>
      <div className="font-ui text-[9px] md:text-[10px] tracking-[0.25em] text-black/40 uppercase">
        {label}
      </div>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase mb-2">
            MEDIA &amp; BRAND
          </p>
          <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase">
            PERFORMANCE SNAPSHOT
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
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

        <ScrollReveal delay={0.6} className="mt-14 text-right">
          <p className="font-ui text-[9px] tracking-[0.2em] text-black/25 uppercase">
            *Last 30 days
          </p>
          <p className="font-ui text-[9px] tracking-[0.2em] text-black/25 uppercase">
            Instagram performance
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
