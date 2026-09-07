"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Award, Ship, Scale, CheckCircle2, HeartHandshake } from "lucide-react";
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
      title: "ALL-VESSEL FLEET DIVERSITY",
      kpi: "ALL SHIP TYPES",
      desc: "Full crewing & technical expertise across Bulk Carriers, Containers, Oil & Chem Tankers, LPG/LNG Gas Carriers, Ro-Ro & DP Offshore.",
      icon: Ship,
      color: "text-[#0077B6]",
      bg: "border-[#0077B6]/30",
    },
    {
      title: "FAIRNESS & EQUAL OPPORTUNITY",
      kpi: "100% TRANSPARENT HIRING",
      desc: "Zero-fee recruitment, preference-based matching, transparent placement, structured rotation, and crew welfare focus.",
      icon: Scale,
      color: "text-[#059669]",
      bg: "border-[#059669]/30",
    },
    {
      title: "COMPLIANCE & RPSL PROMISE",
      kpi: "DG RPSL-MUM-506",
      desc: "MLC 2006, ISO 9001:2015, STCW 2010, and Flag State international maritime safety adherence.",
      icon: ShieldCheck,
      color: "text-[#D97706]",
      bg: "border-[#D97706]/30",
    },
    {
      title: "OPERATIONAL RELIABILITY",
      kpi: "99.8% UTILIZATION",
      desc: "Class-1 engineer led maintenance, AI voyage optimization, CII Grade A+ monitoring, and 24/7 port dispatch.",
      icon: Award,
      color: "text-[#7C3AED]",
      bg: "border-[#7C3AED]/30",
    },
  ];

  const allVesselTypesList = [
    { name: "Bulk Carriers", sub: "Capesize, Handymax & Supramax", type: "Dry Cargo" },
    { name: "Container Ships", sub: "Feeders to ULCV (24K TEU)", type: "Liner Cargo" },
    { name: "Oil & Chem Tankers", sub: "MR1/2, Aframax & VLCC", type: "Liquid Cargo" },
    { name: "Gas Carriers", sub: "LPG, Ethylene & LNG Carriers", type: "Cryogenic" },
    { name: "Ro-Ro Carriers", sub: "PCTC & Pure Car Carriers", type: "Rolling Cargo" },
    { name: "DP2 Offshore", sub: "AHTS, PSV & Subsea Support", type: "Offshore DP" },
  ];

  const fairnessHighlights = [
    { title: "Zero Recruitment Fees", desc: "100% Free placement policy", badge: "DG Certified" },
    { title: "Preference Matching", desc: "Tailored ship & contract choice", badge: "Seafarer First" },
    { title: "Merit-Based Selection", desc: "Transparent skill evaluations", badge: "Zero Bias" },
    { title: "Direct Wage Remittance", desc: "On-time full salary transfers", badge: "Transparent" },
    { title: "Structured Rotations", desc: "Predictable 4-6 month contracts", badge: "Work-Life" },
    { title: "24/7 Family Welfare", desc: "Dedicated shore emergency line", badge: "Morale Care" },
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
              // CORE CAPABILITIES • ALL VESSEL TYPES • FAIRNESS FIRST
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              OUR CAPABILITIES
            </h2>
          </div>

          <p className="text-sm font-manrope text-slate-600 max-w-md leading-relaxed">
            Full-spectrum technical management &amp; certified crewing across <strong>all vessel categories</strong> (Bulk, Container, Tanker, Gas, Offshore), built on <strong>100% fair, transparent, and crew-first ethics</strong>.
          </p>
        </div>

        {/* Vessel Diversity & Fairness Banner Surface - Luxury Dark Nautical Glassmorphism */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071A2B] via-[#0B253E] to-[#071A2B] p-6 sm:p-8 md:p-10 border border-sky-500/20 shadow-2xl text-white space-y-8">
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section 1: Vessel Diversity Coverage */}
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-inner">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-sky-400 tracking-widest uppercase">
                      FLEET DIVERSITY
                    </span>
                    <span className="px-2 py-0.5 bg-sky-500/20 text-sky-300 font-mono text-[9px] font-bold rounded-full border border-sky-400/30">
                      6+ VESSEL CLASSES
                    </span>
                  </div>
                  <h3 className="font-syne text-base sm:text-lg font-extrabold text-white tracking-wide">
                    ALL-VESSEL FLEET MANAGEMENT
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400 hidden lg:inline">
                FULL CREWING &amp; TECHNICAL CAPABILITY
              </span>
            </div>

            {/* Vessel Type Glass Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {allVesselTypesList.map((vt) => (
                <div
                  key={vt.name}
                  className="group relative p-3.5 rounded-2xl bg-white/[0.04] hover:bg-sky-500/15 border border-white/10 hover:border-sky-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-sky-300/80 font-bold uppercase tracking-wider">
                      {vt.type}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-syne text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                      {vt.name}
                    </h4>
                    <p className="font-manrope text-[10px] text-slate-400 font-light mt-0.5">
                      {vt.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Fairness & Seafarer Commitment */}
          <div className="relative z-10 space-y-4 pt-2 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
                      SEAFARER ETHICS
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold rounded-full border border-emerald-400/30">
                      100% FAIR HIRING
                    </span>
                  </div>
                  <h3 className="font-syne text-base sm:text-lg font-extrabold text-white tracking-wide">
                    FAIRNESS &amp; EQUAL OPPORTUNITY COMMITMENT
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400 hidden lg:inline">
                ZERO RECRUITMENT FEES • MERIT MATCHING
              </span>
            </div>

            {/* Fairness Glass Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {fairnessHighlights.map((fh) => (
                <div
                  key={fh.title}
                  className="group relative p-3.5 rounded-2xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono text-[9px] text-emerald-300/80 font-bold uppercase tracking-wider">
                      {fh.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-syne text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {fh.title}
                    </h4>
                    <p className="font-manrope text-[10px] text-slate-400 font-light mt-0.5">
                      {fh.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                          isActive ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                      >
                        {cap.description}
                      </p>

                      {/* Display vessel types tags if present */}
                      {isActive && cap.vesselTypes && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {cap.vesselTypes.map((v) => (
                            <span
                              key={v}
                              className="px-2 py-0.5 bg-[#0077B6]/10 text-[#0077B6] font-mono text-[10px] font-bold rounded"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      )}
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
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden bg-[#071A2B] border border-slate-200 shadow-2xl">
              <div className="absolute inset-0 transition-opacity duration-500">
                <img
                  src={activeCap.image}
                  alt={activeCap.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <span className="font-mono text-xs tracking-widest text-[#0077B6] uppercase font-bold block">
                    CAPABILITY // {activeCap.number}
                  </span>
                  <h4 className="font-syne text-2xl sm:text-3xl font-extrabold">
                    {activeCap.title}
                  </h4>
                  <p className="text-xs text-white/80 font-manrope font-light leading-relaxed">
                    {activeCap.description}
                  </p>

                  {/* Highlights Pill */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-[#0077B6]/30 backdrop-blur-sm text-cyan-300 font-mono text-[11px] font-bold rounded-lg border border-cyan-400/30">
                      ✓ All Ship Types
                    </span>
                    <span className="px-2.5 py-1 bg-[#059669]/30 backdrop-blur-sm text-emerald-300 font-mono text-[11px] font-bold rounded-lg border border-emerald-400/30">
                      ✓ 100% Fair Placement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMBINED "WHY OCEANIC STAR" CORE PRINCIPLES STRIP */}
        <div className="pt-8 border-t border-slate-200">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#0077B6] tracking-widest uppercase">
              // OPERATIONAL PRINCIPLES &amp; CORE PROMISES
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">ISO 9001:2015 &amp; DG RPSL-MUM-506 CERTIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h4 className="font-syne text-base font-bold text-[#071A2B]">{p.title}</h4>
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

