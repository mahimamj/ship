"use client";

import React, { useRef, useEffect, useState } from "react";
import { VIDEOS } from "@/lib/content/videos";
import { initGSAP } from "@/lib/gsapHelper";
import { Radio, Compass, Shield, Anchor, Activity, ArrowRight, Play, Globe, MapPin, Cpu, Layers, Ship, Zap, Users, Wrench } from "lucide-react";

export const OperationalRevealSection: React.FC = () => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const shipVideoRef = useRef<HTMLVideoElement>(null);
  const shipOnboardRef = useRef<HTMLDivElement>(null);
  const shipOnshoreRef = useRef<HTMLDivElement>(null);
  const oceanPanelRef = useRef<HTMLDivElement>(null);
  const worldMapRef = useRef<HTMLDivElement>(null);
  const layerOnBoardRef = useRef<HTMLDivElement>(null);
  const layerOnShoreRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState<"sea" | "map" | "board" | "shore">("sea");

  // Real-time AIS Telemetry ticker simulation
  const [telemetry, setTelemetry] = useState({
    speed: 18.4,
    heading: 242,
    lat: "24° 52.4' N",
    lng: "54° 38.1' E",
    engineLoad: 86,
    vesselsInTransit: 42,
    activeCargo: "1.84M MT",
  });

  // 9-second loop listener for /ship.mp4
  useEffect(() => {
    const video = shipVideoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 9) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        speed: parseFloat((18.1 + Math.random() * 0.7).toFixed(1)),
        heading: Math.floor(240 + Math.random() * 6),
        engineLoad: Math.floor(84 + Math.random() * 5),
      }));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // EXACT GSAP TIMELINE IMPLEMENTATION FROM DESIGN SPEC
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: "top top",
            end: "+=3200",
            pin: true,
            scrub: 1,
            onEnter: () => {
              if (shipVideoRef.current) {
                shipVideoRef.current.currentTime = 0;
                shipVideoRef.current.play().catch(() => {});
              }
            },
            onEnterBack: () => {
              if (shipVideoRef.current) {
                shipVideoRef.current.play().catch(() => {});
              }
            },
            onLeave: () => {
              if (shipVideoRef.current) {
                shipVideoRef.current.pause();
              }
            },
            onLeaveBack: () => {
              if (shipVideoRef.current) {
                shipVideoRef.current.pause();
              }
            },
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);

              if (p > 0.75) {
                setActiveStage("shore");
              } else if (p > 0.5) {
                setActiveStage("board");
              } else if (p > 0.2) {
                setActiveStage("map");
              } else {
                setActiveStage("sea");
              }
            },
          },
        });

        // Step 1: Ocean panel clipPath cut to polygon(0 0, 65% 0, 45% 100%, 0 100%) revealing background ship.mp4
        tl.to(
          oceanPanelRef.current,
          {
            clipPath: "polygon(0% 0%, 65% 0%, 45% 100%, 0% 100%)",
            duration: 1.2,
            ease: "power2.inOut",
          }
        );


        // Step 3: World map enters (scale 1.4 -> 1, opacity 0 -> 1)
        tl.fromTo(
          worldMapRef.current,
          { scale: 1.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        );

        // Step 4: SVG routes draw with strokeDashoffset stagger
        const routes = gsap.utils.toArray<SVGPathElement>(".route-path", worldMapRef.current);
        tl.fromTo(
          routes,
          { strokeDasharray: 1000, strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 1, stagger: 0.15, ease: "power1.inOut" },
          "-=0.6"
        );

        // Step 5: Hub nodes scale from 0 staggered
        const hubs = gsap.utils.toArray<HTMLElement>(".hub-node", worldMapRef.current);
        tl.fromTo(
          hubs,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
          "-=0.8"
        );

        // Step 6: Map zooms toward India & UAE (scale 2.2, origin India coordinates)
        tl.to(worldMapRef.current, {
          scale: 2.2,
          transformOrigin: "55% 50%",
          duration: 1.2,
          ease: "power2.inOut",
        });

        // Step 7: BOOM -> On Board Crew Video reveal & Ship Onboard Left -> Right Translation
        tl.fromTo(
          layerOnBoardRef.current,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.2, ease: "power3.out" },
          "-=0.4"
        ).fromTo(
          shipOnboardRef.current,
          { x: "-25vw", opacity: 0, scale: 0.95 },
          { x: "25vw", opacity: 1, scale: 1.1, duration: 1.4, ease: "none" },
          "-=1.0"
        );

        // Step 8: On Shore Vertical Split Curtain reveal & Ship Onshore Left -> Right Translation
        tl.fromTo(
          layerOnShoreRef.current,
          { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.2, ease: "power3.out" }
        ).fromTo(
          shipOnshoreRef.current,
          { x: "-25vw", opacity: 0, scale: 0.95 },
          { x: "25vw", opacity: 1, scale: 1.1, duration: 1.4, ease: "none" },
          "-=1.0"
        );
      });
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pinSectionRef}
      id="operational-reveal"
      className="relative w-full h-screen bg-[#05121F] text-white overflow-hidden font-sans select-none operations"
    >
      {/* ========================================================================= */}
      {/* BEHIND THE CUT: WORLD MAP WITH EUROPE -> DUBAI -> INDIA -> COLOMBO       */}
      {/* ========================================================================= */}
      <div
        ref={worldMapRef}
        className="world-map absolute inset-0 z-10 w-full h-full bg-[#051320] flex flex-col justify-between p-6 md:p-12 transition-transform duration-300"
      >
        {/* Background Network Map Graphics & Animated SVG Routes with Commercial Ship Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/cinematic_vessel_bg.png"
            alt="Cinematic Vessel Background"
            className="w-full h-full object-cover brightness-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051320]/90 via-[#051320]/75 to-[#051320]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(#176B87_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20" />

          {/* SVG Animated Route Paths */}
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
            {/* Europe to Dubai route */}
            <path
              className="route-path"
              d="M 520 220 L 640 340"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeDasharray="8 8"
            />
            {/* Dubai to India/Mumbai route */}
            <path
              className="route-path"
              d="M 640 340 L 800 440"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeDasharray="8 8"
            />
            {/* India to Colombo route */}
            <path
              className="route-path"
              d="M 800 440 L 840 560"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Glowing Hub Nodes */}
          {/* EUROPE HUB */}
          <div className="hub-node absolute top-[24%] left-[36%] z-10 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-[#00F0FF] animate-ping opacity-75" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#00F0FF] border-2 border-white shadow-lg shadow-[#00F0FF]/50 -mt-3.5" />
            <span className="mt-2 px-3 py-1 bg-[#071A2B]/90 border border-[#00F0FF]/50 text-[#00F0FF] text-xs font-mono font-bold rounded-lg shadow-xl">
              EUROPE ● ROTTERDAM
            </span>
          </div>

          {/* DUBAI / UAE HUB */}
          <div className="hub-node absolute top-[38%] left-[44%] z-10 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#00F0FF] animate-ping opacity-75" />
            <div className="w-4 h-4 rounded-full bg-[#00F0FF] border-2 border-white shadow-lg shadow-[#00F0FF]/50 -mt-4" />
            <span className="mt-2 px-3 py-1 bg-[#071A2B]/90 border border-[#00F0FF]/50 text-[#00F0FF] text-xs font-mono font-bold rounded-lg shadow-xl">
              UAE / DUBAI HUB ● HQ
            </span>
          </div>

          {/* INDIA / MUMBAI HUB (CAMERA ZOOMS HERE) */}
          <div className="hub-node absolute top-[48%] left-[55%] z-20 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="w-4.5 h-4.5 rounded-full bg-emerald-400 border-2 border-white shadow-xl shadow-emerald-400/60 -mt-5" />
            <span className="mt-2 px-3.5 py-1.5 bg-[#071A2B]/95 border-2 border-emerald-400 text-emerald-400 text-xs font-mono font-black rounded-lg shadow-2xl scale-110">
              INDIA ● MUMBAI (MANNING)
            </span>
          </div>

          {/* COLOMBO HUB */}
          <div className="hub-node absolute top-[62%] left-[58%] z-10 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-amber-400 animate-ping opacity-75" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white shadow-lg -mt-3.5" />
            <span className="mt-2 px-3 py-1 bg-[#071A2B]/90 border border-amber-400/50 text-amber-400 text-xs font-mono font-bold rounded-lg shadow-xl">
              COLOMBO ● BUNKER
            </span>
          </div>
        </div>

        {/* Top Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
              GLOBAL MAP // 02
            </span>
            <span className="text-xs text-white/80 font-mono tracking-wider">
              EUROPE → UAE → INDIA → COLOMBO CONNECTED NETWORK
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 font-bold">
            <Globe className="w-4 h-4 animate-spin" />
            <span>GLOBAL DISPATCH ONLINE</span>
          </div>
        </div>

        {/* Center Text & Real-Time Stats Overlay */}
        <div className="relative z-10 max-w-4xl my-auto space-y-6">
          <h2 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95]">
            GLOBAL OPERATIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-emerald-400 to-white">
              COMMAND NETWORK
            </span>
          </h2>

          {/* Real-Time Live Telemetry Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl">
            <div className="p-4 rounded-2xl bg-[#071A2B]/90 border border-[#00F0FF]/40 backdrop-blur-xl shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                VESSELS IN TRANSIT
              </span>
              <span className="font-syne text-3xl font-extrabold text-[#00F0FF] block mt-1">
                {telemetry.vesselsInTransit} UNITS
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071A2B]/90 border border-emerald-400/40 backdrop-blur-xl shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                AVERAGE SPEED
              </span>
              <span className="font-syne text-3xl font-extrabold text-emerald-400 block mt-1">
                {telemetry.speed} KTS
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071A2B]/90 border border-amber-400/40 backdrop-blur-xl shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                ACTIVE CARGO
              </span>
              <span className="font-syne text-3xl font-extrabold text-amber-400 block mt-1">
                {telemetry.activeCargo}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-mono text-white/60">
          <span>EUROPE ● UAE ● INDIA ● COLOMBO ROUTE VECTORS</span>
          <span className="text-[#00F0FF]">ZOOMING TO INDIA FOR ON BOARD REVEAL →</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INITIAL LAYER: OCEAN PANEL & MOVING SHIP VIDEO (LEFT TO RIGHT)            */}
      {/* ========================================================================= */}
      <div
        ref={oceanPanelRef}
        className="ocean-panel absolute inset-0 z-20 w-full h-full flex flex-col justify-between p-6 md:p-12 will-change-[clip-path]"
      >
        {/* Background Visual Video & Imagery - USING CUSTOM ship.mp4 */}
        <div className="absolute inset-0 z-0 bg-[#071A2B]">
          <img
            src="/images/hero_vessel.png"
            alt="At Sea Operations"
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <video
            ref={shipVideoRef}
            src="/ship.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-95 scale-105 filter brightness-110 contrast-105 saturate-125 transition-all duration-700"
          >
            <source src="/ship.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-[#071A2B]/20 to-transparent" />
        </div>

        {/* Top Header Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
              SPECTRUM // 01
            </span>
            <span className="text-xs text-white/80 font-mono tracking-wider">
              OCEANIC STAR FLEET DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[#071A2B]/80 border border-[#00F0FF]/30 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-mono">
            <Activity className="w-4 h-4 text-[#00F0FF] animate-spin" />
            <span>{telemetry.speed} KTS</span>
            <span className="text-white/40">|</span>
            <span>{telemetry.lat}</span>
            <span className="text-white/40">|</span>
            <span className="text-[#00F0FF] font-bold">LOAD: {telemetry.engineLoad}%</span>
          </div>
        </div>

        {/* Bottom Hint Indicator */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-mono text-white/60 mt-auto">
          <span>01 / CINEMATIC OCEAN VOYAGE</span>
          <div className="flex items-center gap-2 text-[#00F0FF] font-bold">
            <span>SCROLL ↓ TO SLICE OPEN GLOBAL NETWORK</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>


      {/* ========================================================================= */}
      {/* BOOM REVEAL: ON BOARD (Spectrum // 03) - WITH MOVING FIGMA SHIP GRAPHIC   */}
      {/* ========================================================================= */}
      <div
        ref={layerOnBoardRef}
        className="absolute inset-0 z-30 w-full h-full bg-[#071A2B] flex flex-col justify-between p-6 md:p-12 will-change-[clip-path]"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      >
        {/* Background Visual Video & Seafarer Imagery */}
        <div className="absolute inset-0 z-0 bg-[#071A2B]">
          <img
            src="/images/crew_training.png"
            alt="On Board Crew Operations"
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src={VIDEOS.onBoard} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/80 to-transparent" />
        </div>

        {/* Top Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
              SPECTRUM // 03
            </span>
            <span className="text-xs text-white/80 font-mono tracking-wider">
              ON BOARD SEAFARER SAFETY &amp; CREW MANAGEMENT
            </span>
          </div>

          <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 text-xs font-mono font-bold rounded-lg border border-emerald-400/40">
            DG SHIPPING RPSL APPROVED
          </span>
        </div>

        {/* Center Grid: Text + Animated Figma Seafarer Crew Vessel Vector Graphic (Moves Left -> Right) */}
        <div className="relative z-10 w-full max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/20 border border-amber-400/50 text-amber-400 rounded-full text-xs font-mono tracking-widest uppercase">
              <Shield className="w-4 h-4" />
              <span>STCW 2010 &amp; MLC 2006 Compliant</span>
            </div>

            <h2 className="font-syne text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.9]">
              ON BOARD
            </h2>

            <p className="font-mono text-sm sm:text-lg text-amber-400 font-bold tracking-widest uppercase">
              RPSL CERTIFIED CREW &amp; SEAFARER WELFARE
            </p>

            <p className="font-manrope text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers maintaining zero-incident safety culture.
            </p>
          </div>

          {/* ANIMATED FIGMA SEAFARER MANNING SHIP VECTOR GRAPHIC (CONTINUOUS SCROLL LEFT -> RIGHT) */}
          <div ref={shipOnboardRef} className="lg:col-span-5 relative filter drop-shadow-[0_20px_40px_rgba(251,191,36,0.3)] will-change-transform">
            <div className="p-6 rounded-3xl bg-[#071A2B]/90 border border-amber-400/60 backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <Users className="w-4 h-4" /> SEAFARER COMMAND VESSEL
                </span>
                <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 text-[10px] font-mono rounded">
                  RPSL #IND-8402
                </span>
              </div>

              {/* High-Fidelity Ship Vector Graphic */}
              <svg viewBox="0 0 500 220" fill="none" className="w-full h-auto">
                <path
                  d="M 60 160 L 140 180 L 400 180 L 450 150 L 410 130 L 90 130 Z"
                  fill="#071A2B"
                  stroke="#FBBF24"
                  strokeWidth="2"
                />
                <rect x="180" y="100" width="50" height="30" fill="#176B87" stroke="#FBBF24" strokeWidth="1.5" />
                <rect x="250" y="90" width="60" height="40" fill="#071A2B" stroke="#FBBF24" strokeWidth="1.5" />
                <rect x="320" y="60" width="50" height="70" fill="#071A2B" stroke="#FBBF24" strokeWidth="2" />
                <circle cx="345" cy="45" r="3" fill="#FBBF24" className="animate-ping" />
                <line x1="345" y1="60" x2="345" y2="35" stroke="#FBBF24" strokeWidth="2" />
              </svg>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                <span>OFFICERS: 24 CREW</span>
                <span className="text-amber-400 font-bold">100% DG CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-mono text-white/60">
          <span>ON BOARD VESSEL FLEET SPECTRUM</span>
          <span className="text-amber-400">SCROLL FOR ON SHORE REVEAL →</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ON SHORE (Spectrum // 04) - WITH MOVING FIGMA DRYDOCK SHIP GRAPHIC       */}
      {/* ========================================================================= */}
      <div
        ref={layerOnShoreRef}
        className="absolute inset-0 z-40 w-full h-full bg-[#051320] flex flex-col justify-between p-6 md:p-12 will-change-[clip-path]"
        style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
      >
        {/* Background Engineering Visual */}
        <div className="absolute inset-0 z-0 bg-[#051320]">
          <img
            src="/images/cinematic_vessel_bg.png"
            alt="On Shore Engineering Operations"
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src={VIDEOS.onShore} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#051320] via-[#051320]/80 to-transparent" />
        </div>

        {/* Top Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 border border-cyan-400/40 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
              SPECTRUM // 04
            </span>
            <span className="text-xs text-white/80 font-mono tracking-wider">
              ON SHORE TECHNICAL ENGINEERING &amp; DRYDOCK SUPERINTENDENCY
            </span>
          </div>

          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-mono font-bold rounded-lg border border-cyan-400/40">
            CLASS-1 SUPERINTENDENCY
          </span>
        </div>

        {/* Center Grid: Text + Animated Figma Drydock Engineering Vessel Vector Graphic (Moves Left -> Right) */}
        <div className="relative z-10 w-full max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 rounded-full text-xs font-mono tracking-widest uppercase">
              <Cpu className="w-4 h-4" />
              <span>Planned Maintenance System (PMS) &amp; Class Renewals</span>
            </div>

            <h2 className="font-syne text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.9]">
              ON SHORE
            </h2>

            <p className="font-mono text-sm sm:text-lg text-cyan-400 font-bold tracking-widest uppercase">
              ENGINEERING / DRYDOCK / TECHNICAL MANAGEMENT
            </p>

            <p className="font-manrope text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, class renewals, and emergency technical dispatch from Dubai HQ.
            </p>
          </div>

          {/* ANIMATED FIGMA DRYDOCK TECHNICAL SHIP VECTOR GRAPHIC (CONTINUOUS SCROLL LEFT -> RIGHT) */}
          <div ref={shipOnshoreRef} className="lg:col-span-5 relative filter drop-shadow-[0_20px_40px_rgba(34,211,238,0.3)] will-change-transform">
            <div className="p-6 rounded-3xl bg-[#051320]/90 border border-cyan-400/60 backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Wrench className="w-4 h-4" /> DRYDOCK TECHNICAL VESSEL
                </span>
                <span className="px-2 py-0.5 bg-cyan-400/20 text-cyan-400 text-[10px] font-mono rounded">
                  CLASS-1 PMS
                </span>
              </div>

              {/* High-Fidelity Ship Vector Graphic */}
              <svg viewBox="0 0 500 220" fill="none" className="w-full h-auto">
                <path
                  d="M 50 160 L 130 180 L 410 180 L 460 150 L 420 130 L 80 130 Z"
                  fill="#051320"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <rect x="160" y="100" width="70" height="30" fill="#176B87" stroke="#22D3EE" strokeWidth="1.5" />
                <rect x="250" y="80" width="80" height="50" fill="#051320" stroke="#22D3EE" strokeWidth="1.5" />
                <rect x="340" y="50" width="50" height="80" fill="#051320" stroke="#22D3EE" strokeWidth="2" />
                <circle cx="365" cy="35" r="3" fill="#22D3EE" className="animate-ping" />
                <line x1="365" y1="50" x2="365" y2="25" stroke="#22D3EE" strokeWidth="2" />
              </svg>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                <span>PMS MAINTENANCE</span>
                <span className="text-cyan-400 font-bold">100% OVERHAULED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Navigation Indicator Bar */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-mono text-white/60">
          <span>COMPLETED 3000px PINNED OPERATIONAL REVEAL</span>
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <span>CINEMATIC SEQUENCE COMPLETE</span>
            <Shield className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Floating Progress Ticker Dots Bar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        <div
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeStage === "sea" ? "bg-[#00F0FF] scale-150 shadow-lg shadow-[#00F0FF]/50" : "bg-white/30"
          }`}
          title="AT SEA"
        />
        <div
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeStage === "map" ? "bg-emerald-400 scale-150 shadow-lg shadow-emerald-400/50" : "bg-white/30"
          }`}
          title="GLOBAL NETWORK"
        />
        <div
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeStage === "board" ? "bg-amber-400 scale-150 shadow-lg shadow-amber-400/50" : "bg-white/30"
          }`}
          title="ON BOARD"
        />
        <div
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeStage === "shore" ? "bg-[#00F0FF] scale-150 shadow-lg shadow-[#00F0FF]/50" : "bg-white/30"
          }`}
          title="ON SHORE"
        />
      </div>
    </section>
  );
};
