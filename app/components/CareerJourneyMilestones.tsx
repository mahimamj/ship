"use client";

import React from "react";
import { Compass, Building2, Award, ShieldCheck, Anchor, FileCheck, Globe } from "lucide-react";

interface MilestoneItem {
  yearDisplay: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const MILESTONES: MilestoneItem[] = [
  {
    yearDisplay: "Early",
    title: "Early Maritime Career",
    desc: "Began career at sea in merchant marine vessel operations, building foundational expertise across commercial ship management and maritime logistics.",
    icon: Compass,
  },
  {
    yearDisplay: "2002",
    title: "Oceanic Star Shipping Founded",
    desc: "Established headquarters in Navi Mumbai with a focus on crew management for the merchant fleet.",
    icon: Building2,
  },
  {
    yearDisplay: "2015",
    title: "RPSL & ISO Certification",
    desc: "Achieved RPSL-MUM-506 licensing and ISO 9001 certification, formalising quality standards across operations.",
    icon: Award,
  },
  {
    yearDisplay: "2018",
    title: "Dubai Hub Established",
    desc: "Expanded operations to the Gulf with a dedicated technical and commercial office in Bur Dubai.",
    icon: ShieldCheck,
  },
  {
    yearDisplay: "2022",
    title: "Colombo Hub & Fleet Milestone",
    desc: "Opened South Asia hub in Colombo; group fleet under management crossed 50+ vessels.",
    icon: Anchor,
  },
  {
    yearDisplay: "2024",
    title: "Canadian Incorporation — Oceanic Star Shipping Inc.",
    desc: "Incorporated in Canada under the Canada Business Corporations Act (Corporation No. 1640547-9) in Brampton, ON, establishing a North American commercial gateway.",
    icon: FileCheck,
  },
  {
    yearDisplay: "2026",
    title: "Today",
    desc: "Leading a four-hub, 59-vessel ship management group across India, UAE, Sri Lanka, and Turkey.",
    icon: Globe,
    highlight: true,
  },
];

export const CareerJourneyMilestones: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAF7] text-[#061B2A] py-16 sm:py-24 px-6 sm:px-12 border-t border-slate-200 select-none">
      <div className="max-w-[900px] mx-auto space-y-10">
        
        {/* Header matching user's screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-6 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#C59B27] uppercase block">
              CAREER JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
              Milestones
            </h2>
          </div>
          <p className="font-manrope text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Two decades of disciplined growth from a regional ship agency into an international ship management powerhouse.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-2 sm:pl-4 space-y-8 sm:space-y-10">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[76px] sm:left-[116px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C59B27] via-[#C59B27]/70 to-[#0068B7]" />

          {MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-8 group">
                
                {/* Year Badge Column */}
                <div className="w-16 sm:w-24 pt-1.5 text-right shrink-0">
                  <span className={`font-serif text-sm sm:text-base font-bold tracking-wider block ${
                    item.highlight ? "text-[#0068B7]" : "text-[#0B2545]"
                  }`}>
                    {item.yearDisplay}
                  </span>
                </div>

                {/* Node Ring Marker */}
                <div className="relative z-10 pt-1.5 shrink-0">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                    item.highlight
                      ? "border-[#0068B7] bg-[#0068B7] shadow-[0_0_12px_rgba(0,104,183,0.5)]"
                      : "border-[#C59B27] bg-[#FAFAF7]"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      item.highlight ? "bg-white" : "bg-[#C59B27]"
                    }`} />
                  </div>
                </div>

                {/* Content Card Box */}
                <div className={`flex-1 p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  item.highlight
                    ? "bg-white border-[#0068B7] shadow-md"
                    : "bg-white border-slate-200 shadow-sm hover:border-[#C59B27]/60 hover:shadow-md"
                }`}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-1.5 rounded-lg ${
                      item.highlight ? "bg-sky-50 text-[#0068B7]" : "bg-amber-50 text-[#C59B27]"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B2545] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
