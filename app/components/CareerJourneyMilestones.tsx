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
    subtitle: "6 Total Global Hubs",
    desc: "Leading a multi-hub global ship management matrix controlling 59+ commercial vessels across India, UAE, Sri Lanka, Turkey, Singapore, and Canada with 24/7 vessel tracking and safety leadership.",
    icon: Ship,
    highlight: true,
    trustBadge: "59+ Managed Vessels • 6 Total Global Hubs",
    marketingMetric: "Industry Leader",
    bullets: [
      "59+ Managed Fleet (Tankers, Bulkers, Container, LPG, RoRo)",
      "6 Total Global Hubs across Asia, Middle East, Europe & Americas",
      "99.4% On-time Voyage Completion & Zero Major PSC Detentions",
    ],
  },
];

const METRICS_SUMMARY = [
  { label: "Years Excellence", value: "20+", detail: "Continuous Growth" },
  { label: "Managed Vessels", value: "59+", detail: "Commercial Fleet" },
  { label: "Total Global Hubs", value: "6", detail: "IN, AE, LK, TR, SG, CA" },
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
    <section id="milestones" className="w-full bg-[#F8F8F5] text-[#071A2B] py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden select-none font-sans border-b border-[#8B94A3]/20">
      {/* Background Decorative Gradients & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,104,183,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-14">
        
        {/* HEADER & INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#8B94A3]/25 pb-8 gap-6 sm:gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0077FF] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
              <span>// OUR MILESTONES & PROVEN CREDS</span>
            </div>
            
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#071A2B] leading-tight">
              Two Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068B7] via-[#0077FF] to-[#00A8E8]">Proven Growth</span>
            </h2>
            
            <p className="font-inter text-xs sm:text-sm text-[#687384] leading-relaxed font-normal">
              From our founding in Navi Mumbai in 2002 to managing a global fleet of 59+ commercial vessels across 6 total global hubs today—explore how Oceanic Star built its reputation as a trusted global ship management partner.
            </p>
          </div>

          {/* VIEW TOGGLE & COMPLIANCE STAMP */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <div className="bg-[#EAEAEA] p-1 rounded-xl border border-[#8B94A3]/25 flex items-center shadow-inner">
              <button
                onClick={() => setViewMode("TIMELINE")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === "TIMELINE"
                    ? "bg-[#071A2B] text-white shadow-sm"
                    : "text-[#687384] hover:text-[#071A2B]"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Voyage Track</span>
              </button>
              <button
                onClick={() => setViewMode("GRID")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === "GRID"
                    ? "bg-[#071A2B] text-white shadow-sm"
                    : "text-[#687384] hover:text-[#071A2B]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cards Grid</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center space-x-3 px-3.5 py-2 rounded-xl bg-white border border-[#8B94A3]/30 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#0077FF]" />
              <div className="text-left">
                <span className="text-[10px] font-mono text-[#687384] block uppercase">DG SHIPPING APPROVED</span>
                <span className="text-xs font-mono font-bold text-[#0068B7]">RPSL-MUM-506</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 KEY METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {METRICS_SUMMARY.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#8B94A3]/25 hover:border-[#0077FF]/50 transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-[#687384] uppercase tracking-wider">{metric.label}</span>
                <Star className="w-3.5 h-3.5 text-[#0077FF] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-[#071A2B]">
                {metric.value}
              </div>
              <span className="text-[11px] font-inter text-[#687384] mt-1 block font-medium">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start overflow-x-auto no-scrollbar gap-2 pb-2 border-b border-[#8B94A3]/25">
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
                  ? "bg-[#071A2B] text-white shadow-md"
                  : "bg-white text-[#687384] hover:bg-[#EAEAEA] border border-[#8B94A3]/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TIMELINE MODE DISPLAY */}
        {viewMode === "TIMELINE" && (
          <div className="space-y-10">
            
            {/* HORIZONTAL INTERACTIVE YEAR NAVIGATION SCROLLER */}
            <div className="relative bg-white p-4 sm:p-5 rounded-2xl border border-[#8B94A3]/25 shadow-sm">
              <div className="text-[11px] font-mono text-[#0077FF] font-bold uppercase tracking-wider mb-3 flex items-center space-x-2">
                <Compass className="w-3.5 h-3.5 animate-spin text-[#0077FF]" />
                <span>INTERACTIVE MILESTONE VOYAGE LINE — SELECT A YEAR TO EXPLORE DETAILS</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
                {MILESTONES.map((item) => {
                  const isSelected = selectedMilestone.year === item.year;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.year}
                      onClick={() => setSelectedMilestone(item)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-1 relative overflow-hidden group ${
                        isSelected
                          ? "bg-[#071A2B] border-[#0077FF] text-white shadow-md scale-105"
                          : "bg-[#F0F4F8] border-[#8B94A3]/20 text-[#687384] hover:border-[#0077FF] hover:text-[#071A2B]"
                      }`}
                    >
                      {item.highlight && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#0077FF] animate-ping" />
                      )}
                      
                      <div className={`p-1.5 rounded-lg ${isSelected ? "bg-white/20 text-[#00D9E8]" : "bg-white text-[#0077FF] shadow-xs"}`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className={`font-poppins text-base font-bold tracking-tight ${isSelected ? "text-white" : "text-[#071A2B]"}`}>
                        {item.yearDisplay}
                      </span>

                      <span className={`text-[10px] font-mono tracking-tight block truncate max-w-full font-normal ${isSelected ? "text-slate-300" : "text-[#687384]"}`}>
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
                className="grid lg:grid-cols-12 gap-6 items-stretch"
              >
                
                {/* LEFT MAIN CARD */}
                <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#8B94A3]/30 shadow-md flex flex-col justify-between">
                  
                  <div className="space-y-5 relative z-10">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-poppins text-4xl sm:text-5xl font-black text-[#0077FF]">
                        {selectedMilestone.yearDisplay}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0077FF]/10 border border-[#0077FF]/30 text-[#0068B7]">
                        {selectedMilestone.trustBadge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 border border-emerald-300 text-emerald-700">
                        {selectedMilestone.marketingMetric}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#071A2B] tracking-tight">
                        {selectedMilestone.title}
                      </h3>
                      <p className="font-mono text-xs text-[#0077FF] font-bold uppercase tracking-wider">
                        {selectedMilestone.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {selectedMilestone.desc}
                    </p>

                    {/* Verified Marketing Proof Points */}
                    <div className="space-y-2.5 pt-3 border-t border-[#8B94A3]/20">
                      <span className="text-[11px] font-mono text-[#687384] uppercase font-bold tracking-wider block">
                        VERIFIED OPERATIONAL DELIVERABLES:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs font-inter text-[#334155]">
                        {selectedMilestone.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0077FF] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#8B94A3]/20 mt-6 relative z-10">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#687384]">
                      <TrendingUp className="w-4 h-4 text-[#0077FF]" />
                      <span>Sustained Growth Track Since 2002</span>
                    </div>

                    <button
                      onClick={onOpenQuote || (() => {
                        const elem = document.getElementById("contact");
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                      })}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#071A2B] hover:bg-[#0068B7] text-white text-xs font-mono font-bold shadow-md transition-all duration-300"
                    >
                      <span>Inquire Commercial Proposals</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* RIGHT SIDE MARKETING PROOF CARD */}
                <div className="lg:col-span-4 bg-[#F0F4F8] p-6 sm:p-7 rounded-2xl border border-[#8B94A3]/30 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0068B7] flex items-center justify-center text-white shadow-md">
                      {React.createElement(selectedMilestone.icon, { className: "w-6 h-6" })}
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#0077FF] font-bold uppercase tracking-widest block">
                        MILESTONE IMPACT
                      </span>
                      <h4 className="font-poppins text-lg font-bold text-[#071A2B]">
                        {selectedMilestone.title}
                      </h4>
                      <p className="font-inter text-xs text-[#687384] leading-relaxed font-normal">
                        This strategic expansion milestone directly empowers ship owners and charterers with higher operational availability and compliance security.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#8B94A3]/25 space-y-2 shadow-xs">
                      <div className="flex items-center justify-between text-xs font-mono text-[#475569]">
                        <span>Management Standard:</span>
                        <span className="font-bold text-emerald-600">Audited & Active</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#475569]">
                        <span>Compliance Status:</span>
                        <span className="font-bold text-[#0077FF]">100% SOLAS / MLC</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#8B94A3]/25">
                    <a
                      href="#certifications"
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#071A2B] text-xs font-mono font-bold transition-all duration-300 border border-[#8B94A3]/30 shadow-xs"
                    >
                      <ExternalLink className="w-4 h-4 text-[#0077FF]" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredMilestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-5 group hover:-translate-y-1 ${
                    item.highlight
                      ? "bg-white border-[#0077FF] shadow-md"
                      : "bg-white border-[#8B94A3]/25 hover:border-[#0077FF]/60 shadow-xs"
                  }`}
                >
                  <div className="space-y-3.5">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-3xl font-black text-[#0077FF]">
                        {item.yearDisplay}
                      </span>
                      <div className="p-2 rounded-xl bg-[#F0F4F8] text-[#0077FF]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#F0F4F8] text-[#687384] border border-[#8B94A3]/20">
                        {item.trustBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-poppins text-lg font-bold text-[#071A2B] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#0077FF] mt-0.5">{item.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-xs sm:text-sm text-[#687384] leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-[#8B94A3]/20">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-[11px] font-inter text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0077FF] shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-[#8B94A3]/20 flex items-center justify-between text-xs font-mono text-[#687384]">
                    <span>{item.category}</span>
                    <span className="text-[#0077FF] font-bold">{item.marketingMetric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM MARKETING TRUST CTA BANNER */}
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#071A2B] via-[#0B2545] to-[#0068B7] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_70%_50%,rgba(0,217,232,0.15),transparent_70%)] pointer-events-none" />

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-mono font-bold text-[#00D9E8] uppercase tracking-widest block">
              WORLD-CLASS SHIP MANAGEMENT MATRIX
            </span>
            <h3 className="font-poppins text-xl sm:text-2xl font-extrabold text-white">
              Partner With Oceanic Star for Your Fleet Operations
            </h3>
            <p className="font-inter text-xs sm:text-sm text-sky-100 font-normal leading-relaxed">
              Benefit from 20+ years of audited quality, RPSL-MUM-506 compliance, and 24/7 fleet command across 6 total global hubs.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 relative z-10 shrink-0">
            <button
              onClick={onOpenQuote || (() => {
                const elem = document.getElementById("contact");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              })}
              className="px-5 py-3 rounded-xl bg-[#00D9E8] hover:bg-[#00B4D8] text-[#061B2A] text-xs font-mono font-bold shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Request Fleet Management Proposal</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="/careers/at-sea"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold border border-white/20 transition-all duration-300"
            >
              Join Our Seafarer Network
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
