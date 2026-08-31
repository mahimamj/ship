"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Award, ShieldCheck, Building2, Anchor, CheckCircle2, ArrowRight, Ship, Compass } from "lucide-react";
import { initGSAP } from "@/lib/gsapHelper";

export interface TimelineMilestone {
  year: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  icon: any;
}

export const MILESTONES: TimelineMilestone[] = [
  {
    year: "2011",
    title: "CORPORATE INCORPORATION",
    badge: "ROCs Mumbai • Form 1",
    description: "Official Certificate of Incorporation issued by Registrar of Companies Maharashtra, Mumbai under the Indian Companies Act 1956.",
    details: ["Registered CIN: U63000MH2011PTC212994", "Est. 04 February 2011", "Founding of Oceanic Star Shipping Pvt. Ltd."],
    icon: Building2,
  },
  {
    year: "2015",
    title: "ISO 9001:2015 QUALITY ACCREDITATION",
    badge: "UKAS 8327 • DAS Certification",
    description: "Achieved international ISO 9001:2015 Quality Management System certification for shipping manning and maritime technical operations.",
    details: ["UKAS Management Systems Accredited (8327)", "IAF Multilateral Recognition Arrangement", "Cert No: DAS 50565279/5/Q"],
    icon: Award,
  },
  {
    year: "2018",
    title: "DG SHIPPING RPSL AUTHORIZATION",
    badge: "Seamen's Employment Office",
    description: "Awarded official Recruitment and Placement Service Licence (RPSL-MUM-506) from Directorate General of Shipping India.",
    details: ["Merchant Shipping Rules 2016 Compliant", "Regulation 1.4 of MLC 2006 Certified", "Seaman Book (CDC) Authorization"],
    icon: Anchor,
  },
  {
    year: "2023",
    title: "DUBAI HEADQUARTERS EXPANSION",
    badge: "Dubai DET • License 1197190",
    description: "Established Oceanic Star Fleet Ship Management L.L.C in Dubai UAE with active DET Commercial License and Dubai Chamber Membership.",
    details: ["Dubai DET License No: 1197190", "Dubai Chamber Membership: 465937", "Ship Management & Operation License"],
    icon: ShieldCheck,
  },
  {
    year: "2024",
    title: "RENEWED 5-YEAR RPSL LICENCE (2024 – 2029)",
    badge: "Ministry of Ports, Shipping & Waterways",
    description: "Renewed 5-year active RPSL licence (valid from 09/01/2024 to 09/01/2029) issued by Ministry of Ports, Shipping & Waterways India.",
    details: ["5-Year Active Registration (2024 – 2029)", "Ministry of Ports, Shipping and Waterways", "Expanded Officer & Crew Logistics"],
    icon: Calendar,
  },
  {
    year: "2026",
    title: "59 MANAGED FLEET VESSELS & GLOBAL CORRIDORS",
    badge: "59 Fleet Ships • International Hubs",
    description: "Expanded managed fleet matrix to 59 active commercial vessels (Tankers, Bulkers, Containers, RoRo, AHTS, LPG) with global port dispatch.",
    details: ["30 Tankers, 14 Bulkers, 7 Containers", "Dubai, Mumbai & Colombo Headquarters", "100% SOLAS & ISM Code Safety Standard"],
    icon: CheckCircle2,
  },
];

export const CompanyTimelineSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(MILESTONES[4]);
  const shipIconRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const selectedIdx = MILESTONES.findIndex((m) => m.year === selectedMilestone.year);
  const progressPct = ((selectedIdx + 1) / MILESTONES.length) * 100;

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F2] text-[#071A2B] relative overflow-hidden border-t border-[#071A2B]/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#071A2B]/10 pb-8 mb-12 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/15 border border-[#176B87]/30 text-xs font-mono text-[#176B87] font-bold mb-4">
              <Compass className="w-4 h-4 text-[#176B87] animate-spin" />
              <span>MARITIME SHIP VOYAGE TIMELINE</span>
            </div>
            <h2 className="font-syne text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] font-extrabold leading-none">
              OUR HISTORICAL VOYAGE
            </h2>
          </div>

          <p className="text-sm font-light text-[#667783] max-w-md leading-relaxed font-manrope">
            A continuous decade of maritime expansion—sailing from initial incorporation in 2011 to managing 59 commercial fleet vessels across Dubai, Mumbai, and Colombo hubs.
          </p>
        </div>

        {/* SHIP VOYAGE ANIMATED TRACKER */}
        <div ref={trackRef} className="relative w-full bg-white p-6 rounded-3xl border border-[#071A2B]/10 shadow-lg mb-12 overflow-hidden">
          {/* Animated Vessel Wave Line Path */}
          <div className="relative w-full h-12 flex items-center justify-between px-4">
            <div className="absolute left-6 right-6 h-1.5 bg-[#071A2B]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#176B87] transition-all duration-700 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Sailing Vessel Icon moving along line */}
            <div
              ref={shipIconRef}
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-20"
              style={{ left: `calc(${progressPct}% - 24px)` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#071A2B] text-[#00F0FF] flex items-center justify-center shadow-xl border border-[#176B87]">
                <Ship className="w-6 h-6 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Timeline Year Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-6">
            {MILESTONES.map((item, idx) => {
              const isSelected = selectedMilestone.year === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setSelectedMilestone(item)}
                  className={`p-4 rounded-2xl border text-center transition duration-300 flex flex-col items-center justify-center space-y-1 ${
                    isSelected
                      ? "bg-[#071A2B] border-[#071A2B] text-white shadow-xl scale-105"
                      : "bg-[#F5F5F2] border-[#071A2B]/10 text-[#667783] hover:border-[#176B87] hover:text-[#071A2B]"
                  }`}
                >
                  <span className={`font-syne text-2xl font-black ${isSelected ? "text-[#00F0FF]" : "text-[#071A2B]"}`}>
                    {item.year}
                  </span>
                  <span className={`text-[10px] font-mono block truncate max-w-full ${isSelected ? "text-slate-200" : "text-[#667783]"}`}>
                    {item.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Feature Display Card */}
        <motion.div
          key={selectedMilestone.year}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="editorial-card rounded-3xl p-8 sm:p-12 border border-[#071A2B]/10 shadow-xl bg-white grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-syne text-5xl text-[#176B87] font-black">{selectedMilestone.year}</span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                {selectedMilestone.badge}
              </span>
            </div>

            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#071A2B]">
              {selectedMilestone.title}
            </h3>

            <p className="text-sm font-light text-[#667783] leading-relaxed font-manrope">
              {selectedMilestone.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#071A2B] uppercase font-bold block">VERIFIED AUDIT MILESTONES:</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedMilestone.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-[#667783]">
                    <CheckCircle2 className="w-4 h-4 text-[#176B87] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#071A2B] text-white p-8 rounded-2xl border border-white/10 text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#176B87]/30 border border-[#176B87] flex items-center justify-center text-[#00F0FF] mx-auto">
              <selectedMilestone.icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-300 uppercase block">MARITIME MILESTONE</span>
              <h4 className="font-syne text-lg font-bold text-white">{selectedMilestone.title}</h4>
            </div>
            <a
              href="#certifications"
              className="inline-flex items-center space-x-2 text-xs font-mono text-[#00F0FF] font-bold hover:underline"
            >
              <span>Inspect Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
