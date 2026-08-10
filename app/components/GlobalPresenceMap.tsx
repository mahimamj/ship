"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Compass } from "lucide-react";

type HubKey = "dubai" | "mumbai" | "colombo";

interface HubData {
  id: HubKey;
  label: string;
  country: string;
  entity: string;
  coords: { lat: number; lng: number };
  svgPos: { x: number; y: number };
  viewBox: string;
  roles: string[];
  address: string;
  phone: string;
  email: string;
  license: string;
}

export const GlobalPresenceMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<HubKey>("dubai");
  const [viewMode, setViewMode] = useState<"focused" | "world">("focused");

  const hubs: Record<HubKey, HubData> = {
    dubai: {
      id: "dubai",
      label: "DUBAI",
      country: "United Arab Emirates",
      entity: "Oceanic Star Fleet Ship Management LLC",
      coords: { lat: 25.2048, lng: 55.2708 },
      svgPos: { x: 290, y: 175 },
      viewBox: "160 90 320 220",
      roles: [
        "Global Fleet Management",
        "Technical Management",
        "Commercial Operations",
      ],
      address: "Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE",
      phone: "+971 4 399 0000",
      email: "dubai@oceanicstar.com",
      license: "UAE Commercial License #789402",
    },
    mumbai: {
      id: "mumbai",
      label: "MUMBAI",
      country: "India",
      entity: "Oceanic Star Shipping Pvt. Ltd.",
      coords: { lat: 19.076, lng: 72.8777 },
      svgPos: { x: 510, y: 215 },
      viewBox: "360 110 320 220",
      roles: [
        "Crew Management",
        "Technical Support",
        "Indian Operations",
      ],
      address: "Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India",
      phone: "+91 22 6800 0000",
      email: "mumbai@oceanicstar.com",
      license: "DG Shipping License: RPSL-MUM-245",
    },
    colombo: {
      id: "colombo",
      label: "COLOMBO",
      country: "Sri Lanka",
      entity: "Oceanic Star Lanka Pvt Ltd",
      coords: { lat: 6.9271, lng: 79.8612 },
      svgPos: { x: 570, y: 290 },
      viewBox: "420 180 300 200",
      roles: [
        "South Asia Port Agency",
        "Launch Operations",
        "Husbandry Services",
      ],
      address: "Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
      phone: "+94 11 245 0000",
      email: "colombo@oceanicstar.com",
      license: "Sri Lanka Merchant Shipping Approved",
    },
  };

  const currentHub = hubs[activeHub];

  // World view camera vs focused location camera
  const targetViewBox = viewMode === "world" ? "100 40 700 380" : currentHub.viewBox;

  const handleSelectLocation = (key: HubKey) => {
    setActiveHub(key);
    setViewMode("focused");
  };

  return (
    <section id="presence" className="py-24 sm:py-36 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[rgba(7,26,43,0.12)] pb-8 mb-10">
          <span className="label-mono text-[#176B87] mb-2 block font-semibold">
            // GLOBAL COMMAND NETWORK
          </span>
          <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#071A2B]">
            GLOBAL PRESENCE
          </h2>
          <p className="text-sm font-manrope text-[#667783] mt-2 font-light">
            Three strategic hubs. One connected maritime network.
          </p>
        </div>

        {/* Location Selector Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            {(["dubai", "mumbai", "colombo"] as const).map((key) => {
              const isActive = activeHub === key && viewMode === "focused";
              return (
                <button
                  key={key}
                  onClick={() => handleSelectLocation(key)}
                  className={`px-6 py-3 rounded-full font-mono text-xs tracking-widest transition-all duration-500 border ${
                    isActive
                      ? "bg-[#071A2B] text-white border-[#071A2B] font-bold shadow-md"
                      : "bg-[#FFFFFF] text-[#071A2B] border-[rgba(7,26,43,0.12)] hover:border-[#071A2B]"
                  }`}
                  data-cursor
                  data-cursor-text="FLY TO"
                >
                  [ {key.toUpperCase()} ]
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setViewMode(viewMode === "world" ? "focused" : "world")}
            className="text-xs font-mono tracking-wider text-[#176B87] hover:text-[#071A2B] transition-colors py-2 font-semibold"
          >
            {viewMode === "world" ? "FOCUS SELECTED HUB →" : "VIEW ENTIRE NETWORK MAP ⊕"}
          </button>
        </div>

        {/* Desktop Side-by-Side: Map (65%) | Info Panel (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Real World Interactive Map Container (65%) */}
          <div className="lg:col-span-8 bg-[#FFFFFF] border border-[rgba(7,26,43,0.12)] rounded-3xl relative h-[480px] sm:h-[620px] lg:h-[680px] overflow-hidden shadow-sm flex items-center justify-center">
            {/* Animated SVG Map Surface with Camera ViewBox Transition */}
            <motion.svg
              animate={{ viewBox: targetViewBox }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover select-none"
            >
              <defs>
                {/* Subtle Map Grid Pattern */}
                <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(7,26,43,0.03)" strokeWidth="1" />
                </pattern>

                {/* Marker Glow */}
                <radialGradient id="marker-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#176B87" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#176B87" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Water Background */}
              <rect width="100%" height="100%" fill="#FFFFFF" />
              <rect width="100%" height="100%" fill="url(#map-grid)" />

              {/* Real Geographic Vector Landmass Polygons (#E4E8E7) */}
              <g fill="#E4E8E7" stroke="rgba(7,26,43,0.12)" strokeWidth="1">
                {/* Europe */}
                <path d="M 120 50 Q 180 40 250 60 Q 230 110 170 115 Q 130 90 120 50 Z" />
                {/* Africa */}
                <path d="M 140 135 Q 240 135 270 190 Q 250 280 180 340 Q 120 270 140 135 Z" />
                {/* Arabian Peninsula & Gulf */}
                <path d="M 240 125 Q 315 125 330 165 Q 300 230 250 220 Q 230 180 240 125 Z" />
                {/* Indian Subcontinent */}
                <path d="M 420 130 Q 560 130 600 185 Q 550 280 515 295 Q 440 240 420 130 Z" />
                {/* Sri Lanka */}
                <ellipse cx="570" cy="290" rx="14" ry="20" fill="#E4E8E7" stroke="rgba(7,26,43,0.12)" />
                {/* Southeast Asia */}
                <path d="M 600 155 Q 730 155 770 205 Q 710 300 640 270 Q 590 220 600 155 Z" />
              </g>

              {/* Maritime Route Lines connecting Dubai → Mumbai → Colombo → Dubai */}
              <g fill="none" stroke="#176B87" strokeWidth="2" strokeDasharray="5,5">
                {/* Dubai to Mumbai */}
                <path d="M 290 175 Q 400 190 510 215" />
                {/* Mumbai to Colombo */}
                <path d="M 510 215 Q 545 250 570 290" />
                {/* Dubai to Colombo Direct Ocean Line */}
                <path d="M 290 175 Q 420 250 570 290" stroke="rgba(23,107,135,0.4)" strokeWidth="1.5" />
              </g>

              {/* Travelling Animated Route Indicator Dots */}
              <circle cx="400" cy="190" r="3" fill="#176B87" className="animate-ping" />
              <circle cx="540" cy="250" r="3" fill="#176B87" className="animate-ping" />

              {/* Location Pins & Custom Selected Markers */}
              {(["dubai", "mumbai", "colombo"] as const).map((key) => {
                const hub = hubs[key];
                const isSelected = activeHub === key;

                return (
                  <g
                    key={key}
                    onClick={() => handleSelectLocation(key)}
                    className="cursor-pointer group"
                  >
                    {/* Animated Pulse Outer Halo */}
                    <circle
                      cx={hub.svgPos.x}
                      cy={hub.svgPos.y}
                      r={isSelected ? 26 : 14}
                      fill="url(#marker-glow)"
                      className="transition-all duration-500"
                    />

                    {/* Selected Outer Ring */}
                    {isSelected && (
                      <circle
                        cx={hub.svgPos.x}
                        cy={hub.svgPos.y}
                        r="14"
                        fill="none"
                        stroke="#071A2B"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    )}

                    {/* Core Point Dot */}
                    <circle
                      cx={hub.svgPos.x}
                      cy={hub.svgPos.y}
                      r={isSelected ? 7 : 5}
                      fill={isSelected ? "#071A2B" : "#176B87"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />

                    {/* Location Badge Label */}
                    <g transform={`translate(${hub.svgPos.x}, ${hub.svgPos.y - (isSelected ? 28 : 22)})`}>
                      <rect
                        x="-40"
                        y="-12"
                        width="80"
                        height="20"
                        rx="10"
                        fill={isSelected ? "#071A2B" : "#FFFFFF"}
                        stroke={isSelected ? "#071A2B" : "rgba(7,26,43,0.12)"}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        className={`font-mono text-[9px] font-bold ${
                          isSelected ? "fill-white" : "fill-[#071A2B]"
                        }`}
                      >
                        {hub.label}
                      </text>
                    </g>
                  </g>
                );
              })}
            </motion.svg>

            {/* Map Camera Reset Watermark Control */}
            <div className="absolute bottom-6 left-6 text-[10px] font-mono tracking-widest text-[#667783] bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[rgba(7,26,43,0.12)]">
              LAT {currentHub.coords.lat.toFixed(4)} N // LNG {currentHub.coords.lng.toFixed(4)} E
            </div>
          </div>

          {/* Location Information Panel (35%) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-[#FFFFFF] border border-[rgba(7,26,43,0.12)] rounded-3xl p-8 sm:p-10 flex-grow flex flex-col justify-between shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHub.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  {/* Location Header */}
                  <div>
                    <span className="font-mono text-xs tracking-widest text-[#176B87] uppercase font-bold block mb-1">
                      LOCATION // {currentHub.country}
                    </span>
                    <h3 className="font-jakarta text-3xl font-extrabold text-[#071A2B]">
                      {currentHub.label}
                    </h3>
                    <p className="text-xs font-manrope text-[#667783] mt-1 font-medium">
                      {currentHub.entity}
                    </p>
                  </div>

                  <hr className="border-t border-[rgba(7,26,43,0.12)]" />

                  {/* Command Role */}
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-[#667783] uppercase block mb-3 font-semibold">
                      COMMAND ROLE
                    </span>
                    <ul className="space-y-2 text-xs font-manrope font-semibold text-[#071A2B]">
                      {currentHub.roles.map((role, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#176B87]" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-t border-[rgba(7,26,43,0.12)]" />

                  {/* Headquarters Address */}
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-[#667783] uppercase block mb-2 font-semibold">
                      HEADQUARTERS
                    </span>
                    <p className="text-xs font-manrope text-[#071A2B] font-light leading-relaxed">
                      {currentHub.address}
                    </p>
                  </div>

                  <hr className="border-t border-[rgba(7,26,43,0.12)]" />

                  {/* Contact Details */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#667783] uppercase block mb-2 font-semibold">
                      CONTACT DISPATCH
                    </span>
                    <div className="flex flex-col gap-1.5 text-xs font-manrope">
                      <a href={`tel:${currentHub.phone}`} className="text-[#071A2B] font-bold hover:text-[#176B87] transition-colors">
                        {currentHub.phone}
                      </a>
                      <a href={`mailto:${currentHub.email}`} className="text-[#176B87] font-semibold hover:underline">
                        {currentHub.email}
                      </a>
                    </div>
                  </div>

                  {/* View Location Link with Hover Arrow Animation */}
                  <div className="pt-4 border-t border-[rgba(7,26,43,0.12)]">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#071A2B] hover:text-[#176B87] transition-colors"
                      data-cursor
                      data-cursor-text="CONNECT"
                    >
                      <span>VIEW LOCATION</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
