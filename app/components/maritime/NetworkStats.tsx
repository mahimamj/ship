"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Globe, Clock, ShieldCheck } from "lucide-react";

export const NetworkStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubsRef = useRef<HTMLSpanElement>(null);
  const regionsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Count up 0 -> 4
      if (hubsRef.current) {
        gsap.fromTo(
          hubsRef.current,
          { textContent: "00" },
          {
            textContent: "04",
            duration: 1.5,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Count up 0 -> 5
      if (regionsRef.current) {
        gsap.fromTo(
          regionsRef.current,
          { textContent: "00+" },
          {
            textContent: "05+",
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#8B94A3]/20 pt-4 mt-4 select-none"
    >
      <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-[#071A2B] text-[#00D9FF] flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4" />
        </div>
        <div>
          <span ref={hubsRef} className="font-jakarta text-xl font-black text-[#071A2B] block leading-none">
            04
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#687384] uppercase font-bold">
            COMMAND HUBS
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-[#071A2B] text-[#00D9FF] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span ref={regionsRef} className="font-jakarta text-xl font-black text-[#071A2B] block leading-none">
            05+
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#687384] uppercase font-bold">
            KEY MARITIME REGIONS
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-[#071A2B] text-[#00D9FF] flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4" />
        </div>
        <div>
          <span className="font-jakarta text-xl font-black text-[#071A2B] block leading-none">
            24/7
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#687384] uppercase font-bold">
            GLOBAL COORDINATION
          </span>
        </div>
      </div>
    </div>
  );
};
