"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Wrench,
  Anchor,
  Compass,
  Building2,
  Package,
  ShoppingBag,
  ShieldCheck,
  FileText,
  CreditCard,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "crew-management",
    title: "Crew Management",
    category: "Crewing & HR",
    icon: Users,
    shortDesc: "End-to-end RPSL-approved recruitment, rotation, STCW certification, payroll, and crew welfare.",
    fullDesc: "Oceanic Star Group provides comprehensive crew management for all vessel types under strict STCW 2010 and MLC 2006 compliance. With our extensive database of qualified officers and ratings in India and Sri Lanka, we ensure high retention rates, rigorous medical screening, and seamless crew logistics.",
    features: [
      "RPSL Licensed (DG Shipping India approved)",
      "Strict background checks and STCW certification verification",
      "Comprehensive medical examination & P&I clearance",
      "Seamless flight booking, flag state endorsements & visas",
      "24/7 Crew welfare and family emergency support",
    ],
  },
  {
    id: "technical-management",
    title: "Technical Ship Management",
    category: "Fleet Engineering",
    icon: Wrench,
    shortDesc: "Planned maintenance, dry dock supervision, condition audits, and class survey management.",
    fullDesc: "Our technical management team consists of seasoned Class 1 Chief Engineers and Master Mariners overseeing technical integrity, engine efficiency, dry docking, and ISM/ISPS safety code compliance to minimize downtime and optimize vessel performance.",
    features: [
      "Planned Maintenance System (PMS) integration",
      "Dry dock budget estimation, yard supervision & sea trials",
      "Condition assessment surveys and pre-purchase inspections",
      "Engine overhaul, spare parts logistics & machinery audits",
      "Class & Flag state compliance management",
    ],
  },
  {
    id: "commercial-port",
    title: "Commercial Port Activities",
    category: "Port Operations",
    icon: Anchor,
    shortDesc: "Port clearance, cargo loading/unloading oversight, laytime calculation, and berthing coordination.",
    fullDesc: "We provide 24/7 port operational representation across major ports in India, the Arabian Gulf (Dubai, Fujairah, Jebel Ali), and Sri Lanka, ensuring fast turnaround times for vessel berthing, cargo operations, and customs clearance.",
    features: [
      "Express pilotage & tugboat scheduling",
      "Cargo stowage and loading/discharging superintendence",
      "Laytime calculations & demurrage minimization",
      "Port authority clearance and documentation",
      "Bunkering coordination during port calls",
    ],
  },
  {
    id: "chartering-brokering",
    title: "Ship Chartering & Brokering",
    category: "Commercial Shipping",
    icon: Compass,
    shortDesc: "Spot market fixtures, long term charters, Tankers, Bulk Carriers & Containers.",
    fullDesc: "Ship Chartering and Brokering is an important part of business and we have developed a department in our company to extend the range of services offered to the ship owners. We deal in Tankers, Bulk Carriers, Containers etc. We are actively involved in all aspect of brokering from spot market fixture to long term charter and contract. We have strong relationship with ship owners / operators and traders and co-brokers worldwide and we also ensure all our principle vessels get best possible fixture.",
    features: [
      "Tankers, Bulk Carriers & Container vessel fixtures",
      "Actively involved from spot market to long-term charter contracts",
      "Strong relationships with global ship owners, operators & traders",
      "Shipper ↔ Charterer ↔ Ship Owner fixture optimization",
      "Demurrage, laytime settlement & BIMCO contract terms",
    ],
  },
  {
    id: "ship-agency",
    title: "Ship Agency",
    category: "Maritime Agency",
    icon: Building2,
    shortDesc: "Full port agency representation, vessel inward/outward clearance, and customs handling.",
    fullDesc: "Serving as trusted local port agents, we safeguard ship owners' interests at every port call, expediting vessel clearance, immigration, customs, and port health approvals efficiently.",
    features: [
      "Customs inward & outward clearance",
      "Immigration and shore pass processing for crew",
      "Port dues & disbursement account (SOF/FDA) management",
      "Emergency medical evacuation coordination",
      "Fresh water supply and waste disposal",
    ],
  },
  {
    id: "ship-husbandry",
    title: "Ship Husbandry",
    category: "Vessel Logistics",
    icon: Package,
    shortDesc: "Crew changeovers, launch services, cash-to-master (CTM), and spare part logistics.",
    fullDesc: "Our husbandry services ensure seamless off-shore and in-port logistics for vessels calling at Dubai, Fujairah, Mumbai, and Colombo ports, avoiding delay costs and keeping operations smooth.",
    features: [
      "Off-shore launch boat transfers (Fujairah & Dubai anchorages)",
      "Cash to Master (CTM) secure delivery",
      "Spares-in-transit clearance and delivery onboard",
      "Provisioning and fresh store delivery at sea",
      "Sludge and garbage disposal certificates",
    ],
  },
  {
    id: "store-supplies",
    title: "Store Supplies",
    category: "Provisions & Spares",
    icon: ShoppingBag,
    shortDesc: "High-grade deck stores, engine consumables, safety gear, and IMPA/ISSA provisions.",
    fullDesc: "We supply vessels with high quality technical deck and engine stores, safety equipment, cabin stores, and fresh provisions compliant with IMPA and ISSA standards at competitive rates.",
    features: [
      "IMPA & ISSA catalog deck and engine store procurement",
      "Certified safety gear, pyrotechnics & fire fighting spares",
      "Fresh, dry, and frozen victual provisions",
      "Chemicals, lubricants, and marine paints",
      "24/7 Delivery to anchorage and berth",
    ],
  },
  {
    id: "ship-cyber-security",
    title: "IT & Ship Cyber Security",
    category: "Maritime IT",
    icon: ShieldCheck,
    shortDesc: "IMO 2021 compliant maritime cyber risk management, satellite communications, and onboard IT support.",
    fullDesc: "Protecting modern vessels from cyber vulnerabilities. We implement robust onboard network firewalls, satellite VSAT internet security, OT/IT segregation, and IMO Resolution MSC.428(98) compliance audits.",
    features: [
      "IMO 2021 Maritime Cyber Security Audits & Certification",
      "Satellite VSAT & Starlink marine network installation",
      "Onboard bridge ECDIS/RADAR system IT maintenance",
      "Crew cyber security awareness training",
      "Remote vessel diagnostic telemetry",
    ],
  },
  {
    id: "legal-consultancy",
    title: "Legal Consultancy",
    category: "Advisory & Claims",
    icon: FileText,
    shortDesc: "Maritime claim resolution, P&I advisory, charterparty disputes, and vessel arrest prevention.",
    fullDesc: "Our maritime legal advisory team provides expert counsel on maritime law, P&I club claims, hull & machinery (H&M) disputes, environmental compliance, and vessel arrest mitigation in UAE and India jurisdictions.",
    features: [
      "P&I and H&M marine insurance claim defense",
      "Charterparty dispute arbitration and mediation",
      "Maritime labor law & MLC compliance defense",
      "Vessel registration and mortgage documentation",
      "Salvage and collision claim negotiation",
    ],
  },
  {
    id: "purchasing-assistance",
    title: "Purchasing Assistance",
    category: "Procurement",
    icon: CreditCard,
    shortDesc: "Centralized global procurement, vendor negotiation, spare part sourcing, and cost optimization.",
    fullDesc: "Leveraging our bulk purchasing volume across global maritime suppliers, we obtain significant discounts on genuine OEM engine spares, dry dock materials, and marine equipment for ship owners.",
    features: [
      "OEM spare parts sourcing (MAN, Wärtsilä, Yanmar, Daihatsu)",
      "Global vendor contract negotiation & volume discounts",
      "Freight consolidation and warehousing logistics",
      "Customs duty exemption processing",
      "Transparent digital invoicing & audit trail",
    ],
  },
  {
    id: "crew-training",
    title: "Crew Training",
    category: "Education & Simulation",
    icon: GraduationCap,
    shortDesc: "Value-added maritime training, simulator exercises, DP courses, and safety refreshers.",
    fullDesc: "We conduct specialized pre-joining training at our state-of-the-art training centers. Modules cover ECDIS navigation, bridge team management, engine room simulators, maritime English, and safety drills.",
    features: [
      "Full-mission Bridge & Engine Room Simulator training",
      "ECDIS & High Voltage safety certification",
      "Safety Management System (SMS) familiarization",
      "Behavior-Based Safety (BBS) and environmental awareness",
      "Customized ship-owner specific pre-sea orientation",
    ],
  },
  {
    id: "flag-state-certification",
    title: "Flag State Certification",
    category: "Flag Compliance",
    icon: Award,
    shortDesc: "Dedicated coordination for Panama, Liberia, Malta, Bahamas, Belize & open registries.",
    fullDesc: "Our dedicated personnel team, in addition to its core recruiting work, handles and coordinates for Flag State Certification. We expedite official Flag State Endorsements, Seaman Discharge Books, and officer license verifications across major open registers including Panama, Liberia, Dominican, Belize, Bahamas, Malta, Cyprus, St. Kitts & Nevis, and Palau.",
    features: [
      "Panama, Liberia, Malta, Bahamas & Belize Flag Endorsements",
      "Cyprus, St. Kitts & Nevis, Palau, Dominican Flag Coordination",
      "Seaman Book (CDC) application and renewal",
      "GMDSS & STCW Certificate verification",
      "Express processing for emergency vessel departures",
    ],
  },
];

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Comprehensive Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Integrated <span className="text-gradient">Marine Solutions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Delivering 360-degree technical, crewing, commercial, and port logistics solutions tailored for global vessel owners and fleet managers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => onSelectService(service)}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 group cursor-pointer relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/30 transition duration-500"></div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:border-teal-500/50 transition duration-300 shadow-xl">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:text-white transition">
                  <span>Explore Technical Scope</span>
                  <div className="w-7 h-7 rounded-full bg-teal-500/10 group-hover:bg-teal-400 group-hover:text-slate-950 flex items-center justify-center transition duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
