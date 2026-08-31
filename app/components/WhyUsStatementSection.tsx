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
      borderColor: "border-[#00F0FF]/40 hover:border-[#00F0FF]",
      accentColor: "text-[#00F0FF]",
      bgGlow: "from-[#00F0FF]/10 to-transparent",
      badgeBg: "bg-[#00F0FF]/15 text-[#00F0FF]",
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
      borderColor: "border-emerald-400/40 hover:border-emerald-400",
      accentColor: "text-emerald-400",
      bgGlow: "from-emerald-400/10 to-transparent",
      badgeBg: "bg-emerald-400/15 text-emerald-400",
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
      borderColor: "border-cyan-400/40 hover:border-cyan-400",
      accentColor: "text-cyan-400",
      bgGlow: "from-cyan-400/10 to-transparent",
      badgeBg: "bg-cyan-400/15 text-cyan-400",
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
      className="relative w-full py-16 md:py-24 bg-[#05121F] text-white font-sans select-none border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Wave Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B87_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-10 relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#00F0FF] tracking-widest uppercase flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#00F0FF]" /> // OPERATIONAL PRINCIPLES
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              WHY OCEANIC STAR
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#071A2B] border border-white/10 px-4 py-2 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
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
                className={`p-7 sm:p-8 rounded-3xl bg-[#071A2B]/85 border-2 ${st.borderColor} backdrop-blur-xl text-white space-y-6 shadow-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-400 group relative overflow-hidden`}
              >
                {/* Background Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${st.bgGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                {/* Card Header Tag */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className={`px-3 py-1 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 uppercase tracking-wider ${st.badgeBg}`}>
                      <IconComponent className="w-3.5 h-3.5" /> {st.number} // {st.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">{st.badge}</span>
                  </div>

                  {/* Main Keyword */}
                  <h3 className="font-syne text-4xl sm:text-5xl font-black text-white tracking-tight leading-none group-hover:text-[#00F0FF] transition-colors">
                    {st.keyword}
                  </h3>

                  {/* Subtitle & Main Statement */}
                  <div className="space-y-1 pt-1">
                    <p className="font-manrope text-sm font-light text-slate-400">{st.sub}</p>
                    <p className={`font-jakarta text-lg sm:text-xl font-bold ${st.accentColor}`}>
                      {st.main}
                    </p>
                  </div>
                </div>

                {/* Card Footer KPI */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className={`font-bold flex items-center gap-1.5 ${st.accentColor}`}>
                    <span>{st.kpi}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
