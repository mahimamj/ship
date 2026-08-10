"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/lib/content/capabilities";

interface CapabilitiesProps {
  onSelectService?: (title: string) => void;
  onOpenQuote?: () => void;
}

export const InteractiveVerticalCapabilities: React.FC<CapabilitiesProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeCap = CAPABILITIES[activeIdx];

  return (
    <section id="capabilities" className="relative py-28 md:py-40 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div id="services" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-10 mb-16 gap-8">
          <div>
            <span className="label-mono text-[#176B87] mb-3 block font-semibold">
              // CORE CAPABILITIES & MARITIME SERVICES
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              OUR CAPABILITIES
            </h2>
          </div>

          <p className="text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Engineered technical management, certified crew logistics, commercial chartering, and compliance solutions delivered with international precision.
          </p>
        </div>

        {/* Split Layout: Left Vertical List, Right Image/Video Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Vertical Interactive List */}
          <div className="lg:col-span-7 space-y-0 border-t border-[rgba(7,26,43,0.12)]">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={cap.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => {
                    if (onSelectService) onSelectService(cap.title);
                    else if (onOpenQuote) onOpenQuote();
                  }}
                  className={`group py-7 sm:py-9 border-b border-[rgba(7,26,43,0.12)] cursor-pointer transition-all duration-500 flex items-center justify-between ${
                    isActive ? "px-4 bg-white/80" : "hover:px-2"
                  }`}
                  data-cursor
                  data-cursor-text="VIEW"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`font-mono text-xs sm:text-sm transition-colors duration-500 ${
                        isActive ? "text-[#176B87] font-bold" : "text-[#667783]"
                      }`}
                    >
                      {cap.number}
                    </span>
                    <div>
                      <h3
                        className={`font-syne font-bold transition-all duration-500 ${
                          isActive
                            ? "text-2xl sm:text-4xl text-[#071A2B] translate-x-2"
                            : "text-xl sm:text-3xl text-[#071A2B]/80 group-hover:text-[#071A2B]"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className={`text-xs font-manrope text-[#667783] mt-2 max-w-xl transition-all duration-500 ${
                          isActive ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                      >
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full border border-[rgba(7,26,43,0.12)] flex items-center justify-center transition-all duration-500 ${
                      isActive ? "bg-[#071A2B] text-white border-[#071A2B] rotate-45 scale-110" : "text-[#071A2B] group-hover:border-[#071A2B]"
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image/Video Dynamic Preview Surface */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-[#071A2B] border border-[rgba(7,26,43,0.12)] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCap.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeCap.image}
                    alt={activeCap.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/90 via-[#071A2B]/20 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="font-mono text-xs tracking-widest text-[#176B87] uppercase font-bold block mb-2">
                      CAPABILITY // {activeCap.number}
                    </span>
                    <h4 className="font-syne text-2xl sm:text-3xl font-extrabold mb-2">
                      {activeCap.title}
                    </h4>
                    <p className="text-xs text-white/80 font-manrope font-light leading-relaxed">
                      {activeCap.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
