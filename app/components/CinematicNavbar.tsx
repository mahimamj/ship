"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface CinematicNavbarProps {
  onOpenQuote?: () => void;
}

export const CinematicNavbar: React.FC<CinematicNavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "FLEET", href: "#vessels" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3.5 shadow-sm"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* Top Left: Company Logo */}
        <a href="#" className="flex items-center space-x-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md group-hover:scale-105 transition duration-300">
            <img
              src="/images/logo_nobg.png"
              alt="Oceanic Star Shipping"
              className="h-7 w-auto object-contain"
            />
          </div>
          <div>
            <span className="font-syne text-base md:text-lg font-bold tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition">
              OCEANIC STAR
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#64748B] uppercase block">
              FLEET MANAGEMENT
            </span>
          </div>
        </a>

        {/* Top Right: Minimal Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-mono tracking-widest text-[#0F172A]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-1 group hover:text-[#0284C7] transition-colors"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0284C7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold transition flex items-center space-x-1.5 shadow-md group"
            >
              <span>DISPATCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-white border border-slate-200 text-[#0F172A]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6"
          >
            <div className="flex flex-col space-y-5 text-sm font-mono tracking-widest text-[#0F172A]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#0284C7] transition border-b border-slate-100 pb-2"
                >
                  {item.name}
                </a>
              ))}
              {onOpenQuote && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="mt-2 w-full py-3 rounded-xl bg-[#0284C7] text-white font-bold text-xs tracking-wider"
                >
                  REQUEST MARITIME DISPATCH
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
