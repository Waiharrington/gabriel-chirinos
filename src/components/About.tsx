"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactElement> = {
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  focus: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
    </svg>
  ),
  platform: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M8.25 9.75A1.875 1.875 0 0110.125 7.875h3.75A1.875 1.875 0 0115.75 9.75v4.5A1.875 1.875 0 0113.875 16.125h-3.75A1.875 1.875 0 018.25 14.25v-4.5z" />
    </svg>
  ),
  language: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-18.432 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
    </svg>
  ),
};

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${siteData.aboutImage}')` }}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase mb-10">
                ABOUT ME
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] text-black leading-[1.05] mb-10">
                I create content that{" "}
                <span className="text-black/40">moves, motivates</span>{" "}
                and connects.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 mb-12">
                {about.text.map((t, i) => (
                  <p key={i} className="font-ui text-sm text-black/55 leading-[1.8]">
                    {t}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-black/10 pt-8">
                {about.details.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <span className="text-black/30 mt-0.5 flex-shrink-0">
                      {iconMap[detail.icon]}
                    </span>
                    <div>
                      <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-1">
                        {detail.label}
                      </p>
                      <p className="font-ui-medium text-sm text-black">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
