"use client";

import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-white text-lg tracking-tight">
              {siteData.personal.monogram}
            </span>
            <span className="font-ui-light text-white/30 text-[8px] tracking-dramatic uppercase">
              {siteData.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {siteData.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui-light text-white/20 text-[8px] tracking-wide-custom uppercase hover:text-[#c9a96e]/60 transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="font-ui-light text-white/15 text-[8px] tracking-wide-custom">
            {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
