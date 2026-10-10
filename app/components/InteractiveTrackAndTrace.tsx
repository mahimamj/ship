"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Ship, ArrowRight, Calculator, CheckCircle2, Clock, MapPin, ShieldCheck, Zap } from "lucide-react";

export const InteractiveTrackAndTrace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"TRACK" | "CALCULATOR">("TRACK");
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<any | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Estimator form state
  const [vesselType, setVesselType] = useState("TANKER");
  const [originPort, setOriginPort] = useState("Dubai (Jebel Ali)");
  const [destPort, setDestPort] = useState("Mumbai (Nhava Sheva)");
  const [cargoVolume, setCargoVolume] = useState("45,000 DWT");
  const [estimateResult, setEstimateResult] = useState<any | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTrackingResult({
        vesselName: "OCEANIC STAR ALPHA",
        imo: trackingId.toUpperCase(),
        status: "En-Route (Underway by Engine)",
        speed: "18.4 Knots",
        origin: "Jebel Ali Port, Dubai UAE",
        destination: "Nhava Sheva, Mumbai India",
        departure: "08 Aug 2026 - 14:00 GST",
        eta: "12 Aug 2026 - 06:30 IST",
        cargo: "35,000 MT Refined Oil",
        progress: 68,
      });
    }, 800);
  };

  const handleCalculateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimateResult({
      transitDays: "3 - 4 Days",
      distance: "1,180 Nautical Miles",
      estimatedRateScore: "Competitive Commercial Charter Fixture",
      vesselRecommendation: `${vesselType} Class (DNV / Lloyd's Register Certified)`,
      bunkerOptimization: "BIMCO CII Compliant Route",
    });
  };

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-[#0284C7] font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>LIVE TELEMETRY & CHARTER ESTIMATOR</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl tracking-tight text-[#0F172A] font-extrabold">
            TRACK & TRACE / FLEET ESTIMATOR
          </h2>

          <p className="text-sm font-light text-[#64748B] leading-relaxed">
            Real-time AIS vessel tracking system and interactive commercial charter & manning cost calculator.
          </p>
        </div>

        {/* Main Interactive Hub Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden max-w-4xl mx-auto">
          
          {/* Tab Switcher Bar */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setActiveTab("TRACK")}
              className={`flex-1 py-4 text-xs font-mono font-bold tracking-wider transition flex items-center justify-center space-x-2 ${
                activeTab === "TRACK"
                  ? "bg-white text-[#0284C7] border-b-2 border-[#0284C7]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Search className="w-4 h-4" />
              <span>LIVE VESSEL / CARGO AIS TRACKER</span>
            </button>

            <button
              onClick={() => setActiveTab("CALCULATOR")}
              className={`flex-1 py-4 text-xs font-mono font-bold tracking-wider transition flex items-center justify-center space-x-2 ${
                activeTab === "CALCULATOR"
                  ? "bg-white text-[#0284C7] border-b-2 border-[#0284C7]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>CHARTER & TRANSIT TIME ESTIMATOR</span>
            </button>
          </div>

          {/* Tab 1: Live Track & Trace */}
          {activeTab === "TRACK" && (
            <div className="p-8 sm:p-10 space-y-6">
              <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter B/L Number, Container ID, or IMO Code (e.g. IMO 6412691)..."
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-mono text-[#0F172A] focus:outline-none focus:border-[#0284C7] transition"
                  required
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-8 py-3.5 rounded-2xl bg-[#0F172A] hover:bg-[#0284C7] text-white font-mono text-xs font-bold transition flex items-center justify-center space-x-2 shadow-md shrink-0"
                >
                  <span>{isSearching ? "SEARCHING AIS..." : "TRACK VESSEL"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Sample Quick Searches */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
                <span>Sample Searches:</span>
                {["IMO 6412691", "OS-TANKER-808", "BL-DXB-MUM-99"].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => {
                      setTrackingId(sample);
                    }}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-sky-50 text-[#0284C7] border border-slate-200 transition"
                  >
                    {sample}
                  </button>
                ))}
              </div>

              {/* Tracking Result Card */}
              {trackingResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm"
                >
                  <div className="flex flex-wrap justify-between items-center border-b border-slate-200 pb-3 gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#0284C7] uppercase font-bold">LIVE TELEMETRY IDENTIFIED</span>
                      <h4 className="font-syne text-lg font-bold text-[#0F172A]">{trackingResult.vesselName}</h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      ● {trackingResult.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                      <span className="text-[10px] text-[#64748B] block">ORIGIN PORT:</span>
                      <span className="font-bold text-[#0F172A] block">{trackingResult.origin}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                      <span className="text-[10px] text-[#64748B] block">DESTINATION:</span>
                      <span className="font-bold text-[#0F172A] block">{trackingResult.destination}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                      <span className="text-[10px] text-[#64748B] block">SPEED:</span>
                      <span className="font-bold text-[#0284C7] block">{trackingResult.speed}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                      <span className="text-[10px] text-[#64748B] block">ESTIMATED ETA:</span>
                      <span className="font-bold text-emerald-600 block">{trackingResult.eta}</span>
                    </div>
                  </div>

                  {/* Voyage Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Voyage Completion</span>
                      <span className="font-bold text-[#0284C7]">{trackingResult.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${trackingResult.progress}%` }}
                        className="h-full bg-[#0284C7] rounded-full transition-all duration-700"
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Tab 2: Charter & Transit Estimator */}
          {activeTab === "CALCULATOR" && (
            <div className="p-8 sm:p-10 space-y-6">
              <form onSubmit={handleCalculateSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#64748B] uppercase font-bold block">VESSEL TYPE:</label>
                  <select
                    value={vesselType}
                    onChange={(e) => setVesselType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  >
                    <option value="TANKER">TANKER (Crude / Chemical)</option>
                    <option value="BULK CARRIER">BULK CARRIER (Dry Bulk)</option>
                    <option value="CONTAINER">CONTAINER SHIP (TEU)</option>
                    <option value="RO RO CARGO">RO RO CARGO (Vehicles)</option>
                    <option value="AHTS / OFFSHORE">AHTS / OFFSHORE SUPPORT</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#64748B] uppercase font-bold block">CARGO / CAPACITY:</label>
                  <input
                    type="text"
                    value={cargoVolume}
                    onChange={(e) => setCargoVolume(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#64748B] uppercase font-bold block">ORIGIN PORT:</label>
                  <input
                    type="text"
                    value={originPort}
                    onChange={(e) => setOriginPort(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#64748B] uppercase font-bold block">DESTINATION PORT:</label>
                  <input
                    type="text"
                    value={destPort}
                    onChange={(e) => setDestPort(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0F172A] hover:bg-[#0284C7] text-white font-mono text-xs font-bold transition flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>CALCULATE TRANSIT TIME & SPECS</span>
                  </button>
                </div>
              </form>

              {/* Estimate Calculation Result */}
              {estimateResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#0F172A] text-white rounded-2xl p-6 space-y-4 shadow-md"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-[#0284C7] font-bold uppercase">// ROUTE & TRANSIT CALCULATION</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">✓ OPTIMIZED</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 block">ESTIMATED TRANSIT TIME:</span>
                      <span className="font-bold text-[#0284C7] text-sm block">{estimateResult.transitDays}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 block">SEA DISTANCE:</span>
                      <span className="font-bold text-white text-sm block">{estimateResult.distance}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 block">RECOMMENDED VESSEL:</span>
                      <span className="font-bold text-emerald-400 text-xs block">{estimateResult.vesselRecommendation}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
