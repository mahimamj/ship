"use client";

import React, { useState, useRef, useEffect } from "react";
import { COMMAND_HUBS, CommandHub } from "@/app/data/commandHubs";
import { GlobalCommandMap } from "./GlobalCommandMap";
import { HubSelector } from "./HubSelector";
import { HubInfoCard } from "./HubInfoCard";
import { NetworkStats } from "./NetworkStats";
import { initGSAP } from "@/lib/gsapHelper";

interface CommandHubsProps {
  onOpenQuote?: () => void;
}

export const CommandHubs: React.FC<CommandHubsProps> = ({ onOpenQuote }) => {
  const [activeHubId, setActiveHubId] = useState<CommandHub["id"]>("mumbai");
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  const activeHub = COMMAND_HUBS.find((h) => h.id === activeHubId) || COMMAND_HUBS[0];

  // Fast, crisp entrance sequence without artificial delay
  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        },
      });

      // Quick parallel reveal for instant, responsive loading
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }

      if (mapContainerRef.current) {
        tl.fromTo(
          mapContainerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" },
          "<"
        );
      }

      if (infoCardRef.current) {
        tl.fromTo(
          infoCardRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          "<"
        );
      }

      const markers = sectionRef.current.querySelectorAll(".hub-marker-item");
      if (markers.length > 0) {
        tl.fromTo(
          markers,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.25, stagger: 0.05, ease: "back.out(1.5)" },
          "-=0.15"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-command-hubs"
      className="relative w-full bg-[#F8F8F5] text-[#071A2B] py-6 sm:py-10 px-4 sm:px-6 md:px-12 select-none border-b border-[#8B94A3]/20 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] mx-auto space-y-4 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0077FF] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
            <span>// GLOBAL COMMAND HUBS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A2B] tracking-tight leading-tight">
              Four Strategic Command Hubs
            </h2>

            <p className="font-inter text-xs sm:text-sm text-[#687384] max-w-xl font-normal leading-relaxed">
              Strategically positioned across key maritime corridors, our command hubs enable coordinated operations, crew management and responsive support across global markets.
            </p>
          </div>

          {/* Thin Horizontal Divider */}
          <div className="w-full h-px bg-[#8B94A3]/25 mt-3" />
        </div>

        {/* Hub Selection Pills */}
        <HubSelector activeHubId={activeHubId} onSelectHub={(id) => setActiveHubId(id)} />

        {/* Desktop 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-1">
          
          {/* Real Geographic D3 Map Surface */}
          <div ref={mapContainerRef} className="lg:col-span-8 flex flex-col justify-between">
            <GlobalCommandMap activeHubId={activeHubId} onSelectHub={(id) => setActiveHubId(id)} />
          </div>

          {/* Hub Information Card */}
          <div ref={infoCardRef} className="lg:col-span-4 flex flex-col justify-between">
            <HubInfoCard hub={activeHub} onExplore={() => onOpenQuote?.()} />
          </div>
        </div>

        {/* Network Statistics Strip */}
        <NetworkStats />
      </div>
    </section>
  );
};
