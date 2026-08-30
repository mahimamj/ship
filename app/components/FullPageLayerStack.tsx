"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";

interface FullPageLayerStackProps {
  children: React.ReactNode[];
}

export const FullPageLayerStack: React.FC<FullPageLayerStackProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Layer-stacking effect (each section slides UP over the previous section)
      mm.add("(min-width: 1024px)", () => {
        const layers = gsap.utils.toArray<HTMLElement>(".stack-layer");

        layers.forEach((layer, i) => {
          if (i > 0) {
            const prevLayer = layers[i - 1];

            gsap.fromTo(
              layer,
              { yPercent: 100 },
              {
                yPercent: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: layer,
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                  pin: prevLayer,
                  pinSpacing: false,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [children]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#071A2B]">
      {React.Children.map(children, (child, idx) => {
        if (!child) return null;
        return (
          <div
            key={idx}
            className="stack-layer relative w-full min-h-screen origin-top will-change-transform"
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
