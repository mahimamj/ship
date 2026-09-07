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

interface ReasonItem {
  number: string;
  title: string;
  desc: string;
  badge: string;
  icon: React.ElementType;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "Established Since 2002",
    desc: "Over two decades of trusted experience in maritime crewing and ship management.",
    badge: "24+ Years",
    icon: Award,
  },
  {
    number: "02",
    title: "RPSL Licensed",
    desc: "Fully certified and compliant recruitment practices, ensuring credibility and adherence to global maritime standards.",
    badge: "DG Shipping Audit",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "All-Vessel Expertise",
    desc: "Unlike niche-focused agencies, we recruit and manage crew across all vessel types, offering versatility and one-stop solutions.",
    badge: "Versatile Fleet",
    icon: Ship,
  },
  {
    number: "04",
    title: "59 Vessels Under Management",
    desc: "A robust, growing fleet portfolio that reflects our operational scale and reliability.",
    badge: "59 Managed Ships",
    icon: Layers,
  },
  {
    number: "05",
    title: "Extensive Seafarer Database",
    desc: "A vast, continuously updated pool of qualified seafarers ready for deployment across roles and vessel types.",
    badge: "Active Talent Pool",
    icon: Users,
  },
  {
    number: "06",
    title: "Authentic Indian Cuisine Onboard",
    desc: "Thoughtful attention to crew welfare with quality Indian meals at sea, supporting comfort and morale.",
    badge: "Crew Welfare",
    icon: Utensils,
  },
  {
    number: "07",
    title: "Safety-First Culture",
    desc: "Uncompromising focus on onboard safety protocols and crew well-being.",
    badge: "SOLAS & ISM Standard",
    icon: CheckCircle2,
  },
  {
    number: "08",
    title: "Fairness & Inclusion",
    desc: "Equal opportunity for all seafarers, irrespective of background, region, or community.",
    badge: "Equal Opportunity",
    icon: HeartHandshake,
  },
  {
    number: "09",
    title: "Structured Rotational Placements",
    desc: "Well-planned rotation cycles that support work-life balance and career sustainability for seafarers.",
    badge: "Work-Life Balance",
    icon: Clock,
  },
  {
    number: "10",
    title: "Preference-Based Vessel Matching",
    desc: "Seafarers get a say — we factor in individual preference when assigning vessel types, boosting satisfaction and retention.",
    badge: "High Satisfaction",
    icon: Sliders,
  },
  {
    number: "11",
    title: "Expanding International Footprint",
    desc: "Growing presence across multiple countries, connecting global shipping demand with skilled talent.",
    badge: "4 Global Hubs",
    icon: Globe,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="w-full bg-[#FAFAF7] text-[#061B2A] py-16 sm:py-24 px-6 sm:px-12 border-t border-slate-200 select-none">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#C59B27] uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
              Why Choose Oceanic Star Fleet
            </h2>
          </div>

          <p className="font-manrope text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Over two decades of excellence, seafarer welfare, and compliant global vessel management across international trade corridors.
          </p>
        </div>

        {/* Mission Quote Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#061B2A] text-white shadow-xl border border-[#00D9E8]/30 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#00D9E8]/10 rounded-full blur-2xl pointer-events-none" />
          <p className="font-syne text-sm sm:text-base md:text-lg font-bold text-[#00D9E8] tracking-wide uppercase leading-relaxed text-center sm:text-left">
            &ldquo;OUR MISSION IS NOT ONLY TO MANAGE BUT TO INSPIRE, DEVELOP AND SUPPORT THE BACKBONE OF MARITIME INDUSTRY — OUR SEAFARERS.&rdquo;
          </p>
        </div>

        {/* 11 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0068B7] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-sky-50 text-[#0068B7] border border-sky-100 group-hover:bg-[#0068B7] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider group-hover:bg-sky-50 group-hover:text-[#0068B7] group-hover:border-sky-200 transition-all duration-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B2545] tracking-tight group-hover:text-[#0068B7] transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Number */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-slate-400 font-bold">
                  <span>POINT {item.number}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0068B7] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
