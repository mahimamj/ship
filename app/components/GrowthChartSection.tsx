"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Ship, ShieldCheck, CheckCircle2 } from "lucide-react";

export const GrowthChartSection: React.FC = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const growthData = [
    { year: "2020", count: 50, label: "50 Managed Operations" },
    { year: "2021", count: 120, label: "120 Managed Operations" },
    { year: "2022", count: 210, label: "210 Managed Operations" },
    { year: "2023", count: 250, label: "250+ Managed Operations" },
  ];

  const maxCount = 250;

  return (
    <section className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-teal-500/30 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Subtle Glow background */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left Column: Official Growth Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-teal-400">
              <TrendingUp className="w-4 h-4" />
              <span>Proven Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
              GROWTH <span className="text-gradient">CHART</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              At <strong className="text-white font-medium">Oceanic Star Fleet Ship Management LLC</strong>, we pride ourselves on our commitment to excellence, innovation, and sustainable growth. Over the years, our journey has been marked by significant milestones and achievements, reflecting our dedication to providing exceptional shipping services and exceeding the expectations of our clients. Here is an overview of our growth journey.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-slate-400 block">Growth Trajectory:</span>
                <span className="text-teal-300 font-bold font-poppins text-lg">+400% Capacity</span>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-slate-400 block">Current Milestone:</span>
                <span className="text-emerald-300 font-bold font-poppins text-lg">250+ Vessels & Ops</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Bar Chart Graphic */}
          <div className="lg:col-span-6 bg-slate-950/80 p-8 rounded-3xl border border-white/10 relative">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="text-xs font-bold font-poppins text-white uppercase tracking-wider flex items-center gap-2">
                <Ship className="w-4 h-4 text-teal-400" /> Operational Fleet Growth (2020 - 2023)
              </span>
              <span className="text-xs text-amber-400 font-mono font-semibold">250 Max Index</span>
            </div>

            {/* Bar Chart Container */}
            <div className="h-64 flex items-end justify-between space-x-4 sm:space-x-8 pt-6 pb-2 border-b-2 border-slate-700 relative">
              
              {/* Background Grid Horizontal Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-slate-400 w-full text-[10px] text-slate-400 pl-1">250</div>
                <div className="border-b border-slate-400 w-full text-[10px] text-slate-400 pl-1">200</div>
                <div className="border-b border-slate-400 w-full text-[10px] text-slate-400 pl-1">150</div>
                <div className="border-b border-slate-400 w-full text-[10px] text-slate-400 pl-1">100</div>
                <div className="border-b border-slate-400 w-full text-[10px] text-slate-400 pl-1">50</div>
              </div>

              {growthData.map((item, idx) => {
                const heightPercent = (item.count / maxCount) * 100;
                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center group relative z-10"
                    onMouseEnter={() => setHoveredYear(idx)}
                    onMouseLeave={() => setHoveredYear(null)}
                  >
                    {/* Tooltip Pill */}
                    <div className="mb-2 transition-all duration-300 transform group-hover:-translate-y-1">
                      <span className="bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-lg font-poppins">
                        {item.count}
                      </span>
                    </div>

                    {/* Animated Vertical Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                      className="w-full max-w-[50px] bg-gradient-to-t from-amber-500 via-amber-400 to-yellow-300 rounded-t-xl shadow-2xl relative overflow-hidden group-hover:brightness-125 transition duration-300"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    </motion.div>

                    {/* Year Label */}
                    <span className="mt-3 text-xs font-bold font-poppins text-slate-300 group-hover:text-white transition">
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-between items-center text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Fleet Operations
              </span>
              <span>Dubai • India • Sri-Lanka</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
