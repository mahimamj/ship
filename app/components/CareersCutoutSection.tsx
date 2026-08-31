"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Users, Wrench, Shield, ArrowRight, Award, Compass, Globe, CheckCircle2, FileCheck } from "lucide-react";

interface CareersCutoutSectionProps {
  onOpenApplyModal?: (jobTitle?: string) => void;
}

export const CareersCutoutSection: React.FC<CareersCutoutSectionProps> = ({ onOpenApplyModal }) => {
  const containerRef = useRef<HTMLElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const block4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      // 1. CONTINUOUS TOP-TO-DOWN PARALLAX MOVEMENT ON THE SINGLE PINNED STICKY RIGHT IMAGE ACROSS ENTIRE SECTION
      if (rightImageRef.current && containerRef.current) {
        gsap.fromTo(
          rightImageRef.current,
          { yPercent: -15, scale: 1.15 },
          {
            yPercent: 15,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }

      // 2. SUBTLE REVEAL ANIMATIONS FOR LEFT CONTENT BLOCKS AS THEY ENTER VIEWPORT
      const blocks = [block1Ref, block2Ref, block3Ref, block4Ref];
      blocks.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 82%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home-mission-careers"
      className="relative w-full bg-white text-[#071A2B] font-sans select-none border-t border-slate-200 z-10"
    >
      {/* 50/50 DESKTOP SPLIT-SCREEN CONTAINER (items-stretch ENSURES BOTH COLUMNS SHARE EXACT TOTAL HEIGHT) */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch w-full relative">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: WHITE OCEANIC STAR CONTENT COLUMN (NATURALLY SCROLLS)        */}
        {/* ========================================================================= */}
        <div
          id="home-mission-left"
          className="lg:col-span-6 col-md-6 bg-white text-[#071A2B] px-6 sm:px-10 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 space-y-28 z-10 relative"
        >
          {/* TOP HEADER TAG */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#176B87]/10 text-[#176B87] border border-[#176B87]/20 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
              <Compass className="w-4 h-4 text-[#176B87]" />
              <span>CAREERS &bull; AT SEA &amp; ON SHORE</span>
            </div>
            <span className="text-xs font-mono text-slate-400 font-bold">DG RPSL APPROVED</span>
          </div>

          {/* CAREERS BLOCK 1: CAREERS AT SEA */}
          <div ref={block1Ref} className="space-y-5 border-l-4 border-[#176B87] pl-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#176B87]/10 text-[#176B87] text-xs font-mono font-bold rounded-md flex items-center gap-1.5 uppercase tracking-wider">
                <Users className="w-4 h-4" /> CAREERS AT SEA
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">1,800+ SEAFARERS</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2B] tracking-tight leading-[1.05]">
              MASTER OFFICERS &amp; <br />
              <span className="text-[#176B87]">CHIEF ENGINEERS</span>
            </h2>

            <p className="font-manrope text-base text-slate-600 leading-relaxed font-normal">
              To provide world-class seafarer crew management across LNG, tanker, and dry bulk fleets in a safe, reliable, and MLC 2006 compliant manner.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-[#176B87] flex items-center gap-2 font-bold">
                <Shield className="w-4 h-4 text-[#176B87]" /> STCW 2010 CERTIFIED
              </span>
              <button
                onClick={() => onOpenApplyModal?.("Careers At Sea - Seafarer Officers")}
                className="px-5 py-2.5 bg-[#176B87] text-white rounded-xl font-mono text-xs font-bold hover:bg-[#071A2B] transition-all duration-300 flex items-center gap-2 shadow-lg group"
              >
                <span>APPLY AT SEA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CAREERS BLOCK 2: CAREERS ON SHORE */}
          <div ref={block2Ref} className="space-y-5 border-l-4 border-emerald-600 pl-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-mono font-bold rounded-md flex items-center gap-1.5 uppercase tracking-wider">
                <Wrench className="w-4 h-4" /> CAREERS ON SHORE
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">DUBAI &amp; MUMBAI HUBS</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2B] tracking-tight leading-[1.05]">
              DRYDOCK TECHNICAL <br />
              <span className="text-emerald-700">SUPERINTENDENTS</span>
            </h2>

            <p className="font-manrope text-base text-slate-600 leading-relaxed font-normal">
              Join our Dubai HQ and regional command hubs. Class-1 superintendents overseeing PMS maintenance, drydock overhauls, and commercial dispatch.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-emerald-700 flex items-center gap-2 font-bold">
                <Award className="w-4 h-4 text-emerald-700" /> CLASS-1 SUPERINTENDENCY
              </span>
              <button
                onClick={() => onOpenApplyModal?.("Careers On Shore - Technical Superintendent")}
                className="px-5 py-2.5 bg-emerald-700 text-white rounded-xl font-mono text-xs font-bold hover:bg-[#071A2B] transition-all duration-300 flex items-center gap-2 shadow-lg group"
              >
                <span>APPLY ON SHORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CAREERS BLOCK 3: GLOBAL COMMAND & DISPATCH */}
          <div ref={block3Ref} className="space-y-5 border-l-4 border-cyan-700 pl-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-700 text-xs font-mono font-bold rounded-md flex items-center gap-1.5 uppercase tracking-wider">
                <Globe className="w-4 h-4" /> GLOBAL DISPATCH
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">24/7 TELEMETRY</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2B] tracking-tight leading-[1.05]">
              SEAFARER WELFARE &amp; <br />
              <span className="text-cyan-700">COMMERCIAL ROUTING</span>
            </h2>

            <p className="font-manrope text-base text-slate-600 leading-relaxed font-normal">
              Real-time AIS vessel dispatch, crew welfare monitoring, and international trade compliance operating 24/7 across Atlantic and Indo-Pacific shipping lanes.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-cyan-700 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-cyan-700" /> 24/7 COMMAND TELEMETRY
              </span>
              <button
                onClick={() => onOpenApplyModal?.("Global Dispatch Operations Specialist")}
                className="px-5 py-2.5 bg-cyan-800 text-white rounded-xl font-mono text-xs font-bold hover:bg-[#071A2B] transition-all duration-300 flex items-center gap-2 shadow-lg group"
              >
                <span>JOIN DISPATCH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CAREERS BLOCK 4: COMPLIANCE & RECRUITMENT REQUIREMENTS */}
          <div ref={block4Ref} className="space-y-5 border-l-4 border-slate-400 pl-6 max-w-xl pb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded-md flex items-center gap-1.5 uppercase tracking-wider">
                <FileCheck className="w-4 h-4" /> RECRUITMENT STANDARDS
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">ISO 9001:2015</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2B] tracking-tight leading-[1.05]">
              MLC 2006 &amp; <br />
              <span className="text-[#176B87]">DG RPSL AUDITED</span>
            </h2>

            <p className="font-manrope text-base text-slate-600 leading-relaxed font-normal">
              Strict recruitment protocols ensuring fair wages, certified medical fitness, STCW 2010 training endorsements, and zero-compromise safety standards across all vessel deployments.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-[#176B87] flex items-center gap-2 font-bold">
                <Shield className="w-4 h-4 text-[#176B87]" /> DG SHIPPING APPROVED
              </span>
              <button
                onClick={() => onOpenApplyModal?.("General Seafarer Recruitment Application")}
                className="px-5 py-2.5 bg-[#071A2B] text-white rounded-xl font-mono text-xs font-bold hover:bg-[#176B87] transition-all duration-300 flex items-center gap-2 shadow-lg group"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bottom Navigation Status */}
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>HOME / CAREERS SELECTION</span>
            <span className="text-[#176B87] font-bold">ACTIVE RECRUITMENT HUB</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: 100vh STICKY VIEWPORT WITH FULL SECTION SPANNING          */}
        {/* ========================================================================= */}
        <div id="home-mission-right" className="lg:col-span-6 relative w-full h-full min-h-full">
          {/* DESKTOP STICKY VIEWPORT (STAYS PINNED FOR 100% OF SECTION HEIGHT) */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#071A2B] rounded-none [clip-path:polygon(14%_0%,100%_0%,100%_100%,0%_100%)] shadow-2xl">
            
            {/* SINGLE TALL VESSEL IMAGE ANIMATING CONTINUOUSLY TOP-TO-DOWN ON SCROLL */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                ref={rightImageRef}
                src="/images/tall_ship_passage.jpg"
                alt="Oceanic Star Commercial Vessel Passage"
                className="absolute top-[-40%] left-0 w-full h-[180%] object-cover brightness-95 will-change-transform"
                style={{ transform: "translateY(-15%) scale(1.15)" }}
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/40 via-transparent to-[#071A2B]/20 pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
