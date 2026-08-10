"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Wrench,
  Compass,
  ShieldCheck,
  Ship,
  ArrowUpRight,
  Anchor,
  Activity,
  Award,
  Navigation,
  CheckCircle2,
  FileCheck,
  Search,
  Truck,
  Cpu
} from "lucide-react";

interface EditorialServicesProps {
  onSelectService?: (serviceTitle: string) => void;
  onOpenQuote?: () => void;
}

export interface ServiceDetail {
  id: string;
  name: string;
  category: "CREWING" | "TECHNICAL" | "OPERATIONS" | "COMPLIANCE";
  icon: any;
  description: string;
  highlights: string[];
}

export const ALL_15_SERVICES: ServiceDetail[] = [
  {
    id: "crewing",
    name: "Crewing",
    category: "CREWING",
    icon: Users,
    description: "RPSL licensed end-to-end crewing solutions ensuring certified officers and ratings for all vessel types.",
    highlights: ["STCW 2010 Verification", "RPSL Licensed", "Global Rotations"],
  },
  {
    id: "manning",
    name: "Manning",
    category: "CREWING",
    icon: Anchor,
    description: "Structured manning agency services matching qualified maritime personnel with international ship owners.",
    highlights: ["Qualified Officers & Ratings", "Medical Screening", "Pre-Sea Vetting"],
  },
  {
    id: "ship-management",
    name: "Ship Management",
    category: "TECHNICAL",
    icon: Ship,
    description: "Total commercial and operational ship management delivering maximum asset utilization and safety standards.",
    highlights: ["Full Operational Care", "Asset Protection", "BIMCO Contracts"],
  },
  {
    id: "technical-management",
    name: "Technical Management",
    category: "TECHNICAL",
    icon: Wrench,
    description: "Class-1 engineer led planned maintenance (PMS), drydock supervision, and machinery condition audits.",
    highlights: ["PMS Maintenance Systems", "Drydock Supervision", "Machinery Audits"],
  },
  {
    id: "crew-management",
    name: "Crew Management",
    category: "CREWING",
    icon: Users,
    description: "Comprehensive crew welfare, rotation scheduling, payroll, training, and MLC 2006 compliance.",
    highlights: ["MLC 2006 Standards", "Payroll & Logistics", "High Retention Rate"],
  },
  {
    id: "chartering",
    name: "Chartering",
    category: "OPERATIONS",
    icon: Compass,
    description: "Spot market fixtures and long-term charter agreements for Tankers, Bulk Carriers, Containers & Offshore.",
    highlights: ["Spot & Time Charters", "Trader Relationships", "Demurrage Settlement"],
  },
  {
    id: "vessel-operations",
    name: "Vessel Operations",
    category: "OPERATIONS",
    icon: Navigation,
    description: "24/7 Voyage monitoring, bunkering optimization, port call coordination, and laytime management.",
    highlights: ["24/7 Voyage Dispatch", "Bunker Efficiency", "Laytime Management"],
  },
  {
    id: "marine-consultancy",
    name: "Marine Consultancy",
    category: "OPERATIONS",
    icon: Search,
    description: "Expert technical inspections, pre-purchase condition surveys, casualty investigations, and naval advisory.",
    highlights: ["Pre-Purchase Surveys", "Casualty Investigation", "Naval Architecture"],
  },
  {
    id: "maritime-recruitment",
    name: "Maritime Recruitment",
    category: "CREWING",
    icon: Award,
    description: "Rigorous talent acquisition for senior officers, superintendents, and specialized offshore DP mariners.",
    highlights: ["Senior Officer Search", "DP Certified Crew", "Background Audits"],
  },
  {
    id: "marine-logistics",
    name: "Marine Logistics",
    category: "OPERATIONS",
    icon: Truck,
    description: "Spare part forwarding, Cash-to-Master (CTM), offshore launch boat services, and store delivery at sea.",
    highlights: ["Spares-in-Transit", "Launch Boat Delivery", "Cash-to-Master"],
  },
  {
    id: "offshore-support",
    name: "Offshore Support",
    category: "OPERATIONS",
    icon: Activity,
    description: "Anchor Handling Tug Supply (AHTS), Dynamic Positioning (DP2), and offshore field support operations.",
    highlights: ["AHTS Towage Ops", "DP2 Systems", "Field Support Vessels"],
  },
  {
    id: "compliance-management",
    name: "Compliance Management",
    category: "COMPLIANCE",
    icon: ShieldCheck,
    description: "Ensuring 100% adherence to IMO, Marpol, Flag State regulations, and international maritime law.",
    highlights: ["Flag State Approvals", "IMO & SOLAS Standards", "Regulatory Audits"],
  },
  {
    id: "safety-management",
    name: "Safety Management",
    category: "COMPLIANCE",
    icon: CheckCircle2,
    description: "Rigorous Safety Management Systems (SMS), risk assessments, and zero-incident safety culture.",
    highlights: ["SMS Manual Audits", "Risk Mitigation", "0 Incident Target"],
  },
  {
    id: "ism-isps-compliance",
    name: "ISM & ISPS Compliance",
    category: "COMPLIANCE",
    icon: FileCheck,
    description: "Safety Management (ISM) and Maritime Security (ISPS) code auditing, certification, and drills.",
    highlights: ["ISM Code Auditing", "ISPS Vessel Security", "Annual Flag Trials"],
  },
  {
    id: "fleet-performance-optimization",
    name: "Fleet Performance Optimization",
    category: "TECHNICAL",
    icon: Cpu,
    description: "Data-driven fuel efficiency monitoring, hull fouling analytics, and carbon intensity (CII) reduction.",
    highlights: ["CII Rating Improvement", "Hull Clean Analytics", "Fuel Consumption Math"],
  },
];

export const EditorialServicesSection: React.FC<EditorialServicesProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<"ALL" | "CREWING" | "TECHNICAL" | "OPERATIONS" | "COMPLIANCE">("ALL");

  const filteredServices = activeTab === "ALL"
    ? ALL_15_SERVICES
    : ALL_15_SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="relative py-28 md:py-40 bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 mb-14 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#0284C7] uppercase block mb-3 font-semibold">
              // COMPLETE MARITIME CAPABILITIES (15 CORE SERVICES)
            </span>
            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0F172A] font-extrabold leading-none">
              OUR MARITIME SERVICES
            </h2>
          </div>

          <p className="text-sm font-light text-[#64748B] max-w-md leading-relaxed">
            From technical vessel management and crewing to chartering, compliance, and fleet optimization—delivering world-class maritime execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {(["ALL", "CREWING", "TECHNICAL", "OPERATIONS", "COMPLIANCE"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider transition duration-300 border ${
                activeTab === tab
                  ? "bg-[#0284C7] text-white font-bold border-[#0284C7] shadow-md scale-105"
                  : "bg-white text-[#64748B] border-slate-200 hover:border-[#0284C7] hover:text-[#0F172A]"
              }`}
            >
              {tab === "ALL" ? "ALL 15 SERVICES" : tab}
            </button>
          ))}
        </div>

        {/* 15 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  if (onSelectService) onSelectService(service.name);
                }}
                className="editorial-card rounded-3xl p-7 flex flex-col justify-between border border-slate-200 group cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] group-hover:scale-110 group-hover:border-[#0284C7] transition duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-100 font-bold">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-[#0F172A] group-hover:text-[#0284C7] transition mb-3">
                    {service.name}
                  </h3>

                  <p className="text-xs font-light text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-[#475569] border border-slate-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#0F172A] pt-2 group-hover:text-[#0284C7] transition font-semibold">
                    <span>REQUEST DISPATCH</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Trust Footer Banner */}
        <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-syne text-lg font-bold text-[#0F172A]">
              NEED CUSTOMIZED SHIP MANAGEMENT OR MANNING?
            </h4>
            <p className="text-xs text-[#64748B] mt-1">
              Our 24/7 Operations Hubs in Dubai and India provide tailormade technical and crewing proposals.
            </p>
          </div>

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-full bg-[#0F172A] text-white font-mono font-bold text-xs tracking-wider hover:bg-[#0284C7] transition shadow-md shrink-0"
            >
              REQUEST FLEET PROPOSAL
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
