"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { ShieldCheck, Zap, Award, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const WhyUsStatementSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const statements = [
    {
      ref: card1Ref,
      number: "01",
      tag: "FOUNDATION",
      keyword: "SAFETY",
      sub: "is not a feature.",
      main: "It is the foundation.",
      kpi: "0.00 LTIR BENCHMARK",
      badge: "ISO 45001 CERTIFIED",
      icon: ShieldCheck,
      borderColor: "border-[#0077B6]/30 hover:border-[#0077B6]",
      accentColor: "text-[#0077B6]",
      bgGlow: "from-[#0077B6]/15 to-transparent",
      badgeBg: "bg-[#0077B6]/10 text-[#0077B6] border border-[#0077B6]/20",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,119,182,0.15)]",
    },
    {
      ref: card2Ref,
      number: "02",
      tag: "STANDARD",
      keyword: "EFFICIENCY",
      sub: "is not an option.",
      main: "It is the standard.",
      kpi: "99.8% FLEET UTILIZATION",
      badge: "CII GRADE A+ ECO FLEET",
      icon: Zap,
      borderColor: "border-[#059669]/30 hover:border-[#059669]",
      accentColor: "text-[#059669]",
      bgGlow: "from-[#059669]/15 to-transparent",
      badgeBg: "bg-[#059669]/10 text-[#059669] border border-[#059669]/20",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(5,150,105,0.15)]",
    },
    {
      ref: card3Ref,
      number: "03",
      tag: "PROMISE",
      keyword: "COMPLIANCE",
      sub: "is not a burden.",
      main: "It is our promise.",
      kpi: "100% FLAG STATE AUDIT",
      badge: "MLC 2006 & DG RPSL",
      icon: Award,
      borderColor: "border-[#D97706]/30 hover:border-[#D97706]",
      accentColor: "text-[#D97706]",
      bgGlow: "from-[#D97706]/15 to-transparent",
      badgeBg: "bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)]",
    },
  ];

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="operational-principles"
      className="relative w-full py-16 md:py-24 bg-[#F5F5F2] text-[#071A2B] font-sans select-none border-t border-b border-slate-200 overflow-hidden"
    >
      {/* Background Subtle Wave Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077B6_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-10 relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#0077B6] tracking-widest uppercase flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#0077B6]" /> // OPERATIONAL PRINCIPLES
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-black text-[#071A2B] tracking-tight">
              WHY OCEANIC STAR
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-[#0077B6]" />
            <span>CORE MARITIME STANDARDS</span>
          </div>
        </div>

        {/* COMPACT SLEEK 3-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {statements.map((st) => {
            const IconComponent = st.icon;

            return (
              <div
                key={st.keyword}
                ref={st.ref}
                className={`p-7 sm:p-8 rounded-3xl bg-white border-2 ${st.borderColor} text-[#071A2B] space-y-6 shadow-md flex flex-col justify-between hover:-translate-y-1.5 ${st.hoverShadow} transition-all duration-400 group relative overflow-hidden`}
              >
                {/* Background Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${st.bgGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                {/* Card Header Tag */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className={`px-3 py-1 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 uppercase tracking-wider ${st.badgeBg}`}>
                      <IconComponent className="w-3.5 h-3.5" /> {st.number} // {st.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">{st.badge}</span>
                  </div>

                  {/* Main Keyword */}
                  <h3 className="font-syne text-4xl sm:text-5xl font-black text-[#071A2B] tracking-tight leading-none group-hover:text-[#0077B6] transition-colors">
                    {st.keyword}
                  </h3>

                  {/* Subtitle & Main Statement */}
                  <div className="space-y-1 pt-1">
                    <p className="font-manrope text-sm font-normal text-slate-500">{st.sub}</p>
                    <p className={`font-jakarta text-lg sm:text-xl font-bold ${st.accentColor}`}>
                      {st.main}
                    </p>
                  </div>
                </div>

                {/* Card Footer KPI */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className={`font-bold flex items-center gap-1.5 ${st.accentColor}`}>
                    <span>{st.kpi}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#071A2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
