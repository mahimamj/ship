"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Ship,
  Anchor,
  Compass,
  Navigation,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
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
  const shipRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger animating the Ship along vertical scroll progress
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          // Calculate vertical position down the section
          const totalY = (sectionRef.current?.offsetHeight || 2000) - 250;
          const currentY = progress * totalY;

          // Calculate horizontal sine wave motion: x = sin(progress * 3.5pi) * amplitude
          const waveX = Math.sin(progress * Math.PI * 3.5) * 160;
          const rotationAngle = Math.cos(progress * Math.PI * 3.5) * 22;

          if (shipRef.current) {
            gsap.set(shipRef.current, {
              y: currentY,
              x: waveX,
              rotation: rotationAngle,
            });
          }

          // Active card index highlight
          const index = Math.min(
            Math.floor(progress * GALLERY_CARDS.length),
            GALLERY_CARDS.length - 1
          );
          setActiveCardIndex(index);
        },
      });

      // 2. Card Entrance Animations on Scroll
      cardRefs.current.forEach((card, idx) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.93 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gsap-vertical-fleet-gallery"
      className="relative w-full bg-[#051320] text-white py-24 md:py-32 px-6 md:px-12 font-sans select-none overflow-hidden border-t border-b border-white/10"
    >
      {/* BACKGROUND CONTINUOUS VERTICAL SVG SINE WAVE PATH */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex justify-center z-0">
        <svg
          className="w-full h-full max-w-[800px]"
          viewBox="0 0 800 2200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 400 100 Q 580 350, 400 650 T 400 1200 T 400 1750 T 400 2100"
            stroke="#00F0FF"
            strokeWidth="3"
            strokeDasharray="10 8"
            fill="none"
          />
        </svg>
      </div>

      {/* FLOATING SAILING VESSEL SHIP RIDING ABOVE THE WAVE */}
      <div
        ref={shipRef}
        className="absolute top-36 left-1/2 -translate-x-1/2 z-30 pointer-events-none will-change-transform"
      >
        <div className="relative p-3.5 bg-[#071A2B] border-2 border-[#00F0FF] rounded-full shadow-[0_0_25px_rgba(0,240,255,0.6)] backdrop-blur-xl flex items-center justify-center">
          <Ship className="w-8 h-8 text-[#00F0FF] animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#176B87]/30 text-[#00F0FF] border border-[#00F0FF]/30 rounded-full text-xs font-mono tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              <span>GLOBAL OCEAN TRADE ROUTES &amp; FLEET TELEMETRY</span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-extrabold text-white font-syne tracking-tight leading-tight"
              data-scroll-split
            >
              STRATEGIC FLEET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-emerald-400 to-white">
                NAVIGATION &amp; CORRIDORS
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-[#071A2B]/80 border border-white/10 px-4 py-2.5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>Scroll Down to Sail Vessel Along Wave</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
          </div>
        </div>

        {/* VERTICAL CARDS TOP-TO-BOTTOM LAYOUT */}
        <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto">
          {GALLERY_CARDS.map((card, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = idx === activeCardIndex;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card Container */}
                <div
                  className={`w-full md:w-1/2 bg-gradient-to-b from-[#071A2B]/95 via-[#0A243C]/90 to-[#051320]/95 border-2 ${
                    isActive ? "border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)]" : "border-white/10"
                  } rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl backdrop-blur-2xl relative transition-all duration-500 group`}
                >
                  {/* Top Card Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <span className="text-4xl font-black text-[#00F0FF] font-syne tracking-tight">
                        {card.number}
                      </span>
                      <span className="px-3.5 py-1 bg-[#176B87]/30 text-[#00F0FF] text-xs font-mono rounded-full border border-[#00F0FF]/30 font-bold">
                        {card.category}
                      </span>
                    </div>

                    {/* Card Visual Image Frame */}
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-xl">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-85" />

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <span className="text-white font-bold tracking-wide">{card.subtitle}</span>
                        <Navigation className="w-4 h-4 text-[#00F0FF]" />
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-syne mb-3 group-hover:text-[#00F0FF] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-manrope leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {card.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                          <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Stat & Action */}
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-[#00F0FF] font-mono">
                          {card.statValue}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        {card.statLabel}
                      </span>
                    </div>

                    {onOpenQuote && (
                      <button
                        onClick={onOpenQuote}
                        className="px-5 py-2.5 bg-[#176B87] hover:bg-[#00F0FF] hover:text-[#071A2B] text-white text-xs font-mono font-bold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      >
                        <span>Request Specs</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Empty Spacer Column for Alternating Balance */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
