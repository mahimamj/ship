"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CertificationsMarquee: React.FC = () => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certs = [
    {
      id: "dg-shipping",
      name: "DG SHIPPING (INDIA)",
      desc: "Directorate General of Shipping approved RPSL Manning License: RPSL-MUM-506.",
    },
    {
      id: "iso-9001",
      name: "ISO 9001:2015",
      desc: "Bureau Veritas Quality Management Certification for Ship & Crew Management.",
    },
    {
      id: "abs",
      name: "AMERICAN BUREAU OF SHIPPING",
      desc: "ABS Class-Approved Technical Maintenance & ISM Code Compliance.",
    },
    {
      id: "panama",
      name: "PANAMA MARITIME AUTHORITY",
      desc: "Flag State High-Compliance & Seafarer License Verification Authority.",
    },
    {
      id: "ukas",
      name: "UKAS MANAGEMENT SYSTEMS",
      desc: "UKAS Accredited Maritime Safety & Environmental Management Systems.",
    },
    {
      id: "nkk",
      name: "CLASSNK (NIPPON KAIJI KYOKAI)",
      desc: "ClassNK Certified Technical Vessel Safety & Machinery Condition Audits.",
    },
  ];

  const active = certs.find((c) => c.id === hoveredCert);

  return (
    <section className="py-2.5 sm:py-3 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-1">
        <span className="label-mono text-[#01666A] block font-semibold text-[10px]">
          // ACCREDITATIONS & CLASS CERTIFICATIONS
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-2 sm:py-2.5 border-y border-[rgba(7,26,43,0.12)] bg-[#F5F5F2]">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 sm:gap-10">
          {[...certs, ...certs].map((cert, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className="font-syne font-extrabold text-xs sm:text-sm md:text-base text-[#071A2B] hover:text-[#007CD6] transition-colors cursor-pointer px-2 tracking-wide"
              data-cursor
              data-cursor-text="INFO"
            >
              {cert.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
