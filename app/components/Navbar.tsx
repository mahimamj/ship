"use client";

import React, { useState, useEffect } from "react";
import { Anchor, Phone, Mail, Globe, Menu, X, ShieldCheck, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeEntity, setActiveEntity] = useState<"dubai" | "india">("dubai");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Fleet Vessels", href: "#vessels" },
    { name: "Technical Mgmt", href: "#technical" },
    { name: "Crewing", href: "#crew" },
    { name: "Careers", href: "#careers" },
    { name: "Global Hubs", href: "#presence" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Info Bar */}
      <div className="hidden lg:block bg-[#050C1A]/90 border-b border-white/10 text-xs text-slate-300 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold text-teal-400">24/7 Ops Center:</span>
              <a href="tel:+97143990000" className="hover:text-white transition">+971 4 399 0000 (Dubai)</a>
              <span>|</span>
              <a href="tel:+912268000000" className="hover:text-white transition">+91 22 6800 0000 (Mumbai)</a>
            </div>
            <div className="flex items-center space-x-1 text-slate-400">
              <Mail size={12} className="text-teal-400" />
              <a href="mailto:ops@oceanicstar.com" className="hover:text-white transition">ops@oceanicstar.com</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-3 py-0.5">
              <ShieldCheck size={12} className="text-teal-400" />
              <span className="text-[11px] font-medium text-slate-200">ISO 9001:2015 & DG Shipping Approved</span>
            </div>

            {/* Entity Toggle Selector */}
            <div className="flex items-center bg-slate-900 border border-white/10 rounded-lg p-0.5 text-[11px]">
              <button
                onClick={() => setActiveEntity("dubai")}
                className={`px-2.5 py-0.5 rounded transition ${
                  activeEntity === "dubai"
                    ? "bg-[#00B4D8] text-white font-semibold shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🇦🇪 Dubai LLC
              </button>
              <button
                onClick={() => setActiveEntity("india")}
                className={`px-2.5 py-0.5 rounded transition ${
                  activeEntity === "india"
                    ? "bg-[#00B4D8] text-white font-semibold shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🇮🇳 India Pvt Ltd
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-2xl" : "bg-[#0A192F]/80 backdrop-blur-md py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="h-12 flex items-center group-hover:scale-105 transition duration-300">
              <img
                src="/images/logo_nobg.png"
                alt="Oceanic Star Fleet Ship Management LLC Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-poppins">
                OCEANIC STAR <span className="text-teal-400 font-light">FLEET</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-teal-300 font-semibold">
                {activeEntity === "dubai"
                  ? "Ship Management LLC (Dubai)"
                  : "Shipping Pvt. Ltd. (India)"}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-teal-400 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/919004390041?text=Hello%20Oceanic%20Star%20Fleet%2C%20I%20would%20like%20to%20inquire%20about%20your%20maritime%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 rounded-xl transition hover:bg-emerald-500/20"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="btn-primary text-xs font-semibold px-5 py-2.5 rounded-xl flex items-center space-x-2"
            >
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0A192F]/95 backdrop-blur-xl border-b border-white/10 px-4 py-6 text-slate-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium hover:text-teal-400 transition py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-primary w-full text-sm font-semibold py-3 rounded-xl text-center"
                >
                  Request Commercial Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
