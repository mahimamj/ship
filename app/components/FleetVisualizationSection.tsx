"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Radar, Radio, Shield, X, Ship, FileText } from "lucide-react";

interface FleetVisualizationSectionProps {
  onOpenQuote?: () => void;
}

function CountUpNumber({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

// Live Fleet Vessel Data Structure
interface LiveVessel {
  name: string;
  type: string;
  dwt: string;
  speed: string;
  position: string;
  dest: string;
  eta: string;
  status: "AT SEA" | "IN PORT" | "DRY DOCK";
  classSociety: string;
  engineLoad: string;
}

export const FleetVisualizationSection: React.FC<FleetVisualizationSectionProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "AT SEA" | "IN PORT" | "DRY DOCK">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Live Telemetry Ticker state
  const [liveMetrics, setLiveMetrics] = useState({
    activeSignals: 42,
    avgSpeed: 14.8,
    cargoTons: 1849200,
  });

  // Simulated live telemetry pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics((prev) => ({
        activeSignals: 42 + Math.floor(Math.random() * 3 - 1),
        avgSpeed: Number((14.5 + Math.random() * 0.8).toFixed(1)),
        cargoTons: prev.cargoTons + Math.floor(Math.random() * 50),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fleetData = [
    {
      id: "tankers",
      type: "OIL & CHEMICAL TANKERS",
      count: 30,
      percentage: 51,
      desc: "Aframax, MR Product & Chemical Carriers operating in Gulf, Mediterranean & Asia",
      vessels: [
        { name: "M/V Oceanic Star Vanguard", type: "Aframax Oil Tanker", dwt: "108,500 DWT", speed: "14.8 Knots", position: "25° 15' N, 55° 18' E (Persian Gulf)", dest: "JNPT Mumbai", eta: "16 Aug 14:00", status: "AT SEA", classSociety: "DNV GL", engineLoad: "82% MGO" },
        { name: "M/V Star Horizon", type: "MR Product Tanker", dwt: "49,999 DWT", speed: "13.2 Knots", position: "18° 55' N, 72° 49' E (Arabian Sea)", dest: "Fujairah Port", eta: "17 Aug 09:30", status: "AT SEA", classSociety: "Lloyd's Register", engineLoad: "78% VLSFO" },
        { name: "M/V Chemical Pioneer", type: "IMO II Chemical Carrier", dwt: "19,800 DWT", speed: "0.0 Knots", position: "Port Rashid, Berth 4 (Dubai)", dest: "Port Rashid", eta: "AT BERTH", status: "IN PORT", classSociety: "ClassNK", engineLoad: "15% Auxiliary" },
        { name: "M/V Star Endurance", type: "Suezmax Crude Tanker", dwt: "158,000 DWT", speed: "15.1 Knots", position: "05° 58' N, 80° 12' E (Bay of Bengal)", dest: "Singapore Hub", eta: "19 Aug 22:15", status: "AT SEA", classSociety: "ABS", engineLoad: "85% Dual-Fuel" },
      ] as LiveVessel[],
    },
    {
      id: "bulk",
      type: "DRY BULK CARRIERS",
      count: 14,
      percentage: 24,
      desc: "Handymax & Supramax Bulk Carriers handling Iron Ore, Coal & Grains",
      vessels: [
        { name: "M/V Oceanic Trade Wind", type: "Supramax Bulk Carrier", dwt: "58,000 DWT", speed: "12.9 Knots", position: "12° 04' N, 75° 12' E (Malabar Coast)", dest: "Colombo Port", eta: "17 Aug 18:00", status: "AT SEA", classSociety: "DNV GL", engineLoad: "75% MGO" },
        { name: "M/V Star Merchant", type: "Handymax Bulker", dwt: "45,200 DWT", speed: "0.0 Knots", position: "Kandla Port, Gujarat", dest: "Kandla Port", eta: "DISCHARGING", status: "IN PORT", classSociety: "Lloyd's Register", engineLoad: "12% Aux" },
        { name: "M/V Star Express", type: "Ultramax Bulker", dwt: "63,500 DWT", speed: "13.8 Knots", position: "01° 16' N, 103° 50' E (Malacca Strait)", dest: "Tianjin China", eta: "22 Aug 08:00", status: "AT SEA", classSociety: "ABS", engineLoad: "80% VLSFO" },
      ] as LiveVessel[],
    },
    {
      id: "containers",
      type: "CONTAINER VESSELS",
      count: 7,
      percentage: 12,
      desc: "Regional Feeder & Panamax Container Carriers (1,200 TEU - 4,500 TEU)",
      vessels: [
        { name: "M/V Oceanic Express Feeder", type: "Feeder Container Ship", dwt: "24,000 DWT / 1,850 TEU", speed: "16.4 Knots", position: "23° 40' N, 68° 30' E (Gulf of Kutch)", dest: "Jebel Ali Port", eta: "16 Aug 06:00", status: "AT SEA", classSociety: "DNV GL", engineLoad: "88% MGO" },
        { name: "M/V Star Container 4", type: "Panamax Container Ship", dwt: "52,000 DWT / 4,250 TEU", speed: "0.0 Knots", position: "Dry Dock Yard 2 (Dubai)", dest: "Under Maintenance", eta: "24 Aug Completion", status: "DRY DOCK", classSociety: "Lloyd's Register", engineLoad: "0% Docked" },
      ] as LiveVessel[],
    },
    {
      id: "roro",
      type: "RO-RO CAR CARRIERS",
      count: 4,
      percentage: 7,
      desc: "Pure Car & Truck Carriers (PCTC) with 3,500 CEU deck capacity",
      vessels: [
        { name: "M/V Oceanic Highway", type: "PCTC Ro-Ro Carrier", dwt: "18,500 DWT / 3,800 CEU", speed: "15.6 Knots", position: "15° 20' N, 58° 10' E (Arabian Sea)", dest: "Jeddah Islamic Port", eta: "18 Aug 12:00", status: "AT SEA", classSociety: "ClassNK", engineLoad: "84% MGO" },
      ] as LiveVessel[],
    },
    {
      id: "offshore",
      type: "OFFSHORE AHTS & DP2",
      count: 4,
      percentage: 6,
      desc: "Dynamic Positioning DP2 Anchor Handling Tug Supply Vessels & Towage",
      vessels: [
        { name: "M/V Oceanic Titan Tug", type: "DP2 AHTS Vessel", dwt: "3,200 DWT / 120T Bollard Pull", speed: "11.2 Knots", position: "Bombay High Offshore Rig Field", dest: "ON STATION", status: "AT SEA", classSociety: "ABS", engineLoad: "65% DP Hold" },
      ] as LiveVessel[],
    },
  ];

  const selectedCategoryObj = fleetData.find((f) => f.type === selectedCategory);

  return (
    <section id="vessels" className="py-28 md:py-40 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)] relative">
      <div id="fleet" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Live Telemetry Ticker Header Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-[#071A2B] text-white border border-[#176B87]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#176B87]/30 border border-[#176B87] text-[#00D26A] animate-pulse">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#00D26A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping"></span>
                LIVE AIS SATELLITE TELEMETRY STREAM
              </div>
              <div className="text-sm font-bold font-jakarta text-white">
                {liveMetrics.activeSignals} Vessels Broadcasting Active Coordinates
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div className="text-center">
              <div className="text-slate-400 text-[10px] uppercase">Avg Fleet Speed</div>
              <div className="text-[#00D26A] font-bold text-sm">{liveMetrics.avgSpeed} Knots</div>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px] uppercase">Active Cargo Payload</div>
              <div className="text-cyan-300 font-bold text-sm">{liveMetrics.cargoTons.toLocaleString()} MT</div>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px] uppercase">AIS Security Rating</div>
              <div className="text-[#00D26A] font-bold text-sm flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> IMO Class-A
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-10 mb-12 gap-8">
          <div>
            <span className="label-mono text-[#176B87] mb-3 block font-semibold">
              // FLEET BREAKDOWN &amp; LIVE ASSET MATRIX
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              59 VESSELS
            </h2>
            <p className="font-mono text-xs text-[#667783] uppercase tracking-widest mt-2 flex items-center gap-2">
              <span>UNDER TECHNICAL &amp; COMMERCIAL MANAGEMENT</span>
              <span className="px-2 py-0.5 rounded bg-[#176B87]/10 text-[#176B87] font-bold text-[10px]">LIVE TELEMETRY INSIGHTS</span>
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-sm font-manrope text-[#667783] leading-relaxed">
              Real-time asset distribution across International Shipping routes under DNV GL, ABS, ClassNK, and Lloyd&apos;s Register.
            </p>

            {/* Live Filter Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {(["ALL", "AT SEA", "IN PORT", "DRY DOCK"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                    activeFilter === filter
                      ? "bg-[#071A2B] text-white border-[#071A2B] shadow-md"
                      : "bg-white text-[#667783] border-[rgba(7,26,43,0.12)] hover:border-[#176B87] hover:text-[#071A2B]"
                  }`}
                >
                  {filter === "ALL" ? "All Fleet (59)" : filter === "AT SEA" ? "🟢 At Sea (42)" : filter === "IN PORT" ? "⚓ In Port (12)" : "🔧 Dry Dock (5)"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Animated Fleet Bars with Automatic Count-Up & Progress Fill on Scroll */}
        <div className="space-y-6 max-w-5xl">
          {fleetData.map((item, index) => {
            return (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(item.type)}
                className="group p-5 rounded-2xl bg-white border border-[rgba(7,26,43,0.12)] hover:border-[#176B87] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden space-y-3"
              >
                {/* Glowing top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#176B87] via-[#00D26A] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#071A2B]/5 border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87] group-hover:bg-[#071A2B] group-hover:text-white transition-colors">
                      <Ship className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-syne text-lg sm:text-xl font-bold tracking-tight text-[#071A2B] group-hover:text-[#176B87] transition-colors block">
                        {item.type}
                      </span>
                      <span className="text-xs text-[#667783] font-manrope hidden sm:block">
                        {item.desc}
                      </span>
                    </div>
                  </div>

                  {/* Animated Live Count Up Number */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#176B87]">
                      <CountUpNumber end={item.count} /> <span className="text-xs text-[#667783] font-normal uppercase">UNITS</span>
                    </span>
                  </div>
                </div>

                {/* Automatic Growing Progress Bar on Scroll */}
                <div className="w-full h-2.5 bg-[#F5F5F2] rounded-full overflow-hidden border border-[rgba(7,26,43,0.08)]">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#071A2B] via-[#176B87] to-[#00D26A] rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Interactive Fleet Radar Inspector Drawer Modal */}
        <AnimatePresence>
          {selectedCategoryObj && (
            <div className="fixed inset-0 z-[9999] bg-[#071A2B]/85 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0F2C59] border border-[#176B87]/40 rounded-3xl p-6 sm:p-8 max-w-3xl w-full text-white shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-[#071A2B] border border-white/10 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Modal Title Header */}
                <div className="flex items-center gap-3 border-b border-[#176B87]/30 pb-4">
                  <div className="p-3 rounded-2xl bg-[#176B87]/30 border border-[#176B87] text-[#00D26A]">
                    <Radar className="w-6 h-6 animate-radar" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-jakarta text-white">{selectedCategoryObj.type}</h3>
                    <p className="text-xs text-[#00D26A] font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping"></span> Live AIS Satellite Telemetry Stream ({selectedCategoryObj.count} Units Active)
                    </p>
                  </div>
                </div>

                {/* Live Vessels List Grid */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">Active Vessel Roster &amp; Coordinates</h4>
                  {selectedCategoryObj.vessels.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#071A2B]/90 border border-[#176B87]/30 hover:border-[#176B87] transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{v.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#176B87]/30 text-cyan-300 text-[10px] font-mono font-bold">
                            {v.type}
                          </span>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                            v.status === "AT SEA"
                              ? "bg-[#00D26A]/20 text-[#00D26A] border border-[#00D26A]/40"
                              : v.status === "IN PORT"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                          }`}
                        >
                          ● {v.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-slate-300">
                        <div>
                          <span className="text-slate-500 block text-[10px]">DWT &amp; Class</span>
                          <span className="font-bold text-white">{v.dwt} ({v.classSociety})</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Speed / Engine Load</span>
                          <span className="font-bold text-[#00D26A]">{v.speed} ({v.engineLoad})</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">AIS Position</span>
                          <span className="font-bold text-white truncate block">{v.position}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Destination / ETA</span>
                          <span className="font-bold text-cyan-300">{v.dest} ({v.eta})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-[#176B87]/30 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Verified Class DNV GL &amp; ABS Compliant</span>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      if (onOpenQuote) onOpenQuote();
                    }}
                    className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
                  >
                    <FileText className="w-3.5 h-3.5" /> Request Charter Availability Quote
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
