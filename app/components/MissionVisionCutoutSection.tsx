"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Eye, Target, ShieldCheck, Globe, Activity } from "lucide-react";

export const MissionVisionCutoutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // 1. Header reveal instantly when top reaches 85%
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Video background smooth parallax
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { yPercent: -4, scale: 1.05 },
          {
            yPercent: 4,
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 3. OUR VISION & MISSION Cards reveal IMMEDIATELY on scroll (no long scrub delay!)
      if (visionCardRef.current) {
        gsap.fromTo(
          visionCardRef.current,
          { x: -30, opacity: 0, scale: 0.97 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (missionCardRef.current) {
        gsap.fromTo(
          missionCardRef.current,
          { x: 30, opacity: 0, scale: 0.97 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="mission-vision-split"
      className="relative w-full bg-[#FAFAF7] text-[#061B2A] py-6 sm:py-8 px-4 sm:px-6 md:px-12 font-sans select-none overflow-hidden border-t border-slate-200"
    >
      {/* FULL-BLEED CINEMATIC /ship.mp4 VIDEO BACKDROP WITH PARALLAX */}
      <div className="absolute inset-0 z-0 bg-[#FAFAF7] overflow-hidden">
        <video
          ref={videoRef}
          src="/ship.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 filter brightness-110 contrast-105 saturate-125 will-change-transform transition-all duration-700"
        >
          <source src="/ship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF7]/90 via-[#FAFAF7]/45 to-[#FAFAF7]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(#0068B7_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto space-y-4 relative z-10">
        {/* Top Header */}
        <div
          ref={headerRef}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5"
        >
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 bg-[#0068B7]/10 text-[#0068B7] border border-[#0068B7]/30 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              PURPOSE // 01
            </span>
            <span className="text-[11px] sm:text-xs text-slate-700 font-mono tracking-wider font-bold">
              STRATEGIC VISION &amp; OPERATIONAL MISSION
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3 py-1 rounded-xl text-[10px] sm:text-xs font-mono shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#0068B7] animate-spin" />
            <span className="text-[#0068B7] font-bold">MARITIME LEADERSHIP ACTIVE</span>
          </div>
        </div>

        {/* 2-COLUMN GLASSMORPHIC CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch pt-1">
          {/* OUR VISION CARD */}
          <div
            ref={visionCardRef}
            className="p-4 sm:p-5 rounded-xl bg-white/95 border border-[#0068B7]/30 backdrop-blur-2xl text-[#061B2A] space-y-3 shadow-md flex flex-col justify-between hover:border-[#0068B7] transition-all duration-300"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="px-2.5 py-1 bg-[#0068B7]/10 text-[#0068B7] border border-[#0068B7]/30 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" /> OUR VISION
                </span>
                <span className="text-[10px] font-mono text-[#0068B7] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200 font-bold">CII GRADE A+ ECO FLEET</span>
              </div>

              <h3 className="font-syne text-xl sm:text-2xl md:text-3xl font-extrabold text-[#061B2A] leading-tight">
                LEADER IN{" "}
                <span className="text-[#0068B7]">
                  SEABORNE SOLUTIONS
                </span>
              </h3>

              <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To pioneer zero-emission dual-fuel vessel fleets and Class-1 superintendency across key international ocean trade passages, setting the standard for sustainable global shipping.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0068B7]">
              <span className="flex items-center gap-1.5 font-bold">
                <Globe className="w-3.5 h-3.5 text-[#0068B7]" /> 29 SHIPS ON ORDER
              </span>
              <span className="text-slate-600 font-bold">DUAL-FUEL EXPANSION</span>
            </div>
          </div>

          {/* OUR MISSION CARD */}
          <div
            ref={missionCardRef}
            className="p-4 sm:p-5 rounded-xl bg-white/95 border border-[#0068B7]/30 backdrop-blur-2xl text-[#061B2A] space-y-3 shadow-md flex flex-col justify-between hover:border-[#0068B7] transition-all duration-300"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="px-2.5 py-1 bg-[#0068B7]/10 text-[#0068B7] border border-[#0068B7]/30 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" /> OUR MISSION
                </span>
                <span className="text-[10px] font-mono text-[#0068B7] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200 font-bold">DG RPSL APPROVED</span>
              </div>

              <h3 className="font-syne text-xl sm:text-2xl md:text-3xl font-extrabold text-[#061B2A] leading-tight">
                SAFE, RELIABLE &amp;{" "}
                <span className="text-[#0068B7]">
                  SUSTAINABLE SHIPPING
                </span>
              </h3>

              <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To provide world-class shipping services to our clients across the LNG, tanker, and dry bulk markets, in a safe, reliable, and sustainable manner, whilst embracing the energy transition.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0068B7]">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0068B7]" /> STCW 2010 CERTIFIED
              </span>
              <span className="text-slate-600 font-bold">MLC 2006 COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
