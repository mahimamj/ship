"use client";

import React from "react";
import { Anchor, Shield, Globe, Award, Layers, Zap } from "lucide-react";

export const TrustedByMarquee: React.FC = () => {
  const clients = [
    { name: "Pacific Star Lines", role: "Fleet Operator", icon: Anchor },
    { name: "Nordic Tankers AG", role: "Ship Owner", icon: Shield },
    { name: "Arabian Gulf Maritime", role: "Global Manager", icon: Globe },
    { name: "Blue Horizons Chartering", role: "Shipping Company", icon: Zap },
    { name: "Atlantic Bulk Carriers", role: "Bulk Fleet Operator", icon: Layers },
    { name: "Trans-Indian Ocean Line", role: "Container Fleet Owner", icon: Award },
    { name: "Middle East Energy Transport", role: "Oil & Gas Operator", icon: Anchor },
  ];

  return (
    <section className="bg-[#0A192F] py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
          Trusted By Global Maritime Leaders & Fleet Owners
        </p>
      </div>

      {/* Ticker Container */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center space-x-3 bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-3.5 backdrop-blur-md hover:border-teal-500/40 transition group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition">
                  <Icon className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-teal-300 transition font-poppins">
                    {client.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">{client.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
