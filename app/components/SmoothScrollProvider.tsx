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

        (window as any).lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        tickerFn = (time: number) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        if (window.location.hash) {
          const target = document.querySelector(window.location.hash);
          if (target) {
            setTimeout(() => {
              lenis.scrollTo(target, { offset: -70 });
            }, 500);
          }
        }
      } catch (e) {
        console.warn("Lenis smooth scroll fallback", e);
      }
    };

    initSmoothScroll();

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/")) {
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
        if (hash && hash !== "#") {
          const el = document.querySelector(hash);
          if (el) {
            e.preventDefault();
            if ((window as any).lenis) {
              (window as any).lenis.scrollTo(el, { offset: -70 });
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
            window.history.pushState(null, "", hash);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (lenis) {
        lenis.destroy();
        delete (window as any).lenis;
      }
      if (tickerFn) {
        const { gsap } = initGSAP();
        gsap.ticker.remove(tickerFn);
      }
    };
  }, []);

  return <>{children}</>;
};

