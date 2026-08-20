"use client";

import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#EFE9E4]/10 py-8">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#EFE9E4]/20 text-[9px] tracking-[0.2em] uppercase font-medium">
            {siteData.footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            {siteData.footer.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#EFE9E4]/25 text-[9px] tracking-[0.15em] uppercase font-medium hover:text-[#EFE9E4] transition-colors underline underline-offset-4">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
