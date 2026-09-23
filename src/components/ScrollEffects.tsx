"use client";

import { useEffect } from "react";

const REVEAL_TARGETS = [
  "header.site-header",
  "main > section",
  "main > section :is(h1, h2, h3, p, a, button, img, figure)",
  "footer :is(h2, p, a, button, img, figure)",
  ".hero .button-row",
  ".hero-bottom",
  ".territory-heading",
  ".niche",
  ".stat",
  ".stat > *",
  ".community-intro",
  ".story",
  ".services-intro",
  ".service",
  ".services-aside",
  ".split-heading",
  ".run-gallery figure",
  ".run-gallery figcaption > *",
  ".brands-section > .section-heading",
  ".brand-logo",
  ".references-section > div",
  ".contact-section > .shell > *",
  ".social-links > a",
].join(",");

export default function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_TARGETS),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.dataset.scrollState = "visible";
      });
      return;
    }

    if (!("IntersectionObserver" in window)) return;

    const siblingCounts = new Map<Element, number>();
    elements.forEach((element) => {
      const parent = element.parentElement;
      const index = parent ? (siblingCounts.get(parent) ?? 0) : 0;
      if (parent) siblingCounts.set(parent, index + 1);
      element.style.setProperty(
        "--scroll-delay",
        `${Math.min(index, 5) * 55}ms`,
      );
      element.dataset.scrollState = "hidden";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).dataset.scrollState = entry.isIntersecting
            ? "visible"
            : "hidden";
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
