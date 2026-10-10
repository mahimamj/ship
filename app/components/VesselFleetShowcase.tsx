"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Shield, Layers, Gauge, Ship, ArrowRight, Activity, Sparkles } from "lucide-react";

export interface FleetItem {
  id: string;
  name: string;
  count: number;
  percentage: number;
  category: string;
  dwtRange: string;
  cargoType: string;
  image: string;
  description: string;
  protocols: string[];
}

export const FLEET_BREAKDOWN: FleetItem[] = [
  {
    id: "tanker",
    name: "TANKER",
    count: 30,
    percentage: 50.8,
    category: "Liquid Cargo & Petroleum",
    dwtRange: "45,000 — 300,000 DWT",
    cargoType: "Crude Oil, Refined Products, Chemicals & Jet Fuel",
    image: "/images/hero_vessel.png",
    description: "30 Tanker vessels managed under strict SIRE 2.0 vetting standards, inert gas system (IGS) protocols, double hull inspection protocols, and OCIMF safety guidelines.",
    protocols: ["SIRE 2.0 Vetting Inspection Ready", "Double Hull Integrity Audits", "Inert Gas & COW Systems", "Marpol Annex I Compliance"],
  },
  {
    id: "bulk",
    name: "BULK CARRIER",
    count: 14,
    percentage: 23.7,
    category: "Dry Bulk Commodity",
    dwtRange: "28,000 — 180,000 DWT",
    cargoType: "Iron Ore, Coal, Grain, Cement, Bauxite",
    image: "/images/hero_vessel.png",
    description: "14 Bulk carriers including Handysize, Supramax, Ultramax, and Capesize bulkers operated under strict hold cleanliness protocols and grain loading stability calculations.",
    protocols: ["Gears & Grabs Maintenance", "Grain Code Stability Math", "Hold Washing & Inspection", "BIMCO Chartering Compliance"],
  },
  {
    id: "container",
    name: "CONTAINER",
    count: 7,
    percentage: 11.9,
    category: "Liner Cargo & TEU",
    dwtRange: "1,200 — 14,000 TEU",
    cargoType: "TEU Containers, Reefer Plugs, Dangerous Goods",
    image: "/images/hero_vessel.png",
    description: "7 Feeder, Panamax, and Post-Panamax container vessels managed for high-speed schedule reliability, 24/7 reefer plug monitoring, and IMDG dangerous goods stowage.",
    protocols: ["Reefer Plug Monitoring 24/7", "IMDG Code Dangerous Goods", "Lashing Bridge Audits", "High Speed Engine Care"],
  },
  {
    id: "roro",
    name: "RO RO CARGO",
    count: 4,
    percentage: 6.8,
    category: "Vehicle & Rolling Cargo",
    dwtRange: "12,000 — 25,000 DWT",
    cargoType: "Automobiles, Trucks, Heavy Machinery, Trailers",
    image: "/images/hero_vessel.png",
    description: "4 Roll-on/Roll-off vehicle carriers engineered with multi-deck internal ramps, heavy vehicle floor load limit verifications, and fire detection systems.",
    protocols: ["Multi-Deck Ramp Safety", "Ventilation Smoke Detectors", "Wheel Chock Lashing Systems", "Car Carrier Safety Standards"],
  },
  {
    id: "ahts",
    name: "AHTS",
    count: 1,
    percentage: 1.7,
    category: "Offshore Towage & Anchor Handling",
    dwtRange: "3,500 DWT / 150T BP",
    cargoType: "Offshore Rigs, Rig Anchors, Towage Supplies",
    image: "/images/dry_dock_engineering.png",
    description: "1 Anchor Handling Tug Supply vessel equipped with high-pull bollard towing winches, dynamic positioning (DP2), and offshore platform support capability.",
    protocols: ["DP2 System Maintenance", "Bollard Pull Certification", "Offshore Oil Major Vetting", "Rig Anchor Handling Ops"],
  },
  {
    id: "gen-cargo",
    name: "GEN CARGO",
    count: 1,
    percentage: 1.7,
    category: "Breakbulk & General Commodities",
    dwtRange: "15,000 DWT",
    cargoType: "Steel Coils, Timber, Bagged Goods, Heavy Equipment",
    image: "/images/hero_vessel.png",
    description: "1 General Cargo vessel providing flexible breakbulk stowage, deck cargo securing math, and multi-purpose port discharge operations.",
    protocols: ["Breakbulk Stowage Audits", "Heavy Cranage Inspection", "Timber Code Compliance", "Port Crane Dispatch"],
  },
  {
    id: "lpg-tanker",
    name: "LPG TANKER",
    count: 1,
    percentage: 1.7,
    category: "Liquefied Gas Logistics",
    dwtRange: "35,000 CBM",
    cargoType: "Liquefied Petroleum Gas (Propane & Butane)",
    image: "/images/dry_dock_engineering.png",
    description: "1 Fully refrigerated Liquefied Petroleum Gas (LPG) tanker with cargo reliquefaction plants, ESD emergency shutdown systems, and specialized gas crew.",
    protocols: ["SIGTTO Guidelines", "Reliquefaction Plant Overhaul", "Gas Carrier STCW Training", "ESD Safety Loop Tests"],
  },
  {
    id: "offshore-support",
    name: "OFFSHORE SUPPORT",
    count: 1,
    percentage: 1.7,
    category: "Offshore Field Operations",
    dwtRange: "4,000 DWT",
    cargoType: "Drilling Fluids, Fuel Oil, Deck Supplies, Crew Transfer",
    image: "/images/crew_training.png",
    description: "1 Specialized Offshore Supply & Field Support vessel operating in Arabian Gulf offshore fields with liquid mud tanks and offshore oil major approval.",
    protocols: ["Liquid Mud Tank Care", "Dynamic Positioning Ops", "Field Supply Safety", "Offshore Safety Standard"],
  },
];

export const VesselFleetShowcase: React.FC = () => {
  const [selectedFleet, setSelectedFleet] = useState<FleetItem>(FLEET_BREAKDOWN[0]);
  const totalFleetCount = FLEET_BREAKDOWN.reduce((acc, curr) => acc + curr.count, 0); // 59

  return (
    <section id="vessels" className="py-28 md:py-36 bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-[#0284C7] font-semibold mb-4">
              <Ship className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>ACTIVE MANAGEMENT BREAKDOWN • {totalFleetCount} FLEET VESSELS</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0F172A] font-extrabold leading-none">
              MANAGED FLEET MATRIX
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center space-x-6 shadow-sm">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase block">GRAND TOTAL FLEET</span>
              <div className="font-bebas text-4xl text-[#0284C7] font-bold flex items-center space-x-2">
                <span>{totalFleetCount}</span>
                <span className="text-sm font-sans font-light text-[#0F172A]">VESSELS</span>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-slate-200"></div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase block">SAFETY COMPLIANCE</span>
              <span className="text-sm font-mono font-bold text-emerald-600">100% ISM / SOLAS</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Distribution Bar */}
        <div className="mb-14 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#64748B]">
            <span>FLEET DISTRIBUTION CAPACITY (%)</span>
            <span className="text-[#0284C7] font-bold">TOTAL: 59 UNITS</span>
          </div>

          {/* Segmented Bar */}
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200">
            {FLEET_BREAKDOWN.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedFleet(item)}
                style={{ width: `${item.percentage}%` }}
                className={`h-full cursor-pointer transition-all duration-300 relative group ${
                  selectedFleet.id === item.id ? "bg-[#0284C7] ring-2 ring-sky-300" : "bg-slate-300 hover:bg-[#0284C7]/60"
                }`}
                title={`${item.name}: ${item.count} Vessels (${item.percentage}%)`}
              />
            ))}
          </div>

          {/* Legend Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 pt-2">
            {FLEET_BREAKDOWN.map((item) => {
              const isSelected = selectedFleet.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFleet(item)}
                  className={`p-2.5 rounded-xl border text-left transition duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0284C7] border-[#0284C7] text-white shadow-md scale-105"
                      : "bg-slate-50 border-slate-200 text-[#64748B] hover:border-[#0284C7]/50 hover:text-[#0F172A]"
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold truncate ${isSelected ? "text-white" : "text-[#0F172A]"}`}>{item.name}</span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className={`font-bebas text-lg font-bold ${isSelected ? "text-white" : "text-[#0284C7]"}`}>{item.count}</span>
                    <span className={`text-[9px] font-mono ${isSelected ? "text-sky-100" : "text-[#64748B]"}`}>{item.percentage}%</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Vessel Interactive Showcase Card */}
        <motion.div
          key={selectedFleet.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="editorial-card rounded-3xl overflow-hidden grid lg:grid-cols-12 border border-slate-200 shadow-md bg-white"
        >
          {/* Left Column: Imagery & Visual Overlay */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px]">
            <img
              src={selectedFleet.image}
              alt={selectedFleet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white"></div>
            
            {/* Top Badge */}
            <div className="absolute top-6 left-6 bg-white/95 border border-slate-200 rounded-full px-4 py-1.5 text-xs font-mono text-[#0284C7] font-bold backdrop-blur-md shadow-md flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>{selectedFleet.category}</span>
            </div>

            {/* Vessel Count Floating Highlight */}
            <div className="absolute bottom-6 left-6 bg-white/95 border border-slate-200 rounded-2xl p-4 backdrop-blur-xl shadow-md">
              <span className="text-[10px] font-mono text-[#64748B] uppercase block">TOTAL UNITS MANAGED</span>
              <div className="font-bebas text-4xl text-[#0F172A] font-bold flex items-center space-x-2">
                <span>{selectedFleet.count}</span>
                <span className="text-xs font-sans text-[#0284C7] font-semibold">VESSELS IN FLEET</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Details */}
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-start mb-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#0284C7] uppercase block font-semibold">CATEGORY SPECIFICATIONS</span>
                  <h3 className="font-bebas text-4xl sm:text-5xl font-bold text-[#0F172A]">
                    {selectedFleet.name} FLEET
                  </h3>
                </div>
                <span className="bg-sky-50 border border-sky-100 text-[#0284C7] text-xs font-mono px-3.5 py-1.5 rounded-full font-bold">
                  {selectedFleet.count} UNITS ({selectedFleet.percentage}%)
                </span>
              </div>

              <p className="text-sm font-light text-[#64748B] leading-relaxed mb-6">
                {selectedFleet.description}
              </p>

              {/* DWT & Cargo Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-[#64748B] uppercase block">DWT / CAPACITY RANGE</span>
                  <span className="font-mono text-sm font-bold text-[#0284C7]">{selectedFleet.dwtRange}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-[#64748B] uppercase block">COMMODITY & CARGO TYPE</span>
                  <span className="font-mono text-xs font-semibold text-[#0F172A] truncate block">{selectedFleet.cargoType}</span>
                </div>
              </div>

              {/* Technical Compliance & Protocols */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#0F172A] uppercase tracking-wider font-bold block">
                  TECHNICAL MANAGEMENT PROTOCOLS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFleet.protocols.map((protocol, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-[#64748B]">
                      <Shield className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs font-mono text-[#64748B]">
                Status: <strong className="text-emerald-600 font-bold">100% Operational Readiness</strong>
              </span>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white text-xs font-mono font-bold transition flex items-center space-x-2 shadow-md"
              >
                <span>REQUEST MANAGEMENT SPECS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
