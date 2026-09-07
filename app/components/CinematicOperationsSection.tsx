"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Compass, ShieldCheck, Wrench, ArrowRight, Navigation, CheckCircle2 } from "lucide-react";

interface SpectrumItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  highlights: string[];
  compassZone: string; // e.g. "045° - 165° (EAST / SE)"
  heading: string;
  image: string;
  icon: React.ElementType;
  themeColor: string;       // Primary bright accent color
  darkColor: string;        // Darker accent color
  glowColor: string;        // Box-shadow glow string
  badgeBg: string;          // Badge background color
  badgeText: string;       // Badge text color
}

const SPECTRUM_DATA: SpectrumItem[] = [
  {
    id: "at-sea",
    number: "01",
    title: "AT SEA",
    subtitle: "GLOBAL VOYAGE DISPATCH & NAVIGATION",
    desc: "Real-time vessel position tracking, weather routing, speed, fuel optimization, and continuous ocean passage monitoring across international trade lanes.",
    badge: "LIVE AIS DISPATCH",
    highlights: ["24/7 AIS Telemetry", "Weather Passage Routing", "Fuel Optimization"],
    compassZone: "045° - 165° (EAST / SE)",
    heading: "090° E",
    image: "/images/spectrum_at_sea.jpg",
    icon: Compass,
    themeColor: "#00D9E8",
    darkColor: "#0068B7",
    glowColor: "0 0 20px rgba(0, 217, 232, 0.85)",
    badgeBg: "#0068B7",
    badgeText: "#FFFFFF",
  },
  {
    id: "on-board",
    number: "02",
    title: "ON BOARD",
    subtitle: "RPSL CERTIFIED CREW & SEAFARER SAFETY",
    desc: "MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers maintaining 100% safety standards.",
    badge: "DG RPSL AUDITED",
    highlights: ["MLC 2006 Compliant", "STCW 2010 Crewing", "Zero Incident Record"],
    compassZone: "165° - 285° (SOUTH / SW)",
    heading: "180° S",
    image: "/images/spectrum_on_board.jpg",
    icon: ShieldCheck,
    themeColor: "#10B981",
    darkColor: "#047857",
    glowColor: "0 0 20px rgba(16, 185, 129, 0.85)",
    badgeBg: "#047857",
    badgeText: "#FFFFFF",
  },
  {
    id: "on-shore",
    number: "03",
    title: "ON SHORE",
    subtitle: "TECHNICAL ENGINEERING & DRYDOCK AUDITS",
    desc: "Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, class renewals, and emergency technical dispatch from Dubai HQ.",
    badge: "CLASS-1 SUPERINTENDENCY",
    highlights: ["Dubai HQ Command", "PMS Engineering", "Drydock Overhauls"],
    compassZone: "285° - 045° (NORTH / NW)",
    heading: "315° NW",
    image: "/images/spectrum_on_shore.jpg",
    icon: Wrench,
    themeColor: "#F97316",
    darkColor: "#C2410C",
    glowColor: "0 0 20px rgba(249, 115, 22, 0.85)",
    badgeBg: "#C2410C",
    badgeText: "#FFFFFF",
  },
];

// 16 Compass Bearings & Angles around 360° perimeter
const COMPASS_BEARINGS = [
  { label: "N", angle: 0, spectrumIdx: 2, isCardinal: true },
  { label: "30°", angle: 30, spectrumIdx: 0, isCardinal: false },
  { label: "NE", angle: 45, spectrumIdx: 0, isCardinal: true },
  { label: "60°", angle: 60, spectrumIdx: 0, isCardinal: false },
  { label: "E", angle: 90, spectrumIdx: 0, isCardinal: true },
  { label: "120°", angle: 120, spectrumIdx: 0, isCardinal: false },
  { label: "SE", angle: 135, spectrumIdx: 0, isCardinal: true },
  { label: "150°", angle: 150, spectrumIdx: 1, isCardinal: false },
  { label: "S", angle: 180, spectrumIdx: 1, isCardinal: true },
  { label: "210°", angle: 210, spectrumIdx: 1, isCardinal: false },
  { label: "SW", angle: 225, spectrumIdx: 1, isCardinal: true },
  { label: "240°", angle: 240, spectrumIdx: 1, isCardinal: false },
  { label: "W", angle: 270, spectrumIdx: 2, isCardinal: true },
  { label: "300°", angle: 300, spectrumIdx: 2, isCardinal: false },
  { label: "NW", angle: 315, spectrumIdx: 2, isCardinal: true },
  { label: "330°", angle: 330, spectrumIdx: 2, isCardinal: false },
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

      // Desktop & Tablet: Pinned stage with 360° Maritime Compass dial & smooth rotation
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 0.2,
          onUpdate: (self) => {
            const p = self.progress;

            // Rotate compass needle 1 full 360° rotation
            if (needleRef.current) {
              gsap.set(needleRef.current, { rotation: p * 360 });
            }
            if (wheelRingRef.current) {
              gsap.set(wheelRingRef.current, { rotation: p * 180 });
            }

            // Compass Bearing Zones:
            // 045° - 165° (p: 0 -> 0.33) -> Spectrum 01 (AT SEA)
            // 165° - 285° (p: 0.33 -> 0.66) -> Spectrum 02 (ON BOARD)
            // 285° - 045° (p: 0.66 -> 1.0) -> Spectrum 03 (ON SHORE)
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
      className="relative w-full min-h-screen bg-[#EDF5F5] text-[#061B2A] py-8 sm:py-12 px-4 sm:px-6 md:px-12 font-sans select-none overflow-hidden border-t border-b border-[#082F49]/15 flex flex-col justify-center"
    >
      <div className="max-w-[1400px] mx-auto w-full space-y-6">

        {/* Top Header */}
        <div className="border-b border-[#082F49]/15 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#0068B7] tracking-[0.25em] uppercase block mb-0.5">
              // MARITIME COMPASS OPERATIONAL REVEAL
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-black text-[#061B2A] tracking-tight leading-none">
              CINEMATIC OPERATIONS
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm font-bold w-fit transition-all duration-500">
            <span
              className="w-2 h-2 rounded-full animate-ping transition-colors duration-500"
              style={{ backgroundColor: activeOp.themeColor }}
            />
            <span className="text-[#061B2A]">
              360° MARITIME COMPASS ACTIVE — <span className="transition-colors duration-500" style={{ color: activeOp.themeColor }}>{activeOp.title}</span>
            </span>
          </div>
        </div>

        {/* TOP TAB SELECTOR BAR WITH DYNAMIC COLOR SWITCHING */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1">
          {SPECTRUM_DATA.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  borderColor: isActive ? item.themeColor : "#E2E8F0",
                  boxShadow: isActive ? item.glowColor : "none",
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-500 flex items-center gap-2.5 whitespace-nowrap border ${isActive
                    ? "bg-[#061B2A] text-white scale-[1.02]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isActive ? "animate-pulse" : "bg-slate-300"
                    }`}
                  style={{ backgroundColor: isActive ? item.themeColor : undefined }}
                />
                <span>{item.number} {item.title} ({item.compassZone})</span>
              </button>
            );
          })}
        </div>

        {/* 3-COLUMN MAIN STAGE (360° MARITIME COMPASS DIAL + ACTIVE SPECTRUM CARD) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* COLUMN 1: 360° MARITIME COMPASS DIAL */}
          <div className="hidden md:flex md:col-span-4 flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center border-4 border-[#082F49]/30 bg-[#061B2A] shadow-2xl overflow-hidden">

              {/* Compass Grid Mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#00D9E8_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

              {/* Outer Dash Ring with Dynamic Color */}
              <div
                ref={wheelRingRef}
                style={{ borderColor: `${activeOp.themeColor}60` }}
                className="absolute inset-3 rounded-full border-2 border-dashed pointer-events-none will-change-transform transition-colors duration-500"
              />

              {/* 16 COMPASS BEARINGS & CARDINAL POINTS AROUND PERIMETER WITH DYNAMIC COLOR */}
              {COMPASS_BEARINGS.map((c) => {
                const isCurrentSpectrum = c.spectrumIdx === activeIndex;
                return (
                  <div
                    key={`${c.label}-${c.angle}`}
                    className="absolute w-full h-full flex justify-center pointer-events-none"
                    style={{ transform: `rotate(${c.angle}deg)` }}
                  >
                    <div className="flex flex-col items-center mt-2">
                      <div
                        className={`rounded-full transition-all duration-500 ${c.isCardinal ? "w-1.5 h-3" : "w-1 h-2"
                          }`}
                        style={{
                          backgroundColor: isCurrentSpectrum ? activeOp.themeColor : "#475569",
                          boxShadow: isCurrentSpectrum ? `0 0 10px ${activeOp.themeColor}` : "none",
                        }}
                      />
                      <span
                        className={`font-mono font-extrabold transition-all duration-500 ${c.isCardinal ? "text-xs font-black" : "text-[9px]"
                          } ${isCurrentSpectrum ? "scale-110" : "text-slate-400"
                          }`}
                        style={{
                          color: isCurrentSpectrum ? activeOp.themeColor : "#94A3B8",
                          transform: `rotate(-${c.angle}deg)`,
                        }}
                      >
                        {c.label}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* ROTATING DUAL COMPASS NEEDLE WITH DYNAMIC COLOR */}
              <div
                ref={needleRef}
                className="absolute inset-0 pointer-events-none flex items-center justify-center will-change-transform z-20"
              >
                {/* North Needle Pointer */}
                <div
                  className="w-1.5 h-32 origin-bottom -translate-y-16 relative rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(to top, transparent, ${activeOp.themeColor}, ${activeOp.themeColor})`,
                    boxShadow: activeOp.glowColor,
                  }}
                >
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#061B2A] flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: activeOp.themeColor,
                      boxShadow: `0 0 14px ${activeOp.themeColor}`,
                    }}
                  >
                    <span className="text-[7px] font-black text-[#061B2A]">N</span>
                  </div>
                </div>
              </div>

              {/* Center Compass Rose Badge with Dynamic Theme Colors */}
              <div
                style={{
                  borderColor: activeOp.themeColor,
                  boxShadow: activeOp.glowColor,
                }}
                className="relative z-30 flex flex-col items-center justify-center gap-1 p-3.5 rounded-full bg-[#082F49] text-white shadow-2xl border-2 transition-all duration-500"
              >
                <div
                  className="w-11 h-11 rounded-full bg-[#061B2A] flex items-center justify-center transition-colors duration-500"
                  style={{ color: activeOp.themeColor }}
                >
                  <Compass className="w-6 h-6 animate-spin-slow" />
                </div>
                <span
                  className="text-[10px] font-mono font-bold tracking-wider transition-colors duration-500"
                  style={{ color: activeOp.themeColor }}
                >
                  {activeOp.heading}
                </span>
              </div>
            </div>

            {/* Compass Zone Legend Indicator with Dynamic Accent Colors */}
            <div className="mt-3.5 flex items-center gap-2 sm:gap-3 text-[10px] font-mono font-bold text-slate-700">
              <span className={`px-2 py-0.5 rounded border transition-all duration-500 cursor-pointer ${activeIndex === 0 ? "bg-[#061B2A] border-[#00D9E8]" : "bg-white text-slate-500"}`} style={{ color: activeIndex === 0 ? "#00D9E8" : undefined }} onClick={() => setActiveIndex(0)}>
                045°-165°: AT SEA
              </span>
              <span className={`px-2 py-0.5 rounded border transition-all duration-500 cursor-pointer ${activeIndex === 1 ? "bg-[#061B2A] border-[#10B981]" : "bg-white text-slate-500"}`} style={{ color: activeIndex === 1 ? "#10B981" : undefined }} onClick={() => setActiveIndex(1)}>
                165°-285°: ON BOARD
              </span>
              <span className={`px-2 py-0.5 rounded border transition-all duration-500 cursor-pointer ${activeIndex === 2 ? "bg-[#061B2A] border-[#F97316]" : "bg-white text-slate-500"}`} style={{ color: activeIndex === 2 ? "#F97316" : undefined }} onClick={() => setActiveIndex(2)}>
                285°-045°: ON SHORE
              </span>
            </div>
          </div>

          {/* COLUMN 2: FOCUSED ACTIVE SPECTRUM CARD WITH DYNAMIC ACCENT COLORS */}
          <div className="md:col-span-4 relative min-h-[300px] sm:min-h-[340px] flex items-center">
            {SPECTRUM_DATA.map((item, idx) => {
              const isActive = idx === activeIndex;
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.id}
                  style={{
                    borderColor: item.themeColor,
                    boxShadow: isActive ? `0 15px 40px ${item.themeColor}35` : "none",
                  }}
                  className={`w-full p-6 sm:p-8 rounded-3xl transition-all duration-500 bg-white border-2 ${isActive
                      ? "opacity-100 scale-100 relative z-20 pointer-events-auto block"
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none hidden"
                    }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider" style={{ color: item.darkColor }}>
                      SPECTRUM // {item.number} ({item.compassZone})
                    </span>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full border font-bold shadow-sm"
                      style={{ backgroundColor: item.darkColor, color: item.badgeText, borderColor: item.themeColor }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="p-2.5 rounded-xl border transition-colors duration-500"
                      style={{ backgroundColor: `${item.themeColor}18`, color: item.darkColor, borderColor: `${item.themeColor}40` }}
                    >
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-syne text-2xl sm:text-3xl font-black text-[#061B2A] tracking-tight">{item.title}</h3>
                      <p className="font-mono text-xs font-bold" style={{ color: item.darkColor }}>{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="font-manrope text-sm text-slate-600 leading-relaxed font-normal my-4">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      KEY SPECTRUM CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-[#061B2A] font-semibold flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 transition-colors duration-500" style={{ color: item.themeColor }} />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMN 3: OCEAN IMAGE VIEWPORT WITH DYNAMIC ACCENT OVERLAYS */}
          <div className="md:col-span-4 relative h-[240px] sm:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 bg-white">
            {SPECTRUM_DATA.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out transform ${isActive
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
                      <span className="text-[10px] sm:text-xs font-bold block transition-colors duration-500" style={{ color: item.themeColor }}>
                        SPECTRUM {item.number}
                      </span>
                      <span className="font-syne text-base sm:text-xl font-bold">{item.title} ({item.compassZone})</span>
                    </div>
                    <div
                      className="p-2 bg-[#061B2A]/80 border backdrop-blur-md rounded-full transition-all duration-500"
                      style={{ color: item.themeColor, borderColor: `${item.themeColor}60` }}
                    >
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
          <span>HOME / MARITIME COMPASS OPERATIONS</span>
          <div className="flex items-center gap-2 font-bold">
            {SPECTRUM_DATA.map((s, idx) => (
              <span
                key={s.id}
                style={{
                  backgroundColor: activeIndex === idx ? s.themeColor : "#CBD5E1",
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${activeIndex === idx ? "w-6 sm:w-8" : "w-2"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


