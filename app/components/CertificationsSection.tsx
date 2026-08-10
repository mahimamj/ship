"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, FileCheck2, CheckCircle2, X, Flag, FileText, Globe, ArrowRight, Zap } from "lucide-react";

export interface CertItem {
  id: string;
  title: string;
  subtitle: string;
  authority: string;
  certNumber: string;
  entity: string;
  jurisdiction: string;
  validity: string;
  scope: string;
  details: string;
  verifiedBadge: string;
  features: string[];
}

export interface FlagStateLocation {
  code: string;
  country: string;
  flagUrl: string;
  registry: string;
  xPercent: number; // SVG map X position %
  yPercent: number; // SVG map Y position %
  services: string[];
  turnaround: string;
}

export const FLAG_STATE_LOCATIONS: FlagStateLocation[] = [
  {
    code: "PA",
    country: "Panama",
    flagUrl: "https://flagcdn.com/w80/pa.png",
    registry: "Panama Maritime Authority (PMA)",
    xPercent: 26,
    yPercent: 58,
    services: ["Panama Seaman Book (CDC)", "Officer Endorsements", "GMDSS Verification", "Vessel Registration"],
    turnaround: "24 – 48 Hours",
  },
  {
    code: "LR",
    country: "Liberia",
    flagUrl: "https://flagcdn.com/w80/lr.png",
    registry: "Liberian International Ship & Corporate Registry (LISCR)",
    xPercent: 46,
    yPercent: 58,
    services: ["Liberian Seaman CDC", "Officer License Endorsements", "Special Qualification Certificates"],
    turnaround: "24 Hours Express",
  },
  {
    code: "DO",
    country: "Dominican Republic",
    flagUrl: "https://flagcdn.com/w80/do.png",
    registry: "Dominican Maritime Authority",
    xPercent: 29,
    yPercent: 49,
    services: ["Flag Endorsements", "STCW Certificate Verification", "Seafarer Book Renewal"],
    turnaround: "48 Hours",
  },
  {
    code: "BZ",
    country: "Belize",
    flagUrl: "https://flagcdn.com/w80/bz.png",
    registry: "International Merchant Marine Registry of Belize (IMMARBE)",
    xPercent: 22,
    yPercent: 50,
    services: ["IMMARBE Endorsements", "CDC Seaman Book", "Tanker Endorsements"],
    turnaround: "24 – 48 Hours",
  },
  {
    code: "BS",
    country: "Bahamas",
    flagUrl: "https://flagcdn.com/w80/bs.png",
    registry: "Bahamas Maritime Authority (BMA)",
    xPercent: 26,
    yPercent: 42,
    services: ["BMA Officer Endorsements", "Seaman Discharge Books", "Safety Certificates"],
    turnaround: "24 Hours",
  },
  {
    code: "MT",
    country: "Malta",
    flagUrl: "https://flagcdn.com/w80/mt.png",
    registry: "Transport Malta Merchant Shipping Directorate",
    xPercent: 51,
    yPercent: 37,
    services: ["Malta Flag Endorsements", "EU Flag Officer Processing", "STCW Verification"],
    turnaround: "48 Hours",
  },
  {
    code: "CY",
    country: "Cyprus",
    flagUrl: "https://flagcdn.com/w80/cy.png",
    registry: "Cyprus Deputy Ministry of Shipping",
    xPercent: 57,
    yPercent: 37,
    services: ["Cyprus Flag Endorsements", "EU Seafarer Certification", "GMDSS Endorsements"],
    turnaround: "48 Hours",
  },
  {
    code: "KN",
    country: "St. Kitts & Nevis",
    flagUrl: "https://flagcdn.com/w80/kn.png",
    registry: "St. Kitts & Nevis International Ship Registry (SKANReg)",
    xPercent: 33,
    yPercent: 51,
    services: ["SKANReg Endorsements", "Seaman Book Processing", "Officer Certificates"],
    turnaround: "24 Hours",
  },
  {
    code: "PW",
    country: "Palau",
    flagUrl: "https://flagcdn.com/w80/pw.png",
    registry: "Palau International Ship Registry (PISR)",
    xPercent: 85,
    yPercent: 55,
    services: ["PISR Flag Endorsements", "CDC Seaman Book", "STCW Verification"],
    turnaround: "24 – 48 Hours",
  },
];

export const OFFICIAL_CERTIFICATES: CertItem[] = [
  {
    id: "rpsl-license-2029",
    title: "DG SHIPPING RPSL LICENCE (5-YEAR RENEWED)",
    subtitle: "Ministry of Ports, Shipping and Waterways (Form-VIII)",
    authority: "Directorate General of Shipping / Seamen's Employment Office (Mumbai)",
    certNumber: "RPSL-MUM-506",
    entity: "OCEANIC STAR SHIPPING PRIVATE LIMITED",
    jurisdiction: "Ministry of Ports, Shipping and Waterways, Govt. of India",
    validity: "09/01/2024 to 09/01/2029 (Active 5-Year Licence)",
    scope: "Merchant Shipping Rules 2016 & Regulation 1.4 of MLC 2006",
    details: "Renewed 5-year official Recruitment and Placement Service Licence (RPSL-MUM-506) issued on 09/01/2024 by Director, Seamen's Employment Office Mumbai under Directorate General of Shipping, Ministry of Ports, Shipping and Waterways.",
    verifiedBadge: "Valid Till 2029 • DG Shipping",
    features: [
      "Ministry of Ports, Shipping and Waterways Approved",
      "5-Year Active Licence (Valid 09/01/2024 – 09/01/2029)",
      "Merchant Shipping (Recruitment & Placement) Rules 2016",
      "Regulation 1.4 of Maritime Labour Convention (MLC 2006)",
      "Registered Office: Real Tech Park, Sector 30A, Vashi, Navi Mumbai"
    ],
  },
  {
    id: "dubai-commercial-license-2026",
    title: "DUBAI COMMERCIAL LICENSE & CHAMBER",
    subtitle: "Department of Economy & Tourism & Dubai Chamber",
    authority: "Government of Dubai (DET) & Dubai Chamber of Commerce",
    certNumber: "License No: 1197190 | DCCI: 465937 | Reg: 2003002",
    entity: "OCEANIC STAR FLEET SHIP MANAGEMENT L.L.C",
    jurisdiction: "Dubai, United Arab Emirates (UAE)",
    validity: "Active (Valid till 08/06/2026)",
    scope: "Ship Management & Operation & Ship Chandlers",
    details: "Commercial License (1197190) and Dubai Chamber of Commerce Membership (465937) issued by Government of Dubai DET authorizing full technical ship management, vessel operation, and ship chandling.",
    verifiedBadge: "Valid Till 2026 • Dubai DET",
    features: [
      "Ship Management & Operation Active Status",
      "Ship Chandlers Licensed Activity",
      "Dubai Chamber of Commerce Registered (DCCI 465937)",
      "Commercial Register No: 2003002",
      "Office Location: Business Bay / Mankhool, Dubai UAE"
    ],
  },
  {
    id: "iso-9001-qms",
    title: "ISO 9001:2015 QUALITY MANAGEMENT",
    subtitle: "DAS Certification & UKAS Management Systems",
    authority: "DAS Certification / UKAS (8327) / IAF Multilateral",
    certNumber: "DAS 50565279/5/Q",
    entity: "Oceanic Star Shipping Pvt. Ltd.",
    jurisdiction: "United Kingdom (UKAS) / IAF Global",
    validity: "Certified QMS Standards",
    scope: "Provision of Manning for Shipping Industry",
    details: "International Quality Management System certification accredited under UKAS 8327 and IAF Multilateral Recognition Arrangement for shipping manning, officer recruitment, and technical audits.",
    verifiedBadge: "UKAS / IAF Accredited",
    features: [
      "Provision of Manning for Shipping Industry Scope",
      "IAF Multilateral Recognition Arrangement",
      "UKAS Management Systems Accredited (8327)",
      "Regular Independent Quality Audits"
    ],
  },
  {
    id: "panama-doc-abs",
    title: "PANAMA DOC (ISM CODE - SOLAS)",
    subtitle: "Interim Document of Compliance (ABS Recognized)",
    authority: "Republic of Panama / American Bureau of Shipping (ABS)",
    certNumber: "Doc No: 483985-6065714-026 | IMO: 6412691",
    entity: "Oceanic Star Shipping Pvt. Ltd.",
    jurisdiction: "Republic of Panama Maritime Authority",
    validity: "Panama Recognized & ABS Certified",
    scope: "Safe Operation of Ships & Pollution Prevention (Oil & Chemical Tankers)",
    details: "Document of Compliance (DOC) issued under SOLAS 1974 Chapter IX (ISM Code) by American Bureau of Shipping (ABS) recognizing safety management for Oil Tanker and Chemical Tanker fleets.",
    verifiedBadge: "ABS & Panama Approved",
    features: [
      "SOLAS 1974 International Safety Convention",
      "Recognized for Oil Tankers & Chemical Tankers",
      "Issued by American Bureau of Shipping (ABS)",
      "Company IMO Identification: 6412691"
    ],
  },
  {
    id: "certificate-of-incorporation-mumbai",
    title: "GOVT. CERTIFICATE OF INCORPORATION",
    subtitle: "Ministry of Corporate Affairs (Form 1)",
    authority: "Registrar of Companies, Maharashtra, Mumbai",
    certNumber: "CIN: U63000MH2011PTC212994",
    entity: "Oceanic Star Shipping Private Limited",
    jurisdiction: "Republic of India (Companies Act, 1956)",
    validity: "Incorporated 04 February 2011",
    scope: "International Marine Logistics & Ship Management Corporate Entity",
    details: "Official Certificate of Incorporation issued by Registrar of Companies Maharashtra Mumbai establishing private limited corporate standing under Companies Act 1956.",
    verifiedBadge: "Govt of India Incorporated",
    features: [
      "Incorporated under Companies Act 1956",
      "Registrar of Companies Mumbai Certification",
      "Est. 04 February 2011",
      "Registered Corporate Identity No: U63000MH2011PTC212994"
    ],
  },
];

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const [selectedFlag, setSelectedFlag] = useState<FlagStateLocation>(FLAG_STATE_LOCATIONS[0]);

  return (
    <section id="certifications" className="py-28 md:py-36 bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-[#0284C7] font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>MINISTRY & GLOBAL CLASS ACCREDITATIONS</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0F172A] font-extrabold leading-none">
              OFFICIAL CERTIFICATIONS
            </h2>
          </div>

          <p className="text-sm font-light text-[#64748B] max-w-md leading-relaxed">
            Fully licensed and certified by the Ministry of Ports, Shipping and Waterways India (RPSL valid till 2029), Dubai DET (Valid till 2026), Panama Maritime Authority, UKAS, and American Bureau of Shipping (ABS).
          </p>
        </div>

        {/* Official Cert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="editorial-card rounded-3xl p-7 border border-slate-200 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] group-hover:scale-110 group-hover:border-[#0284C7] transition duration-300 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {cert.verifiedBadge}
                  </span>
                </div>

                <h3 className="font-syne text-xl font-bold text-[#0F172A] group-hover:text-[#0284C7] transition mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#0284C7] mb-2">{cert.subtitle}</p>
                <p className="text-[11px] font-light text-[#64748B] mb-4">{cert.authority}</p>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-mono space-y-1 mb-4">
                  <span className="text-[10px] text-[#64748B] uppercase block">LICENCE / REGISTRATION CODE:</span>
                  <span className="text-[#0F172A] font-bold truncate block">{cert.certNumber}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#0F172A] group-hover:text-[#0284C7] transition font-semibold">
                <span>INSPECT CERTIFICATE AUDIT</span>
                <FileText className="w-4 h-4 text-[#0284C7] group-hover:translate-x-1 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Flag State Global World Map Banner */}
        <div className="editorial-card rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 bg-white relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#0284C7] font-semibold">
              <Globe className="w-4 h-4 text-[#0284C7]" />
              <span>GLOBAL OPEN REGISTRIES WORLD MAP</span>
            </div>

            <h3 className="font-bebas text-4xl sm:text-6xl font-bold text-[#0F172A]">
              FLAG STATE CERTIFICATION & PROCESSING
            </h3>

            <p className="text-sm font-light text-[#64748B] leading-relaxed">
              Our dedicated licensing team handles and coordinates official Flag State Endorsements, Seaman Books (CDC), and officer license verifications across 9 major international open registries.
            </p>
          </div>

          {/* High Tech World Map Display Container */}
          <div className="relative w-full h-[400px] sm:h-[500px] bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-inner">
            {/* Vector World Map SVG */}
            <svg
              className="absolute inset-0 w-full h-full object-cover filter contrast-125"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* North America */}
              <path
                d="M120,60 L240,50 L300,100 L260,160 L290,200 L270,240 L210,230 L160,180 L110,130 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* South America */}
              <path
                d="M260,250 L340,260 L360,330 L320,430 L280,440 L250,370 L240,300 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* Greenland */}
              <path
                d="M320,30 L400,25 L410,65 L340,75 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* Europe */}
              <path
                d="M460,70 L560,65 L600,110 L560,145 L480,140 L450,100 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M450,155 L580,150 L610,230 L560,370 L500,380 L460,280 L440,210 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* Asia & Middle East */}
              <path
                d="M590,75 L910,65 L940,160 L870,240 L760,260 L700,220 L660,240 L600,160 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              {/* Australia & New Zealand */}
              <path
                d="M770,310 L890,310 L890,410 L810,420 L760,360 Z"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />

              {/* Equator & Meridian Grid */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#0284C7" strokeOpacity="0.15" strokeDasharray="4 4" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="#0284C7" strokeOpacity="0.15" strokeDasharray="4 4" />
            </svg>

            {/* Glowing Interactive Flag Markers with Real Flag Images */}
            {FLAG_STATE_LOCATIONS.map((loc) => {
              const isSelected = selectedFlag.code === loc.code;
              return (
                <motion.div
                  key={loc.code}
                  style={{ left: `${loc.xPercent}%`, top: `${loc.yPercent}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => setSelectedFlag(loc)}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Outer Pulsing Ring */}
                  <span className={`absolute -inset-3 rounded-full transition duration-300 ${
                    isSelected ? "bg-[#0284C7]/40 animate-ping" : "bg-[#0284C7]/20 group-hover:animate-ping"
                  }`}></span>

                  {/* Flag Badge Box with REAL FLAG IMAGE */}
                  <div className={`relative px-2.5 py-1.5 rounded-xl border backdrop-blur-md flex items-center space-x-2 shadow-md transition duration-300 ${
                    isSelected
                      ? "bg-[#0284C7] border-[#0284C7] text-white ring-2 ring-sky-300 scale-110"
                      : "bg-white/95 border-slate-300 text-[#0F172A] hover:border-[#0284C7]"
                  }`}>
                    <img
                      src={loc.flagUrl}
                      alt={`${loc.country} Flag`}
                      className="w-6 h-4 object-cover rounded shadow-sm border border-slate-200"
                    />
                    <span className={`text-[11px] font-mono font-bold tracking-wider ${isSelected ? "text-white" : "text-[#0F172A]"}`}>{loc.code}</span>
                  </div>

                  {/* Floating Hover Card */}
                  <div className="opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xl z-30 space-y-1">
                    <div className="flex items-center space-x-2 border-b border-slate-100 pb-1.5">
                      <img src={loc.flagUrl} alt={loc.country} className="w-5 h-3.5 rounded object-cover" />
                      <span className="font-syne text-xs font-bold text-[#0F172A]">{loc.country}</span>
                    </div>
                    <p className="text-[10px] font-mono text-[#0284C7]">{loc.registry}</p>
                    <div className="text-[9px] font-mono text-emerald-600 flex items-center space-x-1 pt-1 font-semibold">
                      <Zap className="w-3 h-3" />
                      <span>Speed: {loc.turnaround}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Selected Location Details Panel (Bottom Left on Map) */}
            <AnimatePresence mode="wait">
              {selectedFlag && (
                <motion.div
                  key={selectedFlag.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md bg-white/95 border border-slate-200 rounded-2xl p-5 backdrop-blur-xl shadow-lg z-30 space-y-3"
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedFlag.flagUrl}
                        alt={`${selectedFlag.country} Flag`}
                        className="w-9 h-6 object-cover rounded-md border border-slate-200 shadow-sm"
                      />
                      <div>
                        <h4 className="font-syne text-base font-bold text-[#0F172A]">
                          {selectedFlag.country} ({selectedFlag.code})
                        </h4>
                        <p className="text-[10px] font-mono text-[#0284C7] font-semibold">{selectedFlag.registry}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                      ⚡ {selectedFlag.turnaround}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#64748B] uppercase block font-semibold">SERVICES & ENDORSEMENTS:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFlag.services.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-mono text-[#0F172A] border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Real Flag Image Country Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 pt-2">
            {FLAG_STATE_LOCATIONS.map((loc) => {
              const isSelected = selectedFlag.code === loc.code;
              return (
                <button
                  key={loc.code}
                  onClick={() => setSelectedFlag(loc)}
                  className={`p-4 rounded-2xl border text-center transition duration-300 flex flex-col items-center justify-center space-y-2 group ${
                    isSelected
                      ? "bg-[#0284C7] border-[#0284C7] text-white shadow-md scale-105 ring-2 ring-sky-300"
                      : "bg-white border-slate-200 text-[#64748B] hover:border-[#0284C7] hover:text-[#0F172A]"
                  }`}
                >
                  <img
                    src={loc.flagUrl}
                    alt={`${loc.country} National Flag`}
                    className="w-10 h-7 object-cover rounded-md shadow-sm border border-slate-200 group-hover:scale-110 transition duration-300"
                  />
                  <div className="text-center">
                    <span className={`text-xs font-mono font-bold block ${isSelected ? "text-white" : "text-[#0F172A]"}`}>{loc.code}</span>
                    <span className={`text-[10px] font-mono block truncate max-w-[80px] ${isSelected ? "text-sky-100" : "text-[#64748B]"}`}>{loc.country}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Interactive Official Certificate Verification Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="editorial-card rounded-3xl p-8 max-w-xl w-full border border-slate-200 shadow-2xl relative space-y-5 bg-white"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-[#64748B] hover:text-[#0F172A] p-2 rounded-full bg-slate-100 border border-slate-200 transition"
              >
                <X size={18} />
              </button>

              <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-100 flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="font-bebas text-3xl font-bold text-[#0F172A]">{selectedCert.title}</h3>
                  <p className="text-xs font-mono text-[#0284C7] font-bold">{selectedCert.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-[#64748B] uppercase block">LICENCE / REGISTRATION CODE:</span>
                  <span className="text-[#0F172A] font-bold truncate block">{selectedCert.certNumber}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-[#64748B] uppercase block">LICENSED ENTITY:</span>
                  <span className="text-[#0284C7] font-bold truncate block">{selectedCert.entity}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-[#64748B] uppercase block">VALIDITY PERIOD:</span>
                  <span className="text-emerald-600 font-bold truncate block">{selectedCert.validity}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-[#64748B] uppercase block">GOVERNMENT JURISDICTION:</span>
                  <span className="text-[#0F172A] font-semibold truncate block">{selectedCert.jurisdiction}</span>
                </div>
              </div>

              <p className="text-xs font-light text-[#64748B] leading-relaxed">
                {selectedCert.details}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono text-[#0F172A] uppercase tracking-wider font-bold block">VERIFIED LICENCE CLAUSES:</span>
                {selectedCert.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#64748B]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-full bg-[#0F172A] text-white font-mono font-bold text-xs tracking-wider hover:bg-[#0284C7] transition shadow-md mt-2"
              >
                CLOSE CERTIFICATE PREVIEW
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
