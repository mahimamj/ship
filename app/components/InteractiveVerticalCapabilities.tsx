"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Zap, Award } from "lucide-react";
import { CAPABILITIES } from "@/lib/content/capabilities";
import { initGSAP } from "@/lib/gsapHelper";

interface CapabilitiesProps {
  onSelectService?: (title: string) => void;
  onOpenQuote?: () => void;
}

export const InteractiveVerticalCapabilities: React.FC<CapabilitiesProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: ScrollTrigger updates activeIdx progressively as user scrolls through section
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          onUpdate: (self) => {
            const index = Math.min(
              CAPABILITIES.length - 1,
              Math.floor(self.progress * CAPABILITIES.length)
            );
            setActiveIdx(index);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeCap = CAPABILITIES[activeIdx];

  const whyUsPrinciples = [
    {
      title: "SAFETY FIRST",
      kpi: "0.00 LTIR BENCHMARK",
      desc: "ISO 45001 certified fleet safety protocols and zero-compromise seamanship.",
      icon: ShieldCheck,
      color: "text-[#0077B6]",
      bg: "border-[#0077B6]/30",
    },
    {
      title: "EFFICIENCY STANDARD",
      kpi: "99.8% FLEET UTILIZATION",
      desc: "CII Grade A+ eco-fleet optimization and real-time AI weather routing.",
      icon: Zap,
      color: "text-[#059669]",
      bg: "border-[#059669]/30",
    },
    {
      title: "COMPLIANCE PROMISE",
      kpi: "100% AUDIT COMPLIANCE",
      desc: "MLC 2006, DG RPSL-MUM-506, and STCW 2010 international flag state compliance.",
      icon: Award,
      color: "text-[#D97706]",
      bg: "border-[#D97706]/30",
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative py-20 md:py-36 bg-[#F5F5F2] text-[#071A2B] border-b border-slate-200"
    >
      <div id="services" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#0077B6] tracking-widest uppercase block mb-2">
              // CORE CAPABILITIES &amp; OPERATIONAL STANDARDS
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              OUR CAPABILITIES
            </h2>
          </div>

          <p className="text-sm font-manrope text-slate-600 max-w-md leading-relaxed">
            Engineered technical management, certified crew logistics, commercial chartering, and compliance solutions delivered with international precision.
          </p>
        </div>

        {/* Split Layout: Left Vertical List, Right Image/Video Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Vertical Interactive List */}
          <div className="lg:col-span-7 space-y-0 border-t border-slate-200">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => {
                    setActiveIdx(idx);
                    if (onSelectService) onSelectService(cap.title);
                    else if (onOpenQuote) onOpenQuote();
                  }}
                  className={`group py-6 sm:py-8 border-b border-slate-200 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isActive ? "px-4 bg-white shadow-sm rounded-xl" : "hover:px-2"
                  }`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
                        isActive ? "text-[#0077B6] font-bold" : "text-slate-500"
                      }`}
                    >
                      {cap.number}
                    </span>
                    <div>
                      <h3
                        className={`font-syne font-bold transition-all duration-300 ${
                          isActive
                            ? "text-xl sm:text-3xl text-[#071A2B] translate-x-2"
                            : "text-lg sm:text-2xl text-[#071A2B]/80 group-hover:text-[#071A2B]"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className={`text-xs font-manrope text-slate-600 mt-2 max-w-xl transition-all duration-300 ${
                          isActive ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                      >
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-[#0077B6] text-white border-[#0077B6] rotate-45 scale-110"
                        : "text-[#071A2B] group-hover:border-[#071A2B]"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image Dynamic Preview Surface */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden bg-[#071A2B] border border-slate-200 shadow-2xl">
              <div className="absolute inset-0 transition-opacity duration-500">
                <img
                  src={activeCap.image}
                  alt={activeCap.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/90 via-[#071A2B]/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="font-mono text-xs tracking-widest text-[#0077B6] uppercase font-bold block mb-2">
                    CAPABILITY // {activeCap.number}
                  </span>
                  <h4 className="font-syne text-2xl sm:text-3xl font-extrabold mb-2">
                    {activeCap.title}
                  </h4>
                  <p className="text-xs text-white/80 font-manrope font-light leading-relaxed">
                    {activeCap.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMBINED "WHY OCEANIC STAR" CORE PRINCIPLES STRIP */}
        <div className="pt-8 border-t border-slate-200">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#0077B6] tracking-widest uppercase">
              // OPERATIONAL PRINCIPLES &amp; WHY OCEANIC STAR
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">ISO 9001:2015 &amp; MLC 2006 ACCREDITED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsPrinciples.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.title} className={`p-6 rounded-2xl bg-white border-2 ${p.bg} shadow-md space-y-3`}>
                  <div className="flex items-center justify-between">
                    <IconComp className={`w-5 h-5 ${p.color}`} />
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${p.color} bg-slate-50`}>
                      {p.kpi}
                    </span>
                  </div>
                  <h4 className="font-syne text-lg font-bold text-[#071A2B]">{p.title}</h4>
                  <p className="font-manrope text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
