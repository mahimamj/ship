"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Anchor,
  Shield,
  Gauge,
  Cpu,
  FileCheck,
  Fuel,
  Compass,
  CheckCircle2,
  ArrowRight,
  Ship,
} from "lucide-react";

export const TechnicalManagement: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Comprehensive Technical Management",
      icon: Wrench,
      short: "Dedicated superintendents, vessel condition & plan approval.",
      desc: "Oceanic Star Fleet is operated by a team of industry pioneers committed to provide our esteemed clientele with the highest quality Technical Ship Management services. We offer our client customized ship services to suit their specific requirements including registration of vessel, sales/delivery, operational management, new and old purchase, new building supervision and plan approval.",
      subText: "A group of Technical Superintendents are allocated for each vessel who are responsible for monitoring vessel condition and all other aspects for smooth operation.",
      bullets: [
        "Planned project maintenance and repair",
        "Dry docking, marine system testing and commissioning and UT gauging",
        "Regular condition assessment and performance monitoring",
        "Bunkering & fuel quality supervision",
      ],
    },
    {
      title: "Planned Maintenance System (PMS)",
      icon: Cpu,
      short: "Cloud-connected PMS for zero engine failure downtime.",
      desc: "We deploy advanced digital PMS software tracking running hours of main engines, auxiliary generators, pumps, and purifiers. Automated alerts prevent unexpected breakdowns and optimize spare parts inventory.",
      subText: "Superintendents review daily logs and lube oil reports to maintain peak propulsion efficiency.",
      bullets: [
        "Running hours tracking for main & auxiliary engines",
        "Vibration analysis & lube oil condition monitoring",
        "Automated spare part reordering thresholds",
        "ISM & Class audited maintenance logs",
      ],
    },
    {
      title: "Dry Docking & Marine System Testing",
      icon: Ship,
      short: "Shipyard tender, hull UT gauging & commissioning.",
      desc: "Our technical superintendents prepare precise dry dock specifications, negotiate competitive shipyard slots in Dubai (Drydocks World), China, and India, and supervise steel repairs, hull painting, and machinery overhauls.",
      subText: "Guaranteed on-time yard departure with zero budget overruns and full Class surveyor sign-off.",
      bullets: [
        "Pre-docking hull ultrasonic thickness measurement (UTM)",
        "Shipyard tender evaluation & cost control",
        "Propeller, tailshaft, and rudder clearance overhauls",
        "Marine system testing, commissioning and sea trials",
      ],
    },
    {
      title: "Bunkering & Fuel Management",
      icon: Fuel,
      short: "Fuel testing, ISO 8217 quality checks & MFM transfer.",
      desc: "Comprehensive bunkering supervision at major ports (Fujairah, Dubai, Singapore, Mumbai) ensuring fuel density, viscosity, and sulfur content comply with MARPOL Annex VI regulations and EU ETS carbon tracking.",
      subText: "Independent bunker quantity surveys (BQS) preventing fuel short-delivery.",
      bullets: [
        "ISO 8217 lab testing for catalyst fines & water content",
        "Mass Flow Meter (MFM) bunker transfer supervision",
        "CII & EEXI carbon intensity rating optimization",
        "Bunker dispute settlement & quantity survey reports",
      ],
    },
    {
      title: "Condition Assessment (CAS)",
      icon: FileCheck,
      short: "Pre-purchase, chartering & P&I condition surveys.",
      desc: "Independent technical audits conducted by senior marine engineers. We deliver comprehensive condition reports with high-resolution imagery and machinery diagnostics for ship buyers, P&I clubs, and underwriters.",
      subText: "24-Hour express delivery of pre-purchase condition audit reports worldwide.",
      bullets: [
        "Pre-purchase inspection reports within 24 hours",
        "Cargo hold & tank coating condition scoring",
        "Hatch cover ultrasonic leak testing",
        "Navigational bridge & safety equipment audits",
      ],
    },
    {
      title: "Vessel Registration & Flag Class",
      icon: Compass,
      short: "Class survey renewals & flag state registration.",
      desc: "Managing relations with IACS Classification Societies (Lloyd's Register, Bureau Veritas, DNV, ABS, NKK, IRS) and open registries (Panama, Liberia, Marshall Islands) for seamless survey renewals.",
      subText: "End-to-end handling of vessel sales, deliveries, and newbuilding plan approvals.",
      bullets: [
        "Annual, intermediate, and special class survey planning",
        "Flag state safety inspection (FSI) clearance",
        "Document of Compliance (DOC) management",
        "Continuous Synopsis Record (CSR) updates",
      ],
    },
  ];

  return (
    <section id="technical" className="py-24 bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Our Technical Management Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Technical Ship <span className="text-gradient">Management</span>
          </h2>
          <p className="text-slate-400 text-base">
            Operated by industry pioneers committed to providing our clientele with customized, highest-quality Technical Ship Management services.
          </p>
        </div>

        {/* Split Interactive Blueprint */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center space-x-4 border ${
                    activeModule === idx
                      ? "bg-gradient-to-r from-[#0F2137] to-[#00B4D8]/20 border-teal-400 text-white shadow-xl scale-[1.02]"
                      : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-white/5"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    activeModule === idx ? "bg-teal-500 text-white" : "bg-slate-950 text-teal-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-poppins">{mod.title}</div>
                    <div className="text-[11px] text-slate-400 font-light truncate max-w-xs">{mod.short}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Module Scope Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                <img
                  src="/images/dry_dock_engineering.png"
                  alt="Dry Dock Engineering"
                  className="w-20 h-20 rounded-2xl object-cover border border-teal-500/30"
                />
                <div>
                  <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-widest">
                    Technical Scope • 0{activeModule + 1}
                  </span>
                  <h3 className="text-2xl font-bold font-poppins text-white">
                    {modules[activeModule].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed font-light">
                {modules[activeModule].desc}
              </p>

              {modules[activeModule].subText && (
                <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-xl text-xs text-teal-300 italic">
                  "{modules[activeModule].subText}"
                </div>
              )}

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                  Core Technical Deliverables:
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {modules[activeModule].bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-900/80 p-3.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-slate-400">Dedicated Technical Superintendents Allocated 24/7</span>
                <a href="#contact" className="btn-primary px-5 py-2.5 rounded-xl font-semibold flex items-center space-x-2 text-xs">
                  <span>Consult Technical Manager</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
