"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Compass } from "lucide-react";

export const GlobalPresenceMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<"dubai" | "mumbai" | "colombo">("dubai");

  const hubs = {
    dubai: {
      entity: "Oceanic Star Fleet Ship Management LLC",
      city: "Dubai, United Arab Emirates",
      role: "Middle East Operational HQ & Technical Management",
      address: "Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE",
      phone: "+971 4 399 0000",
      email: "dubai@oceanicstar.com",
      license: "UAE Commercial License #789402",
      x: 280,
      y: 180,
    },
    mumbai: {
      entity: "Oceanic Star Shipping Pvt. Ltd.",
      city: "Mumbai, Maharashtra, India",
      role: "Global Crewing HQ & STCW Training Center",
      address: "Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India",
      phone: "+91 22 6800 0000",
      email: "mumbai@oceanicstar.com",
      license: "DG Shipping License: RPSL-MUM-245",
      x: 520,
      y: 215,
    },
    colombo: {
      entity: "Oceanic Star Lanka Pvt Ltd",
      city: "Colombo, Sri Lanka",
      role: "South Asia Port Agency & Launch Operations",
      address: "Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
      phone: "+94 11 245 0000",
      email: "colombo@oceanicstar.com",
      license: "Sri Lanka Merchant Shipping Approved",
      x: 575,
      y: 290,
    },
  };

  const selected = hubs[activeHub];

  return (
    <section id="presence" className="py-20 md:py-36 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-8 mb-12 gap-6">
          <div>
            <span className="label-mono text-[#176B87] mb-2.5 block font-semibold">
              // GLOBAL COMMAND INFRASTRUCTURE
            </span>
            <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              GLOBAL HUBS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Strategic operational command centers in Dubai, Mumbai, and Colombo orchestrating 24/7 technical vessel dispatch and crew logistics.
          </p>
        </div>

        {/* Hub Selection Controls */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(["dubai", "mumbai", "colombo"] as const).map((key) => {
            const h = hubs[key];
            const isActive = activeHub === key;
            return (
              <button
                key={key}
                onClick={() => setActiveHub(key)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-widest transition-all duration-300 border ${
                  isActive
                    ? "bg-[#071A2B] text-white border-[#071A2B] font-bold shadow-md"
                    : "bg-[#F5F5F2] text-[#667783] border-[rgba(7,26,43,0.12)] hover:border-[#071A2B] hover:text-[#071A2B]"
                }`}
                data-cursor
                data-cursor-text="SELECT"
              >
                {key.toUpperCase()} // {h.city.split(",")[0]}
              </button>
            );
          })}
        </div>

        {/* Interactive Editorial Map Surface & Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Vector Map Surface with Realistic World Continents & Maritime Routes */}
          <div className="lg:col-span-7 bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-3xl p-6 sm:p-10 relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden shadow-inner">
            <svg viewBox="0 0 800 450" className="w-full h-auto max-h-[400px]">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(7,26,43,0.04)" strokeWidth="1" />
                </pattern>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#176B87" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#176B87" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Grid Background */}
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Vector Continent Landmass Outlines */}
              {/* Europe & Mediterranean */}
              <path
                d="M 120 60 Q 180 50 250 70 Q 220 110 180 120 Q 140 100 120 60 Z"
                fill="rgba(7, 26, 43, 0.05)"
                stroke="rgba(7, 26, 43, 0.15)"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M 150 140 Q 230 140 270 190 Q 250 270 190 340 Q 130 280 130 200 Z"
                fill="rgba(7, 26, 43, 0.05)"
                stroke="rgba(7, 26, 43, 0.15)"
                strokeWidth="1"
              />
              {/* Arabian Peninsula & Middle East */}
              <path
                d="M 240 130 Q 310 130 330 170 Q 300 230 250 220 Q 230 180 240 130 Z"
                fill="rgba(7, 26, 43, 0.08)"
                stroke="rgba(7, 26, 43, 0.2)"
                strokeWidth="1.2"
              />
              {/* Indian Subcontinent */}
              <path
                d="M 430 140 Q 560 140 600 190 Q 550 280 520 290 Q 450 240 430 140 Z"
                fill="rgba(7, 26, 43, 0.08)"
                stroke="rgba(7, 26, 43, 0.2)"
                strokeWidth="1.2"
              />
              {/* Sri Lanka Island */}
              <ellipse
                cx="575"
                cy="290"
                rx="14"
                ry="20"
                fill="rgba(23, 107, 135, 0.15)"
                stroke="rgba(23, 107, 135, 0.3)"
                strokeWidth="1"
              />
              {/* Southeast Asia & Far East */}
              <path
                d="M 610 160 Q 720 160 760 210 Q 700 300 640 270 Q 600 220 610 160 Z"
                fill="rgba(7, 26, 43, 0.05)"
                stroke="rgba(7, 26, 43, 0.15)"
                strokeWidth="1"
              />

              {/* Maritime Shipping Route Curves */}
              {/* Dubai to Mumbai Route */}
              <path
                d="M 280 180 Q 400 195 520 215"
                fill="none"
                stroke="#176B87"
                strokeWidth="2.5"
                strokeDasharray="6,6"
              />
              {/* Mumbai to Colombo Route */}
              <path
                d="M 520 215 Q 550 250 575 290"
                fill="none"
                stroke="#176B87"
                strokeWidth="2.5"
                strokeDasharray="6,6"
              />
              {/* Direct Ocean Route Dubai to Colombo */}
              <path
                d="M 280 180 Q 420 260 575 290"
                fill="none"
                stroke="rgba(7, 26, 43, 0.25)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />

              {/* Hub Interactive Marker Pins */}
              {/* Dubai Pin */}
              <g className="cursor-pointer group" onClick={() => setActiveHub("dubai")}>
                <circle cx="280" cy="180" r="22" fill="url(#glow)" className="animate-pulse" />
                <circle cx="280" cy="180" r="7" fill={activeHub === "dubai" ? "#071A2B" : "#176B87"} stroke="#FFFFFF" strokeWidth="2" />
                <rect x="235" y="140" width="90" height="24" rx="12" fill="#FFFFFF" stroke="rgba(7,26,43,0.15)" strokeWidth="1" />
                <text x="280" y="156" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#071A2B]">
                  DUBAI HQ
                </text>
              </g>

              {/* Mumbai Pin */}
              <g className="cursor-pointer group" onClick={() => setActiveHub("mumbai")}>
                <circle cx="520" cy="215" r="22" fill="url(#glow)" className="animate-pulse" />
                <circle cx="520" cy="215" r="7" fill={activeHub === "mumbai" ? "#071A2B" : "#176B87"} stroke="#FFFFFF" strokeWidth="2" />
                <rect x="460" y="176" width="120" height="24" rx="12" fill="#FFFFFF" stroke="rgba(7,26,43,0.15)" strokeWidth="1" />
                <text x="520" y="192" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#071A2B]">
                  MUMBAI CREWING
                </text>
              </g>

              {/* Colombo Pin */}
              <g className="cursor-pointer group" onClick={() => setActiveHub("colombo")}>
                <circle cx="575" cy="290" r="22" fill="url(#glow)" className="animate-pulse" />
                <circle cx="575" cy="290" r="7" fill={activeHub === "colombo" ? "#071A2B" : "#176B87"} stroke="#FFFFFF" strokeWidth="2" />
                <rect x="520" y="318" width="110" height="24" rx="12" fill="#FFFFFF" stroke="rgba(7,26,43,0.15)" strokeWidth="1" />
                <text x="575" y="334" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#071A2B]">
                  COLOMBO PORT
                </text>
              </g>
            </svg>
          </div>

          {/* Floating Editorial Hub Info Surface */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                <div className="flex items-center gap-3.5 pb-5 border-b border-[rgba(7,26,43,0.12)]">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87] font-bold shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-jakarta text-lg sm:text-xl font-extrabold text-[#071A2B]">{selected.entity}</h3>
                    <span className="text-xs font-mono text-[#176B87] font-semibold">{selected.city}</span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs font-manrope">
                  <div>
                    <span className="text-[#667783] font-semibold block mb-0.5">COMMAND ROLE:</span>
                    <p className="text-[#071A2B] font-medium leading-relaxed">{selected.role}</p>
                  </div>

                  <div>
                    <span className="text-[#667783] font-semibold block mb-0.5">HQ ADDRESS:</span>
                    <p className="text-[#071A2B] font-light leading-relaxed">{selected.address}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-white rounded-xl border border-[rgba(7,26,43,0.12)]">
                      <span className="text-[10px] font-mono text-[#667783] block mb-0.5">PHONE</span>
                      <a href={`tel:${selected.phone}`} className="text-[#071A2B] font-bold hover:text-[#176B87]">
                        {selected.phone}
                      </a>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[rgba(7,26,43,0.12)]">
                      <span className="text-[10px] font-mono text-[#667783] block mb-0.5">EMAIL</span>
                      <a href={`mailto:${selected.email}`} className="text-[#071A2B] font-bold hover:text-[#176B87]">
                        {selected.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-[11px] font-mono text-[#176B87] font-semibold">
                    {selected.license}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
