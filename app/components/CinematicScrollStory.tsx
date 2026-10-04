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
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-110 contrast-105 saturate-125 transition-all duration-700"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
          <source src={VIDEOS.heroSecondary} type="video/mp4" />
        </video>

        {/* Dual Gradient Overlay: Left dark vignette for 100% text contrast, right side open for bright video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B2A]/90 via-[#061B2A]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061B2A]/60 via-transparent to-[#061B2A]/90 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col justify-center min-h-[82vh] will-change-transform">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061B2A]/80 border border-[#00D26A]/50 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping" />
            <span className="label-mono text-[#00D26A] font-bold tracking-widest text-[11px] uppercase">
              OCEANIC STAR FLEET — INTERNATIONAL SHIP MANAGEMENT &amp; CREWING
            </span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">THE OCEAN</span> <br />
            <span className="text-[#00D9E8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-black">IS OUR</span> <br />
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">OPERATING</span> <br />
            <span className="text-[#00D26A] drop-shadow-[0_0_25px_rgba(0,210,106,0.6)]">GROUND.</span>
          </h1>

          <div className="pt-1 max-w-xl">
            <p className="text-xs sm:text-sm font-manrope font-normal text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Global provider of technical vessel management, RPSL approved crew logistics, and maritime operations across Dubai, Mumbai, Colombo, and Istanbul.
            </p>
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
