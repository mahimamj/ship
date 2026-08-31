"use client";

import React, { useState, useMemo } from "react";
import { Search, Briefcase, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  department: string;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-01",
    title: "Accounts Payable – Foreign Remittances",
    category: "Finance",
    type: "Full Time",
    location: "Mumbai HQ",
    department: "Finance & Accounts",
  },
  {
    id: "job-02",
    title: "Qualified Junior Company Secretary",
    category: "CS & Compliance",
    type: "Full Time",
    location: "Mumbai HQ",
    department: "Corporate Secretarial",
  },
  {
    id: "job-03",
    title: "Technical Superintendent – Dry Bulk (Geared Vessels)",
    category: "Engineering",
    type: "Full Time",
    location: "Dubai HQ",
    department: "Technical Management",
  },
  {
    id: "job-04",
    title: "Attorney – Transactions And Legal Operations",
    category: "Legal Operations",
    type: "Full Time",
    location: "Dubai HQ",
    department: "Legal & Claims",
  },
  {
    id: "job-05",
    title: "Account Payable Executive",
    category: "Finance",
    type: "Full Time",
    location: "Mumbai HQ",
    department: "Finance & Accounts",
  },
  {
    id: "job-06",
    title: "Crewing Officer",
    category: "Crewing Operations",
    type: "Full Time",
    location: "Mumbai HQ",
    department: "Crew Management & Logistics",
  },
  {
    id: "job-07",
    title: "Crewing Manager",
    category: "Crewing Operations",
    type: "Full Time",
    location: "Dubai HQ",
    department: "Executive Crew Command",
  },
  {
    id: "job-08",
    title: "Documentation Officer",
    category: "CS & Compliance",
    type: "Full Time",
    location: "Mumbai HQ",
    department: "STCW & Flag State Compliance",
  },
  {
    id: "job-09",
    title: "Master Officer / Chief Engineer - Dual-Fuel Fleet",
    category: "At Sea Crewing",
    type: "Offshore Rotation",
    location: "Global Dispatch",
    department: "Marine Operations",
  },
];

interface CareerJobBoardSectionProps {
  onOpenApplyModal?: (jobTitle?: string) => void;
}

export const CareerJobBoardSection: React.FC<CareerJobBoardSectionProps> = ({ onOpenApplyModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const categories = useMemo(() => ["All", "Finance", "CS & Compliance", "Engineering", "Legal Operations", "Crewing Operations", "At Sea Crewing"], []);
  const types = useMemo(() => ["All", "Full Time", "Offshore Rotation", "Contract"], []);
  const locations = useMemo(() => ["All", "Mumbai HQ", "Dubai HQ", "Global Dispatch"], []);

  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
      const matchesType = selectedType === "All" || job.type === selectedType;
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedLocation]);

  return (
    <section
      id="careers-job-board"
      className="relative w-full bg-[#F5F5F2] text-[#071A2B] py-20 md:py-28 px-6 md:px-12 font-sans select-none border-t border-b border-slate-200"
    >
      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 bg-[#0077B6]/10 text-[#0077B6] border border-[#0077B6]/30 rounded-full font-mono text-xs font-bold tracking-[0.25em] uppercase inline-block">
            APPLY FOR JOB
          </span>
          
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A2B] tracking-tight leading-none">
            Want To Be A Part Of <span className="text-[#0077B6]">Oceanic Star Team?</span>
          </h2>

          <p className="font-manrope text-sm sm:text-base text-slate-600 font-normal">
            Explore active career opportunities across technical superintendency, marine engineering, finance, crewing operations, legal, and crewing at sea.
          </p>
        </div>

        {/* Live Filter Bar (4 Filter Controls) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          {/* 1. Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium text-[#071A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#0077B6] transition-all"
            />
          </div>

          {/* 2. Job Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-[#071A2B] focus:outline-none focus:border-[#0077B6] transition-all appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Job Category" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Job Type Dropdown */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-[#071A2B] focus:outline-none focus:border-[#0077B6] transition-all appearance-none cursor-pointer"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t === "All" ? "All Job Type" : t}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Job Location Dropdown */}
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-[#071A2B] focus:outline-none focus:border-[#0077B6] transition-all appearance-none cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "All" ? "All Job Location" : loc}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Interactive Job Openings List Rows */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl divide-y divide-slate-100 overflow-hidden">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/80 transition-all duration-300 group"
              >
                {/* Left: Job Title */}
                <div className="space-y-1">
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#071A2B] group-hover:text-[#0077B6] transition-colors">
                    {job.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 block">{job.department}</span>
                </div>

                {/* Right: Category, Type, Location Pills & Action */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-600 font-bold">
                  {/* Category */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[#071A2B]">
                    <Briefcase className="w-3.5 h-3.5 text-[#0077B6]" />
                    <span>{job.category}</span>
                  </span>

                  {/* Type */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[#071A2B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                    <span>{job.type}</span>
                  </span>

                  {/* Location */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[#071A2B]">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{job.location}</span>
                  </span>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => onOpenApplyModal?.(job.title)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0077B6] hover:bg-[#071A2B] text-white text-xs font-mono font-bold rounded-xl transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105"
                  >
                    <span>More Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 font-mono text-xs">
              No matching positions found. Try adjusting your search filters.
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
          <span>SHOWING {filteredJobs.length} ACTIVE POSITIONS</span>
          <span className="text-[#0077B6] font-bold">RPSL-MUM-506 APPROVED RECRUITMENT</span>
        </div>

      </div>
    </section>
  );
};
