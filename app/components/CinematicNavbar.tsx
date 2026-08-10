"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface CinematicNavbarProps {
  onOpenQuote?: () => void;
}

export const CinematicNavbar: React.FC<CinematicNavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "CAPABILITIES", href: "#services" },
    { name: "FLEET", href: "#vessels" },
    { name: "GLOBAL", href: "#presence" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[rgba(7,26,43,0.12)] py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo_nobg.png"
            alt="Oceanic Star Fleet"
            className="h-9 w-auto object-contain"
          />
          <span
            className={`hidden sm:block font-syne text-sm font-bold tracking-[0.15em] transition-colors duration-500 ${
              scrolled ? "text-[#071A2B]" : "text-white"
            }`}
          >
            OCEANIC STAR
          </span>
        </a>

        <nav
          className={`hidden lg:flex items-center gap-10 text-[11px] font-mono tracking-[0.2em] ${
            scrolled ? "text-[#071A2B]" : "text-white/90"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-1 hover:text-[#176B87] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-[#071A2B]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-[rgba(7,26,43,0.12)] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-mono tracking-[0.2em] text-[#071A2B] hover:text-[#176B87] transition-colors"
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
                  className="mt-2 text-left text-sm font-mono tracking-[0.2em] text-[#176B87]"
                  data-cursor
                  data-cursor-text="OPEN"
                >
                  START A CONVERSATION →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
