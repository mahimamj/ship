"use client";

import React from "react";
import { CommandHub } from "@/app/data/commandHubs";
import { Compass, ArrowRight } from "lucide-react";

interface HubInfoCardProps {
  hub: CommandHub;
  onExplore?: (hubId: CommandHub["id"]) => void;
}

export const HubInfoCard: React.FC<HubInfoCardProps> = ({ hub, onExplore }) => {
  return (
    <div className="w-full bg-[#FFFFFF]/95 backdrop-blur-xl border border-[#8B94A3]/20 rounded-xl p-4 sm:p-5 shadow-md flex flex-col justify-between space-y-3 text-[#071A2B] font-sans relative overflow-hidden transition-all duration-300 hover:border-[#007CD6]/40">
      {/* Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01666A] via-[#007CD6] to-[#061B2A]" />

      <div className="space-y-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
          <span className="font-mono text-[11px] font-bold text-[#007CD6] tracking-widest uppercase flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#01666A]" />
            {hub.pillLabel}
          </span>
          <span
            className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold tracking-wider uppercase ${
              hub.isUpcoming
                ? "text-amber-800 bg-amber-50 border-amber-200"
                : "text-emerald-800 bg-emerald-50 border-emerald-200"
            }`}
          >
            {hub.status ?? "ACTIVE"}
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#071A2B] bg-[#F8F8F5] px-2 py-0.5 rounded border border-slate-200 font-semibold self-start">
          {hub.coordLabel}
        </span>

        {/* Command Title */}
        <h3 className="font-jakarta text-base sm:text-lg font-extrabold text-[#071A2B] tracking-tight leading-snug">
          {hub.commandTitle}
        </h3>

        {/* Description */}
        <p className="font-inter text-xs text-[#687384] leading-relaxed font-normal">
          {hub.description}
        </p>

        {/* Operations List */}
        <div className="pt-1">
          <span className="font-mono text-[9px] tracking-widest text-[#071A2B] uppercase block mb-1 font-bold">
            OPERATIONS
          </span>
          <div className="flex flex-wrap items-center gap-1">
            {hub.operations.map((op, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-[#071A2B] bg-[#F8F8F5] border border-slate-200 px-2 py-0.5 rounded-md font-medium"
              >
                ✓ {op}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="pt-2 border-t border-slate-100">
        <button
          onClick={() => onExplore?.(hub.id)}
          className="w-full py-2 px-3 bg-[#061B2A] text-white rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-1.5 hover:bg-[#007CD6] hover:shadow transition-all group cursor-pointer"
        >
          <span>EXPLORE HUB</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#007CD6] group-hover:text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
