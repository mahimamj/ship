"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, DollarSign, Anchor, Building2, ArrowRight } from "lucide-react";
import { SEAFARER_APPLY_PATH } from "@/lib/content/careers";

interface JobOpening {
  id: string;
  title: string;
  category: string;
  badge: string;
  location: string;
  duration: string;
  wages: string;
  desc: string;
  requirements: string[];
  department: string;
  isShip: boolean;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-01",
    title: "Master Mariner — VLCC & Suezmax Fleet",
    category: "Tankers",
    badge: "CRUDE TANKERS",
    location: "Worldwide",
    duration: "4-5 months",
    wages: "Top CBA Wages",
    desc: "Seeking experienced Master Mariner for crude oil fleet. Valid STCW Master COC, DCE Oil, and SIRE 2.0 vetting inspection record required.",
    requirements: ["STCW Master COC", "DCE Oil", "SIRE 2.0 Exp"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-02",
    title: "Chief Officer — MR & LR Product Tankers",
    category: "Tankers",
    badge: "PRODUCT TANKERS",
    location: "Worldwide",
    duration: "4-5 months",
    wages: "Competitive CBA",
    desc: "Chief Officer with proven cargo operations experience on MR/LR product tankers. SIRE preparation and ballast management record required.",
    requirements: ["Chief Officer COC", "Product Tanker DCE", "Zero Fee"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-03",
    title: "Chief Engineer — Dual-Fuel LNG / LPG Fleet",
    category: "Gas carriers",
    badge: "DUAL FUEL LNG",
    location: "Worldwide",
    duration: "3-4 months",
    wages: "Top Tier CBA",
    desc: "Chief Engineer for ME-GI / WinGD dual-fuel gas carriers. Valid STCW Advanced Gas Endorsement and high-pressure gas system experience.",
    requirements: ["STCW Gas Endorsement", "ME-GI Engine Exp", "RPSL Compliant"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-04",
    title: "Second Engineer — IMO II/III Chemical Tankers",
    category: "Chemical",
    badge: "CHEM TANKERS",
    location: "Worldwide",
    duration: "4 months",
    wages: "High CBA Scale",
    desc: "Second Engineer for stainless steel / epoxy chemical parcel tankers. Valid STCW Advanced Chemical Endorsement and cargo pump maintenance.",
    requirements: ["STCW Chem DCE", "StSt Cargo Exp", "Immediate Joining"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-05",
    title: "Master Mariner — Capesize & Newcastlemax Bulk",
    category: "Bulk carriers",
    badge: "DRY BULK FLEET",
    location: "Worldwide",
    duration: "5-6 months",
    wages: "Standard CBA",
    desc: "Master Mariner for 180,000+ DWT bulk carriers. Experienced with heavy ore, grain loading, draft survey, and Port State Control.",
    requirements: ["Capesize Bulk Exp", "Master COC", "Zero Fee"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-06",
    title: "Chief Officer — 15,000+ TEU Container Fleet",
    category: "Container",
    badge: "BOXSHIP FLEET",
    location: "Worldwide",
    duration: "4-5 months",
    wages: "High Scale CBA",
    desc: "Chief Officer for ultra-large container vessels. Expertise in computerized lashing calculations, stability software, and DG cargo.",
    requirements: ["ULCV TEU Exp", "Chief Officer COC", "STCW 2010"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-07",
    title: "DP2 Chief Engineer — AHTS & Subsea Fleet",
    category: "Offshore",
    badge: "OFFSHORE OPERATIONS",
    location: "Persian Gulf",
    duration: "60/60 Rotation",
    wages: "Offshore Day Rate",
    desc: "DP2 Chief Engineer for offshore anchor handling tug supply vessels operating in Arabian Gulf offshore oil fields.",
    requirements: ["DP2 Logbook", "AHTS Anchor Handling", "Offshore STCW"],
    department: "At Sea Crewing",
    isShip: true,
  },
  {
    id: "job-08",
    title: "Senior Technical Superintendent — Tanker Division",
    category: "Shore jobs",
    badge: "TECHNICAL MANAGEMENT",
    location: "Dubai HQ",
    duration: "Full Time",
    wages: "Executive Package",
    desc: "Oversee drydockings, CAP audits, ISM/ISPS compliance, and planned maintenance system (PMS) for international tanker fleet.",
    requirements: ["Class-1 Chief Eng", "Drydocking Exp", "Dubai Based"],
    department: "Shore Management",
    isShip: false,
  },
  {
    id: "job-09",
    title: "Crewing & Placement Manager — RPSL Operations",
    category: "Shore jobs",
    badge: "CREW LOGISTICS",
    location: "Mumbai HQ",
    duration: "Full Time",
    wages: "Industry Leading",
    desc: "Manage seafarer recruitment, DG Shipping compliance, RPSL documentation, STCW verifications, and vessel manning logistics.",
    requirements: ["RPSL Regulations", "Maritime HR Exp", "Mumbai HQ"],
    department: "Shore Management",
    isShip: false,
  },
  {
    id: "job-10",
    title: "Qualified Company Secretary & Compliance Manager",
    category: "Shore jobs",
    badge: "CS & COMPLIANCE",
    location: "Mumbai HQ",
    duration: "Full Time",
    wages: "Competitive",
    desc: "ACS/FCS qualified Secretarial professional handling MCA filings, ROC compliance, board secretarial work, and maritime legal governance.",
    requirements: ["CS Qualified", "ROC MCA Compliance", "Corporate Law"],
    department: "Shore Management",
    isShip: false,
  },
  {
    id: "job-11",
    title: "Marine Accounts & Foreign Remittance Manager",
    category: "Shore jobs",
    badge: "FINANCE & ACCOUNTS",
    location: "Mumbai HQ",
    duration: "Full Time",
    wages: "High Scale",
    desc: "Manage foreign currency remittances, vessel DA disbursements, port agent accounting, FEMA compliance, and vendor audit reconciliation.",
    requirements: ["Shipping Accounts", "FEMA Forex Compliance", "M.Com / CA Inter"],
    department: "Shore Management",
    isShip: false,
  },
];

interface CareerJobBoardSectionProps {
  onOpenApplyModal?: (jobTitle?: string) => void;
}

export const CareerJobBoardSection: React.FC<CareerJobBoardSectionProps> = ({ onOpenApplyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All positions");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => [
      "All positions",
      "Tankers",
      "Gas carriers",
      "Chemical",
      "Bulk carriers",
      "Container",
      "Offshore",
      "Shore jobs",
    ],
    []
  );

  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All positions" || job.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="careers-job-board"
      className="relative w-full bg-[#FAFAF7] text-[#061B2A] py-8 sm:py-12 px-4 sm:px-6 md:px-12 font-sans select-none border-t border-b border-[#082F49]/12"
    >
      <div className="max-w-[1400px] mx-auto space-y-5 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto pb-1">
          <span className="px-3 py-1 bg-[#0068B7]/10 text-[#0068B7] border border-[#0068B7]/30 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase inline-block">
            APPLY FOR JOB
          </span>
          
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#061B2A] tracking-tight leading-snug">
            Want To Be A Part Of <span className="text-[#0068B7]">Oceanic Star Team?</span>
          </h2>

          <p className="font-manrope text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Explore active career opportunities across technical superintendency, marine engineering, finance, crewing operations, legal, and crewing at sea.
          </p>
        </div>

        {/* Horizontal Category Filter Pills Bar & Job Counter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#082F49]/12 pb-4">
          
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-[#061B2A] text-white border-[#061B2A] shadow-md"
                      : "bg-white text-[#061B2A] border-[#082F49]/15 hover:border-[#0068B7] hover:bg-[#EDF5F5]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Counter Badge & Search Input */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative hidden sm:block">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1 bg-white border border-[#082F49]/15 rounded-lg text-xs font-mono placeholder:text-slate-400 focus:outline-none focus:border-[#0068B7] w-36 sm:w-44"
              />
            </div>

            <span className="font-mono text-xs font-extrabold text-[#0068B7] bg-[#EDF5F5] px-3 py-1 rounded-lg border border-[#0068B7]/20 uppercase tracking-wider whitespace-nowrap">
              {filteredJobs.length} OPEN POSITIONS
            </span>
          </div>

        </div>

        {/* 2-Column Grid Cards styled with Website Navy/Ocean Blue Palette */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#082F49]/15 hover:border-[#0068B7] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-3.5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  
                  {/* Top Badges Row: SHIP/SHORE badge + CATEGORY badge */}
                  <div className="flex items-center justify-between gap-2">
                    {job.isShip ? (
                      <span className="bg-[#0068B7]/10 text-[#0068B7] border border-[#0068B7]/30 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Anchor className="w-3 h-3 text-[#0068B7]" /> SHIP
                      </span>
                    ) : (
                      <span className="bg-[#C59B27]/10 text-[#8F6C13] border border-[#C59B27]/30 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Building2 className="w-3 h-3 text-[#C59B27]" /> SHORE
                      </span>
                    )}

                    <span className="bg-[#EDF5F5] text-[#061B2A] border border-[#082F49]/15 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
                      {job.badge}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="font-syne text-lg sm:text-xl font-extrabold text-[#061B2A] tracking-tight leading-snug group-hover:text-[#0068B7] transition-colors">
                    {job.title}
                  </h3>

                  {/* Specifications Row (Location, Duration, Wages) */}
                  <div className="font-mono text-xs text-slate-500 flex flex-wrap items-center gap-3.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0068B7] shrink-0" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{job.wages}</span>
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {job.desc}
                  </p>

                  {/* Requirement Tags Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {job.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="bg-[#EDF5F5] border border-[#082F49]/12 px-2.5 py-0.5 rounded text-[10px] font-mono text-[#17252D] font-medium"
                      >
                        {req}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Apply Now: seafarer (ship) jobs go to the CRM portal */}
                <div className="pt-2">
                  {job.isShip ? (
                    <Link
                      href={SEAFARER_APPLY_PATH}
                      className="bg-[#061B2A] hover:bg-[#0068B7] text-white px-4.5 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md border border-[#00D9E8]/30 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D9E8]" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => onOpenApplyModal?.(job.title)}
                      className="bg-[#061B2A] hover:bg-[#0068B7] text-white px-4.5 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md border border-[#00D9E8]/30 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D9E8]" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 font-mono text-xs bg-white rounded-2xl border border-slate-200">
            No matching positions found for &quot;{selectedCategory}&quot;.
          </div>
        )}

      </div>
    </section>
  );
};
