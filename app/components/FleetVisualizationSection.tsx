"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Ship } from "lucide-react";
import { initGSAP } from "@/lib/gsapHelper";

import { InteractiveFleetExplosion } from "./InteractiveFleetExplosion";

interface FleetVisualizationSectionProps {
  onOpenQuote?: () => void;
}

function CountUpNumber({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export const FleetVisualizationSection: React.FC<FleetVisualizationSectionProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "AT SEA" | "IN PORT" | "DRY DOCK">("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fleet-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".fleet-cards-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fleetData = [
    {
      id: "tankers",
      type: "OIL & CHEMICAL TANKERS",
      count: 30,
      percentage: 51,
      desc: "Aframax, MR Product & Chemical Carriers operating in Gulf, Mediterranean & Asia",
    },
    {
      id: "bulk",
      type: "DRY BULK CARRIERS",
      count: 14,
      percentage: 24,
      desc: "Handymax & Supramax Bulk Carriers handling Iron Ore, Coal & Grains",
    },
    {
      id: "containers",
      type: "CONTAINER VESSELS",
      count: 7,
      percentage: 12,
      desc: "Regional Feeder & Panamax Container Carriers (1,200 TEU - 4,500 TEU)",
    },
    {
      id: "roro",
      type: "RO-RO CAR CARRIERS",
      count: 4,
      percentage: 7,
      desc: "Pure Car & Truck Carriers (PCTC) with 3,500 CEU deck capacity",
    },
    {
      id: "offshore",
      type: "OFFSHORE AHTS & DP2",
      count: 4,
      percentage: 6,
      desc: "Dynamic Positioning DP2 Anchor Handling Tug Supply Vessels & Towage",
    },
  ];

  return (
    <section id="vessels" ref={sectionRef} className="py-10 md:py-16 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)] relative">
      <div id="fleet" />
      <div id="fleet-matrix-explosion" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-5 mb-8 gap-6">
          <div>
            <span className="label-mono text-[#176B87] mb-1.5 block font-semibold">
              // FLEET OVERVIEW &amp; VESSEL MATRIX
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#071A2B] leading-tight">
              59 VESSELS
            </h2>
            <p className="font-mono text-xs text-[#667783] uppercase tracking-widest mt-2 flex items-center gap-2">
              <span>UNDER TECHNICAL &amp; COMMERCIAL MANAGEMENT</span>
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-sm font-manrope text-[#667783] leading-relaxed">
              Real-time asset distribution across International Shipping routes under DNV GL, ABS, ClassNK, and Lloyd&apos;s Register.
            </p>

            {/* Live Filter Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {(["ALL", "AT SEA", "IN PORT", "DRY DOCK"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                    activeFilter === filter
                      ? "bg-[#071A2B] text-white border-[#071A2B] shadow-md"
                      : "bg-white text-[#667783] border-[rgba(7,26,43,0.12)] hover:border-[#176B87] hover:text-[#071A2B]"
                  }`}
                >
                  {filter === "ALL" ? "All Fleet (59)" : filter === "AT SEA" ? "🟢 At Sea (42)" : filter === "IN PORT" ? "⚓ In Port (12)" : "🔧 Dry Dock (5)"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Split: Left = Fleet Category Cards, Right = Interactive Particle Fleet Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Fleet Category Cards */}
          <div className="fleet-cards-container flex flex-col justify-between gap-3.5 h-full">
            {fleetData.map((item, index) => {
              return (
                <div
                  key={item.type}
                  className="fleet-card group flex-1 p-3.5 sm:p-4 rounded-2xl bg-white border border-[rgba(7,26,43,0.12)] hover:border-[#176B87] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Glowing top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#176B87] via-[#00D26A] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#071A2B]/5 border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87] group-hover:bg-[#071A2B] group-hover:text-white transition-colors shrink-0">
                        <Ship className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-syne text-sm sm:text-base font-bold tracking-tight text-[#071A2B] group-hover:text-[#176B87] transition-colors block">
                          {item.type}
                        </span>
                        <span className="text-xs text-[#667783] font-manrope hidden sm:block">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    {/* Animated Live Count Up Number */}
                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <span className="font-mono text-base sm:text-lg font-extrabold text-[#176B87]">
                        <CountUpNumber end={item.count} /> <span className="text-[10px] sm:text-xs text-[#667783] font-normal uppercase">UNITS</span>
                      </span>
                    </div>
                  </div>

                  {/* Automatic Growing Progress Bar on Scroll */}
                  <div className="w-full h-2 bg-[#F5F5F2] rounded-full overflow-hidden border border-[rgba(7,26,43,0.08)] mt-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ amount: 0.2 }}
                      transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-[#071A2B] via-[#176B87] to-[#00D26A] rounded-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Interactive 59 Vessels Particle Matrix Console */}
          <div className="h-full flex flex-col">
            <InteractiveFleetExplosion embedded className="h-full flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
