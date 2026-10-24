"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Ship } from "lucide-react";

// 1. Generate 65 distinct 10-column matrix grid coordinates
const GENERATE_GRID_POINTS = (): { x: number; y: number }[] => {
  const points: { x: number; y: number }[] = [];
  const cols = 10;
  const colSpacing = 42;
  const rowSpacing = 40;
  const startX = -((cols - 1) * colSpacing) / 2; // centered
  const startY = -90;

  for (let i = 0; i < 65; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    points.push({
      x: startX + col * colSpacing,
      y: startY + row * rowSpacing,
    });
  }
  return points;
};

// 2. Generate 65 distinct ship-hull coordinates forming a high-fidelity commercial ship silhouette
const GENERATE_SHIP_HULL_POINTS = (): { x: number; y: number }[] => {
  const points: { x: number; y: number }[] = [];

  // Bow Apex (Top pointed nose - 5 points)
  points.push({ x: 0, y: -160 });
  points.push({ x: -15, y: -135 });
  points.push({ x: 15, y: -135 });
  points.push({ x: -30, y: -110 });
  points.push({ x: 30, y: -110 });

  // Upper Hull & Radar Mast (10 points)
  points.push({ x: 0, y: -90 });
  points.push({ x: -10, y: -70 });
  points.push({ x: 10, y: -70 });
  points.push({ x: -45, y: -80 });
  points.push({ x: 45, y: -80 });
  points.push({ x: -60, y: -50 });
  points.push({ x: 60, y: -50 });
  points.push({ x: -75, y: -20 });
  points.push({ x: 75, y: -20 });
  points.push({ x: 0, y: -40 });

  // Container Deck Blocks (36 points)
  for (let i = 0; i < 18; i++) {
    const offsetX = -190 + i * 22.3;
    points.push({ x: offsetX, y: 15 });
    points.push({ x: offsetX, y: 45 });
  }

  // Lower Hull & Keel Baseline (14 points)
  for (let i = 0; i < 14; i++) {
    const offsetX = -170 + i * 26;
    points.push({ x: offsetX, y: 85 });
  }

  return points;
};

const GRID_POINTS = GENERATE_GRID_POINTS();
const HULL_POINTS = GENERATE_SHIP_HULL_POINTS();

interface InteractiveFleetExplosionProps {
  embedded?: boolean;
  className?: string;
}

export const InteractiveFleetExplosion: React.FC<InteractiveFleetExplosionProps> = ({ embedded = false, className = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const vesselContainerRef = useRef<HTMLDivElement>(null);

  // Initial SSR state is 65 so crawlers see "65 VESSELS" in static HTML
  const [counterVal, setCounterVal] = useState(65);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const vessels = gsap.utils.toArray<HTMLElement>(".vessel-particle", vesselContainerRef.current);
      const counterObj = { val: 0 };

      // 1. Entrance animation on viewport scroll
      gsap.fromTo(
        [headerRef.current, counterRef.current],
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. INFINITE LOOPING GSAP TIMELINE SYNCHRONIZING 1->65 COUNT UP WITH VESSEL APPEARANCE
      const loopTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        delay: 0.5,
      });

      loopTl
        // Step A: Reset State (Set positions to GRID_POINTS explicitly)
        .set(counterObj, { val: 0 })
        .set(vessels, {
          scale: 0,
          opacity: 0,
          x: (i) => GRID_POINTS[i].x,
          y: (i) => GRID_POINTS[i].y,
        })

        // Step B: Counter 1 -> 65 & Synchronized 1-by-1 Vessel Pop-in
        .to(counterObj, {
          val: 65,
          duration: 2.5,
          ease: "linear",
          onUpdate: () => setCounterVal(Math.round(counterObj.val)),
        })
        .to(
          vessels,
          {
            scale: 1,
            opacity: 1,
            stagger: 0.04,
            ease: "back.out(1.7)",
            duration: 0.3,
          },
          "-=2.5"
        )

        // Step C: Hold Grid View for 1.4s
        .to({}, { duration: 1.4 })

        // Step D: Morph 65 Vessels from GRID_POINTS to HULL_POINTS (Ship Silhouette)
        .to(vessels, {
          x: (i) => HULL_POINTS[i % HULL_POINTS.length].x,
          y: (i) => HULL_POINTS[i % HULL_POINTS.length].y,
          scale: 0.85,
          duration: 1.8,
          ease: "power3.inOut",
          stagger: 0.008,
        })

        // Step E: Hold Ship Hull Silhouette Shape for 2.8s
        .to({}, { duration: 2.8 })

        // Step F: Smooth Outro Fade & Reset
        .to(vessels, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          stagger: 0.005,
        })
        .to(
          counterObj,
          {
            val: 65,
            duration: 0.4,
            onUpdate: () => setCounterVal(Math.round(counterObj.val)),
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (embedded) {
    return (
      <div
        ref={sectionRef}
        id="fleet-matrix-explosion"
        className={`relative w-full h-full bg-[#061B2A] text-white p-5 sm:p-7 rounded-3xl overflow-hidden font-sans select-none border border-[#00D9E8]/30 shadow-2xl flex flex-col justify-between ${className}`}
      >
        {/* Background Radar Mesh & Signature Cyan Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#00D9E8_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#00D9E8]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Top Header Bar */}
        <div ref={headerRef} className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 relative z-10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#00D9E8]/15 text-[#00D9E8] border border-[#00D9E8]/40 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase">
              FLEET // 01
            </span>
            <span className="text-[11px] text-slate-300 font-mono tracking-wider font-bold">
              MANAGED FLEET MATRIX
            </span>
          </div>
        </div>

        {/* Center Canvas Stage: Number Counter & Morphing Vessels */}
        <div className="flex flex-col items-center justify-center text-center py-3 sm:py-5 my-auto flex-1 relative z-10 space-y-3 sm:space-y-4">
          {/* Big Number Reveal Counter */}
          <div ref={counterRef} className="relative inline-flex flex-col items-center shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-[#00D9E8] tracking-tight leading-none min-w-[70px]">
                {counterVal}
              </span>
              <span className="font-syne text-xl sm:text-2xl font-black text-[#00D9E8] tracking-wider uppercase">
                VESSELS
              </span>
            </div>

            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#00D9E8] to-transparent my-1" />
            <span className="font-mono text-[9px] sm:text-[10px] text-slate-300 font-bold tracking-[0.2em] uppercase">
              MANAGED FLEET IN OPERATION
            </span>
          </div>

          {/* 65 VESSEL PARTICLE MORPH CONTAINER STAGE */}
          <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
            <div
              ref={vesselContainerRef}
              className="relative w-full h-full flex items-center justify-center transform scale-[0.55] sm:scale-[0.66] origin-center transition-transform"
            >
              {Array.from({ length: 65 }).map((_, i) => (
                <div
                  key={i}
                  className="vessel-particle absolute w-6 h-6 rounded-lg bg-[#082F49] border border-[#00D9E8]/60 flex items-center justify-center shadow-[0_0_10px_rgba(0,217,232,0.3)] text-[#00D9E8]"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Ship className="w-3 h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef as any}
      id="fleet-matrix-explosion"
      className="relative w-full bg-[#061B2A] text-white py-8 md:py-12 px-4 sm:px-6 md:px-12 overflow-hidden font-sans select-none border-t border-b border-[#00D9E8]/20"
    >
      {/* Background Radar Mesh & Signature Cyan Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#00D9E8_1px,transparent_1px)] [background-size:36px_36px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#00D9E8]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between relative z-10 space-y-5 sm:space-y-6">
        {/* Top Header Bar */}
        <div ref={headerRef} className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#00D9E8]/15 text-[#00D9E8] border border-[#00D9E8]/40 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              FLEET // 01
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-mono tracking-wider font-bold">
              MANAGED FLEET MATRIX
            </span>
          </div>
        </div>

        {/* Center Canvas Stage: Number Counter & Signature Cyan Morphing Vessels */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          {/* Big Number Reveal Counter */}
          <div ref={counterRef} className="relative inline-flex flex-col items-center">
            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="font-syne text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-[#00D9E8] tracking-tight leading-none min-w-[80px] sm:min-w-[120px]">
                {counterVal}
              </span>
              <span className="font-syne text-xl sm:text-3xl font-black text-[#00D9E8] tracking-wider uppercase">
                VESSELS
              </span>
            </div>

            <div className="h-0.5 w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#00D9E8] to-transparent my-1" />
            <span className="font-mono text-[10px] sm:text-xs text-slate-300 font-bold tracking-[0.2em] uppercase">
              MANAGED FLEET IN OPERATION
            </span>
          </div>

          {/* 65 VESSEL PARTICLE MORPH CONTAINER STAGE WITH SIGNATURE CYAN GLOW */}
          <div className="relative w-full max-w-3xl h-[160px] sm:h-[210px] flex items-center justify-center overflow-hidden">
            <div
              ref={vesselContainerRef}
              className="relative w-full h-full flex items-center justify-center transform scale-[0.55] sm:scale-[0.75] origin-center transition-transform"
            >
              {Array.from({ length: 65 }).map((_, i) => (
                <div
                  key={i}
                  className="vessel-particle absolute w-6 h-6 rounded-lg bg-[#082F49] border border-[#00D9E8]/60 flex items-center justify-center shadow-[0_0_10px_rgba(0,217,232,0.3)] text-[#00D9E8]"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Ship className="w-3 h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
