"use client";

import React from "react";
import { Ship, ShieldCheck, Users, Anchor, ArrowRight, Award, Compass, Globe } from "lucide-react";
import Link from "next/link";

interface AboutOceanicOverviewProps {
  onOpenQuote?: () => void;
}

export const AboutOceanicOverview: React.FC<AboutOceanicOverviewProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      title: "Technical Ship Management",
      desc: "Full technical oversight, drydock management, ISM/ISPS compliance, and planned maintenance for global fleet owners.",
      icon: Ship,
      badge: "TECHNICAL OPS",
      accent: "border-sky-500/30 text-[#0068B7] bg-sky-50",
    },
    {
      title: "RPSL-Approved Crewing & Welfare",
      desc: "Certified STCW recruitment, seafarer placement, and crew welfare across all vessel categories under DG Shipping RPSL-MUM-506.",
      icon: Users,
      badge: "CREW MANAGEMENT",
      accent: "border-amber-500/30 text-amber-700 bg-amber-50",
    },
    {
      title: "Port Agency & Husbandry Services",
      desc: "24/7 port dispatch, launch services, vessel husbandry, and spare logistics across international shipping hubs.",
      icon: Anchor,
      badge: "PORT DISPATCH",
      accent: "border-emerald-500/30 text-emerald-700 bg-emerald-50",
    },
    {
      title: "Commercial Chartering & Brokering",
      desc: "Strategic freight brokering, cargo matching, and commercial vessel operations across global maritime trade corridors.",
      icon: Compass,
      badge: "CHARTERING",
      accent: "border-indigo-500/30 text-indigo-700 bg-indigo-50",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#FAFAF7] text-[#061B2A] py-16 sm:py-24 px-6 sm:px-12 border-b border-slate-200 select-none relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#C59B27] uppercase block flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C59B27]" /> // WHAT IS OCEANIC STAR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight leading-tight">
              World-Class Ship Management &amp; Maritime Solutions
            </h2>
          </div>

          <p className="font-manrope text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Oceanic Star Group is a premier international maritime group operating from Dubai, India, Sri Lanka, Canada, and Turkey. We deliver seamless ship management, RPSL crew logistics, and technical vessel operations.
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#061B2A] text-white shadow-xl border border-[#00D9E8]/30">
          <div className="space-y-1 text-center md:text-left md:pl-4 border-r border-slate-700/60 last:border-r-0">
            <span className="font-syne text-2xl sm:text-3xl font-black text-[#00D9E8]">24+ YEARS</span>
            <p className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">Trusted Experience</p>
          </div>

          <div className="space-y-1 text-center md:text-left md:pl-4 border-r border-slate-700/60 last:border-r-0">
            <span className="font-syne text-2xl sm:text-3xl font-black text-white">59+ VESSELS</span>
            <p className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">Under Management</p>
          </div>

          <div className="space-y-1 text-center md:text-left md:pl-4 border-r border-slate-700/60 last:border-r-0">
            <span className="font-syne text-2xl sm:text-3xl font-black text-[#C59B27]">5 HUBS</span>
            <p className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">Dubai • India • Lanka • Turkey • CA</p>
          </div>

          <div className="space-y-1 text-center md:text-left md:pl-4">
            <span className="font-syne text-2xl sm:text-3xl font-black text-sky-400">RPSL-506</span>
            <p className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">DG Shipping &amp; ISO 9001</p>
          </div>
        </div>

        {/* 4 Pillars Grid (What Oceanic Does) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0068B7] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${pillar.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base font-bold text-[#0B2545] tracking-tight group-hover:text-[#0068B7] transition-colors mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="font-manrope text-xs text-slate-600 leading-normal font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#0068B7]" />
            <span>Fully compliant under SOLAS, MARPOL, MLC 2006 &amp; DG Shipping regulations.</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href="#capabilities"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-[#0068B7] text-[#0B2545] font-mono text-xs font-bold transition text-center"
            >
              EXPLORE CAPABILITIES
            </a>

            {onOpenQuote && (
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0068B7] hover:bg-[#061B2A] text-white font-mono text-xs font-bold transition text-center shadow-md"
              >
                REQUEST PROPOSAL
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
