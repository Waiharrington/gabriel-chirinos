"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-zinc-50 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] text-black/40 uppercase">
            MY COMMUNITY
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Main Stats */}
          <div>
            <div className="grid grid-cols-3 gap-8 mb-14">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] text-black leading-none mb-2">
                    {audience.followers}
                  </p>
                  <p className="font-ui text-[9px] tracking-[0.2em] text-black/35 uppercase">
                    Instagram Followers
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] text-black leading-none mb-2">
                    {audience.monthlyViews}
                  </p>
                  <p className="font-ui text-[9px] tracking-[0.2em] text-black/35 uppercase">
                    Monthly Views
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] text-black leading-none mb-2">
                    {audience.accountsReached}
                  </p>
                  <p className="font-ui text-[9px] tracking-[0.2em] text-black/35 uppercase">
                    Accounts Reached
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Media Kit Buttons */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-ui-medium text-[10px] tracking-[0.25em] uppercase hover:bg-black/80 transition-all duration-300"
                >
                  VIEW MEDIA KIT
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 border border-black/20 text-black px-8 py-4 font-ui-medium text-[10px] tracking-[0.25em] uppercase hover:border-black hover:bg-black/5 transition-all duration-300"
                >
                  DOWNLOAD MEDIA KIT
                  <span className="group-hover:translate-y-0.5 transition-transform duration-300">
                    ↓
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Demographics */}
          <div className="space-y-10">
            <ScrollReveal>
              <div>
                <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-5">
                  AGE DISTRIBUTION
                </p>
                <div className="space-y-3">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-4">
                      <span className="font-ui text-xs text-black/50 w-14">
                        {age.range}
                      </span>
                      <div className="flex-1 h-[6px] bg-black/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full transition-all duration-1000"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                      <span className="font-ui text-xs text-black/35 w-10 text-right">
                        {age.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-4">
                  GENDER
                </p>
                <div className="flex gap-8">
                  {audience.demographics.gender.map((g) => (
                    <div key={g.type} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-black rounded-full" />
                      <span className="font-ui text-sm text-black/70">
                        {g.type} {g.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-3">
                    TOP COUNTRIES
                  </p>
                  <div className="space-y-1.5">
                    {audience.demographics.topCountries.map((country, i) => (
                      <p key={country} className="font-ui text-sm text-black/70">
                        {i + 1}. {country}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-ui text-[9px] tracking-[0.25em] text-black/35 uppercase mb-3">
                    TOP CITIES
                  </p>
                  <div className="space-y-1.5">
                    {audience.demographics.topCities.map((city, i) => (
                      <p key={city} className="font-ui text-sm text-black/70">
                        {i + 1}. {city}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
