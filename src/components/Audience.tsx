"use client";

import { siteData } from "@/data/siteData";
import ScrollReveal from "./ScrollReveal";

export default function Audience() {
  const { audience } = siteData;

  return (
    <section className="bg-[#111] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#c9a96e]/30" />
            <p className="font-ui-light text-[10px] tracking-dramatic text-white/25 uppercase">
              MY COMMUNITY
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          <div>
            <div className="grid grid-cols-3 gap-8 mb-16">
              <ScrollReveal>
                <div>
                  <p className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-3">
                    {audience.followers}
                  </p>
                  <div className="w-6 h-[1px] bg-[#c9a96e]/30 mb-3" />
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase">
                    Instagram Followers
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-3">
                    {audience.monthlyViews}
                  </p>
                  <div className="w-6 h-[1px] bg-[#c9a96e]/30 mb-3" />
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase">
                    Monthly Views
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-3">
                    {audience.accountsReached}
                  </p>
                  <div className="w-6 h-[1px] bg-[#c9a96e]/30 mb-3" />
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/25 uppercase">
                    Accounts Reached
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="group inline-flex items-center gap-4 border border-white/15 text-white px-10 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-500"
                >
                  VIEW MEDIA KIT
                  <span className="group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-4 text-white/30 px-10 py-5 font-ui-light text-[10px] tracking-dramatic uppercase hover:text-white transition-all duration-500"
                >
                  DOWNLOAD
                  <span className="group-hover:translate-y-1 transition-transform duration-500">
                    ↓
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-6">
                  AGE DISTRIBUTION
                </p>
                <div className="space-y-4">
                  {audience.demographics.age.map((age) => (
                    <div key={age.range} className="flex items-center gap-5">
                      <span className="font-ui-light text-xs text-white/40 w-14">
                        {age.range}
                      </span>
                      <div className="flex-1 h-[2px] bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-[#c9a96e]/60 transition-all duration-1000"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                      <span className="font-ui-light text-xs text-white/25 w-10 text-right">
                        {age.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-5">
                  GENDER
                </p>
                <div className="flex gap-10">
                  {audience.demographics.gender.map((g) => (
                    <div key={g.type} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-[#c9a96e]/60 rounded-full" />
                      <span className="font-ui-light text-sm text-white/50">
                        {g.type} {g.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-4">
                    TOP COUNTRIES
                  </p>
                  <div className="space-y-2">
                    {audience.demographics.topCountries.map((country, i) => (
                      <p key={country} className="font-ui-light text-sm text-white/50">
                        {i + 1}. {country}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-ui-light text-[8px] tracking-dramatic text-white/20 uppercase mb-4">
                    TOP CITIES
                  </p>
                  <div className="space-y-2">
                    {audience.demographics.topCities.map((city, i) => (
                      <p key={city} className="font-ui-light text-sm text-white/50">
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
