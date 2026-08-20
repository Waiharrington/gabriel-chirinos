"use client";

import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-white text-base">{siteData.personal.monogram}</span>
            <span className="text-white/30 text-[9px] font-medium tracking-[0.2em] uppercase">{siteData.personal.name}</span>
          </div>

          <div className="flex items-center gap-5">
            {siteData.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="text-white/25 text-[9px] font-medium tracking-[0.1em] uppercase hover:text-[#c9a96e] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-white/15 text-[9px] font-medium tracking-[0.1em]">{siteData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
