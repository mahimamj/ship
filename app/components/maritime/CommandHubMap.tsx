"use client";

import React from "react";
import { COMMAND_HUBS, CommandHub } from "@/app/data/commandHubs";
import { HubMarker } from "./HubMarker";
import { MaritimeRoute } from "./MaritimeRoute";

interface CommandHubMapProps {
  activeHubId: CommandHub["id"];
  onSelectHub: (hubId: CommandHub["id"]) => void;
}

export const CommandHubMap: React.FC<CommandHubMapProps> = ({ activeHubId, onSelectHub }) => {
  // Primary Inter-Hub SVG Curved Paths
  // 1. Istanbul (535, 172) -> Dubai (595, 215)
  const routeIstanbulDubai = "M 535 172 Q 565 190 595 215";
  // 2. Dubai (595, 215) -> Mumbai (685, 235)
  const routeDubaiMumbai = "M 595 215 Q 640 225 685 235";
  // 3. Mumbai (685, 235) -> Colombo (708, 272)
  const routeMumbaiColombo = "M 685 235 Q 695 255 708 272";
  // 4. Dubai (595, 215) -> Colombo (708, 272)
  const routeDubaiColombo = "M 595 215 Q 650 250 708 272";

  // Regional Route Extensions
  // Istanbul -> Europe (470, 130)
  const extIstanbulEurope = "M 535 172 Q 500 150 470 130";
  // Istanbul -> Mediterranean (485, 185)
  const extIstanbulMed = "M 535 172 Q 510 180 485 185";
  // Dubai -> East Africa (550, 340)
  const extDubaiEastAfrica = "M 595 215 Q 570 280 550 340";
  // Mumbai -> South Asia (740, 290)
  const extMumbaiSouthAsia = "M 685 235 Q 715 265 740 290";
  // Colombo -> Southeast Asia (780, 300)
  const extColomboSEAsia = "M 708 272 Q 745 285 780 300";

  // Active hub highlight states
  const isIstanbulActive = activeHubId === "turkey";
  const isDubaiActive = activeHubId === "dubai";
  const isMumbaiActive = activeHubId === "mumbai";
  const isColomboActive = activeHubId === "colombo";

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[520px] bg-[#F8F8F5] border border-[#8B94A3]/30 rounded-2xl overflow-hidden shadow-inner select-none">
      
      {/* 1. Subtle Latitude / Longitude Grid & Technical Annotations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="nauticalGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#8B94A3" strokeWidth="0.75" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nauticalGrid)" />
      </svg>

      {/* Top Left Technical Annotations */}
      <div className="absolute top-3 left-4 z-10 pointer-events-none font-mono text-[9px] sm:text-[10px] text-[#687384] space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
          <span className="font-bold text-[#071A2B] tracking-widest uppercase">GLOBAL MARITIME NETWORK</span>
        </div>
        <div className="tracking-wider">LAT 19°04'N // LON 72°52'E • NETWORK ACTIVE</div>
      </div>

      {/* Top Right Technical Chart Code */}
      <div className="absolute top-3 right-4 z-10 pointer-events-none font-mono text-[9px] sm:text-[10px] text-[#687384] text-right">
        <span className="px-2 py-0.5 bg-[#071A2B] text-white rounded font-bold uppercase tracking-wider">
          CHART 04 // INDIAN OCEAN CORRIDOR
        </span>
      </div>

      {/* 2. Custom SVG World Map Land Outlines (#E9E1CF) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        {/* World Continents Outlines */}
        {/* North America */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.8" d="M 100 80 Q 220 60 270 130 Q 230 220 170 250 Q 90 200 100 80 Z" />
        {/* South America */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.8" d="M 260 270 Q 330 280 310 410 Q 270 470 240 380 Z" />
        {/* Europe */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.85" d="M 460 100 Q 560 90 550 170 Q 470 190 460 100 Z" />
        {/* Africa */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.85" d="M 460 200 Q 580 210 560 370 Q 480 410 440 300 Z" />
        {/* Asia */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.9" d="M 570 90 Q 890 60 900 240 Q 750 290 590 230 Z" />
        {/* Australia */}
        <path fill="#E9E1CF" stroke="#8B94A3" strokeWidth="0.8" opacity="0.8" d="M 780 340 Q 880 330 870 430 Q 790 440 780 340 Z" />

        {/* 3. Maritime Inter-Hub & Extension Routes */}
        <g className="routes-layer">
          {/* Inter-Hub Main Lines */}
          <MaritimeRoute
            id="route-ist-dxb"
            d={routeIstanbulDubai}
            isHighlighted={isIstanbulActive || isDubaiActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive && !isDubaiActive)}
            particleDelay={0}
          />
          <MaritimeRoute
            id="route-dxb-bom"
            d={routeDubaiMumbai}
            isHighlighted={isDubaiActive || isMumbaiActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive && !isMumbaiActive)}
            particleDelay={1.5}
          />
          <MaritimeRoute
            id="route-bom-cmb"
            d={routeMumbaiColombo}
            isHighlighted={isMumbaiActive || isColomboActive}
            isDimmed={Boolean(activeHubId && !isMumbaiActive && !isColomboActive)}
            particleDelay={3.0}
          />
          <MaritimeRoute
            id="route-dxb-cmb"
            d={routeDubaiColombo}
            isHighlighted={isDubaiActive || isColomboActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive && !isColomboActive)}
            particleDelay={2.0}
          />

          {/* Regional Extensions */}
          <MaritimeRoute
            id="ext-ist-eur"
            d={extIstanbulEurope}
            isHighlighted={isIstanbulActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive)}
            particleDelay={0.5}
          />
          <MaritimeRoute
            id="ext-ist-med"
            d={extIstanbulMed}
            isHighlighted={isIstanbulActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive)}
            particleDelay={1.2}
          />
          <MaritimeRoute
            id="ext-dxb-ea"
            d={extDubaiEastAfrica}
            isHighlighted={isDubaiActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive)}
            particleDelay={2.5}
          />
          <MaritimeRoute
            id="ext-bom-sa"
            d={extMumbaiSouthAsia}
            isHighlighted={isMumbaiActive}
            isDimmed={Boolean(activeHubId && !isMumbaiActive)}
            particleDelay={3.5}
          />
          <MaritimeRoute
            id="ext-cmb-sea"
            d={extColomboSEAsia}
            isHighlighted={isColomboActive}
            isDimmed={Boolean(activeHubId && !isColomboActive)}
            particleDelay={4.0}
          />
        </g>
      </svg>

      {/* 4. Subtle Uppercase Monospace Region Labels */}
      <div className="absolute inset-0 pointer-events-none font-mono text-[9px] sm:text-[10px] tracking-widest text-[#687384]/70 font-semibold uppercase">
        <span className="absolute left-[45%] top-[24%]">EUROPE</span>
        <span className="absolute left-[47%] top-[34%]">MEDITERRANEAN</span>
        <span className="absolute left-[58%] top-[38%]">MIDDLE EAST</span>
        <span className="absolute left-[62%] top-[60%]">INDIAN OCEAN</span>
        <span className="absolute left-[70%] top-[42%]">SOUTH ASIA</span>
        <span className="absolute left-[77%] top-[58%]">SOUTHEAST ASIA</span>
      </div>

      {/* 5. Destination Extension Small Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Europe */}
        <div className="absolute left-[47%] top-[26%] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-[8px] font-mono text-[#071A2B] bg-white/80 border border-slate-300 px-1.5 py-0.5 rounded shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" /> EUROPE
        </div>
        {/* East Africa */}
        <div className="absolute left-[55%] top-[68%] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-[8px] font-mono text-[#071A2B] bg-white/80 border border-slate-300 px-1.5 py-0.5 rounded shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" /> EAST AFRICA
        </div>
        {/* Southeast Asia */}
        <div className="absolute left-[78%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-[8px] font-mono text-[#071A2B] bg-white/80 border border-slate-300 px-1.5 py-0.5 rounded shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" /> SOUTHEAST ASIA
        </div>
      </div>

      {/* 6. Four Main Animated Command Hub Markers */}
      {COMMAND_HUBS.map((hub) => (
        <HubMarker
          key={hub.id}
          hub={hub}
          isActive={activeHubId === hub.id}
          onSelect={onSelectHub}
        />
      ))}
    </div>
  );
};
