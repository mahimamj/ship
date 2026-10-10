"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Ship,
  Layers,
  Users,
  Utensils,
  CheckCircle2,
  HeartHandshake,
  Clock,
  Sliders,
  Globe,
  ArrowRight,
} from "lucide-react";

interface ReasonTheme {
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  badgeBg: string;
  glow: string;
  accentText: string;
  hoverText: string;
  topBar: string;
}

interface ReasonItem {
  number: string;
  title: string;
  desc: string;
  badge: string;
  icon: React.ElementType;
  theme: ReasonTheme;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "Established Since 2002",
    desc: "Over two decades of trusted experience in maritime crewing and ship management.",
    badge: "24+ Years",
    icon: Award,
    theme: {
      border: "border-amber-200/80",
      hoverBorder: "group-hover:border-amber-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(217,119,6,0.15)]",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200/80 group-hover:bg-amber-100",
      glow: "from-amber-500/15",
      accentText: "text-amber-600",
      hoverText: "group-hover:text-amber-600",
      topBar: "from-amber-500 via-amber-400 to-amber-300",
    },
  },
  {
    number: "02",
    title: "RPSL Licensed",
    desc: "Fully certified and compliant recruitment practices, ensuring credibility and adherence to global maritime standards.",
    badge: "DG Shipping Audit",
    icon: ShieldCheck,
    theme: {
      border: "border-emerald-200/80",
      hoverBorder: "group-hover:border-emerald-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)]",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80 group-hover:bg-emerald-100",
      glow: "from-emerald-500/15",
      accentText: "text-emerald-600",
      hoverText: "group-hover:text-emerald-600",
      topBar: "from-emerald-500 via-emerald-400 to-teal-300",
    },
  },
  {
    number: "03",
    title: "All-Vessel Expertise",
    desc: "Unlike niche-focused agencies, we recruit and manage crew across all vessel types, offering versatility and one-stop solutions.",
    badge: "Versatile Fleet",
    icon: Ship,
    theme: {
      border: "border-sky-200/80",
      hoverBorder: "group-hover:border-sky-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(14,165,233,0.15)]",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200 group-hover:bg-sky-500 group-hover:text-white",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200/80 group-hover:bg-sky-100",
      glow: "from-sky-500/15",
      accentText: "text-sky-600",
      hoverText: "group-hover:text-sky-600",
      topBar: "from-sky-500 via-sky-400 to-blue-300",
    },
  },
  {
    number: "04",
    title: "59 Vessels Under Management",
    desc: "A robust, growing fleet portfolio that reflects our operational scale and reliability.",
    badge: "59 Managed Ships",
    icon: Layers,
    theme: {
      border: "border-indigo-200/80",
      hoverBorder: "group-hover:border-indigo-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(99,102,241,0.15)]",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-500 group-hover:text-white",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80 group-hover:bg-indigo-100",
      glow: "from-indigo-500/15",
      accentText: "text-indigo-600",
      hoverText: "group-hover:text-indigo-600",
      topBar: "from-indigo-500 via-indigo-400 to-violet-300",
    },
  },
  {
    number: "05",
    title: "Extensive Seafarer Database",
    desc: "A vast, continuously updated pool of qualified seafarers ready for deployment across roles and vessel types.",
    badge: "Active Talent Pool",
    icon: Users,
    theme: {
      border: "border-teal-200/80",
      hoverBorder: "group-hover:border-teal-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(20,184,166,0.15)]",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200 group-hover:bg-teal-500 group-hover:text-white",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200/80 group-hover:bg-teal-100",
      glow: "from-teal-500/15",
      accentText: "text-teal-600",
      hoverText: "group-hover:text-teal-600",
      topBar: "from-teal-500 via-teal-400 to-emerald-300",
    },
  },
  {
    number: "06",
    title: "Authentic Indian Cuisine Onboard",
    desc: "Thoughtful attention to crew welfare with quality Indian meals at sea, supporting comfort and morale.",
    badge: "Crew Welfare",
    icon: Utensils,
    theme: {
      border: "border-orange-200/80",
      hoverBorder: "group-hover:border-orange-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(249,115,22,0.15)]",
      iconBg: "bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-500 group-hover:text-white",
      badgeBg: "bg-orange-50 text-orange-700 border-orange-200/80 group-hover:bg-orange-100",
      glow: "from-orange-500/15",
      accentText: "text-orange-600",
      hoverText: "group-hover:text-orange-600",
      topBar: "from-orange-500 via-amber-500 to-yellow-400",
    },
  },
  {
    number: "07",
    title: "Safety-First Culture",
    desc: "Uncompromising focus on onboard safety protocols and crew well-being.",
    badge: "SOLAS & ISM Standard",
    icon: CheckCircle2,
    theme: {
      border: "border-rose-200/80",
      hoverBorder: "group-hover:border-rose-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)]",
      iconBg: "bg-rose-50 text-rose-600 border-rose-200 group-hover:bg-rose-500 group-hover:text-white",
      badgeBg: "bg-rose-50 text-rose-700 border-rose-200/80 group-hover:bg-rose-100",
      glow: "from-rose-500/15",
      accentText: "text-rose-600",
      hoverText: "group-hover:text-rose-600",
      topBar: "from-rose-500 via-pink-500 to-rose-300",
    },
  },
  {
    number: "08",
    title: "Fairness & Inclusion",
    desc: "Equal opportunity for all seafarers, irrespective of background, region, or community.",
    badge: "Equal Opportunity",
    icon: HeartHandshake,
    theme: {
      border: "border-violet-200/80",
      hoverBorder: "group-hover:border-violet-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(139,92,246,0.15)]",
      iconBg: "bg-violet-50 text-violet-600 border-violet-200 group-hover:bg-violet-500 group-hover:text-white",
      badgeBg: "bg-violet-50 text-violet-700 border-violet-200/80 group-hover:bg-violet-100",
      glow: "from-violet-500/15",
      accentText: "text-violet-600",
      hoverText: "group-hover:text-violet-600",
      topBar: "from-violet-500 via-purple-400 to-indigo-300",
    },
  },
  {
    number: "09",
    title: "Structured Rotational Placements",
    desc: "Well-planned rotation cycles that support work-life balance and career sustainability for seafarers.",
    badge: "Work-Life Balance",
    icon: Clock,
    theme: {
      border: "border-cyan-200/80",
      hoverBorder: "group-hover:border-cyan-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200 group-hover:bg-cyan-500 group-hover:text-white",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200/80 group-hover:bg-cyan-100",
      glow: "from-cyan-500/15",
      accentText: "text-cyan-600",
      hoverText: "group-hover:text-cyan-600",
      topBar: "from-cyan-500 via-teal-400 to-sky-300",
    },
  },
  {
    number: "10",
    title: "Preference-Based Vessel Matching",
    desc: "Seafarers get a say — we factor in individual preference when assigning vessel types, boosting satisfaction and retention.",
    badge: "High Satisfaction",
    icon: Sliders,
    theme: {
      border: "border-fuchsia-200/80",
      hoverBorder: "group-hover:border-fuchsia-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(217,70,239,0.15)]",
      iconBg: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200 group-hover:bg-fuchsia-500 group-hover:text-white",
      badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/80 group-hover:bg-fuchsia-100",
      glow: "from-fuchsia-500/15",
      accentText: "text-fuchsia-600",
      hoverText: "group-hover:text-fuchsia-600",
      topBar: "from-fuchsia-500 via-pink-400 to-rose-300",
    },
  },
  {
    number: "11",
    title: "Expanding International Footprint",
    desc: "Growing presence across multiple countries, connecting global shipping demand with skilled talent.",
    badge: "6 Total Global Hubs",
    icon: Globe,
    theme: {
      border: "border-blue-200/80",
      hoverBorder: "group-hover:border-blue-500",
      hoverShadow: "hover:shadow-[0_15px_35px_rgba(59,130,246,0.15)]",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-500 group-hover:text-white",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80 group-hover:bg-blue-100",
      glow: "from-blue-500/15",
      accentText: "text-blue-600",
      hoverText: "group-hover:text-blue-600",
      topBar: "from-blue-600 via-indigo-500 to-sky-400",
    },
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="w-full bg-[#FAFAF7] text-[#061B2A] py-8 sm:py-12 px-4 sm:px-6 md:px-12 border-t border-slate-200 select-none">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-4">
          <div className="space-y-1 max-w-2xl">
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#C59B27] uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
              Why Choose Oceanic Star Fleet
            </h2>
          </div>

          <p className="font-manrope text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Over two decades of excellence, seafarer welfare, and compliant global vessel management across international trade corridors.
          </p>
        </div>

        {/* Compact Mission Quote Ribbon */}
        <div className="px-5 py-3 rounded-xl bg-[#061B2A] text-white shadow-md border border-[#00D9E8]/30 flex items-center justify-center text-center">
          <p className="font-syne text-xs sm:text-sm font-bold text-[#00D9E8] tracking-wider uppercase leading-snug">
            &ldquo;OUR MISSION IS NOT ONLY TO MANAGE BUT TO INSPIRE, DEVELOP AND SUPPORT THE BACKBONE OF MARITIME INDUSTRY — OUR SEAFARERS.&rdquo;
          </p>
        </div>

        {/* Continuous moving card carousel (same motion as certifications) */}
        <div className="relative overflow-hidden group/why-scroll">
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-[#FAFAF7] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-[#FAFAF7] to-transparent z-20 pointer-events-none" />

          <div className="flex items-stretch overflow-hidden py-1">
            <div className="flex items-stretch gap-4 animate-marquee-reverse shrink-0">
              {[...REASONS, ...REASONS].map((item, idx) => {
                const Icon = item.icon;
                const t = item.theme;
                return (
                  <div
                    key={`${item.number}-${idx}`}
                    className={`group relative w-[260px] sm:w-[280px] md:w-[300px] shrink-0 p-4 sm:p-5 rounded-2xl bg-white border ${t.border} ${t.hoverBorder} transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-md hover:-translate-y-0.5`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.topBar}`} />

                    <div className="space-y-2.5 relative z-10 pt-1">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-xl border transition-colors duration-300 ${t.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider transition-all duration-300 ${t.badgeBg}`}>
                          {item.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className={`font-serif text-sm sm:text-base font-bold text-[#0B2545] tracking-tight transition-colors duration-300 mb-1 ${t.hoverText}`}>
                          {item.title}
                        </h3>
                        <p className="font-manrope text-xs text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] relative z-10">
                      <span className={`font-bold ${t.accentText}`}>
                        POINT {item.number}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 text-slate-300 ${t.hoverText} group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

