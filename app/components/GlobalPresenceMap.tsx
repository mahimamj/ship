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
      x: 35,
      y: 45,
    },
    mumbai: {
      entity: "Oceanic Star Shipping Pvt. Ltd.",
      city: "Mumbai, Maharashtra, India",
      role: "Global Crewing HQ & STCW Training Center",
      address: "Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India",
      phone: "+91 22 6800 0000",
      email: "mumbai@oceanicstar.com",
      license: "DG Shipping License: RPSL-MUM-245",
      x: 65,
      y: 52,
    },
    colombo: {
      entity: "Oceanic Star Lanka Pvt Ltd",
      city: "Colombo, Sri Lanka",
      role: "South Asia Port Agency & Launch Operations",
      address: "Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
      phone: "+94 11 245 0000",
      email: "colombo@oceanicstar.com",
      license: "Sri Lanka Merchant Shipping Approved",
      x: 72,
      y: 72,
    },
  };

  const selected = hubs[activeHub];

  return (
    <section id="presence" className="py-28 md:py-40 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-10 mb-16 gap-8">
          <div>
            <span className="label-mono text-[#176B87] mb-3 block font-semibold">
              // GLOBAL COMMAND INFRASTRUCTURE
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              GLOBAL HUBS
            </h2>
          </div>

          <p className="text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Strategic operational command centers in Dubai, Mumbai, and Colombo orchestrating 24/7 technical vessel dispatch and crew logistics.
          </p>
        </div>

        {/* Hub Selection Controls */}
        <div className="flex flex-wrap gap-4 mb-12">
          {(["dubai", "mumbai", "colombo"] as const).map((key) => {
            const h = hubs[key];
            const isActive = activeHub === key;
            return (
              <button
                key={key}
                onClick={() => setActiveHub(key)}
                className={`px-6 py-3 rounded-full font-mono text-xs tracking-widest transition-all duration-300 border ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Vector Map Surface with Maritime Route Paths & Traveling Dots */}
          <div className="lg:col-span-7 bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-3xl p-8 md:p-12 relative min-h-[420px] flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 800 450" className="w-full h-auto max-h-[380px]">
              {/* Subtle background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(7,26,43,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Maritime Route Lines connecting Dubai -> Mumbai -> Colombo */}
              <path
                d="M 280 180 Q 420 190 520 215"
                fill="none"
                stroke="rgba(23, 107, 135, 0.4)"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
              <path
                d="M 520 215 Q 550 250 575 290"
                fill="none"
                stroke="rgba(23, 107, 135, 0.4)"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
              <path
                d="M 280 180 Q 420 260 575 290"
                fill="none"
                stroke="rgba(7, 26, 43, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />

              {/* Hub Marker Pins */}
              {/* Dubai Pin */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveHub("dubai")}
              >
                <circle cx="280" cy="180" r="14" fill="rgba(23, 107, 135, 0.15)" />
                <circle cx="280" cy="180" r="6" fill={activeHub === "dubai" ? "#071A2B" : "#176B87"} />
                <text x="280" y="156" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#071A2B]">
                  DUBAI HQ
                </text>
              </g>

              {/* Mumbai Pin */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveHub("mumbai")}
              >
                <circle cx="520" cy="215" r="14" fill="rgba(23, 107, 135, 0.15)" />
                <circle cx="520" cy="215" r="6" fill={activeHub === "mumbai" ? "#071A2B" : "#176B87"} />
                <text x="520" y="192" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#071A2B]">
                  MUMBAI CREWING
                </text>
              </g>

              {/* Colombo Pin */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveHub("colombo")}
              >
                <circle cx="575" cy="290" r="14" fill="rgba(23, 107, 135, 0.15)" />
                <circle cx="575" cy="290" r="6" fill={activeHub === "colombo" ? "#071A2B" : "#176B87"} />
                <text x="575" y="318" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#071A2B]">
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
                transition={{ duration: 0.4 }}
                className="bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-[rgba(7,26,43,0.12)]">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87] font-bold shadow-sm">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-extrabold text-[#071A2B]">{selected.entity}</h3>
                    <span className="text-xs font-mono text-[#176B87] font-semibold">{selected.city}</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-manrope">
                  <div>
                    <span className="text-[#667783] font-semibold block mb-1">COMMAND ROLE:</span>
                    <p className="text-[#071A2B] font-medium leading-relaxed">{selected.role}</p>
                  </div>

                  <div>
                    <span className="text-[#667783] font-semibold block mb-1">HQ ADDRESS:</span>
                    <p className="text-[#071A2B] font-light leading-relaxed">{selected.address}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-[rgba(7,26,43,0.12)]">
                      <span className="text-[10px] font-mono text-[#667783] block mb-1">PHONE</span>
                      <a href={`tel:${selected.phone}`} className="text-[#071A2B] font-bold hover:text-[#176B87]">
                        {selected.phone}
                      </a>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[rgba(7,26,43,0.12)]">
                      <span className="text-[10px] font-mono text-[#667783] block mb-1">EMAIL</span>
                      <a href={`mailto:${selected.email}`} className="text-[#071A2B] font-bold hover:text-[#176B87]">
                        {selected.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 text-[11px] font-mono text-[#176B87] font-semibold">
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
