"use client";

import React, { useEffect } from "react";

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisModule = (await import("lenis")).default;
        lenis = new LenisModule({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis smooth scroll fallback", e);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
