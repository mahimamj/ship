"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Shield, Clock, Compass } from "lucide-react";

export const GlobalPresenceMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<"dubai" | "mumbai" | "colombo">("dubai");

  const hubs = {
    dubai: {
      entity: "Oceanic Star Fleet Ship Management LLC",
      city: "Dubai, United Arab Emirates",
      address: "Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE",
      phone: "+971 4 399 0000",
      email: "dubai@oceanicstar.com",
      role: "Middle East Operational HQ & Tanker Fleet Management",
      rsl: "UAE Commercial License #789402",
      hotline: "+971 50 123 4567 (24/7 Ops Emergency)",
    },
    mumbai: {
      entity: "Oceanic Star Shipping Pvt. Ltd.",
      city: "Mumbai, Maharashtra, India",
      address: "Fort Maritime Center, 4th Floor, Shaheed Bhagat Singh Road, Mumbai - 400001, India",
      phone: "+91 22 6800 0000",
      email: "mumbai@oceanicstar.com",
      role: "Global Crewing HQ & STCW Training Center",
      rsl: "DG Shipping License: RPSL-MUM-245",
      hotline: "+91 98 200 00000 (24/7 Crew Helpline)",
    },
    colombo: {
      entity: "Oceanic Star Lanka Pvt Ltd",
      city: "Colombo, Sri Lanka",
      address: "Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
      phone: "+94 11 245 0000",
      email: "colombo@oceanicstar.com",
      role: "South Asia Port Agency & Launch Services Hub",
      rsl: "Sri Lanka Merchant Shipping Approved",
      hotline: "+94 77 123 4567 (Port Agency Desk)",
    },
  };

  return (
    <section id="presence" className="py-24 bg-[#0A192F] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Global Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Our Global <span className="text-gradient">Presence & Hubs</span>
          </h2>
          <p className="text-slate-400 text-base">
            Strategic operational centers in Dubai, Mumbai, and Colombo servicing international shipping routes 24 hours a day.
          </p>
        </div>

        {/* Hub Selector Tabs */}
        <div className="flex justify-center space-x-3 mb-10">
          <button
            onClick={() => setActiveHub("dubai")}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center space-x-2 border ${
              activeHub === "dubai"
                ? "bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white border-teal-400 shadow-xl scale-105"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border-white/10"
            }`}
          >
            <span>🇦🇪 Dubai HQ (LLC)</span>
          </button>

          <button
            onClick={() => setActiveHub("mumbai")}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center space-x-2 border ${
              activeHub === "mumbai"
                ? "bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white border-teal-400 shadow-xl scale-105"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border-white/10"
            }`}
          >
            <span>🇮🇳 Mumbai HQ (Pvt Ltd)</span>
          </button>

          <button
            onClick={() => setActiveHub("colombo")}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center space-x-2 border ${
              activeHub === "colombo"
                ? "bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white border-teal-400 shadow-xl scale-105"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border-white/10"
            }`}
          >
            <span>🇱🇰 Colombo Hub</span>
          </button>
        </div>

        {/* Active Hub Card & World Map Graphic */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Active Hub Details Card */}
          <motion.div
            key={activeHub}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl space-y-6"
          >
            <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-white">{hubs[activeHub].entity}</h3>
                <p className="text-xs text-teal-400 font-semibold">{hubs[activeHub].city}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-slate-400 font-semibold block">Office Address:</span>
                <p className="text-slate-200 leading-relaxed font-light">{hubs[activeHub].address}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-slate-400 font-semibold block flex items-center gap-1">
                    <Phone size={12} className="text-teal-400" /> Phone:
                  </span>
                  <a href={`tel:${hubs[activeHub].phone}`} className="text-white hover:text-teal-300 font-medium">
                    {hubs[activeHub].phone}
                  </a>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-slate-400 font-semibold block flex items-center gap-1">
                    <Mail size={12} className="text-teal-400" /> Email:
                  </span>
                  <a href={`mailto:${hubs[activeHub].email}`} className="text-white hover:text-teal-300 font-medium">
                    {hubs[activeHub].email}
                  </a>
                </div>
              </div>

              <div className="bg-teal-500/10 border border-teal-500/30 p-3.5 rounded-xl text-teal-300 font-medium flex items-center justify-between">
                <span>Emergency Hotline:</span>
                <strong className="text-white font-mono">{hubs[activeHub].hotline}</strong>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex justify-between">
              <span>Primary Function: <strong className="text-white">{hubs[activeHub].role}</strong></span>
            </div>
          </motion.div>

          {/* World Map Graphical Card */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl relative min-h-[380px] flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold font-poppins text-white flex items-center gap-2">
                <Globe className="text-teal-400" /> Global Operations Grid
              </h4>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live Ops Active
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 text-xs my-auto">
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="text-teal-400 font-bold font-poppins text-lg">50+</div>
                <div className="text-white font-semibold">Managed Fleet Vessels</div>
                <div className="text-[11px] text-slate-400">Bulk, Tankers & Containers</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="text-teal-400 font-bold font-poppins text-lg">120+</div>
                <div className="text-white font-semibold">Global Ports Covered</div>
                <div className="text-[11px] text-slate-400">Gulf, Asia, Europe, Americas</div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 text-xs text-slate-400 text-center">
              Worldwide Vessel Operations & Port Agency Coverage 24/7/365
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
