"use client";

import React, { useState, useEffect } from "react";
import { Search, Calculator, Ship, FileText, MapPin, X, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  onOpenCalculator?: () => void;
}

export function MaritimeCommandPalette({ isOpen, onClose, onOpenQuote, onOpenCalculator }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled externally
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "quote",
      title: "Request Instant Freight & Vessel Quote",
      category: "Tools & Forms",
      icon: FileText,
      action: () => {
        onClose();
        onOpenQuote();
      },
    },
    {
      id: "calculator",
      title: "Launch Freight & TEU Logistics Calculator",
      category: "Tools & Forms",
      icon: Calculator,
      action: () => {
        onClose();
        const el = document.getElementById("freight-calculator");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else if (onOpenCalculator) onOpenCalculator();
      },
    },
    {
      id: "tracking",
      title: "Track Container & Vessel Live Location (BL / OSF Code)",
      category: "Operations",
      icon: MapPin,
      action: () => {
        onClose();
        const el = document.getElementById("track-and-trace");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "fleet",
      title: "View Technical Management & Fleet Specs",
      category: "Fleet Logistics",
      icon: Ship,
      action: () => {
        onClose();
        const el = document.getElementById("fleet-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "certifications",
      title: "Verify RPSL Crewing & Maritime Accreditations",
      category: "Compliance",
      icon: ShieldCheck,
      action: () => {
        onClose();
        const el = document.getElementById("certifications-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      title: "Contact Operations Hub (Dubai | India | Sri Lanka)",
      category: "Support",
      icon: PhoneCall,
      action: () => {
        onClose();
        const el = document.getElementById("contact-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 bg-[#071A2B]/75 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-[#0F2C59] border border-[#176B87]/40 rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#176B87]/30 bg-[#071A2B]/80">
          <Search className="w-5 h-5 text-[#176B87] shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, service name, container ID, or calculator..."
            className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command Options List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filteredActions.length > 0 ? (
            filteredActions.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#176B87]/20 border border-transparent hover:border-[#176B87]/40 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#176B87]/20 text-[#176B87] group-hover:text-white group-hover:bg-[#176B87] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00D26A] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm">
              No matching commands or tools found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#176B87]/20 bg-[#071A2B] text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">ESC</span>
            <span>to close</span>
          </div>
          <div className="flex items-center gap-1 text-[#176B87]">
            <span className="w-2 h-2 rounded-full bg-[#00D26A]"></span>
            <span>Oceanic Star Intelligence System</span>
          </div>
        </div>
      </div>
    </div>
  );
}
