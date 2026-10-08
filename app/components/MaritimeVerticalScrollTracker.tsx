"use client";

import React, { useEffect, useState } from "react";
import { Compass, ArrowUp, Anchor } from "lucide-react";

interface Waypoint {
  id: string;
  label: string;
  code: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: "cinematic-stack", label: "START VOYAGE", code: "01" },
  { id: "about", label: "OVERVIEW", code: "02" },
  { id: "milestones", label: "MILESTONES", code: "03" },
  { id: "mission-vision-split", label: "PURPOSE & VISION", code: "04" },
  { id: "cinematic-operations", label: "OPERATIONS", code: "05" },
  { id: "capabilities", label: "CAPABILITIES", code: "06" },
  { id: "why-choose-us", label: "ADVANTAGES", code: "07" },
  { id: "presence", label: "GLOBAL NETWORK", code: "08" },
  { id: "fleet-matrix-explosion", label: "FLEET MATRIX", code: "09" },
  { id: "fleet", label: "FLEET SPECS", code: "10" },
  { id: "certifications", label: "CERTIFICATIONS", code: "11" },
  { id: "contact", label: "CONTACT DOCK", code: "12" },
];

export const MaritimeVerticalScrollTracker: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("cinematic-stack");
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollPercent(Math.round(currentProgress));
      }

      // Precise distance-based active section detection
      const targetY = window.innerHeight * 0.35;
      let minDistance = Infinity;
      let currentActiveId = WAYPOINTS[0].id;

      for (const wp of WAYPOINTS) {
        const el = document.getElementById(wp.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetY + 200 && rect.bottom >= 120) {
            const distance = Math.abs(rect.top - targetY);
            if (distance < minDistance) {
              minDistance = distance;
              currentActiveId = wp.id;
            }
          }
        }
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Circular progress radius for Scroll-to-Top button
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none group/tracker">
      {/* Waypoint Navigation Dock — Clean Floating Dots Only (No Outer Shape) */}
      <div className="relative flex flex-col items-center gap-1.5">
        
        {/* Decorative Top Anchor Icon */}
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0068B7] mb-0.5 shadow-sm">
          <Anchor className="w-3.5 h-3.5" />
        </div>

        {/* Floating Circular Point Dots */}
        <div className="relative flex flex-col items-center gap-1.5">
          {WAYPOINTS.map((wp) => {
            const isActive = activeId === wp.id;
            const isHovered = hoveredId === wp.id;

            return (
              <div
                key={wp.id}
                className="relative flex items-center justify-center"
                onMouseEnter={() => setHoveredId(wp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Floating Left Tooltip Pill */}
                {(isHovered || (isActive && hoveredId === null)) && (
                  <div
                    className={`absolute right-8 whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 shadow-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#0068B7] text-white border border-[#00D9E8] shadow-[0_0_12px_rgba(0,217,232,0.4)]"
                        : "bg-[#061B2A]/90 text-slate-100 border border-slate-700/60 backdrop-blur-md"
                    }`}
                  >
                    <span className="text-[#00D9E8]">{wp.code} //</span>
                    <span>{wp.label}</span>
                  </div>
                )}

                {/* Floating Circular Node Button Dot */}
                <button
                  onClick={() => scrollToSection(wp.id)}
                  aria-label={`Scroll to ${wp.label}`}
                  className={`relative w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#00D9E8] scale-125 shadow-[0_0_15px_#00D9E8]"
                      : "bg-[#0068B7]/75 hover:bg-[#00D9E8] hover:scale-125 border border-white/40 shadow-sm"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-[#00D9E8] animate-ping opacity-75" />
                  )}
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#061B2A]" : "bg-transparent"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* MARITIME COMPASS SCROLL-TO-TOP BUTTON */}
        <div className="mt-2 pt-1 flex flex-col items-center">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative w-9 h-9 rounded-full bg-[#061B2A]/90 backdrop-blur-md border border-[#0068B7]/50 flex items-center justify-center shadow-lg hover:border-[#00D9E8] hover:bg-[#061B2A] hover:shadow-[0_0_15px_rgba(0,217,232,0.5)] transition-all duration-300 active:scale-95"
            title="Return to Voyage Origin (Scroll to Top)"
          >
            {/* SVG Circular Scroll Percentage Meter Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-[#0068B7]/30"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-[#00D9E8] transition-all duration-200"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Inner Arrow / Compass Needle Icon */}
            <div className="relative flex flex-col items-center text-[#00D9E8] group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="text-[7.5px] font-mono font-bold leading-none -mt-0.5 text-slate-200 group-hover:text-[#00D9E8]">
                {scrollPercent}%
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
