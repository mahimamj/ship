"use client";

import React, { useRef, useEffect, useState } from "react";
import { VIDEOS } from "@/lib/content/videos";
import { initGSAP } from "@/lib/gsapHelper";
import { Radio, Compass, Shield, Anchor, Activity, ArrowRight, Play } from "lucide-react";

export const CinematicOperationsSection: React.FC = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Live telemetry mock simulation for "moving in reality" feel
  const [telemetry, setTelemetry] = useState({
    speed: 18.4,
    heading: 242,
    lat: "24° 52.4' N",
    lng: "54° 38.1' E",
    engineLoad: 86,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        speed: parseFloat((18.2 + Math.random() * 0.6).toFixed(1)),
        heading: Math.floor(240 + Math.random() * 5),
        engineLoad: Math.floor(84 + Math.random() * 4),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: ScrollTrigger updates active operational index dynamically
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: pinContainerRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            if (self.progress > 0.65) {
              setActiveIndex(2);
            } else if (self.progress > 0.3) {
              setActiveIndex(1);
            } else {
              setActiveIndex(0);
            }
          },
        });
      });
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  const ops = [
    {
      number: "01",
      title: "AT SEA",
      tagline: "GLOBAL VOYAGE DISPATCH & NAVIGATION",
      desc: "Real-time vessel position tracking, AI weather routing, speed-fuel optimization, and continuous ocean passage monitoring across international shipping corridors.",
      image: "/images/hero_vessel.png",
      video: VIDEOS.atSea,
      badge: "LIVE AIS DISPATCH",
      stats: [
        { label: "VESSELS AT SEA", val: "42 UNITS" },
        { label: "ON-TIME ARRIVAL", val: "99.4%" },
        { label: "CII FUEL SAVINGS", val: "14.8%" },
      ],
    },
    {
      number: "02",
      title: "ON BOARD",
      tagline: "RPSL CERTIFIED CREW & SEAFARER SAFETY",
      desc: "MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers maintaining zero-incident safety culture.",
      image: "/images/crew_training.png",
      video: VIDEOS.onBoard,
      badge: "DG SHIPPING RPSL APPROVED",
      stats: [
        { label: "ACTIVE CREW", val: "1,450+ SEAFARERS" },
        { label: "CREW RETENTION", val: "94.2%" },
        { label: "SAFETY AUDITS", val: "100% COMPLIANT" },
      ],
    },
    {
      number: "03",
      title: "ON SHORE",
      tagline: "TECHNICAL ENGINEERING & DRYDOCK AUDITS",
      desc: "Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, class renewals, and emergency technical dispatch from Dubai HQ.",
      image: "/images/cinematic_vessel_bg.png",
      video: VIDEOS.onShore,
      badge: "CLASS-1 SUPERINTENDENCY",
      stats: [
        { label: "GLOBAL HUBS", val: "04 COMMAND CENTERS" },
        { label: "DRYDOCK SUCCESS", val: "100% ON TIME" },
        { label: "RESPONSE TIME", val: "< 15 MINS" },
      ],
    },
  ];

  const activeOp = ops[activeIndex];

  return (
    <div
      ref={pinContainerRef}
      className="relative min-h-screen w-full bg-[#071A2B] text-white overflow-hidden flex flex-col justify-between py-12"
    >
      {/* Background Full-Bleed Imagery & Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#071A2B]">
        <img
          src={activeOp.image}
          alt={activeOp.title}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-1000 brightness-90"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          key={activeOp.number}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 opacity-60"
        >
          <source src={activeOp.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/85 to-[#071A2B]/40" />
      </div>

      {/* Top Header & Live Radar Ticker Bar */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#00D26A]/20 border border-[#00D26A] text-[#00D26A] animate-pulse">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <span className="label-mono text-[#00D26A] font-bold tracking-widest text-xs block">
              // REAL-TIME OPERATIONAL TELEMETRY
            </span>
            <span className="text-xs text-slate-300 font-mono">
              AIS TRACKING &bull; DUBAI HUB DISPATCH
            </span>
          </div>
        </div>

        {/* Live Moving Coordinates & Speed Telemetry Box */}
        <div className="flex items-center gap-4 bg-[#0F2C59]/80 border border-[#176B87]/50 rounded-2xl px-4 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00D26A] animate-spin" />
            <span className="text-xs font-mono font-bold text-white">
              {telemetry.speed} KTS
            </span>
          </div>
          <div className="h-4 w-[1px] bg-white/20" />
          <div className="text-[11px] font-mono text-slate-300">
            {telemetry.lat} | {telemetry.lng}
          </div>
          <div className="h-4 w-[1px] bg-white/20" />
          <div className="text-[11px] font-mono text-[#00D26A] font-bold">
            ENGINE LOAD: {telemetry.engineLoad}%
          </div>
        </div>
      </div>

      {/* Main Interactive Content Area */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-center my-auto py-8">
        {/* Left Side: Active Operational Spectrum Details */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-3">
            {ops.map((op, idx) => (
              <button
                key={op.number}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-widest transition-all border ${
                  activeIndex === idx
                    ? "bg-[#00D26A] text-[#071A2B] border-[#00D26A] shadow-lg scale-105"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                {op.number} {op.title}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#176B87]/30 border border-[#176B87] text-[#00D26A] text-[10px] font-mono font-bold tracking-wider uppercase inline-block">
              {activeOp.badge}
            </span>
            <h2 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
              {activeOp.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#00D26A] font-bold tracking-widest">
              {activeOp.tagline}
            </p>
          </div>

          <p className="font-manrope text-base sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
            {activeOp.desc}
          </p>

          {/* Live Metrics Grid for Selected Operation */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15 max-w-xl">
            {activeOp.stats.map((stat, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#0F2C59]/60 border border-white/10 backdrop-blur-md">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-semibold">
                  {stat.label}
                </span>
                <span className="font-syne text-base sm:text-xl font-extrabold text-white block mt-0.5">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Animated Vessel Radar Widget */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#176B87]/60 bg-[#071A2B]/80 backdrop-blur-2xl shadow-2xl flex items-center justify-center p-6 overflow-hidden">
            {/* Animated Scanning Radar Sweep */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00D26A]/30" />
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="absolute inset-28 rounded-full border border-white/10" />

            {/* Radar Center Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-white/10" />
              <div className="h-full w-[1px] bg-white/10 absolute" />
            </div>

            {/* Rotating Sweep Beam */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#00D26A]/20 to-transparent animate-spin origin-center duration-3000" />

            {/* Vessel Radar Blips */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#00D26A] animate-ping" />
            <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#00D26A]" />

            <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
            <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-sky-400" />

            {/* Radar Center Badge */}
            <div className="relative z-10 text-center space-y-1 bg-[#071A2B]/90 p-4 rounded-2xl border border-[#00D26A]/40 shadow-xl">
              <Compass className="w-8 h-8 text-[#00D26A] mx-auto animate-pulse" />
              <span className="font-mono text-[10px] text-slate-300 font-bold block uppercase tracking-widest">
                RADAR SPECTRUM
              </span>
              <span className="font-syne font-extrabold text-sm text-white block">
                {activeOp.title} ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar Indicator */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between pt-4 border-t border-white/15">
        <span className="font-mono text-xs text-slate-400 font-semibold">
          SCROLL OR CLICK TABS TO SWITCH OPERATIONAL SPECTRUM
        </span>
        <div className="flex items-center gap-2">
          {ops.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx ? "w-10 bg-[#00D26A]" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
