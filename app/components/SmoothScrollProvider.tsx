"use client";

import React, { useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    let lenis: any;
    let tickerFn: (time: number) => void;

    const initSmoothScroll = async () => {
      try {
        const { gsap, ScrollTrigger } = initGSAP();
        const LenisModule = (await import("lenis")).default;

        lenis = new LenisModule({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
          infinite: false,
        });

        lenis.on("scroll", ScrollTrigger.update);

        tickerFn = (time: number) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
      } catch (e) {
        console.warn("Lenis smooth scroll fallback", e);
      }
    };

    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (tickerFn) {
        const { gsap } = initGSAP();
        gsap.ticker.remove(tickerFn);
      }
    };
  }, []);

  return <>{children}</>;
};

