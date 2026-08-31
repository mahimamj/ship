"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Ship,
  Compass,
  Navigation,
  ArrowRight,
  ShieldCheck,
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
      // 1. GSAP ScrollTrigger animating the Ship along vertical scroll progress (Desktop only)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;

            const totalY = (sectionRef.current?.offsetHeight || 2000) - 250;
            const currentY = progress * totalY;

            const waveX = Math.sin(progress * Math.PI * 3.5) * 160;
            const rotationAngle = Math.cos(progress * Math.PI * 3.5) * 22;

            if (shipRef.current) {
              gsap.set(shipRef.current, {
                y: currentY,
                x: waveX,
                rotation: rotationAngle,
              });
            }

            const index = Math.min(
              Math.floor(progress * GALLERY_CARDS.length),
              GALLERY_CARDS.length - 1
            );
            setActiveCardIndex(index);
          },
        });
      });

      // 2. Card Entrance Animations on Scroll
      cardRefs.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
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
      className="relative w-full bg-[#F5F5F2] text-[#071A2B] py-16 md:py-32 px-4 sm:px-6 md:px-12 font-sans select-none overflow-hidden border-t border-b border-slate-200"
    >
      {/* BACKGROUND CONTINUOUS VERTICAL SVG SINE WAVE PATH (DESKTOP ONLY) */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none opacity-25 justify-center z-0">
        <svg
          className="w-full h-full max-w-[800px]"
          viewBox="0 0 800 2200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 400 100 Q 580 350, 400 650 T 400 1200 T 400 1750 T 400 2100"
            stroke="#176B87"
            strokeWidth="3"
            strokeDasharray="10 8"
            fill="none"
          />
        </svg>
      </div>

      {/* FLOATING SAILING VESSEL SHIP RIDING ABOVE THE WAVE (DESKTOP ONLY) */}
      <div
        ref={shipRef}
        className="hidden md:block absolute top-36 left-1/2 -translate-x-1/2 z-30 pointer-events-none will-change-transform"
      >
        <div className="relative p-3.5 bg-white border-2 border-[#176B87] rounded-full shadow-xl backdrop-blur-xl flex items-center justify-center">
          <Ship className="w-8 h-8 text-[#176B87] animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#176B87] rounded-full animate-ping" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-10 md:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6 md:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#176B87]/10 text-[#176B87] border border-[#176B87]/30 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-3 font-bold">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              <span>GLOBAL OCEAN TRADE ROUTES &amp; FLEET TELEMETRY</span>
            </div>

            <h2
              className="text-3xl sm:text-6xl font-extrabold text-[#071A2B] font-syne tracking-tight leading-tight"
              data-scroll-split
            >
              STRATEGIC FLEET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#176B87] via-slate-800 to-[#071A2B]">
                NAVIGATION &amp; CORRIDORS
              </span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-600 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#176B87] animate-pulse" />
              <span>Scroll Down to Sail Vessel Along Wave</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#176B87]" />
          </div>
        </div>

        {/* VERTICAL CARDS TOP-TO-BOTTOM LAYOUT */}
        <div className="space-y-10 sm:space-y-24 max-w-5xl mx-auto">
          {GALLERY_CARDS.map((card, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = idx === activeCardIndex;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`flex flex-col md:flex-row items-center gap-6 lg:gap-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card Container */}
                <div
                  className={`w-full md:w-1/2 bg-white border-2 ${
                    isActive ? "border-[#176B87] shadow-2xl scale-[1.01]" : "border-slate-200 shadow-md"
                  } rounded-2xl sm:rounded-3xl p-5 sm:p-9 flex flex-col justify-between relative transition-all duration-500 group`}
                >
                  {/* Top Card Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 sm:mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-[#176B87] font-syne tracking-tight">
                        {card.number}
                      </span>
                      <span className="px-3 py-1 bg-[#176B87]/10 text-[#176B87] text-[10px] sm:text-xs font-mono rounded-full border border-[#176B87]/20 font-bold">
                        {card.category}
                      </span>
                    </div>

                    {/* Card Visual Image Frame */}
                    <div className="relative h-44 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-slate-200 shadow-sm">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <span className="text-white font-bold tracking-wide text-[11px] sm:text-xs">{card.subtitle}</span>
                        <Navigation className="w-4 h-4 text-[#00F0FF]" />
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="text-xl sm:text-3xl font-extrabold text-[#071A2B] font-syne mb-2 sm:mb-3 group-hover:text-[#176B87] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-manrope leading-relaxed mb-4 sm:mb-6 font-normal">
                      {card.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {card.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-700 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#176B87]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Stat & Action */}
                  <div className="border-t border-slate-100 pt-3 sm:pt-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#176B87] font-mono">
                          {card.statValue}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono block font-bold">
                        {card.statLabel}
                      </span>
                    </div>

                    {onOpenQuote && (
                      <button
                        onClick={onOpenQuote}
                        className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#176B87] hover:bg-[#071A2B] text-white text-xs font-mono font-bold rounded-xl transition-all duration-300 flex items-center gap-1.5 shadow-md"
                      >
                        <span>Request Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
