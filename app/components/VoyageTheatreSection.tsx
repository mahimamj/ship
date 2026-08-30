"use client";

import React, { useEffect, useRef, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { Compass, Radio, Gauge, Navigation } from "lucide-react";

const SCENES = [
  {
    code: "01",
    port: "DUBAI",
    ocean: "ARABIAN GULF",
    line: "The fleet leaves the command hub.",
    lat: "25° 15.9' N",
    lng: "55° 16.2' E",
  },
  {
    code: "02",
    port: "ARABIAN SEA",
    ocean: "OPEN WATER TRANSIT",
    line: "Weather-routed, fuel-optimized, always underway.",
    lat: "18° 42.1' N",
    lng: "66° 08.4' E",
  },
  {
    code: "03",
    port: "MUMBAI",
    ocean: "WESTERN INDIA HUB",
    line: "Crew change, stores, and technical clearance.",
    lat: "18° 56.3' N",
    lng: "72° 50.6' E",
  },
  {
    code: "04",
    port: "COLOMBO",
    ocean: "INDIAN OCEAN GATEWAY",
    line: "Arrival on schedule. The ocean is the operating ground.",
    lat: "06° 56.7' N",
    lng: "79° 50.5' E",
  },
];

export const VoyageTheatreSection: React.FC = () => {
  const wrapRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const shipRef = useRef<SVGGElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [scene, setScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [nm, setNm] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const ship = shipRef.current;
    const draw = drawRef.current;
    if (!wrap || !path || !ship || !draw) return;

    const { gsap } = initGSAP();
    const length = path.getTotalLength();
    draw.style.strokeDasharray = `${length}`;
    draw.style.strokeDashoffset = `${length}`;

    const placeShip = (t: number) => {
      const p = Math.max(0, Math.min(1, t));
      const pt = path.getPointAtLength(p * length);
      const pt2 = path.getPointAtLength(Math.min(length, p * length + 2));
      const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);
      ship.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${angle})`);
    };

    placeShip(0);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(
          {},
          {
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.55,
              onUpdate: (self) => {
                const p = self.progress;
                placeShip(p);
                draw.style.strokeDashoffset = `${length * (1 - p)}`;
                setProgress(Math.round(p * 100));
                setNm(Math.round(p * 2140));
                const idx = Math.min(SCENES.length - 1, Math.floor(p * SCENES.length));
                setScene(idx);
              },
            },
          }
        );

        if (headlineRef.current) {
          gsap.fromTo(
            headlineRef.current,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: wrap, start: "top 80%" },
            }
          );
        }
      });

      mm.add("(max-width: 767px)", () => {
        placeShip(0.55);
        draw.style.strokeDashoffset = "0";
        setProgress(100);
        setNm(2140);
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  const active = SCENES[scene];

  return (
    <section
      id="voyage"
      ref={wrapRef}
      className="relative min-h-screen bg-[#071A2B] text-white md:h-[420vh]"
    >
      <div className="relative min-h-screen w-full overflow-hidden md:sticky md:top-0 md:h-screen">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,210,106,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(23,107,135,0.14) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 78%)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#00D26A]/15 animate-radar" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg,transparent_0%,rgba(0,210,106,0.12)_12%,transparent_28%)] animate-radar" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B] via-transparent to-[#071A2B]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-6 py-24 md:px-12">
          <div className="flex items-start justify-between gap-6">
            <p className="label-mono flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D26A]">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#00D26A]" />
              LIVE VOYAGE THEATRE — SCROLL TO COMMAND THE FLEET
            </p>
            <div className="hidden items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-[#7BA3B8] sm:flex">
              <span className="flex items-center gap-1.5">
                <Radio className="h-3 w-3 text-[#00D26A]" /> AIS LIVE
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="h-3 w-3 text-[#176B87]" /> HDG 242°
              </span>
            </div>
          </div>

          <div className="mt-8 grid flex-1 grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs tracking-[0.28em] text-[#176B87]">SCENE {active.code} / 04</p>
              <h2
                ref={headlineRef}
                className="mt-3 font-syne text-5xl font-extrabold leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl"
              >
                {active.port}
              </h2>
              <p className="mt-4 font-syne text-lg font-bold tracking-wide text-[#00D26A] sm:text-xl">
                {active.ocean}
              </p>
              <p className="mt-4 max-w-md font-manrope text-sm font-light leading-relaxed text-[#9BB4C4] sm:text-base">
                {active.line}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "PROGRESS", value: `${progress}%`, icon: Gauge },
                  { label: "DISTANCE", value: `${nm.toLocaleString()} NM`, icon: Navigation },
                  { label: "POSITION", value: active.lat, icon: Compass },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md"
                  >
                    <stat.icon className="mb-2 h-3.5 w-3.5 text-[#00D26A]" />
                    <div className="font-syne text-lg font-extrabold leading-none sm:text-xl">{stat.value}</div>
                    <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[#7BA3B8]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <svg viewBox="0 0 760 420" className="h-auto w-full" aria-hidden>
                <defs>
                  <linearGradient id="voyage-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#176B87" />
                    <stop offset="100%" stopColor="#00D26A" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 80 C 90 40, 130 110, 180 95"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1.5"
                />
                <path
                  d="M520 300 C 600 250, 680 340, 730 280"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1.5"
                />
                <circle cx="92" cy="118" r="46" fill="none" stroke="rgba(23,107,135,0.25)" strokeDasharray="3 6" />
                <circle cx="318" cy="210" r="28" fill="none" stroke="rgba(0,210,106,0.18)" strokeDasharray="2 5" />
                <circle cx="548" cy="268" r="38" fill="none" stroke="rgba(23,107,135,0.25)" strokeDasharray="3 6" />

                <path
                  ref={pathRef}
                  id="voyage-lane"
                  d="M70 140 C 160 80, 240 200, 330 188 S 470 120, 560 250 S 680 330, 710 300"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  ref={drawRef}
                  d="M70 140 C 160 80, 240 200, 330 188 S 470 120, 560 250 S 680 330, 710 300"
                  fill="none"
                  stroke="url(#voyage-stroke)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {[
                  { x: 70, y: 140, label: "DXB" },
                  { x: 330, y: 188, label: "SEA" },
                  { x: 470, y: 155, label: "BOM" },
                  { x: 710, y: 300, label: "CMB" },
                ].map((port) => (
                  <g key={port.label}>
                    <circle cx={port.x} cy={port.y} r="6" fill="#071A2B" stroke="#00D26A" strokeWidth="2" />
                    <text
                      x={port.x}
                      y={port.y - 16}
                      textAnchor="middle"
                      fill="#9BB4C4"
                      fontSize="11"
                      letterSpacing="2"
                      fontFamily="ui-monospace, monospace"
                    >
                      {port.label}
                    </text>
                  </g>
                ))}

                <g ref={shipRef} className="will-change-transform">
                  <circle r="16" fill="#00D26A" opacity="0.22" />
                  <circle r="9" fill="#00D26A" />
                  <polygon points="4,-3 12,0 4,3" fill="#071A2B" />
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="mb-3 flex justify-between font-mono text-[10px] tracking-[0.22em] text-[#7BA3B8]">
              <span>DEPARTURE</span>
              <span>VOYAGE COMPLETE {progress}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#176B87] to-[#00D26A] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 hidden gap-2 sm:flex">
              {SCENES.map((s, i) => (
                <div
                  key={s.code}
                  className={`flex-1 border px-3 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors ${
                    i === scene
                      ? "border-[#00D26A]/50 bg-[#00D26A]/10 text-white"
                      : "border-white/10 text-[#667783]"
                  }`}
                >
                  {s.code} {s.port}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
