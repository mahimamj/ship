"use client";

import React, { useState } from "react";
import { CommandHub } from "@/app/data/commandHubs";

export interface ProjectedHub extends CommandHub {
  x?: number;
  y?: number;
}

interface HubMarkerProps {
  hub: ProjectedHub;
  isActive: boolean;
  onSelect: (hubId: CommandHub["id"]) => void;
}

export const HubMarker: React.FC<HubMarkerProps> = ({ hub, isActive, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Derive exact position percentage from projected D3 coordinates on 960x480 SVG map canvas
  const posX = hub.x !== undefined ? (hub.x / 960) * 100 : 50;
  const posY = hub.y !== undefined ? (hub.y / 440) * 100 : 50;

  return (
    <div
      className="hub-marker-item absolute cursor-pointer select-none group z-30 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
      style={{
        left: `${posX}%`,
        top: `${posY}%`,
      }}
      onClick={() => onSelect(hub.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Pulse Halo */}
      <div className="relative flex items-center justify-center">
        <span
          className={`absolute rounded-full transition-all duration-500 ${
            isActive
              ? "w-10 h-10 bg-[#00D9FF]/20 border border-[#00D9FF] animate-ping opacity-75"
              : "w-6 h-6 bg-[#0077FF]/10 opacity-40 group-hover:scale-150"
          }`}
        />
        
        {/* Soft Ring */}
        <span
          className={`absolute rounded-full transition-all duration-300 ${
            isActive
              ? "w-7 h-7 bg-[#071A2B] border-2 border-[#00D9FF] shadow-[0_0_15px_#00D9FF]"
              : hub.isUpcoming
                ? "w-5 h-5 bg-[#071A2B] border border-amber-400/80 group-hover:border-amber-300"
                : "w-5 h-5 bg-[#071A2B] border border-[#0077FF]/60 group-hover:border-[#00D9FF]"
          }`}
        />

        {/* Central Glowing Point */}
        <span
          className={`relative rounded-full transition-all duration-300 ${
            isActive
              ? "w-2.5 h-2.5 bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]"
              : hub.isUpcoming
                ? "w-1.5 h-1.5 bg-amber-400 group-hover:bg-amber-300"
                : "w-1.5 h-1.5 bg-[#0077FF] group-hover:bg-[#00D9FF]"
          }`}
        />
      </div>

      {/* Label under Marker */}
      <div className="flex flex-col items-center mt-1.5">
        <span
          className={`font-mono text-[10px] tracking-wider uppercase font-bold transition-all duration-300 leading-none ${
            isActive
              ? "text-[#071A2B] bg-[#00D9FF] px-1.5 py-0.5 rounded shadow-md"
              : "text-[#071A2B] bg-white/90 border border-[#8B94A3]/30 px-1 py-0.5 rounded group-hover:text-[#0077FF]"
          }`}
        >
          ● {hub.city}
        </span>
        <span className="font-mono text-[8px] tracking-widest text-[#687384] uppercase font-semibold mt-0.5 flex items-center gap-1">
          <span>{hub.country}</span>
          {hub.isUpcoming && (
            <span className="text-amber-800 bg-amber-100 px-1 rounded font-bold text-[7px]">
              SOON
            </span>
          )}
        </span>
      </div>

      {/* Desktop Hover Tooltip */}
      {(isHovered || isActive) && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071A2B] text-white p-2.5 rounded-lg shadow-2xl border border-[#00D9FF]/40 text-[10px] font-mono z-50 pointer-events-none transition-all duration-200">
          <div className="flex items-center gap-1.5 font-bold text-[#00D9FF]">
            <span>{hub.city}</span>
            <span>//</span>
            <span>{hub.country}</span>
          </div>
          <div className="text-slate-300 text-[9px] font-sans mt-0.5">
            {hub.role}
          </div>
        </div>
      )}
    </div>
  );
};
