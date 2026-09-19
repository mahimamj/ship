"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Building2,
  Award,
  ShieldCheck,
  Anchor,
  FileCheck,
  Globe,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Ship,
  Clock,
  Layers,
  Star,
  ExternalLink,
} from "lucide-react";

interface MilestoneItem {
  year: string;
  yearDisplay: string;
  category: "FOUNDATION" | "ACCREDITATION" | "EXPANSION" | "CORPORATE" | "LEADERSHIP";
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  highlight?: boolean;
  trustBadge?: string;
  marketingMetric?: string;
  bullets: string[];
}

const MILESTONES: MilestoneItem[] = [
  {
    year: "2002",
    yearDisplay: "2002",
    category: "FOUNDATION",
    title: "Oceanic Star Shipping Founded",
    subtitle: "Navi Mumbai Headquarters Established",
    desc: "Began operations in Navi Mumbai with a focused mission to deliver world-class crew management, vessel manning, and maritime logistics to international ship owners.",
    icon: Building2,
    trustBadge: "Navi Mumbai HQ • Est. 2002",
    marketingMetric: "20+ Years Trust",
    bullets: [
      "Initial Merchant Navy Manning Operations",
      "Custom Crewing Solutions for Tankers & Bulkers",
      "100% Client Satisfaction & Zero Safety Incidents",
    ],
  },
  {
    year: "2011",
    yearDisplay: "2011",
    category: "CORPORATE",
    title: "Official Corporate Incorporation",
    subtitle: "ROC Maharashtra Registration",
    desc: "Formally incorporated under the Indian Companies Act 1956, elevating Oceanic Star into an institutional ship management company with rigorous compliance structures.",
    icon: FileCheck,
    trustBadge: "CIN: U63000MH2011PTC212994",
    marketingMetric: "Institutional Governance",
    bullets: [
      "Registered on 04 February 2011 (ROC Mumbai)",
      "Structured Governance & Financial Audit Protocols",
      "Expanded Technical & Commercial Advisory Board",
    ],
  },
  {
    year: "2014",
    yearDisplay: "2014",
    category: "ACCREDITATION",
    title: "ISO 9001:2015 Quality Certification",
    subtitle: "UKAS Accredited Management System",
    desc: "Achieved international ISO 9001 quality management system certification, guaranteeing standard operating procedures across crewing, vessel maintenance, and ISM safety compliance.",
    icon: Award,
    trustBadge: "UKAS Accredited (8327) • Cert: DAS 50565279/5/Q",
    marketingMetric: "ISO 9001 Certified",
    bullets: [
      "UKAS Management Systems Accredited (UKAS 8327)",
      "IAF Multilateral Recognition Standard",
      "Total Quality Management System across all Operations",
    ],
  },
  {
    year: "2017",
    yearDisplay: "2017",
    category: "EXPANSION",
    title: "South Asia Hub — Colombo Office",
    subtitle: "Indian Ocean Gateway Launched",
    desc: "Opened a strategic regional hub in Colombo, Sri Lanka, expanding vessel husbandry, bunker coordination, and crew transit facilities along major Asian shipping corridors.",
    icon: Anchor,
    trustBadge: "Colombo, Sri Lanka Hub",
    marketingMetric: "Regional Support Center",
    bullets: [
      "24/7 Asian Corridor Crew Transit Operations",
      "Dedicated Sri Lanka Maritime Husbandry Unit",
      "Direct Vessel Support at Colombo & Hambantota Ports",
    ],
  },
  {
    year: "2018",
    yearDisplay: "2018",
    category: "ACCREDITATION",
    title: "DG Shipping RPSL Authorization",
    subtitle: "Licence No: RPSL-MUM-506",
    desc: "Received official Recruitment and Placement Service Licence (RPSL) from the Directorate General of Shipping India, confirming full MLC 2006 maritime compliance.",
    icon: ShieldCheck,
    trustBadge: "RPSL-MUM-506 • DG Shipping India",
    marketingMetric: "100% MLC 2006 Compliant",
    bullets: [
      "Directorate General of Shipping Official Licence",
      "Merchant Shipping (Recruitment & Placement) Rules Approved",
      "Seaman Employment & CDC Official Authorization",
    ],
  },
  {
    year: "2022",
    yearDisplay: "2022",
    category: "EXPANSION",
    title: "Dubai Operational HQ Established",
    subtitle: "Middle East Commercial Expansion",
    desc: "Expanded international operations with a dedicated technical and commercial ship management office in Bur Dubai, UAE, connecting Middle East oil & gas and container corridors.",
    icon: Globe,
    trustBadge: "Dubai DET License: 1197190 • Dubai Chamber #465937",
    marketingMetric: "Gulf Commercial Hub",
    bullets: [
      "Dubai Department of Economy & Tourism Commercial Licence",
      "Dubai Chamber of Commerce & Industry Member",
      "Commercial Ship Management & Technical Support Headquarters",
    ],
  },
  {
    year: "2024",
    yearDisplay: "2024",
    category: "EXPANSION",
    title: "Canadian Incorporation — Oceanic Star Shipping Inc.",
    subtitle: "North American Gateway",
    desc: "Incorporated in Canada under the Canada Business Corporations Act in Brampton, ON, establishing a transatlantic commercial bridge for North American charterers and ship owners.",
    icon: FileCheck,
    trustBadge: "Canada Corp No. 1640547-9 • Brampton, ON",
    marketingMetric: "North America Office",
    bullets: [
      "Canada Business Corporations Act Incorporation",
      "Transatlantic Commercial Partner Network",
      "Great Lakes & Atlantic Vessel Logistics Support",
    ],
  },
  {
    year: "2025",
    yearDisplay: "2025",
    category: "EXPANSION",
    title: "Turkey Branch Office — Istanbul",
    subtitle: "Black Sea & Mediterranean Hub",
    desc: "Established a strategic branch office in Çekmeköy, Istanbul, securing operational coverage across the Black Sea, Turkish Straits, and Mediterranean shipping lanes.",
    icon: Compass,
    trustBadge: "Istanbul, Turkey Branch",
    marketingMetric: "Eurasian Bridge",
    bullets: [
      "Black Sea & Turkish Straits Vessel Coordination",
      "Mediterranean Technical & Crewing Support",
      "Direct Bridge between European & Asian Maritime Routes",
    ],
  },
  {
    year: "Present",
    yearDisplay: "2026",
    category: "LEADERSHIP",
    title: "Global Fleet Command — 59+ Managed Ships",
    subtitle: "5 International Operating Hubs",
    desc: "Leading a multi-hub global ship management matrix controlling 59+ commercial vessels across India, UAE, Sri Lanka, Canada, and Turkey with 24/7 vessel tracking and safety leadership.",
    icon: Ship,
    highlight: true,
    trustBadge: "59+ Managed Vessels • 5 International Hubs",
    marketingMetric: "Industry Leader",
    bullets: [
      "59+ Managed Fleet (Tankers, Bulkers, Container, LPG, RoRo)",
      "5 Strategic Hubs across Asia, Middle East, Europe & Americas",
      "99.4% On-time Voyage Completion & Zero Major PSC Detentions",
    ],
  },
];

const METRICS_SUMMARY = [
  { label: "Years Excellence", value: "20+", detail: "Continuous Growth" },
  { label: "Managed Vessels", value: "59+", detail: "Commercial Fleet" },
  { label: "Global Hubs", value: "5", detail: "India, UAE, LK, CA, TR" },
  { label: "Compliance Rate", value: "100%", detail: "RPSL & ISO 9001" },
];

interface CareerJourneyMilestonesProps {
  onOpenQuote?: () => void;
}

export const CareerJourneyMilestones: React.FC<CareerJourneyMilestonesProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneItem>(MILESTONES[MILESTONES.length - 1]);
  const [viewMode, setViewMode] = useState<"TIMELINE" | "GRID">("TIMELINE");

  const filteredMilestones = MILESTONES.filter((m) => {
    if (activeCategory === "ALL") return true;
    return m.category === activeCategory;
  });

  return (
    <section id="milestones" className="w-full bg-[#061B2A] text-white py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden select-none">
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,104,183,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(197,155,39,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* HEADER & MARKETING PORTRAYAL INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8 gap-6 sm:gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-xs font-mono text-[#E5C158] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27] animate-pulse" />
              <span className="tracking-widest uppercase">OUR MILESTONES & PROVEN CREDS</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Two Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9E8] via-[#0077B6] to-[#C59B27]">Proven Growth</span>
            </h2>
            
            <p className="font-manrope text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              From our founding in Navi Mumbai in 2002 to managing a global fleet of 59+ commercial vessels across 5 strategic international hubs today—explore how Oceanic Star built its reputation as a trusted global ship management partner.
            </p>
          </div>

          {/* VIEW TOGGLE & COMPLIANCE STAMP */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <div className="bg-[#0B2545] p-1.5 rounded-2xl border border-white/10 flex items-center shadow-lg">
              <button
                onClick={() => setViewMode("TIMELINE")}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === "TIMELINE"
                    ? "bg-gradient-to-r from-[#0068B7] to-[#0096C7] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Voyage Track</span>
              </button>
              <button
                onClick={() => setViewMode("GRID")}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === "GRID"
                    ? "bg-gradient-to-r from-[#0068B7] to-[#0096C7] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cards Grid</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#00D9E8]" />
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">DG SHIPPING APPROVED</span>
                <span className="text-xs font-mono font-bold text-emerald-400">RPSL-MUM-506</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 MARKETING KEY METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {METRICS_SUMMARY.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0B2545]/80 to-[#061B2A] border border-white/10 hover:border-[#C59B27]/50 transition-all duration-300 shadow-lg group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{metric.label}</span>
                <Star className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-[#00D9E8]">
                {metric.value}
              </div>
              <span className="text-[11px] font-manrope text-slate-400 mt-1 block font-medium">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start overflow-x-auto no-scrollbar gap-2 pb-2 border-b border-white/10">
          {[
            { id: "ALL", label: "All Milestones" },
            { id: "EXPANSION", label: "Global Expansion" },
            { id: "ACCREDITATION", label: "Certifications & RPSL" },
            { id: "CORPORATE", label: "Corporate Governance" },
            { id: "LEADERSHIP", label: "Fleet Command" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? "bg-[#C59B27] text-[#061B2A] shadow-md shadow-[#C59B27]/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TIMELINE MODE DISPLAY */}
        {viewMode === "TIMELINE" && (
          <div className="space-y-12">
            
            {/* HORIZONTAL INTERACTIVE YEAR NAVIGATION SCROLLER */}
            <div className="relative bg-[#0B2545]/60 p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="text-xs font-mono text-[#00D9E8] font-bold uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Compass className="w-4 h-4 animate-spin text-[#00D9E8]" />
                <span>INTERACTIVE MILESTONE VOYAGE LINE — SELECT A YEAR TO EXPLORE DETAILS</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3">
                {MILESTONES.map((item) => {
                  const isSelected = selectedMilestone.year === item.year;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.year}
                      onClick={() => setSelectedMilestone(item)}
                      className={`p-3 sm:p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-1.5 relative overflow-hidden group ${
                        isSelected
                          ? "bg-gradient-to-b from-[#0068B7] to-[#004E89] border-[#00D9E8] text-white shadow-xl scale-105"
                          : "bg-[#061B2A]/70 border-white/10 text-slate-400 hover:border-[#C59B27] hover:text-white"
                      }`}
                    >
                      {item.highlight && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#00D9E8] animate-ping" />
                      )}
                      
                      <div className={`p-1.5 rounded-lg ${isSelected ? "bg-white/20 text-[#00D9E8]" : "bg-white/5 text-slate-400 group-hover:text-[#C59B27]"}`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className={`font-serif text-base sm:text-lg font-bold tracking-tight ${isSelected ? "text-white" : "text-slate-200"}`}>
                        {item.yearDisplay}
                      </span>

                      <span className="text-[10px] font-mono tracking-tight block truncate max-w-full text-slate-300 font-normal">
                        {item.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FEATURED SELECTED MILESTONE DISPLAY CARD */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.year}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
              >
                
                {/* LEFT MAIN CARD */}
                <div className={`lg:col-span-8 p-6 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col justify-between ${
                  selectedMilestone.highlight
                    ? "bg-gradient-to-br from-[#0B2545] via-[#061B2A] to-[#0B2545] border-[#00D9E8]/60"
                    : "bg-[#0B2545]/90 border-white/15"
                }`}>
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0068B7]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-serif text-4xl sm:text-6xl font-black text-[#00D9E8]">
                        {selectedMilestone.yearDisplay}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E5C158]">
                        {selectedMilestone.trustBadge}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                        {selectedMilestone.marketingMetric}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {selectedMilestone.title}
                      </h3>
                      <p className="font-mono text-xs text-[#00D9E8] font-bold uppercase tracking-wider">
                        {selectedMilestone.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-manrope text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {selectedMilestone.desc}
                    </p>

                    {/* Verified Marketing Proof Points */}
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider block">
                        VERIFIED OPERATIONAL DELIVERABLES:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {selectedMilestone.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs font-manrope text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#00D9E8] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 mt-6 relative z-10">
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                      <TrendingUp className="w-4 h-4 text-[#C59B27]" />
                      <span>Sustained Growth Track Since 2002</span>
                    </div>

                    <button
                      onClick={onOpenQuote || (() => {
                        const elem = document.getElementById("contact");
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                      })}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#DAAC32] text-[#061B2A] text-xs font-mono font-bold hover:shadow-lg hover:shadow-[#C59B27]/30 transition-all duration-300"
                    >
                      <span>Inquire Commercial Proposals</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* RIGHT SIDE MARKETING PROOF CARD */}
                <div className="lg:col-span-4 bg-gradient-to-b from-[#0B2545] to-[#061B2A] p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0068B7] to-[#0096C7] flex items-center justify-center text-white shadow-lg border border-white/20">
                      {React.createElement(selectedMilestone.icon, { className: "w-7 h-7" })}
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#C59B27] font-bold uppercase tracking-widest block">
                        MILESTONE IMPACT
                      </span>
                      <h4 className="font-serif text-xl font-bold text-white">
                        {selectedMilestone.title}
                      </h4>
                      <p className="font-manrope text-xs text-slate-300 leading-relaxed font-light">
                        This strategic expansion milestone directly empowers ship owners and charterers with higher operational availability and compliance security.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Management Standard:</span>
                        <span className="font-bold text-emerald-400">Audited & Active</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Compliance Status:</span>
                        <span className="font-bold text-[#00D9E8]">100% SOLAS / MLC</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <a
                      href="#certifications"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold transition-all duration-300 border border-white/10"
                    >
                      <ExternalLink className="w-4 h-4 text-[#00D9E8]" />
                      <span>Inspect Audited Certifications</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        )}

        {/* CARDS GRID MODE DISPLAY */}
        {viewMode === "GRID" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMilestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 ${
                    item.highlight
                      ? "bg-gradient-to-b from-[#0B2545] to-[#061B2A] border-[#00D9E8] shadow-2xl"
                      : "bg-[#0B2545]/70 border-white/10 hover:border-[#C59B27]/60 shadow-lg"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-extrabold text-[#00D9E8]">
                        {item.yearDisplay}
                      </span>
                      <div className={`p-2.5 rounded-xl ${
                        item.highlight ? "bg-[#00D9E8]/20 text-[#00D9E8]" : "bg-white/5 text-[#C59B27] group-hover:bg-[#C59B27]/20"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-slate-300 border border-white/10">
                        {item.trustBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#00D9E8] mt-1">{item.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="font-manrope text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-[11px] font-manrope text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{item.category}</span>
                    <span className="text-[#E5C158] font-bold">{item.marketingMetric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM MARKETING TRUST CTA BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0068B7] via-[#0077B6] to-[#0B2545] border border-white/20 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_70%_50%,rgba(0,217,232,0.2),transparent_70%)] pointer-events-none" />

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-mono font-bold text-[#00D9E8] uppercase tracking-widest block">
              WORLD-CLASS SHIP MANAGEMENT MATRIX
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Partner With Oceanic Star for Your Fleet Operations
            </h3>
            <p className="font-manrope text-xs sm:text-sm text-sky-100 font-light leading-relaxed">
              Benefit from 20+ years of audited quality, RPSL-MUM-506 compliance, and 24/7 fleet command across 5 international hubs.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 relative z-10 shrink-0">
            <button
              onClick={onOpenQuote || (() => {
                const elem = document.getElementById("contact");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              })}
              className="px-6 py-3.5 rounded-xl bg-[#C59B27] hover:bg-[#DAAC32] text-[#061B2A] text-xs font-mono font-bold shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Request Fleet Management Proposal</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#careers"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold border border-white/20 transition-all duration-300"
            >
              Join Our Seafarer Network
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
