"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Mouse, Compass, ShieldCheck, Wrench, ArrowRight, Navigation } from "lucide-react";

interface SpectrumItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  image: string;
  icon: React.ElementType;
}

const SPECTRUM_DATA: SpectrumItem[] = [
  {
    id: "at-sea",
    number: "01",
    title: "AT SEA",
    subtitle: "GLOBAL VOYAGE DISPATCH & NAVIGATION",
    desc: "Real-time vessel position tracking, weather routing, speed, fuel optimization, and continuous ocean passage monitoring across international trade lanes.",
    badge: "LIVE AIS DISPATCH",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    icon: Compass,
  },
  {
    id: "on-board",
    number: "02",
    title: "ON BOARD",
    subtitle: "RPSL CERTIFIED CREW & SEAFARER SAFETY",
    desc: "MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers maintaining 100% safety standards.",
    badge: "DG RPSL AUDITED",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    icon: ShieldCheck,
  },
  {
    id: "on-shore",
    number: "03",
    title: "ON SHORE",
    subtitle: "TECHNICAL ENGINEERING & DRYDOCK AUDITS",
    desc: "Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, class renewals, and emergency technical dispatch from Dubai HQ.",
    badge: "CLASS-1 SUPERINTENDENCY",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80",
    icon: Wrench,
  },
];

export const CinematicOperationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRingRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet: Pinned stage with animated water wheel & spectrum step activation
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;

            // Rotate water wheel ring & needle arm fast (0deg to 720deg) for instant visible motion
            if (wheelRingRef.current) {
              gsap.set(wheelRingRef.current, { rotation: p * 720 });
            }
            if (needleRef.current) {
              gsap.set(needleRef.current, { rotation: p * 720 });
            }

            // Step activation: 3 spectrum states
            if (p > 0.66) {
              setActiveIndex(2);
            } else if (p > 0.33) {
              setActiveIndex(1);
            } else {
              setActiveIndex(0);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeOp = SPECTRUM_DATA[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="cinematic-operations"
      className="relative w-full min-h-screen bg-[#EDF5F5] text-[#061B2A] py-8 sm:py-12 px-4 sm:px-6 md:px-12 font-sans select-none overflow-hidden border-t border-b border-[#082F49]/15"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[90vh] relative z-10 space-y-4 sm:space-y-6">
        
        {/* Top Header */}
        <div className="border-b border-[#082F49]/15 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#0068B7] tracking-[0.25em] uppercase block mb-0.5">
              // OPERATIONAL REVEAL
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-black text-[#061B2A] tracking-tight leading-none">
              CINEMATIC OPERATIONS
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm font-bold w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00D9E8] animate-ping" />
            <span className="text-[#061B2A]">INTERACTIVE SPECTRUM REVEAL</span>
          </div>
        </div>

        {/* 3-COLUMN MAIN STAGE (CONCURRENT 3-SPECTRUM HIGHLIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center my-auto">
          
          {/* COLUMN 1: HIGH-VISIBILITY ROTATING WATER WHEEL WITH LOGO CYAN NEEDLE */}
          <div className="hidden md:flex md:col-span-3 flex-col items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center border-4 border-[#082F49]/20 bg-[#061B2A] shadow-2xl overflow-hidden">
              
              {/* Radial Background Grid Gridlines */}
              <div className="absolute inset-0 bg-[radial-gradient(#00D9E8_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

              {/* 12 Radial Notch Ticks (30deg increment) */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full flex justify-center pointer-events-none"
                  style={{ transform: `rotate(${i * 30}deg)` }}
                >
                  <div className="w-1 h-3.5 bg-[#00D9E8]/70 mt-1 rounded-full" />
                </div>
              ))}

              {/* Rotating outer dash ring & compass text */}
              <div
                ref={wheelRingRef}
                className="absolute inset-3 rounded-full border-2 border-dashed border-[#00D9E8] pointer-events-none will-change-transform flex items-center justify-center"
              >
                <div className="absolute top-2 text-[8px] font-mono font-bold text-[#00D9E8] tracking-widest uppercase">
                  N &bull; 01
                </div>
                <div className="absolute right-2 text-[8px] font-mono font-bold text-[#00D9E8] tracking-widest uppercase">
                  E &bull; 02
                </div>
                <div className="absolute bottom-2 text-[8px] font-mono font-bold text-[#00D9E8] tracking-widest uppercase">
                  S &bull; 03
                </div>
                <div className="absolute left-2 text-[8px] font-mono font-bold text-[#00D9E8] tracking-widest uppercase">
                  W &bull; 04
                </div>
              </div>

              {/* ROTATING LOGO CYAN NEEDLE ARM */}
              <div
                ref={needleRef}
                className="absolute inset-0 pointer-events-none flex items-center justify-center will-change-transform z-20"
              >
                <div className="w-0.5 h-20 bg-gradient-to-t from-transparent via-[#00D9E8] to-[#00D9E8] origin-bottom -translate-y-10 relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00D9E8] shadow-[0_0_12px_#00D9E8]" />
                </div>
              </div>

              {/* Center Mouse Indicator */}
              <div className="relative z-30 flex flex-col items-center justify-center gap-1 p-3 rounded-full bg-[#082F49] text-white shadow-xl border-2 border-[#00D9E8]">
                <div className="w-10 h-10 rounded-full bg-[#061B2A] flex items-center justify-center text-[#00D9E8]">
                  <Navigation className="w-5 h-5 animate-pulse text-[#00D9E8]" />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#00D9E8]">
                  SPECTRUM {activeOp.number}
                </span>
              </div>
            </div>

            <p className="mt-3 text-[10px] font-mono text-slate-700 font-bold tracking-widest text-center flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9E8] animate-ping" />
              <span>SCROLL TO ROTATE WHEEL &amp; SWITCH</span>
            </p>
          </div>

          {/* COLUMN 2: SPECTRUM SELECTION LIST (ALL 3 SPECTRUMS PROMINENTLY HIGHLIGHTED ON SCREEN) */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 md:hidden mb-2 overflow-x-auto pb-1">
              {SPECTRUM_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider whitespace-nowrap transition-all border ${
                    activeIndex === idx
                      ? "bg-[#061B2A] text-white border-[#00D9E8] shadow-md"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {item.number} {item.title}
                </button>
              ))}
            </div>

            {SPECTRUM_DATA.map((item, idx) => {
              const isActive = idx === activeIndex;
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? `bg-white border-2 border-[#0068B7] shadow-[0_12px_35px_rgba(0,104,183,0.22)] scale-[1.02] text-[#061B2A] relative z-20`
                      : "bg-white/80 border border-slate-200 text-[#061B2A]/70 hover:bg-white hover:opacity-100 scale-98 opacity-90"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5">
                    <span className={`text-[11px] font-mono font-bold tracking-wider ${isActive ? "text-[#0068B7]" : "text-slate-500"}`}>
                      SPECTRUM // {item.number}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-bold ${
                      isActive ? "bg-[#0068B7] text-white border-[#0068B7]" : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <IconComp className={`w-4 h-4 ${isActive ? "text-[#0068B7]" : "text-slate-400"}`} />
                    <h3 className="font-syne text-lg sm:text-xl font-black tracking-tight">{item.title}</h3>
                  </div>

                  <p className="font-mono text-[9px] font-bold tracking-wider mb-1 text-[#0068B7]">
                    {item.subtitle}
                  </p>

                  <p className="font-manrope text-[11px] text-slate-600 leading-normal font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* COLUMN 3: OCEAN IMAGE VIEWPORT */}
          <div className="md:col-span-5 relative h-[220px] sm:h-[320px] lg:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 bg-white">
            {SPECTRUM_DATA.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                    isActive
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2A]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white font-mono">
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold block text-[#00D9E8]">SPECTRUM {item.number}</span>
                      <span className="font-syne text-base sm:text-xl font-bold">{item.title}</span>
                    </div>
                    <div className="p-2 bg-[#061B2A]/80 border border-[#00D9E8]/40 backdrop-blur-md rounded-full text-[#00D9E8]">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="border-t border-[#082F49]/15 pt-3 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-500">
          <span>HOME / CINEMATIC OPERATIONS</span>
          <div className="flex items-center gap-2 font-bold">
            {SPECTRUM_DATA.map((s, idx) => (
              <span
                key={s.id}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 sm:w-8 bg-[#0068B7]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
