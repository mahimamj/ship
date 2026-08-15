"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, FileText, Globe, ArrowRight, Zap, CheckCircle2, X, Plus, Minus, Target, Maximize2, Sparkles, Eye, Check } from "lucide-react";

export interface CertItem {
  id: string;
  category: "rpsl" | "iso" | "panama" | "inc";
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
  image: string;
  features: string[];
}

export interface FlagStateLocation {
  code: string;
  country: string;
  flagUrl: string;
  registry: string;
  coords: [number, number];
  services: string[];
  turnaround: string;
  about: string;
}

export const FLAG_STATE_LOCATIONS: FlagStateLocation[] = [
  {
    code: "PA",
    country: "Panama",
    flagUrl: "https://flagcdn.com/w80/pa.png",
    registry: "Panama Maritime Authority (PMA)",
    coords: [8.9824, -79.5199],
    services: ["Panama Seaman Book (CDC)", "Officer Endorsements", "GMDSS Verification", "Vessel Registration"],
    turnaround: "24 – 48 Hours",
    about: "The Panama Registry is one of the world's largest and most respected registries, offering a comprehensive range of services with a commitment to quality, efficiency, and global standards.",
  },
  {
    code: "LR",
    country: "Liberia",
    flagUrl: "https://flagcdn.com/w80/lr.png",
    registry: "Liberian International Ship & Corporate Registry (LISCR)",
    coords: [6.4281, -9.4295],
    services: ["Liberian Seaman CDC", "Officer License Endorsements", "Special Qualification Certificates", "Tanker Endorsements"],
    turnaround: "24 Hours Express",
    about: "The Liberian Registry is known for its high safety standards and technological innovation, providing round-the-clock global support for international fleet owners.",
  },
  {
    code: "DO",
    country: "Dominican Rep.",
    flagUrl: "https://flagcdn.com/w80/do.png",
    registry: "Dominican Maritime Authority",
    coords: [18.7357, -70.1627],
    services: ["Flag Endorsements", "STCW Certificate Verification", "Seafarer Book Renewal", "Rating Certificates"],
    turnaround: "48 Hours",
    about: "The Dominican Republic maritime administration offers rapid flag state processing and officer verification under full IMO STCW compliance.",
  },
  {
    code: "BZ",
    country: "Belize",
    flagUrl: "https://flagcdn.com/w80/bz.png",
    registry: "International Merchant Marine Registry of Belize (IMMARBE)",
    coords: [17.1899, -88.4976],
    services: ["IMMARBE Endorsements", "CDC Seaman Book", "Tanker Endorsements", "Officer Certificates"],
    turnaround: "24 – 48 Hours",
    about: "IMMARBE delivers streamlined vessel registration and crew licensing services across international merchant shipping corridors.",
  },
  {
    code: "BS",
    country: "Bahamas",
    flagUrl: "https://flagcdn.com/w80/bs.png",
    registry: "Bahamas Maritime Authority (BMA)",
    coords: [25.0343, -77.3963],
    services: ["BMA Officer Endorsements", "Seaman Discharge Books", "Safety Certificates", "GMDSS Endorsements"],
    turnaround: "24 Hours",
    about: "The Bahamas Maritime Authority is a premier open registry renowned for rigorous safety audits and high flag state performance ratings.",
  },
  {
    code: "MT",
    country: "Malta",
    flagUrl: "https://flagcdn.com/w80/mt.png",
    registry: "Transport Malta Merchant Shipping Directorate",
    coords: [35.9375, 14.3754],
    services: ["Malta Flag Endorsements", "EU Flag Officer Processing", "STCW Verification", "Seafarer Books"],
    turnaround: "48 Hours",
    about: "Transport Malta is the largest European merchant flag registry, delivering full EU regulatory compliance and seafarer certification.",
  },
  {
    code: "CY",
    country: "Cyprus",
    flagUrl: "https://flagcdn.com/w80/cy.png",
    registry: "Cyprus Deputy Ministry of Shipping",
    coords: [35.1264, 33.4299],
    services: ["Cyprus Flag Endorsements", "EU Seafarer Certification", "GMDSS Endorsements", "Officer Endorsements"],
    turnaround: "48 Hours",
    about: "The Cyprus Deputy Ministry of Shipping offers world-class maritime administration with extensive bilateral agreements across global ports.",
  },
  {
    code: "KN",
    country: "St. Kitts & Nevis",
    flagUrl: "https://flagcdn.com/w80/kn.png",
    registry: "St. Kitts & Nevis International Ship Registry (SKANReg)",
    coords: [17.3578, -62.783],
    services: ["SKANReg Endorsements", "Seaman Book Processing", "Officer Certificates", "Safety Endorsements"],
    turnaround: "24 Hours",
    about: "SKANReg provides dynamic, fast-track flag state endorsements and seaman discharge book processing for international mariners.",
  },
  {
    code: "PW",
    country: "Palau",
    flagUrl: "https://flagcdn.com/w80/pw.png",
    registry: "Palau International Ship Registry (PISR)",
    coords: [7.515, 134.5825],
    services: ["PISR Flag Endorsements", "CDC Seaman Book", "STCW Verification", "Special Qualifications"],
    turnaround: "24 – 48 Hours",
    about: "Palau International Ship Registry leverages digital certification systems to deliver rapid seafarer endorsements across Asia-Pacific.",
  },
];

export const OFFICIAL_CERTIFICATES: CertItem[] = [
  {
    id: "rpsl-license-2029",
    category: "rpsl",
    title: "DG SHIPPING RPSL LICENCE (FORM-VIII)",
    subtitle: "Ministry of Ports, Shipping and Waterways",
    authority: "Directorate General of Shipping / Seamen's Employment Office (Mumbai)",
    certNumber: "RPSL-MUM-506",
    entity: "OCEANIC STAR SHIPPING PRIVATE LIMITED",
    jurisdiction: "Govt. of India",
    validity: "09/01/2024 to 09/01/2029 (5-Year Licence)",
    scope: "Merchant Shipping Rules 2016 & MLC 2006",
    details: "Renewed 5-year official Recruitment and Placement Service Licence (RPSL-MUM-506) issued on 09/01/2024 by Director, Seamen's Employment Office Mumbai under Directorate General of Shipping, Ministry of Ports, Shipping and Waterways.",
    verifiedBadge: "Valid Till 2029 • DG Shipping",
    image: "/images/certificates/cert_rpsl_renewed.png",
    features: [
      "Ministry of Ports, Shipping & Waterways Approved",
      "5-Year Active Licence (Valid 09/01/2024 – 09/01/2029)",
      "Merchant Shipping (Recruitment & Placement) Rules 2016",
      "Regulation 1.4 of Maritime Labour Convention (MLC 2006)"
    ],
  },
  {
    id: "iso-9001-qms",
    category: "iso",
    title: "ISO 9001:2015 QUALITY MANAGEMENT",
    subtitle: "DAS Certification & UKAS Management Systems",
    authority: "DAS Certification / UKAS (8327) / IAF Multilateral",
    certNumber: "DAS 50565279/5/Q",
    entity: "Oceanic Star Shipping Pvt. Ltd.",
    jurisdiction: "United Kingdom (UKAS) / IAF Global",
    validity: "Active QMS (Valid till 24/09/2025)",
    scope: "Provision of Manning for Shipping Industry",
    details: "International Quality Management System certification accredited under UKAS 8327 and IAF Multilateral Recognition Arrangement for shipping manning, officer recruitment, and technical audits.",
    verifiedBadge: "UKAS / IAF Accredited",
    image: "/images/certificates/cert_iso_9001.png",
    features: [
      "Provision of Manning for Shipping Industry Scope",
      "IAF Multilateral Recognition Arrangement",
      "UKAS Management Systems Accredited (8327)"
    ],
  },
  {
    id: "panama-doc-abs",
    category: "panama",
    title: "PANAMA DOC (ISM CODE - SOLAS)",
    subtitle: "Interim Document of Compliance (ABS Recognized)",
    authority: "Republic of Panama / American Bureau of Shipping (ABS)",
    certNumber: "Doc No: 483985-6065714-026 | IMO: 6412691",
    entity: "Oceanic Star Shipping Pvt. Ltd.",
    jurisdiction: "Republic of Panama Maritime Authority",
    validity: "Panama Recognized & ABS Certified",
    scope: "Safe Operation of Ships & Pollution Prevention",
    details: "Document of Compliance (DOC) issued under SOLAS 1974 Chapter IX (ISM Code) by American Bureau of Shipping (ABS) recognizing safety management for Oil Tanker and Chemical Tanker fleets.",
    verifiedBadge: "ABS & Panama Approved",
    image: "/images/certificates/cert_panama_doc.png",
    features: [
      "SOLAS 1974 International Safety Convention",
      "Recognized for Oil Tankers & Chemical Tankers",
      "Issued by American Bureau of Shipping (ABS)"
    ],
  },
  {
    id: "rpsl-form8-original",
    category: "rpsl",
    title: "DG SHIPPING RPSL LICENCE FORM-VIII",
    subtitle: "Seamen's Employment Office, Mumbai",
    authority: "Ministry of Ports, Shipping and Waterways",
    certNumber: "Licence No: RPSL-MUM-506",
    entity: "M/s. Oceanic Star Shipping Private Limited",
    jurisdiction: "Govt of India",
    validity: "Historical Initial Licence",
    scope: "Merchant Shipping Rules 2016",
    details: "Original Form-VIII Recruitment and Placement Services Licence issued under Rule 9(4) by Director, Seamen's Employment Office Mumbai.",
    verifiedBadge: "Form-VIII Licence",
    image: "/images/certificates/cert_rpsl_form8.png",
    features: [
      "Official Form-VIII Recruitment & Placement License",
      "Seamen's Employment Office Mumbai Sealed",
      "Rule 9(4) Merchant Shipping Compliance"
    ],
  },
  {
    id: "certificate-of-incorporation-mumbai",
    category: "inc",
    title: "GOVT. CERTIFICATE OF INCORPORATION",
    subtitle: "Ministry of Corporate Affairs (Form 1)",
    authority: "Registrar of Companies, Maharashtra, Mumbai",
    certNumber: "CIN: U63000MH2011PTC212994",
    entity: "Oceanic Star Shipping Private Limited",
    jurisdiction: "Republic of India (Companies Act, 1956)",
    validity: "Est. 04 February 2011",
    scope: "International Marine Logistics & Ship Management",
    details: "Official Certificate of Incorporation issued by Registrar of Companies Maharashtra Mumbai establishing private limited corporate standing under Companies Act 1956.",
    verifiedBadge: "Govt of India Incorporated",
    image: "/images/certificates/cert_incorporation.png",
    features: [
      "Incorporated under Companies Act 1956",
      "Registrar of Companies Mumbai Certification",
      "Registered Corporate Identity No: U63000MH2011PTC212994"
    ],
  },
];

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");
  const [selectedFlag, setSelectedFlag] = useState<FlagStateLocation>(FLAG_STATE_LOCATIONS[0]);
  const flagMapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);

  const filteredCerts = selectedCategoryFilter === "all"
    ? OFFICIAL_CERTIFICATES
    : OFFICIAL_CERTIFICATES.filter((c) => c.category === selectedCategoryFilter);

  // Initialize Dark Leaflet Map for Flag State Registries
  useEffect(() => {
    let mapInstance: any;

    const initMap = async () => {
      if (typeof window === "undefined" || !flagMapRef.current) return;
      const L = (await import("leaflet")).default;

      if (flagMapRef.current.dataset.leafletInitialized) return;
      flagMapRef.current.dataset.leafletInitialized = "true";

      mapInstance = L.map(flagMapRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: false,
        attributionControl: false,
      });

      leafletMapRef.current = mapInstance;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        subdomains: "abcd",
      }).addTo(mapInstance);

      FLAG_STATE_LOCATIONS.forEach((loc) => {
        const customIcon = L.divIcon({
          className: "custom-flag-pin-badge",
          html: `
            <div class="flex items-center gap-1.5 px-2 py-1 bg-[#0A192F] border border-cyan-500/40 rounded-full shadow-lg text-white font-mono text-[10px] font-bold cursor-pointer hover:scale-110 transition">
              <img src="${loc.flagUrl}" class="w-4 h-3 object-cover rounded" />
              <span>${loc.code}</span>
            </div>
          `,
          iconSize: [60, 24],
          iconAnchor: [30, 12],
        });

        const marker = L.marker(loc.coords, { icon: customIcon }).addTo(mapInstance);
        marker.on("click", () => setSelectedFlag(loc));
      });

      const coordsList = FLAG_STATE_LOCATIONS.map((l) => l.coords);
      L.polyline([coordsList[0], coordsList[1], coordsList[5], coordsList[6], coordsList[8]], {
        color: "#00B4D8",
        weight: 1.5,
        dashArray: "4, 6",
        opacity: 0.6,
      }).addTo(mapInstance);
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const handleSelectFlagCard = (loc: FlagStateLocation) => {
    setSelectedFlag(loc);
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo(loc.coords, 4, { duration: 1.2 });
    }
  };

  const handleZoomIn = () => {
    if (leafletMapRef.current) leafletMapRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (leafletMapRef.current) leafletMapRef.current.zoomOut();
  };

  const handleResetZoom = () => {
    if (leafletMapRef.current) leafletMapRef.current.flyTo([20, 0], 2, { duration: 1 });
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 md:py-36 bg-[#F8FAFC] text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/10 border border-[#176B87]/30 text-xs font-mono text-[#176B87] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#176B87]" />
              <span>MINISTRY &amp; GLOBAL CLASS ACCREDITATIONS</span>
            </div>
            <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#071A2B]">
              OFFICIAL CERTIFICATIONS
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-xs sm:text-sm font-manrope text-slate-600 leading-relaxed">
              Fully licensed and accredited by Directorate General of Shipping India (RPSL valid till 2029), Dubai DET, Panama Maritime Authority, UKAS, and American Bureau of Shipping (ABS).
            </p>

            {/* Filter Category Chips */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: "all", label: "All Documents (5)" },
                { id: "rpsl", label: "DG Shipping RPSL" },
                { id: "iso", label: "ISO 9001 QMS" },
                { id: "panama", label: "Panama DOC / ABS" },
                { id: "inc", label: "Govt. Incorporation" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategoryFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                    selectedCategoryFilter === tab.id
                      ? "bg-[#071A2B] text-white border-[#071A2B] shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#176B87] hover:text-[#071A2B]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Animated Ultra-Premium Certificate Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(23,107,135,0.16)] hover:border-[#176B87] flex flex-col justify-between group cursor-pointer relative transition-all duration-300"
              >
                {/* Top Badge Overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 shadow-sm flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" /> {cert.verifiedBadge}
                  </span>
                </div>

                {/* Parchment Document Frame Stage */}
                <div className="relative h-72 sm:h-80 w-full bg-gradient-to-b from-[#F1F5F9] to-[#E2E8F0] p-5 flex items-center justify-center overflow-hidden group">
                  {/* Clean Shadow Document Paper Canvas */}
                  <div className="relative w-full h-full bg-white rounded-2xl p-2 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden flex items-center justify-center group-hover:shadow-[0_15px_35px_rgba(23,107,135,0.2)] transition-all">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Animated Gloss Sheen Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Hover Inspect Glass Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#071A2B]/40 backdrop-blur-xs">
                    <div className="px-4 py-2.5 rounded-full bg-[#071A2B] border border-white/30 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-2xl">
                      <Eye className="w-4 h-4 text-[#00D26A]" /> Inspect High-Res Certificate
                    </div>
                  </div>
                </div>

                {/* Certificate Meta Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#176B87]/10 border border-[#176B87]/30 text-[#176B87] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <h3 className="font-jakarta text-base font-bold text-[#071A2B] group-hover:text-[#176B87] transition line-clamp-1">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-[#176B87] font-semibold">{cert.subtitle}</p>

                  <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-slate-200 text-xs font-mono flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">LICENCE CODE:</span>
                    <span className="text-[#071A2B] font-bold truncate max-w-[180px]">{cert.certNumber}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 flex items-center justify-between text-xs font-mono text-[#071A2B] group-hover:text-[#176B87] font-bold">
                  <span>VERIFIED OFFICIAL DOCUMENT</span>
                  <FileText className="w-4 h-4 text-[#176B87] group-hover:translate-x-1 transition" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dedicated Flag State World Map Container */}
        <div className="bg-[#FFFFFF] border border-slate-200 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full text-xs font-mono text-[#176B87] font-semibold">
              <Globe className="w-3.5 h-3.5 text-[#176B87]" />
              <span>GLOBAL OPEN REGISTRIES WORLD MAP</span>
            </div>

            <h3 className="font-jakarta text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase">
              FLAG STATE CERTIFICATION &amp; PROCESSING
            </h3>

            <p className="text-xs sm:text-sm font-manrope text-[#667783] leading-relaxed">
              Our dedicated licensing team handles and coordinates official Flag State Endorsements, Seaman Books (CDC), and officer license verifications across 9 major international open registries.
            </p>
          </div>

          {/* Map Surface Container */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[540px] bg-[#071A2B] rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
            <div ref={flagMapRef} className="w-full h-full z-0" />

            {/* Bottom-Left Zoom Controls */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center bg-[#0A192F]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-1 space-x-1 text-white">
              <button onClick={handleZoomOut} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition" aria-label="Zoom out">
                <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button onClick={handleZoomIn} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition" aria-label="Zoom in">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button onClick={handleResetZoom} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition" aria-label="Reset zoom">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Desktop Overlay Card */}
            <AnimatePresence mode="wait">
              {selectedFlag && (
                <motion.div
                  key={selectedFlag.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="hidden lg:flex absolute top-5 right-5 bottom-5 w-96 bg-[#071A2B]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-20 text-white flex-col justify-between overflow-y-auto"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={selectedFlag.flagUrl}
                          alt={`${selectedFlag.country} Flag`}
                          className="w-8 h-5 object-cover rounded shadow border border-white/20"
                        />
                        <div>
                          <h4 className="font-jakarta text-lg font-bold text-white">
                            {selectedFlag.country} ({selectedFlag.code})
                          </h4>
                          <p className="text-[10px] font-mono text-sky-400 font-semibold">{selectedFlag.registry}</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30 shrink-0">
                        ● {selectedFlag.turnaround}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider block font-bold">
                        SERVICES &amp; ENDORSEMENTS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedFlag.services.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white/10 text-[10px] font-mono text-white/90 border border-white/10">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <hr className="border-t border-white/10" />

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider block font-bold">
                        ABOUT {selectedFlag.country.toUpperCase()} REGISTRY:
                      </span>
                      <p className="text-xs font-manrope text-white/80 font-light leading-relaxed">
                        {selectedFlag.about}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const matchCert = OFFICIAL_CERTIFICATES.find((c) => c.title.includes("PANAMA")) || OFFICIAL_CERTIFICATES[0];
                      setSelectedCert(matchCert);
                    }}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition mt-4"
                  >
                    <span>View Registry Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 9 Flag State Country Cards */}
          <div className="flex sm:grid sm:grid-cols-5 lg:grid-cols-9 gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {FLAG_STATE_LOCATIONS.map((loc) => {
              const isSelected = selectedFlag.code === loc.code;
              return (
                <button
                  key={loc.code}
                  onClick={() => handleSelectFlagCard(loc)}
                  className={`p-3 rounded-2xl border text-center transition duration-300 flex flex-col items-center justify-center space-y-1.5 shrink-0 w-24 sm:w-auto group ${
                    isSelected
                      ? "bg-[#071A2B] border-[#071A2B] text-white shadow-md scale-105"
                      : "bg-white border-slate-200 text-[#667783] hover:border-[#071A2B] hover:text-[#071A2B]"
                  }`}
                >
                  <img
                    src={loc.flagUrl}
                    alt={`${loc.country} National Flag`}
                    className="w-8 h-5 object-cover rounded shadow-sm border border-slate-200 group-hover:scale-110 transition duration-300"
                  />
                  <div className="text-center">
                    <span className={`text-xs font-mono font-bold block ${isSelected ? "text-white" : "text-[#071A2B]"}`}>{loc.code}</span>
                    <span className={`text-[9px] font-mono block truncate max-w-[65px] ${isSelected ? "text-sky-200" : "text-[#667783]"}`}>{loc.country}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* High-Res Certificate Inspection Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[9999] bg-[#071A2B]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-slate-200 shadow-2xl relative space-y-5 max-h-[95vh] overflow-y-auto text-[#071A2B]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full bg-slate-100 border border-slate-200 transition z-10"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4 pr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 text-[#176B87] border border-sky-100 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-jakarta text-xl sm:text-2xl font-bold text-[#071A2B]">{selectedCert.title}</h3>
                  <p className="text-xs font-mono text-[#176B87] font-bold">{selectedCert.subtitle}</p>
                </div>
              </div>

              {/* Full High-Res Document Preview Frame */}
              <div className="relative w-full h-[400px] sm:h-[500px] bg-[#F1F5F9] rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center p-3">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">LICENCE CODE:</span>
                  <span className="text-[#071A2B] font-bold truncate block">{selectedCert.certNumber}</span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">ISSUING ENTITY:</span>
                  <span className="text-[#176B87] font-bold truncate block">{selectedCert.entity}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">VALIDITY:</span>
                  <span className="text-emerald-700 font-bold truncate block">{selectedCert.validity}</span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">JURISDICTION:</span>
                  <span className="text-[#071A2B] font-semibold truncate block">{selectedCert.jurisdiction}</span>
                </div>
              </div>

              <p className="text-xs font-manrope font-light text-slate-600 leading-relaxed">
                {selectedCert.details}
              </p>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3.5 rounded-2xl bg-[#071A2B] text-white font-mono font-bold text-xs tracking-wider hover:bg-[#176B87] transition shadow-md"
              >
                CLOSE DOCUMENT INSPECTOR
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
