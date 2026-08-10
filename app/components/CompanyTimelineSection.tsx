"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Award, ShieldCheck, Building2, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

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
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(MILESTONES[4]); // Default to 2024 RPSL

  return (
    <section className="py-28 md:py-36 bg-white border-t border-slate-200 text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-[#0284C7] font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>CORPORATE HERITAGE & GROWTH MILESTONES</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0F172A] font-extrabold leading-none">
              OUR GROWTH TIMELINE
            </h2>
          </div>

          <p className="text-sm font-light text-[#64748B] max-w-md leading-relaxed">
            Over a decade of continuous maritime expansion from incorporation to managing 59 commercial fleet vessels worldwide.
          </p>
        </div>

        {/* Timeline Year Slider Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {MILESTONES.map((item) => {
            const isSelected = selectedMilestone.year === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedMilestone(item)}
                className={`p-4 rounded-2xl border text-center transition duration-300 flex flex-col items-center justify-center space-y-1 ${
                  isSelected
                    ? "bg-[#0284C7] border-[#0284C7] text-white shadow-md scale-105"
                    : "bg-slate-50 border-slate-200 text-[#64748B] hover:border-[#0284C7] hover:text-[#0F172A]"
                }`}
              >
                <span className={`font-bebas text-2xl font-bold ${isSelected ? "text-white" : "text-[#0F172A]"}`}>{item.year}</span>
                <span className={`text-[10px] font-mono block truncate max-w-full ${isSelected ? "text-sky-100" : "text-[#64748B]"}`}>{item.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Feature Display Card */}
        <motion.div
          key={selectedMilestone.year}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="editorial-card rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm bg-slate-50 grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bebas text-5xl text-[#0284C7] font-bold">{selectedMilestone.year}</span>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                {selectedMilestone.badge}
              </span>
            </div>

            <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#0F172A]">
              {selectedMilestone.title}
            </h3>

            <p className="text-sm font-light text-[#64748B] leading-relaxed">
              {selectedMilestone.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#0F172A] uppercase font-bold block">VERIFIED AUDIT MILESTONES:</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedMilestone.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-[#64748B]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] mx-auto">
              <selectedMilestone.icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#64748B] uppercase block">ORGANIZATION MILESTONE</span>
              <h4 className="font-syne text-lg font-bold text-[#0F172A]">{selectedMilestone.title}</h4>
            </div>
            <a
              href="#certifications"
              className="inline-flex items-center space-x-2 text-xs font-mono text-[#0284C7] font-bold hover:underline"
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
