"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Ship,
  Anchor,
  Compass,
  Navigation,
  Globe,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { initGSAP } from "@/lib/gsapHelper";

interface GsapHorizontalScrollGalleryProps {
  onOpenQuote?: () => void;
}

interface GalleryCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  statValue: string;
  statLabel: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    id: "route-01",
    number: "01",
    title: "Trans-Pacific CII Express",
    subtitle: "Yokohama → Long Beach Corridor",
    statValue: "18.4",
    statLabel: "Average Knots Eco-Speed",
    category: "Autonomous Navigation",
    image: "/images/hero_vessel.png",
    description: "Next-gen dual-fuel LNG bulk carrier telemetry equipped with AI-powered weather routing and real-time hull friction sensors.",
    features: ["Dual-Fuel LNG Propulsion", "CII Grade A Rating", "Zero-Carbon AI Route Optimizer"],
  },
  {
    id: "route-02",
    number: "02",
    title: "Suez Direct Arterial",
    subtitle: "Singapore → Rotterdam Route",
    statValue: "99.8",
    statLabel: "Schedule Integrity Rating %",
    category: "Container Fleet Spec",
    image: "/images/crew_training.png",
    description: "Ultra-large 24,000 TEU container fleet operating with zero-emission port berth power connection and automated gangway security.",
    features: ["Shore-to-Ship Power (AMP)", "Real-time Container Telematics", "RPSL Seamanship Crew"],
  },
  {
    id: "route-03",
    number: "03",
    title: "Deep Sea Tanker Ops",
    subtitle: "Houston → Ras Tanura Corridor",
    statValue: "100",
    statLabel: "SIRE 2.0 Audit Pass Rate %",
    category: "Chemical & Product Tankers",
    image: "/images/hero_vessel.png",
    description: "Double-hull chemical tanker management strictly adhering to TMSA Stage 3 standards with continuous inert gas monitoring.",
    features: ["SIRE 2.0 Compliance", "Inert Gas Scrubbing", "Automated Cargo Pumping"],
  },
  {
    id: "route-04",
    number: "04",
    title: "Arctic Eco Passage",
    subtitle: "Reykjavik → Tromsø Route",
    statValue: "-28",
    statLabel: "% Fuel Consumption Drop",
    category: "Ice-Class Expeditions",
    image: "/images/crew_training.png",
    description: "Specialized PC4 ice-class vessel operations with winterized deck machinery, heat recovery systems, and bio-lubricant hull coating.",
    features: ["Ice-Class PC4 Hull", "Heat Recovery Generators", "EEXI Optimized Trim"],
  },
];

export const GsapHorizontalScrollGallery: React.FC<GsapHorizontalScrollGalleryProps> = ({
  onOpenQuote,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // 3D Card tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      ref={sectionRef}
      id="gsap-horizontal-gallery"
      className="relative w-full bg-[#051320] text-white overflow-hidden py-24 border-t border-b border-white/10"
    >
      {/* Background SVG Animated Trade Corridors Path */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg
          className="w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-scroll-svg-path
            d="M -100 300 Q 300 100, 720 300 T 1540 300"
            stroke="#00F0FF"
            strokeWidth="3"
            strokeDasharray="8 8"
            fill="none"
          />
          <circle cx="360" cy="200" r="6" fill="#00F0FF" className="animate-ping" />
          <circle cx="720" cy="300" r="6" fill="#00F0FF" className="animate-ping" />
          <circle cx="1100" cy="220" r="6" fill="#00F0FF" className="animate-ping" />
        </svg>
      </div>

      {/* Section Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#176B87]/30 text-[#00F0FF] border border-[#00F0FF]/30 rounded-full text-xs font-mono tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin" />
            <span>GSAP Pinned Timeline Showcase</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl font-extrabold text-white font-syne tracking-tight leading-tight"
            data-scroll-split
          >
            GSAP SCROLL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#176B87] to-white">
              HORIZONTAL FLEET GALLERY
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#667783]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>Scroll Down to Scrub Timeline</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
        </div>
      </div>

      {/* HORIZONTAL TRACK CONTAINER FOR GSAP SCRUBBING */}
      <div className="w-full overflow-hidden relative z-10 px-6 md:px-12">
        <div
          ref={trackRef}
          className="gsap-horizontal-track flex items-stretch gap-8 w-max transition-transform ease-out"
        >
          {GALLERY_CARDS.map((card) => (
            <div
              key={card.id}
              onMouseMove={(e) => handleMouseMove(e, card.id)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(card.id)}
              className="gsap-horizontal-card w-[340px] sm:w-[420px] lg:w-[460px] bg-gradient-to-b from-[#071A2B]/90 via-[#0A243C]/80 to-[#051320]/95 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl relative transition-all duration-300 group cursor-pointer will-change-transform"
            >
              {/* Top Card Badge & Number */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-3xl font-extrabold text-[#00F0FF] font-syne opacity-80">
                    {card.number}
                  </span>
                  <span className="px-3 py-1 bg-[#176B87]/30 text-white text-[10px] font-mono rounded-full border border-[#176B87]/50">
                    {card.category}
                  </span>
                </div>

                {/* Card Visual Image Frame */}
                <div className="relative h-52 w-full rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold tracking-wide">{card.subtitle}</span>
                    <Navigation className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-2xl font-bold text-white font-syne mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667783] font-light leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-white/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Stat & Action */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-2xl font-extrabold text-[#00F0FF] font-mono"
                      data-scroll-counter={card.statValue}
                    >
                      {card.statValue}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#667783] font-mono block">
                    {card.statLabel}
                  </span>
                </div>

                {onOpenQuote && (
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 bg-[#176B87] hover:bg-[#00F0FF] hover:text-[#071A2B] text-white text-xs font-mono font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Request Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
