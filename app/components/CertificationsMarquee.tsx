"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CertificationsMarquee: React.FC = () => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certs = [
    {
      id: "dg-shipping",
      name: "DG SHIPPING (INDIA)",
      desc: "Directorate General of Shipping approved RPSL Manning License: RPSL-MUM-245.",
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
    <section className="py-24 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <span className="label-mono text-[#176B87] block font-semibold">
          // ACCREDITATIONS & CLASS CERTIFICATIONS
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-6 border-y border-[rgba(7,26,43,0.12)] bg-[#F5F5F2]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-20">
          {[...certs, ...certs].map((cert, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className="font-syne font-extrabold text-2xl sm:text-4xl text-[#071A2B] hover:text-[#176B87] transition-colors cursor-pointer px-4"
              data-cursor
              data-cursor-text="INFO"
            >
              {cert.name}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Info Panel */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-8 min-h-[60px]">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 rounded-2xl bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <span className="font-mono text-xs text-[#176B87] font-bold block mb-1">
                  CERTIFICATION DETAIL // {active.name}
                </span>
                <p className="text-sm font-manrope text-[#071A2B]">{active.desc}</p>
              </div>
              <span className="text-xs font-mono text-[#667783] bg-white px-3 py-1.5 rounded-full border border-[rgba(7,26,43,0.12)]">
                VERIFIED COMPLIANT
              </span>
            </motion.div>
          ) : (
            <p className="text-xs font-mono text-[#667783] text-center italic">
              Hover over any certification standard to inspect regulatory accreditation credentials.
            </p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
