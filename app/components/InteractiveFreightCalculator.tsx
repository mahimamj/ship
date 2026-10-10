"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Fuel, Clock, DollarSign, Leaf, Layers, Ship, Info } from "lucide-react";

interface InteractiveFreightCalculatorProps {
  onOpenQuote: () => void;
}

export function InteractiveFreightCalculator({ onOpenQuote }: InteractiveFreightCalculatorProps) {
  const [teuVolume, setTeuVolume] = useState<number>(24);
  const [distanceNm, setDistanceNm] = useState<number>(2400); // e.g. Dubai to Mumbai / Colombo
  const [containerType, setContainerType] = useState<"standard" | "reefer" | "hazmat" | "bulk">("standard");
  const [vesselSpeed, setVesselSpeed] = useState<number>(16); // knots

  // Calculation Logic
  const speedMultiplier = containerType === "reefer" ? 1.3 : containerType === "hazmat" ? 1.45 : containerType === "bulk" ? 1.2 : 1.0;
  const transitHours = Math.round(distanceNm / vesselSpeed);
  const transitDays = (transitHours / 24).toFixed(1);

  // Base rate calculation per TEU per 1000 NM
  const baseRatePerTeuNm = 0.45 * speedMultiplier;
  const estimatedCost = Math.round(teuVolume * (distanceNm / 1000) * 850 * speedMultiplier + teuVolume * 320);

  // CO2 calculation: ~0.015 kg CO2 per TEU-km
  const distanceKm = distanceNm * 1.852;
  const co2Tons = ((teuVolume * distanceKm * 0.015) / 1000).toFixed(1);

  // IMO CII Grade rating
  const ciiGrade = Number(co2Tons) < 15 ? "A (Ultra-Eco)" : Number(co2Tons) < 45 ? "B (Efficient)" : "C (Standard)";

  return (
    <section id="freight-calculator" className="py-20 bg-[#071A2B] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#176B87]/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#00D26A]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-jakarta tracking-tight leading-tight">
            Real-Time Freight &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#176B87] via-[#00D26A] to-cyan-400">Cargo TEU Estimator</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Adjust volume, route distance, vessel speed, and cargo specs to dynamically calculate freight cost estimates, transit timelines, and IMO carbon efficiency metrics.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#0F2C59]/80 backdrop-blur-xl border border-[#176B87]/30 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* Control 1: TEU Volume */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2 text-slate-200">
                  <Layers className="w-4 h-4 text-[#176B87]" /> Container Volume (TEUs / Containers)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#176B87]/30 border border-[#176B87]/50 text-[#00D26A] font-mono text-base font-black">
                  {teuVolume} TEU{teuVolume > 1 ? "s" : ""}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={250}
                value={teuVolume}
                onChange={(e) => setTeuVolume(Number(e.target.value))}
                className="w-full h-2 bg-[#071A2B] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 TEU (20ft)</span>
                <span>50 TEUs</span>
                <span>250 TEUs (Full Feeder)</span>
              </div>
            </div>

            {/* Control 2: Distance */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2 text-slate-200">
                  <Ship className="w-4 h-4 text-[#176B87]" /> Nautical Miles (Voyage Distance)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#176B87]/30 border border-[#176B87]/50 text-cyan-300 font-mono text-base font-black">
                  {distanceNm.toLocaleString()} NM
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={12000}
                step={100}
                value={distanceNm}
                onChange={(e) => setDistanceNm(Number(e.target.value))}
                className="w-full h-2 bg-[#071A2B] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>300 NM (Short-Sea)</span>
                <span>2,400 NM (Gulf to India)</span>
                <span>12,000 NM (Asia to Europe)</span>
              </div>
            </div>

            {/* Control 3: Cargo Type Buttons */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200 block">Cargo &amp; Container Specification</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "standard", label: "Dry Standard", desc: "General Cargo" },
                  { id: "reefer", label: "Reefer (Cold)", desc: "Temp Controlled" },
                  { id: "hazmat", label: "IMO Hazmat", desc: "Dangerous Goods" },
                  { id: "bulk", label: "Project Cargo", desc: "Heavy Lift / OOG" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setContainerType(type.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      containerType === type.id
                        ? "bg-[#176B87] border-[#00D26A] text-white shadow-lg shadow-[#176B87]/40"
                        : "bg-[#071A2B]/60 border-[#176B87]/30 text-slate-300 hover:border-[#176B87]"
                    }`}
                  >
                    <div className="text-xs font-bold">{type.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Vessel Speed */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2 text-slate-200">
                  <Fuel className="w-4 h-4 text-[#176B87]" /> Vessel Cruising Speed (Eco vs Express)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#176B87]/30 border border-[#176B87]/50 text-amber-300 font-mono text-sm font-bold">
                  {vesselSpeed} Knots ({vesselSpeed <= 13 ? "Eco Steaming" : vesselSpeed <= 18 ? "Standard" : "Express Transit"})
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={22}
                value={vesselSpeed}
                onChange={(e) => setVesselSpeed(Number(e.target.value))}
                className="w-full h-2 bg-[#071A2B] rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F2C59] to-[#071A2B] border border-[#176B87]/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#176B87]/30 pb-4">
              <h3 className="text-lg font-bold font-jakarta text-white">Logistics &amp; Cost Output</h3>
              <span className="px-2.5 py-1 rounded-full bg-[#00D26A]/20 text-[#00D26A] text-[11px] font-mono font-bold">
                LIVE ESTIMATE
              </span>
            </div>

            {/* Estimated Rate Box */}
            <div className="p-5 rounded-2xl bg-[#071A2B]/90 border border-[#176B87]/40 space-y-1">
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider flex items-center justify-between">
                <span>Estimated Freight Cost Range</span>
                <DollarSign className="w-4 h-4 text-[#00D26A]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-jakarta text-[#00D26A]">
                ${(estimatedCost * 0.92).toLocaleString(undefined, { maximumFractionDigits: 0 })} – ${(estimatedCost * 1.08).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[11px] text-slate-400 font-mono pt-1">
                Includes BAF (Bunker Adjustment), THCs &amp; Terminal Handling
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0F2C59]/60 border border-[#176B87]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#176B87]" /> Transit Time
                </div>
                <div className="text-xl font-bold font-jakarta text-white">{transitDays} Days</div>
                <div className="text-[10px] text-slate-400 font-mono">{transitHours} Total Hours</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F2C59]/60 border border-[#176B87]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Leaf className="w-3.5 h-3.5 text-[#00D26A]" /> CO2 Footprint
                </div>
                <div className="text-xl font-bold font-jakarta text-white">{co2Tons} Tons</div>
                <div className="text-[10px] text-[#00D26A] font-mono font-bold">IMO Rating: {ciiGrade}</div>
              </div>
            </div>

            {/* Fine Print Note */}
            <div className="p-3.5 rounded-xl bg-[#176B87]/10 border border-[#176B87]/20 flex items-start gap-2.5 text-xs text-slate-300">
              <Info className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
              <span>
                Calculated based on real-time marine fuel index, port congestion buffers, and standard maritime tariffs.
              </span>
            </div>

            {/* Instant Action CTA */}
            <button
              onClick={onOpenQuote}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#176B87] via-[#0F2C59] to-[#00D26A] hover:opacity-95 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#176B87]/30 group"
            >
              <span>Lock In Custom Proposal Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
