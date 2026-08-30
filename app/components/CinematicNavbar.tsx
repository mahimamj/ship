"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, FileText, ChevronDown, Building2, Anchor } from "lucide-react";

interface CinematicNavbarProps {
  onOpenQuote?: () => void;
  onOpenCommandPalette?: () => void;
}

export const CinematicNavbar: React.FC<CinematicNavbarProps> = ({ onOpenQuote, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterCareers = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCareersDropdownOpen(true);
  };

  const handleMouseLeaveCareers = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setCareersDropdownOpen(false);
    }, 200);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setCareersDropdownOpen(false);

    setTimeout(() => {
      if (href === "#" || !href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#071A2B]/95 backdrop-blur-md border-b border-[#176B87]/30 py-4 shadow-2xl"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, "#")}>
          <img
            src="/images/logo_nobg.png"
            alt="Oceanic Star Fleet"
            className="h-9 w-auto object-contain"
          />
          <span className="hidden sm:block font-syne text-sm font-bold tracking-[0.15em] text-white">
            OCEANIC STAR
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-white/90">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="relative py-1 hover:text-[#00D26A] transition-colors duration-300 cursor-pointer"
          >
            ABOUT
          </a>

          <a
            href="#capabilities"
            onClick={(e) => handleNavClick(e, "#capabilities")}
            className="relative py-1 hover:text-[#00D26A] transition-colors duration-300 cursor-pointer"
          >
            CAPABILITIES
          </a>

          {/* CAREERS Dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={handleMouseEnterCareers}
            onMouseLeave={handleMouseLeaveCareers}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setCareersDropdownOpen(!careersDropdownOpen);
              }}
              className="flex items-center gap-1.5 hover:text-[#00D26A] transition-colors duration-300 cursor-pointer py-1 text-left uppercase"
            >
              <span>CAREERS</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#00D26A] transition-transform duration-300 ${careersDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {careersDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-2 rounded-2xl bg-[#071A2B]/95 border border-[#176B87]/40 shadow-2xl backdrop-blur-xl z-50 font-sans"
                >
                  <a
                    href="#careers-shore"
                    onClick={(e) => handleNavClick(e, "#careers-shore")}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white hover:text-[#00D26A] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-[#176B87]/20 text-[#00D26A] group-hover:bg-[#00D26A] group-hover:text-black transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono tracking-wider">AT SHORE</div>
                      <div className="text-[10px] text-slate-400 font-normal">Superintendents & HQ Staff</div>
                    </div>
                  </a>

                  <a
                    href="#careers-sea"
                    onClick={(e) => handleNavClick(e, "#careers-sea")}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white hover:text-[#00D26A] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-[#176B87]/20 text-[#00D26A] group-hover:bg-[#00D26A] group-hover:text-black transition-colors">
                      <Anchor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono tracking-wider">AT SEA</div>
                      <div className="text-[10px] text-slate-400 font-normal">Officers, Captains & Crew</div>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#presence"
            onClick={(e) => handleNavClick(e, "#presence")}
            className="relative py-1 hover:text-[#00D26A] transition-colors duration-300 cursor-pointer"
          >
            GLOBAL
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative py-1 hover:text-[#00D26A] transition-colors duration-300 cursor-pointer"
          >
            CONTACT
          </a>
        </nav>

        {/* Solarpanti-Style Actions: Command Search & Quote Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs transition-all"
            >
              <Search className="w-3.5 h-3.5 text-[#00D26A]" />
              <span className="text-[11px] font-mono">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] font-mono text-slate-300 border border-white/10">⌘K</kbd>
            </button>
          )}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white text-xs font-bold font-mono tracking-wider shadow-lg hover:opacity-90 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>GET PROPOSAL</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-xl border text-white bg-white/10 border-white/20"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slideout Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#071A2B] border-b border-[#176B87]/30 overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-8 flex flex-col gap-4 text-white">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-sm font-mono font-bold tracking-[0.2em] text-white hover:text-[#00D26A] transition-colors py-2 border-b border-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>ABOUT</span>
                <span className="text-xs text-[#00D26A]">→</span>
              </a>

              <a
                href="#capabilities"
                onClick={(e) => handleNavClick(e, "#capabilities")}
                className="text-sm font-mono font-bold tracking-[0.2em] text-white hover:text-[#00D26A] transition-colors py-2 border-b border-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>CAPABILITIES</span>
                <span className="text-xs text-[#00D26A]">→</span>
              </a>

              {/* Mobile CAREERS Accordion */}
              <div className="py-2 border-b border-white/10 space-y-3">
                <div className="text-sm font-mono font-bold tracking-[0.2em] text-[#00D26A] flex items-center gap-2">
                  <span>CAREERS</span>
                </div>
                <div className="pl-4 flex flex-col gap-2.5">
                  <a
                    href="#careers-shore"
                    onClick={(e) => handleNavClick(e, "#careers-shore")}
                    className="text-xs font-mono tracking-[0.15em] text-slate-300 hover:text-white flex items-center gap-2"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#00D26A]" />
                    <span>AT SHORE</span>
                  </a>
                  <a
                    href="#careers-sea"
                    onClick={(e) => handleNavClick(e, "#careers-sea")}
                    className="text-xs font-mono tracking-[0.15em] text-slate-300 hover:text-white flex items-center gap-2"
                  >
                    <Anchor className="w-3.5 h-3.5 text-[#00D26A]" />
                    <span>AT SEA</span>
                  </a>
                </div>
              </div>

              <a
                href="#presence"
                onClick={(e) => handleNavClick(e, "#presence")}
                className="text-sm font-mono font-bold tracking-[0.2em] text-white hover:text-[#00D26A] transition-colors py-2 border-b border-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>GLOBAL</span>
                <span className="text-xs text-[#00D26A]">→</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-sm font-mono font-bold tracking-[0.2em] text-white hover:text-[#00D26A] transition-colors py-2 border-b border-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>CONTACT</span>
                <span className="text-xs text-[#00D26A]">→</span>
              </a>

              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/10 border border-white/20 text-xs font-mono font-bold flex items-center justify-between text-white mt-2"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#00D26A]" /> Search Command Palette
                  </span>
                  <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded font-mono">Ctrl+K</span>
                </button>
              )}

              {onOpenQuote && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileText className="w-4 h-4" /> START 4-STEP PROPOSAL WIZARD
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

