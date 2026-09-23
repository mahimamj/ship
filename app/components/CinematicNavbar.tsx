"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#082F49]/15 py-3.5 shadow-md text-[#061B2A]"
          : "bg-[#FAFAF7]/85 backdrop-blur-sm border-b border-[#082F49]/10 py-5 text-[#061B2A]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo_nobg.png"
            alt="Oceanic Star Fleet"
            className="h-9 w-auto object-contain"
          />
          <span className="hidden sm:block font-syne text-sm font-black tracking-[0.15em] text-[#061B2A]">
            OCEANIC STAR <span className="text-[#0068B7]">FLEET</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-[#061B2A] font-bold">
          <Link
            href="/"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            HOME
          </Link>

          <Link
            href="/founder"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            FOUNDER
          </Link>

          <Link
            href="/fleet"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            NEWS &amp; IMPACT
          </Link>

          <Link
            href="/#capabilities"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            CAPABILITIES
          </Link>

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
              className="flex items-center gap-1.5 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer py-1 text-left uppercase"
            >
              <span>CAREERS</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#0068B7] transition-transform duration-300 ${careersDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {careersDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 p-2.5 rounded-2xl bg-[#FAFAF7] border border-[#082F49]/15 shadow-2xl backdrop-blur-xl z-50 font-sans"
                >
                  <Link
                    href="/careers/at-shore"
                    onClick={() => setCareersDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white text-[#061B2A] hover:text-[#0068B7] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/10 text-[#0068B7] group-hover:bg-[#0068B7] group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono tracking-wider">AT SHORE</div>
                      <div className="text-[10px] text-slate-500 font-normal">Superintendents &amp; HQ Staff</div>
                    </div>
                  </Link>

                  <Link
                    href="/careers/at-sea"
                    onClick={() => setCareersDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white text-[#061B2A] hover:text-[#0068B7] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/10 text-[#0068B7] group-hover:bg-[#0068B7] group-hover:text-white transition-colors">
                      <Anchor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono tracking-wider">AT SEA</div>
                      <div className="text-[10px] text-slate-500 font-normal">Officers, Captains &amp; Crew</div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#presence"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            GLOBAL
          </Link>

          <Link
            href="/#contact"
            className="relative py-1 hover:text-[#0068B7] transition-colors duration-300 cursor-pointer"
          >
            CONTACT
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-[#082F49]/15 text-[#061B2A] text-xs transition-all font-semibold"
            >
              <Search className="w-3.5 h-3.5 text-[#0068B7]" />
              <span className="text-[11px] font-mono font-bold">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white text-[9px] font-mono text-slate-600 border border-slate-300">⌘K</kbd>
            </button>
          )}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#061B2A] text-white text-xs font-bold font-mono tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#00D9E8]/40 hover:border-[#00D9E8] group"
            >
              <FileText className="w-3.5 h-3.5 text-[#00D9E8]" />
              <span>GET PROPOSAL</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-xl border text-[#061B2A] bg-slate-100 border-[#082F49]/15"
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
            className="lg:hidden bg-[#FAFAF7] border-b border-[#082F49]/15 overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-8 flex flex-col gap-4 text-[#061B2A]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>HOME</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              <Link
                href="/founder"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>FOUNDER</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              <Link
                href="/fleet"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>NEWS &amp; IMPACT</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              <Link
                href="/#capabilities"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>CAPABILITIES</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              {/* Mobile CAREERS Accordion */}
              <div className="py-2 border-b border-slate-200 space-y-3">
                <div className="text-sm font-mono font-bold tracking-[0.2em] text-[#0068B7] flex items-center gap-2">
                  <span>CAREERS</span>
                </div>
                <div className="pl-4 flex flex-col gap-2.5">
                  <Link
                    href="/careers/at-shore"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs font-mono tracking-[0.15em] text-slate-600 hover:text-[#0068B7] flex items-center gap-2"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#0068B7]" />
                    <span>AT SHORE</span>
                  </Link>
                  <Link
                    href="/careers/at-sea"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs font-mono tracking-[0.15em] text-slate-600 hover:text-[#0068B7] flex items-center gap-2"
                  >
                    <Anchor className="w-3.5 h-3.5 text-[#0068B7]" />
                    <span>AT SEA</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/#presence"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>GLOBAL</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono font-bold tracking-[0.2em] text-[#061B2A] hover:text-[#0068B7] transition-colors py-2 border-b border-slate-200 flex items-center justify-between"
              >
                <span>CONTACT</span>
                <span className="text-xs text-[#0068B7]">→</span>
              </Link>

              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold flex items-center justify-between text-[#061B2A] mt-2"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#0068B7]" /> Search Command Palette
                  </span>
                  <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">Ctrl+K</span>
                </button>
              )}

              {onOpenQuote && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="py-3 px-4 rounded-xl bg-[#061B2A] text-white border border-[#00D9E8]/50 font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileText className="w-4 h-4 text-[#00D9E8]" /> START PROPOSAL WIZARD
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
