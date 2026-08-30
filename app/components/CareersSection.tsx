"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Upload, CheckCircle2, FileUp, Anchor, Building2 } from "lucide-react";

interface CareersProps {
  onOpenApplyModal: (jobTitle?: string) => void;
  activeCategoryFilter?: "all" | "shore" | "sea";
}

export const CareersSection: React.FC<CareersProps> = ({ onOpenApplyModal, activeCategoryFilter }) => {
  const [filter, setFilter] = useState<"all" | "shore" | "sea">(activeCategoryFilter || "all");

  useEffect(() => {
    if (activeCategoryFilter) {
      setFilter(activeCategoryFilter);
    }
  }, [activeCategoryFilter]);

  const openings = [
    // At Sea Positions
    { title: "Master Mariner / Captain", category: "sea", rank: "Top Deck Rank", vessel: "Oil / Chemical Tankers", location: "Global Sea Rotations" },
    { title: "Chief Engineer (Class 1)", category: "sea", rank: "Top Engine Rank", vessel: "Bulk Carriers & Container Ships", location: "Global Sea Rotations" },
    { title: "Second Engineer", category: "sea", rank: "Senior Officer", vessel: "MR Product Tankers", location: "Global Sea Rotations" },
    { title: "Chief Officer / Chief Mate", category: "sea", rank: "Senior Officer", vessel: "Panamax Bulk Carriers", location: "Global Sea Rotations" },
    { title: "Third Officer & Fourth Engineer", category: "sea", rank: "Junior Officer", vessel: "General Cargo & OSV", location: "Global Sea Rotations" },
    { title: "Electro-Technical Officer (ETO)", category: "sea", rank: "Specialist Officer", vessel: "LNG / LPG Gas Carriers", location: "Global Sea Rotations" },
    
    // At Shore Positions
    { title: "Technical Superintendent", category: "shore", rank: "Shore Executive", vessel: "Dubai & Mumbai HQ", location: "Dubai HQ / Vashi Mumbai" },
    { title: "Fleet Operations Manager", category: "shore", rank: "Shore Management", vessel: "Commercial Logistics Desk", location: "Dubai HQ" },
    { title: "Crewing Superintendent / Officer", category: "shore", rank: "RPSL Desk Executive", vessel: "RPSL Crewing Logistics", location: "Mumbai HQ" },
    { title: "Marine Quality & HSE Auditor", category: "shore", rank: "QMS Specialist", vessel: "Audits & Vetting", location: "Dubai HQ" },
  ];

  const filteredOpenings = openings.filter(item => filter === "all" || item.category === filter);

  return (
    <section id="careers" className="py-24 bg-[#0A192F] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Anchors for direct scroll targeting */}
        <div id="careers-shore" className="absolute -top-24 left-0"></div>
        <div id="careers-sea" className="absolute -top-24 left-0"></div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4" data-scroll-reveal="fade-up">
          <span className="text-xs uppercase tracking-widest text-[#00D26A] font-bold bg-[#00D26A]/10 px-4 py-1.5 rounded-full border border-[#00D26A]/20">
            CAREERS AT OCEANIC STAR
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight" data-scroll-split>
            Build Your Maritime <span className="text-gradient">Career</span>
          </h2>
          <p className="text-slate-400 text-base">
            Join a globally respected ship management group. We offer competitive wages, structured progression, and 96.8% seafarer retention across shore and sea divisions.
          </p>
        </div>

        {/* Tab Filters: ALL / AT SHORE / AT SEA */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ALL POSITIONS ({openings.length})
            </button>

            <button
              onClick={() => setFilter("shore")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 ${
                filter === "shore"
                  ? "bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 size={15} />
              <span>AT SHORE</span>
            </button>

            <button
              onClick={() => setFilter("sea")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 ${
                filter === "sea"
                  ? "bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Anchor size={15} />
              <span>AT SEA</span>
            </button>
          </div>
        </div>

        {/* Why Work With Us & Action Hero Card */}
        <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold font-poppins text-white">
              Why Build a Career with Oceanic Star Group?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                <span>On-time wage transfers to home accounts with zero delay</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                <span>Fast-track promotion matrices for qualified seafarers & shore executives</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                <span>Family P&I health insurance coverage during contract</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                <span>State-of-the-art simulator training & refresher courses</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-slate-900/90 rounded-2xl border border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-[#00D26A] flex items-center justify-center">
              <FileUp size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-poppins">Ready to Apply?</h4>
              <p className="text-xs text-slate-400">Upload your CV / Resume for immediate review</p>
            </div>
            <button
              onClick={() => onOpenApplyModal("General Application")}
              className="btn-primary w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xl"
            >
              <Upload size={16} />
              <span>Upload Resume Now</span>
            </button>
          </div>
        </div>

        {/* Current Openings List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold font-poppins text-white flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-[#00D26A]" />
              <span>{filter === "all" ? "All Openings" : filter === "shore" ? "At Shore Openings" : "At Sea Openings"}</span>
            </h3>
            <span className="text-xs text-[#00D26A] font-semibold font-mono">{filteredOpenings.length} Positions Available</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpenings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D26A] bg-[#00D26A]/10 px-2.5 py-1 rounded-full border border-[#00D26A]/20 flex items-center gap-1">
                      {job.category === "shore" ? <Building2 size={11} /> : <Anchor size={11} />}
                      {job.rank}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{job.location}</span>
                  </div>

                  <h4 className="text-lg font-bold font-poppins text-white group-hover:text-[#00D26A] transition">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Division / Fleet: {job.vessel}
                  </p>
                </div>

                <button
                  onClick={() => onOpenApplyModal(job.title)}
                  className="btn-outline w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2"
                >
                  <span>Apply For Position</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

