"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Ship, Anchor, Globe, ShieldCheck } from "lucide-react";

interface FleetSilhouetteStatsProps {
  onOpenQuote?: () => void;
}

export const FleetSilhouetteStats: React.FC<FleetSilhouetteStatsProps> = ({ onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const silhouettesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Counter animation for 59 Vessels
      if (numberRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 59,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.innerText = Math.floor(obj.val).toString();
            }
          },
        });
      }

      // Staggered reveal for vessel silhouettes
      if (silhouettesRef.current) {
        const items = silhouettesRef.current.querySelectorAll(".vessel-icon");
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 0.85,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: silhouettesRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate 24 vessel silhouettes to match Screenshot 3 grid
  const shipSilhouettes = Array.from({ length: 24 });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0A5C96] text-white py-20 lg:py-28 overflow-hidden border-t border-b border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: 59 VESSELS BIG NUMBERS & SILHOUETTE GRID (Screenshot 3 Style) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-baseline gap-4">
              <span
                ref={numberRef}
                className="font-syne text-7xl sm:text-9xl font-extrabold tracking-tight text-white leading-none"
              >
                59
              </span>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-2xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
                  VESSELS
                </span>
                <span className="font-mono text-xs text-sky-200 tracking-widest uppercase font-bold">
                  MANAGED FLEET IN OPERATION
                </span>
              </div>
            </div>

            {/* Vessel Silhouette Icons Grid */}
            <div
              ref={silhouettesRef}
              className="grid grid-cols-6 sm:grid-cols-8 gap-3 pt-4 border-t border-white/20"
            >
              {shipSilhouettes.map((_, i) => (
                <div
                  key={i}
                  className="vessel-icon p-2 bg-[#071A2B]/40 rounded border border-white/10 flex items-center justify-center text-sky-200 hover:text-white transition-colors"
                >
                  <Ship className="w-5 h-5 sm:w-6 sm:h-6 transform -scale-x-100" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SECONDARY METRICS & OUR HISTORY BUTTON (Screenshot 3 Style) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:border-l lg:border-white/20 lg:pl-10">
            <div className="space-y-6">
              <div className="flex items-baseline gap-3">
                <span className="font-syne text-4xl sm:text-5xl font-extrabold text-[#00D26A]">
                  29
                </span>
                <div>
                  <span className="font-syne font-bold text-lg text-white block uppercase leading-tight">
                    SHIPS ON ORDER
                  </span>
                  <span className="font-mono text-[10px] text-sky-200 uppercase font-semibold">
                    DUAL-FUEL &amp; ECO EXPANSION
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 pt-4 border-t border-white/15">
                <span className="font-syne text-4xl sm:text-5xl font-extrabold text-white">
                  04
                </span>
                <div>
                  <span className="font-syne font-bold text-lg text-white block uppercase leading-tight">
                    GLOBAL HUBS
                  </span>
                  <span className="font-mono text-[10px] text-sky-200 uppercase font-semibold">
                    DUBAI &bull; MUMBAI &bull; COLOMBO &bull; ISTANBUL
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 pt-4 border-t border-white/15">
                <span className="font-syne text-4xl sm:text-5xl font-extrabold text-white">
                  24+
                </span>
                <div>
                  <span className="font-syne font-bold text-lg text-white block uppercase leading-tight">
                    YEARS OF EXCELLENCE
                  </span>
                  <span className="font-mono text-[10px] text-sky-200 uppercase font-semibold">
                    ESTABLISHED 2002
                  </span>
                </div>
              </div>
            </div>

            {/* OUR HISTORY Button (Black box style matching Screenshot 3) */}
            <div>
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 bg-[#071A2B] hover:bg-black text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-xl rounded-none border border-white/10"
              >
                OUR HISTORY →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
