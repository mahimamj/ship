"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Compass, Gauge, Navigation } from "lucide-react";

const SCENES = [
  {
    code: "01",
    port: "DUBAI",
    ocean: "ARABIAN GULF",
    line: "The fleet leaves the command hub.",
    lat: "25° 15.9' N",
    lng: "55° 16.2' E",
    progressPct: 0,
    nmVal: 0,
  },
  {
    code: "02",
    port: "ARABIAN SEA",
    ocean: "OPEN WATER TRANSIT",
    line: "Weather-routed, fuel-optimized, always underway.",
    lat: "18° 42.1' N",
    lng: "66° 08.4' E",
    progressPct: 33,
    nmVal: 706,
  },
  {
    code: "03",
    port: "MUMBAI",
    ocean: "WESTERN INDIA HUB",
    line: "Crew change, stores, and technical clearance.",
    lat: "18° 56.3' N",
    lng: "72° 50.6' E",
    progressPct: 66,
    nmVal: 1412,
  },
  {
    code: "04",
    port: "COLOMBO",
    ocean: "INDIAN OCEAN GATEWAY",
    line: "Arrival on schedule. The ocean is the operating ground.",
    lat: "06° 56.7' N",
    lng: "79° 50.5' E",
    progressPct: 100,
    nmVal: 2140,
  },
];

export const VoyageTheatreSection: React.FC = () => {
  const wrapRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const shipRef = useRef<SVGGElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [nm, setNm] = useState(0);
  const currentProgressRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const placeShip = useCallback((t: number) => {
    const path = pathRef.current;
    const ship = shipRef.current;
    const draw = drawRef.current;
    if (!path || !ship || !draw) return;

    const length = path.getTotalLength();
    const p = Math.max(0, Math.min(1, t));
    const p1 = Math.max(0, p * length - 1);
    const p2 = Math.min(length, p * length + 1);
    const pt = path.getPointAtLength(p * length);
    const pt1 = path.getPointAtLength(p1);
    const pt2 = path.getPointAtLength(p2);
    const angle = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x) * (180 / Math.PI);

    ship.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${angle})`);
    draw.style.strokeDashoffset = `${length * (1 - p)}`;
    setProgress(Math.round(p * 100));
    setNm(Math.round(p * 2140));
  }, []);

  const activeIndexRef = useRef(0);

  const goToScene = useCallback(
    (targetIdx: number) => {
      const path = pathRef.current;
      if (!path) return;

      const targetScene = SCENES[targetIdx];
      const targetP = targetScene.progressPct / 100;

      const { gsap } = initGSAP();

      gsap.killTweensOf(currentProgressRef);

      gsap.to(currentProgressRef, {
        current: targetP,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          placeShip(currentProgressRef.current);
        },
      });

      activeIndexRef.current = targetIdx;
      setSceneIndex(targetIdx);
    },
    [placeShip]
  );

  // Automatic 5.5-Second Rotation Loop (DUBAI -> ARABIAN SEA -> MUMBAI -> COLOMBO)
  useEffect(() => {
    const path = pathRef.current;
    const draw = drawRef.current;
    if (path && draw) {
      const length = path.getTotalLength();
      draw.style.strokeDasharray = `${length}`;
      draw.style.strokeDashoffset = `${length}`;
    }

    placeShip(0);

    const interval = setInterval(() => {
      const nextIdx = (activeIndexRef.current + 1) % SCENES.length;
      goToScene(nextIdx);
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [goToScene, placeShip]);

  const handleSelectWaypoint = (idx: number) => {
    goToScene(idx);
  };

  const active = SCENES[sceneIndex];

  return (
    <section
      id="voyage"
      ref={wrapRef}
      className="relative w-full bg-[#FAFAF7] text-[#061B2A] py-6 sm:py-8 md:py-10 border-b border-slate-200 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 flex flex-col justify-between space-y-5">
        


        {/* Main Stage: Scene Info & Interactive Map */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 my-auto">
          {/* Left Column: Active Scene Stats */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#0068B7] font-bold block">
              SCENE {active.code} / 04
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#061B2A]">
              {active.port}
            </h2>
            <p className="font-syne text-base font-bold tracking-wide text-[#0068B7] sm:text-lg">
              {active.ocean}
            </p>
            <p className="max-w-md font-manrope text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
              {active.line}
            </p>

            {/* Metrics */}
            <div className="pt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { label: "PROGRESS", value: `${progress}%`, icon: Gauge },
                { label: "DISTANCE", value: `${nm.toLocaleString()} NM`, icon: Navigation },
                { label: "POSITION", value: active.lat, icon: Compass },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-slate-200 bg-white p-3 shadow-sm rounded-xl"
                >
                  <stat.icon className="mb-1 h-3.5 w-3.5 text-[#0068B7]" />
                  <div className="font-syne text-base font-extrabold leading-none text-[#061B2A] sm:text-lg">{stat.value}</div>
                  <div className="mt-1 font-mono text-[9px] tracking-[0.15em] text-[#17252D] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic SVG Map Path */}
          <div className="relative lg:col-span-7 w-full overflow-hidden">
            <svg viewBox="0 0 760 380" className="h-auto w-full max-h-[280px] sm:max-h-[340px]" aria-hidden>
              <defs>
                <linearGradient id="voyage-stroke-light" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0068B7" />
                  <stop offset="50%" stopColor="#00D9E8" />
                  <stop offset="100%" stopColor="#061B2A" />
                </linearGradient>
              </defs>
              <path
                d="M40 80 C 90 40, 130 110, 180 95"
                fill="none"
                stroke="rgba(8,47,73,0.08)"
                strokeWidth="1.5"
              />
              <path
                d="M520 300 C 600 250, 680 340, 730 280"
                fill="none"
                stroke="rgba(8,47,73,0.08)"
                strokeWidth="1.5"
              />
              <circle cx="70" cy="140" r="42" fill="none" stroke="rgba(0,104,183,0.2)" strokeDasharray="3 6" />
              <circle cx="300" cy="188" r="30" fill="none" stroke="rgba(0,104,183,0.2)" strokeDasharray="2 5" />
              <circle cx="530" cy="212" r="38" fill="none" stroke="rgba(0,104,183,0.2)" strokeDasharray="3 6" />
              <circle cx="710" cy="300" r="42" fill="none" stroke="rgba(0,104,183,0.2)" strokeDasharray="3 6" />

              <path
                ref={pathRef}
                id="voyage-lane"
                d="M70 140 C 160 80, 240 200, 330 188 S 470 120, 560 250 S 680 330, 710 300"
                fill="none"
                stroke="rgba(6,27,42,0.12)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                ref={drawRef}
                d="M70 140 C 160 80, 240 200, 330 188 S 470 120, 560 250 S 680 330, 710 300"
                fill="none"
                stroke="url(#voyage-stroke-light)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {[
                { x: 70, y: 140, label: "DXB", full: "DUBAI" },
                { x: 300, y: 188, label: "SEA", full: "ARABIAN SEA" },
                { x: 530, y: 212, label: "BOM", full: "MUMBAI" },
                { x: 710, y: 300, label: "CMB", full: "COLOMBO" },
              ].map((port, pIdx) => (
                <g
                  key={port.label}
                  onClick={() => handleSelectWaypoint(pIdx)}
                  onTouchStart={() => handleSelectWaypoint(pIdx)}
                  className="cursor-pointer touch-manipulation"
                >
                  <circle cx={port.x} cy={port.y} r="28" fill="transparent" />
                  <circle
                    cx={port.x}
                    cy={port.y}
                    r={sceneIndex === pIdx ? "8" : "5"}
                    fill={sceneIndex === pIdx ? "#00D9E8" : "#FFFFFF"}
                    stroke="#0068B7"
                    strokeWidth="2.5"
                  />
                  <text
                    x={port.x}
                    y={port.y - 15}
                    textAnchor="middle"
                    fill={sceneIndex === pIdx ? "#0068B7" : "#061B2A"}
                    fontSize="12"
                    fontWeight="900"
                    letterSpacing="1.5"
                    fontFamily="ui-monospace, monospace"
                  >
                    {port.label}
                  </text>
                </g>
              ))}

              <g ref={shipRef} className="will-change-transform">
                <circle r="16" fill="#00D9E8" opacity="0.3" />
                <circle r="9" fill="#0068B7" />
                <polygon points="3,-2.5 10,0 3,2.5" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom Interactive Progress Bar & Waypoint Selector */}
        <div className="pt-3 border-t border-slate-200">
          <div className="mb-1.5 flex justify-between font-mono text-[10px] tracking-[0.2em] text-[#17252D] font-bold">
            <span>AUTOMATED VOYAGE ROTATION (6s)</span>
            <span className="text-[#0068B7]">VOYAGE PROGRESS {progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-[#0068B7] via-[#00D9E8] to-[#061B2A] transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SCENES.map((s, i) => (
              <button
                key={s.code}
                onClick={() => handleSelectWaypoint(i)}
                className={`px-3 py-2 font-mono text-xs tracking-wider transition-all duration-300 rounded-xl font-bold flex items-center justify-between text-left border ${
                  i === sceneIndex
                    ? "border-[#0068B7] bg-[#061B2A] text-white shadow-md scale-[1.01]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#0068B7] hover:bg-slate-50"
                }`}
              >
                <span>{s.code} {s.port}</span>
                <span className={`w-2 h-2 rounded-full ${i === sceneIndex ? "bg-[#00D9E8] animate-pulse" : "bg-slate-300"}`} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
