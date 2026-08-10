"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, FileText, Globe, ArrowRight, Zap, CheckCircle2, X, Plus, Minus, Target } from "lucide-react";

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
  coords: [number, number]; // [lat, lng]
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
  const flagMapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);

  // Initialize Dark Leaflet Map for Flag State Registries
  useEffect(() => {
    let mapInstance: any;

    const initMap = async () => {
      if (typeof window === "undefined" || !flagMapRef.current) return;
      const L = (await import("leaflet")).default;

      if (flagMapRef.current.dataset.leafletInitialized) return;
      flagMapRef.current.dataset.leafletInitialized = "true";

      // Global world view
      mapInstance = L.map(flagMapRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: false,
        attributionControl: false,
      });

      leafletMapRef.current = mapInstance;

      // Dark Matter Basemap Tiles
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        subdomains: "abcd",
      }).addTo(mapInstance);

      // Add Flag Markers
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

      // Draw dashed maritime curves between registries
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
    <section id="certifications" className="py-24 sm:py-36 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-8 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-[#176B87] font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#176B87]" />
              <span>MINISTRY & GLOBAL CLASS ACCREDITATIONS</span>
            </div>
            <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#071A2B]">
              OFFICIAL CERTIFICATIONS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Fully licensed and certified by the Ministry of Ports, Shipping and Waterways India (RPSL valid till 2029), Dubai DET (Valid till 2026), Panama Maritime Authority, UKAS, and American Bureau of Shipping (ABS).
          </p>
        </div>

        {/* Official Cert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-3xl p-7 border border-[rgba(7,26,43,0.12)] flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition"
              data-cursor
              data-cursor-text="INSPECT"
            >
              <div>
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87] group-hover:scale-110 transition duration-300 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {cert.verifiedBadge}
                  </span>
                </div>

                <h3 className="font-jakarta text-lg font-bold text-[#071A2B] group-hover:text-[#176B87] transition mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#176B87] mb-2">{cert.subtitle}</p>
                <p className="text-[11px] font-manrope text-[#667783] mb-4">{cert.authority}</p>

                <div className="bg-[#F5F5F2] p-3 rounded-xl border border-[rgba(7,26,43,0.12)] text-xs font-mono space-y-1 mb-4">
                  <span className="text-[10px] text-[#667783] uppercase block font-semibold">LICENCE CODE:</span>
                  <span className="text-[#071A2B] font-bold truncate block">{cert.certNumber}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#071A2B] group-hover:text-[#176B87] transition font-bold">
                <span>INSPECT CERTIFICATE AUDIT</span>
                <FileText className="w-4 h-4 text-[#176B87] group-hover:translate-x-1 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Flag State World Map Banner (Matching Reference Image 1) */}
        <div className="bg-[#FFFFFF] border border-[rgba(7,26,43,0.12)] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#176B87] font-semibold">
              <Globe className="w-4 h-4 text-[#176B87]" />
              <span>GLOBAL OPEN REGISTRIES WORLD MAP</span>
            </div>

            <h3 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase">
              FLAG STATE CERTIFICATION & PROCESSING
            </h3>

            <p className="text-xs sm:text-sm font-manrope text-[#667783] leading-relaxed">
              Our dedicated licensing team handles and coordinates official Flag State Endorsements, Seaman Books (CDC), and officer license verifications across 9 major international open registries.
            </p>
          </div>

          {/* High-Tech Dark World Map Display Container (Matches Reference Image) */}
          <div className="relative w-full h-[460px] sm:h-[540px] bg-[#071A2B] rounded-3xl border border-[rgba(7,26,43,0.12)] overflow-hidden shadow-2xl">
            {/* Leaflet Dark Matter Basemap Surface */}
            <div ref={flagMapRef} className="w-full h-full z-0" />

            {/* Bottom-Left Zoom & Center Map Controls */}
            <div className="absolute bottom-5 left-5 z-20 flex items-center bg-[#0A192F]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-1 space-x-1 text-white">
              <button onClick={handleZoomOut} className="p-2 hover:bg-white/10 rounded-lg transition" aria-label="Zoom out">
                <Minus className="w-4 h-4" />
              </button>
              <button onClick={handleZoomIn} className="p-2 hover:bg-white/10 rounded-lg transition" aria-label="Zoom in">
                <Plus className="w-4 h-4" />
              </button>
              <button onClick={handleResetZoom} className="p-2 hover:bg-white/10 rounded-lg transition" aria-label="Reset zoom">
                <Target className="w-4 h-4" />
              </button>
            </div>

            {/* Floating Dark Info Card Overlay (Right Side on Map) */}
            <AnimatePresence mode="wait">
              {selectedFlag && (
                <motion.div
                  key={selectedFlag.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-5 right-5 bottom-5 w-80 sm:w-96 bg-[#071A2B]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-20 text-white flex flex-col justify-between overflow-y-auto"
                >
                  <div className="space-y-4">
                    {/* Header */}
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

                    {/* Services & Endorsements */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider block font-bold">
                        SERVICES & ENDORSEMENTS:
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

                    {/* About Registry */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider block font-bold">
                        ABOUT {selectedFlag.country.toUpperCase()} REGISTRY:
                      </span>
                      <p className="text-xs font-manrope text-white/80 font-light leading-relaxed">
                        {selectedFlag.about}
                      </p>
                    </div>
                  </div>

                  {/* View Details Button */}
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

          {/* 9 Flag State Country Selection Cards Below Map */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 pt-2">
            {FLAG_STATE_LOCATIONS.map((loc) => {
              const isSelected = selectedFlag.code === loc.code;
              return (
                <button
                  key={loc.code}
                  onClick={() => handleSelectFlagCard(loc)}
                  className={`p-3.5 rounded-2xl border text-center transition duration-300 flex flex-col items-center justify-center space-y-2 group ${
                    isSelected
                      ? "bg-[#071A2B] border-[#071A2B] text-white shadow-md scale-105"
                      : "bg-white border-slate-200 text-[#667783] hover:border-[#071A2B] hover:text-[#071A2B]"
                  }`}
                >
                  <img
                    src={loc.flagUrl}
                    alt={`${loc.country} National Flag`}
                    className="w-9 h-6 object-cover rounded shadow-sm border border-slate-200 group-hover:scale-110 transition duration-300"
                  />
                  <div className="text-center">
                    <span className={`text-xs font-mono font-bold block ${isSelected ? "text-white" : "text-[#071A2B]"}`}>{loc.code}</span>
                    <span className={`text-[10px] font-mono block truncate max-w-[70px] ${isSelected ? "text-sky-200" : "text-[#667783]"}`}>{loc.country}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 4 Metrics Bar Below Flag Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="font-jakarta font-extrabold text-base text-[#071A2B] block leading-none">9</span>
                <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">OPEN REGISTRIES</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-jakarta font-extrabold text-base text-[#071A2B] block leading-none">100+</span>
                <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">LICENSE VERIFICATIONS</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-jakarta font-extrabold text-base text-[#071A2B] block leading-none">24–48 HRS</span>
                <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">PROCESSING TIME</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-jakarta font-extrabold text-base text-[#071A2B] block leading-none">GLOBAL</span>
                <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">DEDICATED SUPPORT</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Official Certificate Verification Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-[#071A2B]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-xl w-full border border-[rgba(7,26,43,0.12)] shadow-2xl relative space-y-5"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-[#667783] hover:text-[#071A2B] p-2 rounded-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] transition"
              >
                <X size={18} />
              </button>

              <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#176B87] border border-sky-100 flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="font-jakarta text-2xl font-bold text-[#071A2B]">{selectedCert.title}</h3>
                  <p className="text-xs font-mono text-[#176B87] font-bold">{selectedCert.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#F5F5F2] p-3 rounded-xl border border-[rgba(7,26,43,0.12)] space-y-1">
                  <span className="text-[10px] text-[#667783] uppercase block font-semibold">LICENCE CODE:</span>
                  <span className="text-[#071A2B] font-bold truncate block">{selectedCert.certNumber}</span>
                </div>
                <div className="bg-[#F5F5F2] p-3 rounded-xl border border-[rgba(7,26,43,0.12)] space-y-1">
                  <span className="text-[10px] text-[#667783] uppercase block font-semibold">ENTITY:</span>
                  <span className="text-[#176B87] font-bold truncate block">{selectedCert.entity}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#F5F5F2] p-3 rounded-xl border border-[rgba(7,26,43,0.12)] space-y-1">
                  <span className="text-[10px] text-[#667783] uppercase block font-semibold">VALIDITY:</span>
                  <span className="text-emerald-700 font-bold truncate block">{selectedCert.validity}</span>
                </div>
                <div className="bg-[#F5F5F2] p-3 rounded-xl border border-[rgba(7,26,43,0.12)] space-y-1">
                  <span className="text-[10px] text-[#667783] uppercase block font-semibold">JURISDICTION:</span>
                  <span className="text-[#071A2B] font-semibold truncate block">{selectedCert.jurisdiction}</span>
                </div>
              </div>

              <p className="text-xs font-manrope font-light text-[#667783] leading-relaxed">
                {selectedCert.details}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono text-[#071A2B] uppercase tracking-wider font-bold block">VERIFIED LICENCE CLAUSES:</span>
                {selectedCert.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#667783]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-full bg-[#071A2B] text-white font-mono font-bold text-xs tracking-wider hover:bg-[#176B87] transition shadow-md mt-2"
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
