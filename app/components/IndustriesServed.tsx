"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Shield, Layers, Flame, Box, Ship } from "lucide-react";

export const IndustriesServed: React.FC = () => {
  const industries = [
    {
      title: "Ship Owners",
      desc: "Private and institutional vessel owners seeking high OPEX efficiency, transparent accounting, and top asset preservation.",
      icon: Ship,
    },
    {
      title: "Fleet Managers",
      desc: "Third-party fleet management companies needing specialized crew supply, technical dry dock superintendence, and port agency.",
      icon: Anchor,
    },
    {
      title: "Offshore Companies",
      desc: "Offshore oilfield support providers requiring DP2 certified crew, AHTS vessel management, and OVID vetting readiness.",
      icon: Shield,
    },
    {
      title: "Cargo Operators",
      desc: "Industrial charterers, mining companies, and grain traders requiring reliable voyage chartering and port superintendence.",
      icon: Layers,
    },
    {
      title: "Oil & Gas Majors",
      desc: "Energy conglomerates requiring tanker vetting (SIRE 2.0 / OCIMF), terminal bunkering, and zero-spill environmental safety.",
      icon: Flame,
    },
    {
      title: "Container Lines",
      desc: "Liner operators seeking schedule integrity, feeder vessel management, reefer monitoring, and express port clearance.",
      icon: Box,
    },
  ];

  return (
    <section className="py-24 bg-[#0A192F] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Market Sectors
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-slate-400 text-base">
            Tailored maritime management and marine engineering support across key ocean freight and offshore energy sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-3xl p-7 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-white mb-3 group-hover:text-teal-300 transition">
                    {ind.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-xs text-teal-400 font-semibold flex items-center space-x-1">
                  <span>Tailored Sector Scope</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
