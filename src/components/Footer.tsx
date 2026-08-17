"use client";

import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08] py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-white text-base tracking-wider">
              {siteData.personal.monogram}
            </span>
            <span className="font-ui-medium text-white text-[11px] tracking-[0.35em] uppercase">
              {siteData.personal.name}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {siteData.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui text-white/30 text-[10px] tracking-[0.15em] uppercase hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-ui text-white/20 text-[10px] tracking-[0.15em]">
            {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
