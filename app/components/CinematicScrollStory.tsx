"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { VIDEOS } from "@/lib/content/videos";
import { MapPin, ArrowRight, CheckCircle2, Play, FileText, Anchor, Compass } from "lucide-react";

interface StoryProps {
  onOpenVideoModal?: () => void;
  onOpenQuote?: () => void;
}

export const CinematicScrollStory: React.FC<StoryProps> = (props) => {
  return (
    <>
      <CinematicHeroLayer {...props} />
      <CinematicVisionLayer />
      <CinematicMissionLayer />
    </>
  );
};

// LAYER 1: HERO SPACE
export const CinematicHeroLayer: React.FC<StoryProps> = ({ onOpenVideoModal, onOpenQuote }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeResult, setActiveResult] = useState<{
    code: string;
    port: string;
    vessel: string;
    status: string;
    eta: string;
  } | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.warn("Autoplay prevented:", err));
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 0.6,
        },
      });

      tl.to(bgRef.current, { scale: 1.08, ease: "none" }, 0)
        .to(contentRef.current, { y: -50, opacity: 0.85, ease: "none" }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const q = searchQuery.toUpperCase();
    setActiveResult({
      code: q.startsWith("OSF") ? q : `OSF-${Math.floor(Math.random() * 8999 + 1000)}`,
      port: q.includes("DUBAI")
        ? "Port Rashid & Jebel Ali (UAE)"
        : q.includes("MUMBAI") || q.includes("JNPT")
        ? "JNPT Nhava Sheva (India)"
        : "Port of Colombo (Sri Lanka Hub)",
      vessel: "M/V Oceanic Star Vanguard (Aframax)",
      status: "UNDERWAY – ON SCHEDULE",
      eta: "14 AUG 2026 18:30 UTC",
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-[#071A2B] text-white overflow-hidden flex flex-col justify-center">
      {/* Background Ocean Video & Fallback Vignette */}
      <div ref={bgRef} className="absolute inset-0 z-0 bg-[#071A2B] origin-center will-change-transform">
        <img
          src="/images/hero_vessel.png"
          alt="Oceanic Star Hero Vessel"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero_vessel.png"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
          <source src={VIDEOS.heroSecondary} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B]/75 via-[#071A2B]/45 to-[#071A2B]/90" />
      </div>

      {/* Main Hero Content */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col justify-center min-h-screen will-change-transform">
        <div className="space-y-6 max-w-4xl">
          <p className="label-mono text-[#00D26A] font-bold tracking-widest text-xs flex items-center gap-2" data-scroll-reveal="fade-up">
            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping" />
            OCEANIC STAR FLEET — INTERNATIONAL SHIP MANAGEMENT &amp; CREWING
          </p>

          <h1 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white" data-scroll-split>
            THE OCEAN <br />
            IS OUR <br />
            OPERATING <br />
            <span className="text-[#00D26A]">GROUND.</span>
          </h1>

          {/* Live Port & Container Search Bar */}
          <div className="pt-2 max-w-xl">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center rounded-2xl bg-[#0F2C59]/90 border border-[#176B87]/50 shadow-2xl p-1.5 backdrop-blur-xl"
            >
              <MapPin className="w-5 h-5 text-[#176B87] ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Port Name or Container BL (e.g. Dubai, JNPT, OSF-9821)..."
                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white text-xs font-bold whitespace-nowrap hover:opacity-90 flex items-center gap-1.5 transition-all shadow-md"
              >
                <span>Track Live Port</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {activeResult && (
              <div className="mt-3 p-3.5 rounded-2xl bg-[#071A2B]/95 border border-[#00D26A]/40 text-xs text-white space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between font-bold">
                  <span className="text-[#00D26A] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {activeResult.code} ({activeResult.status})
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">ETA: {activeResult.eta}</span>
                </div>
                <div className="text-slate-300">
                  <span className="font-semibold text-white">Vessel:</span> {activeResult.vessel} &bull;{" "}
                  <span className="font-semibold text-white">Port Hub:</span> {activeResult.port}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
            <p className="max-w-md text-xs sm:text-sm font-manrope font-light text-slate-300 leading-relaxed">
              Global provider of technical vessel management, RPSL approved crew logistics, and maritime operations across Dubai, Mumbai, and Colombo.
            </p>

            <div className="flex items-center gap-3">
              {onOpenVideoModal && (
                <button
                  onClick={onOpenVideoModal}
                  className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3.5 hover:bg-white/20 transition-all rounded-xl shadow-lg"
                >
                  <Play className="w-4 h-4 text-[#00D26A]" />
                  <span>SHOWREEL</span>
                </button>
              )}
              {onOpenQuote && (
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#176B87] to-[#00D26A] px-6 py-3.5 hover:opacity-90 transition-all rounded-xl shadow-xl"
                >
                  <FileText className="w-4 h-4" />
                  <span>GET PROPOSAL</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// LAYER 2: OUR VISION SPACE
export const CinematicVisionLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050E19] text-white overflow-hidden flex items-center justify-center p-6 md:p-12">
      {/* Background Visual Surface */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/hero_vessel.png"
          alt="Oceanic Star Vision Vessel"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E19] via-[#050E19]/80 to-[#050E19]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div ref={textRef} className="lg:col-span-8 space-y-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#00D26A] uppercase flex items-center gap-2">
            <Anchor className="w-4 h-4" /> // 01 HORIZON &amp; SUSTAINABILITY
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.98]">
            OUR VISION
          </h2>
          <p className="font-manrope text-base sm:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            To set the global benchmark in sustainable, data-driven ship management—leading the decarbonization of international commercial shipping through advanced CII fuel optimization and STCW certified seamanship.
          </p>
        </div>

        <div className="lg:col-span-4 h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#071A2B]">
          <img
            src="/images/hero_vessel.png"
            alt="Oceanic Star Vision Vessel Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

// LAYER 3: OUR MISSION SPACE
export const CinematicMissionLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#081726] text-white overflow-hidden flex items-center justify-center p-6 md:p-12">
      {/* Background Visual Surface */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/crew_training.png"
          alt="Oceanic Star Mission Crew"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081726] via-[#081726]/80 to-[#081726]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div ref={textRef} className="lg:col-span-8 space-y-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#00D26A] uppercase flex items-center gap-2">
            <Compass className="w-4 h-4" /> // 02 OPERATIONAL ARCHITECTURE
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.98]">
            OUR MISSION
          </h2>
          <p className="font-manrope text-base sm:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            To deliver uncompromising technical vessel management, crew welfare, and maritime safety standards that maximize shipowners' asset value while ensuring zero incidents and full regulatory compliance across every voyage.
          </p>
        </div>

        <div className="lg:col-span-4 h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#071A2B]">
          <img
            src="/images/crew_training.png"
            alt="Oceanic Star Mission Crew Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};
