"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Mouse, Compass, ShieldCheck, Wrench, ArrowRight } from "lucide-react";

interface SpectrumItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  image: string;
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  borderActive: string;
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
    accentColor: "text-[#0077B6]",
    badgeBg: "bg-[#0077B6]/10 text-[#0077B6] border-[#0077B6]/30",
    borderActive: "border-2 border-[#0077B6] shadow-[0_10px_30px_rgba(0,119,182,0.15)]",
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
    accentColor: "text-[#059669]",
    badgeBg: "bg-emerald-500/10 text-[#059669] border-emerald-500/30",
    borderActive: "border-2 border-[#059669] shadow-[0_10px_30px_rgba(5,150,105,0.15)]",
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
    accentColor: "text-[#D97706]",
    badgeBg: "bg-amber-500/10 text-[#D97706] border-amber-500/30",
    borderActive: "border-2 border-[#D97706] shadow-[0_10px_30px_rgba(217,119,6,0.15)]",
  },
];

export const CinematicOperationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRingRef = useRef<HTMLDivElement>(null);
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

            // Rotate water wheel continuously
            if (wheelRingRef.current) {
              gsap.set(wheelRingRef.current, { rotation: p * 360 });
            }

            // Step activation
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
      className="relative w-full min-h-screen bg-[#F5F5F2] text-[#071A2B] py-16 md:py-24 px-6 md:px-12 font-sans select-none overflow-hidden border-t border-b border-slate-200"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[85vh] relative z-10 space-y-8">
        
        {/* Top Header */}
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#0077B6] tracking-[0.25em] uppercase block mb-1">
              // OPERATIONAL REVEAL
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black text-[#071A2B] tracking-tight leading-none">
              CINEMATIC OPERATIONS
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0077B6] animate-pulse" />
            <span>INTERACTIVE SPECTRUM REVEAL</span>
          </div>
        </div>

        {/* 3-COLUMN MAIN STAGE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* COLUMN 1: ROTATING WATER WHEEL / MOUSE SCROLL DIAL */}
          <div className="md:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center border-2 border-dashed border-[#0077B6]/30 bg-white shadow-xl backdrop-blur-md">
              
              {/* Rotating outer dash ring */}
              <div
                ref={wheelRingRef}
                className="absolute inset-2 rounded-full border-2 border-dashed border-[#0077B6]/60 pointer-events-none will-change-transform flex items-center justify-center"
              >
                <div className="absolute top-1 text-[9px] font-mono font-bold text-[#0077B6] tracking-widest uppercase">
                  SCROLL DOWN
                </div>
                <div className="absolute bottom-1 text-[9px] font-mono font-bold text-[#0077B6] tracking-widest uppercase">
                  TO EXPLORE
                </div>
              </div>

              {/* Center Mouse Indicator */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 p-4 rounded-full bg-slate-50 border border-slate-200 shadow-md">
                <div className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 ${activeOp.accentColor}`}>
                  <Mouse className="w-6 h-6 animate-bounce" />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider ${activeOp.accentColor}`}>
                  SPECTRUM {activeOp.number}
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] font-mono text-slate-500 font-bold tracking-widest text-center hidden sm:block">
              SCROLL TO ROTATE WHEEL &amp; REVEAL
            </p>
          </div>

          {/* COLUMN 2: SPECTRUM SELECTION LIST */}
          <div className="md:col-span-4 space-y-4">
            {SPECTRUM_DATA.map((item, idx) => {
              const isActive = idx === activeIndex;
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-5 sm:p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? `bg-white ${item.borderActive} scale-[1.03] text-[#071A2B]`
                      : "bg-white/70 border border-slate-200 text-[#071A2B]/60 hover:bg-white hover:opacity-100 scale-95"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                    <span className={`text-xs font-mono font-bold tracking-wider ${item.accentColor}`}>
                      SPECTRUM // {item.number}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <IconComp className={`w-5 h-5 ${isActive ? item.accentColor : "text-slate-400"}`} />
                    <h3 className="font-syne text-2xl font-black tracking-tight">{item.title}</h3>
                  </div>

                  <p className={`font-mono text-[10px] font-bold tracking-wider mb-2 ${item.accentColor}`}>
                    {item.subtitle}
                  </p>

                  <p className="font-manrope text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* COLUMN 3: OCEAN IMAGE VIEWPORT (CROSSFADE & SLIDE INTO PLACE) */}
          <div className="md:col-span-5 relative h-[320px] sm:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-white">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-mono">
                    <div>
                      <span className={`text-xs font-bold block ${item.accentColor}`}>SPECTRUM {item.number}</span>
                      <span className="font-syne text-xl font-bold">{item.title}</span>
                    </div>
                    <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>HOME / CINEMATIC OPERATIONS</span>
          <div className="flex items-center gap-2 font-bold">
            {SPECTRUM_DATA.map((s, idx) => (
              <span
                key={s.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? `w-8 ${s.badgeBg.split(" ")[0]} bg-current` : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
