"use client";

import React from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5F5F2] text-[#071A2B] border-t border-[rgba(7,26,43,0.12)] pt-20 pb-12 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[rgba(7,26,43,0.12)] text-xs font-manrope">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo_nobg.png"
                alt="Oceanic Star Fleet Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-syne text-lg font-extrabold text-[#071A2B] tracking-tight">
                OCEANIC STAR <span className="text-[#176B87]">FLEET</span>
              </span>
            </div>

            <p className="text-[#667783] leading-relaxed font-light pr-4 max-w-md">
              Providing premier Ship Management, Crewing, Marine Engineering, Chartering & Commercial Port Services across international shipping corridors. Servicing fleet owners through Oceanic Star Fleet Ship Management LLC (Dubai) and Oceanic Star Shipping Pvt. Ltd. (India).
            </p>

            <div className="flex items-center space-x-2 bg-white border border-[rgba(7,26,43,0.12)] rounded-xl px-3.5 py-2 text-[11px] text-[#071A2B] font-mono font-semibold w-fit">
              <ShieldCheck className="w-4 h-4 text-[#176B87]" />
              <span>ISO 9001:2015 & DG SHIPPING RPSL-MUM-506</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-[#667783]">
              <li><a href="#about" className="hover:text-[#176B87] transition">About Oceanic Star</a></li>
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">Capabilities & Services</a></li>
              <li><a href="#vessels" className="hover:text-[#176B87] transition">Vessel Fleet Matrix</a></li>
              <li><a href="#presence" className="hover:text-[#176B87] transition">Global Hubs</a></li>
              <li><a href="#contact" className="hover:text-[#176B87] transition">Contact Operations</a></li>
            </ul>
          </div>

          {/* Col 3: Service Spectrum */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-widest">
              SERVICES
            </h4>
            <ul className="space-y-2 text-[#667783]">
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">Crew Management</a></li>
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">Technical Ship Mgmt</a></li>
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">Port Agency & Husbandry</a></li>
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">Chartering & Brokering</a></li>
              <li><a href="#capabilities" className="hover:text-[#176B87] transition">ISM & ISPS Auditing</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-widest">
              COMMAND HUBS
            </h4>
            <div className="space-y-3 font-light text-[#667783]">
              <div>
                <strong className="text-[#071A2B] block font-semibold">Dubai Office (UAE):</strong>
                <span>Al Jawharah Building, Bur Dubai, UAE</span>
                <span className="block text-[#176B87] font-mono mt-0.5">info@oceanicstarshipping.com</span>
              </div>
              <div>
                <strong className="text-[#071A2B] block font-semibold">India HQ (Navi Mumbai):</strong>
                <span>Real Tech Park, Sector 30A, Vashi, Navi Mumbai</span>
                <span className="block text-[#176B87] font-mono mt-0.5">+91 22 2781 7171 / 72</span>
                <span className="block text-[#176B87] font-mono mt-0.5">Mob: +91 90043 90041</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#667783] space-y-4 sm:space-y-0 font-mono">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#071A2B] font-bold">Oceanic Star Group</strong>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-white border border-[rgba(7,26,43,0.12)] hover:border-[#071A2B] text-[#071A2B] px-4 py-2 rounded-full transition"
            data-cursor
            data-cursor-text="TOP"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
