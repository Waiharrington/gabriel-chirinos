"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function parseMetric(value: string) {
  const match = value.trim().match(/^([+-]?)([\d.,]+)(.*)$/);
  if (!match) return null;

  const [, sign, number, suffix] = match;
  const decimals = number.includes(",")
    ? number.length - number.lastIndexOf(",") - 1
    : 0;
  const normalized = number.includes(",")
    ? number.replace(/\./g, "").replace(",", ".")
    : number.replace(/\./g, "");
  const target = Number(normalized);

  if (!Number.isFinite(target)) return null;

  const formatter = new Intl.NumberFormat("es-VE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return {
    target,
    format: (current: number) => `${sign}${formatter.format(current)}${suffix}`,
  };
}

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const metric = useMemo(() => parseMetric(value), [value]);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!metric || !ref.current) {
      setDisplay(value);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    let frame = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      setDisplay(metric.format(0));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          stop();
          return;
        }

        cancelAnimationFrame(frame);
        setDisplay(metric.format(0));
        const startTime = performance.now();
        const duration = 1400;
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(metric.format(metric.target * eased));

          if (progress < 1) frame = requestAnimationFrame(animate);
          else setDisplay(value);
        };

        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [metric, value]);

  return <span ref={ref}>{display}</span>;
}
