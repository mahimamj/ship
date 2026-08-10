"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Upload, GraduationCap, Heart, CheckCircle2, FileUp, X } from "lucide-react";

interface CareersProps {
  onOpenApplyModal: (jobTitle?: string) => void;
}

export const CareersSection: React.FC<CareersProps> = ({ onOpenApplyModal }) => {
  const openings = [
    { title: "Master Mariner / Captain", rank: "Top Deck Rank", vessel: "Oil / Chemical Tankers", location: "Global Sea Rotations" },
    { title: "Chief Engineer (Class 1)", rank: "Top Engine Rank", vessel: "Bulk Carriers & Container Ships", location: "Global Sea Rotations" },
    { title: "Second Engineer", rank: "Senior Officer", vessel: "MR Product Tankers", location: "Global Sea Rotations" },
    { title: "Chief Officer / Chief Mate", rank: "Senior Officer", vessel: "Panamax Bulk Carriers", location: "Global Sea Rotations" },
    { title: "Third Officer & Fourth Engineer", rank: "Junior Officer", vessel: "General Cargo & OSV", location: "Global Sea Rotations" },
    { title: "Technical Superintendent (Shore)", rank: "Shore Executive", vessel: "Dubai & Mumbai Office", location: "Dubai HQ / Mumbai HQ" },
  ];

  return (
    <section id="careers" className="py-24 bg-[#0A192F] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Join Oceanic Star
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Build Your Maritime <span className="text-gradient">Career</span>
          </h2>
          <p className="text-slate-400 text-base">
            Join a globally respected maritime fleet management group. We offer competitive ITF wages, structured career progression, and 96.8% seafarer retention.
          </p>
        </div>

        {/* Why Work With Us & Action Hero Card */}
        <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold font-poppins text-white">
              Why Build a Career with Oceanic Star Group?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>On-time wage transfers to home accounts with zero delay</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Fast-track promotion matrices for qualified junior officers</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Family P&I health insurance coverage during contract</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>State-of-the-art simulator training & refresher courses</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-slate-900/90 rounded-2xl border border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <FileUp size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-poppins">Ready to Join?</h4>
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
              <Briefcase className="w-5 h-5 text-teal-400" />
              <span>Current Openings</span>
            </h3>
            <span className="text-xs text-teal-400 font-semibold">{openings.length} Positions Available</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((job, idx) => (
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                      {job.rank}
                    </span>
                    <span className="text-[11px] text-slate-400">{job.location}</span>
                  </div>

                  <h4 className="text-lg font-bold font-poppins text-white group-hover:text-teal-300 transition">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Vessel Fleet: {job.vessel}
                  </p>
                </div>

                <button
                  onClick={() => onOpenApplyModal(job.title)}
                  className="btn-outline w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2"
                >
                  <span>Apply For Rank</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
