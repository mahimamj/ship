"use client";

import React from "react";
import { Anchor, Mail, Phone, MapPin, ArrowUp, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo_nobg.png"
                alt="Oceanic Star Fleet Ship Management LLC Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-bold font-poppins text-white tracking-tight">
                  OCEANIC STAR <span className="text-teal-400">FLEET</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Dubai • India • Sri-Lanka
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed font-light pr-4">
              Providing premier Ship Management, Crewing, Marine Engineering, Chartering & Commercial Port Services across international shipping corridors. Servicing fleet owners through Oceanic Star Fleet Ship Management LLC (Dubai) and Oceanic Star Shipping Pvt. Ltd. (India).
            </p>

            <div className="flex items-center space-x-2 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-[11px] text-slate-300 w-fit">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>ISO 9001:2015 & DG Shipping RPSL License MUM-245</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-teal-400 transition">About Oceanic Star</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Technical & Crew Services</a></li>
              <li><a href="#vessels" className="hover:text-teal-400 transition">Vessel Fleet Types</a></li>
              <li><a href="#technical" className="hover:text-teal-400 transition">Dry Dock Management</a></li>
              <li><a href="#crew" className="hover:text-teal-400 transition">Crewing Pipeline</a></li>
              <li><a href="#careers" className="hover:text-teal-400 transition">Career Openings</a></li>
            </ul>
          </div>

          {/* Col 3: Services Spectrum */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Service Spectrum
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-teal-400 transition">Crew Management</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Technical Ship Mgmt</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Port Agency & Husbandry</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Chartering & Brokering</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Ship Cyber Security</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Flag State Certification</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Corporate Operations
            </h4>
            <div className="space-y-2 font-light">
              <div>
                <strong className="text-white block font-medium">Dubai HQ (UAE):</strong>
                <span>Business Bay, P.O. Box 48802, Dubai</span>
                <span className="block text-teal-400">+971 4 399 0000</span>
              </div>
              <div className="pt-2">
                <strong className="text-white block font-medium">Mumbai HQ (India):</strong>
                <span>Fort Maritime Center, SBS Road, Mumbai</span>
                <span className="block text-teal-400">+91 22 6800 0000</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-medium">Oceanic Star Group</strong>. All rights reserved. 
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-teal-400 transition">Terms of Marine Service</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-slate-900 border border-white/10 hover:border-teal-400 text-slate-300 hover:text-white px-4 py-2 rounded-xl transition"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
