"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function CountUpNumber({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export const FleetVisualizationSection: React.FC = () => {
  const fleetData = [
    { type: "OIL & CHEMICAL TANKERS", count: 30, percentage: 51 },
    { type: "DRY BULK CARRIERS", count: 14, percentage: 24 },
    { type: "CONTAINER VESSELS", count: 7, percentage: 12 },
    { type: "RO-RO CAR CARRIERS", count: 4, percentage: 7 },
    { type: "OFFSHORE AHTS & DP2", count: 4, percentage: 6 },
  ];

  return (
    <section id="vessels" className="py-28 md:py-40 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-10 mb-16 gap-8">
          <div>
            <span className="label-mono text-[#176B87] mb-3 block font-semibold">
              // FLEET BREAKDOWN & ASSET MATRIX
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              59 VESSELS
            </h2>
            <p className="font-mono text-xs text-[#667783] uppercase tracking-widest mt-2">
              UNDER TECHNICAL & COMMERCIAL MANAGEMENT
            </p>
          </div>

          <p className="text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Diverse modern fleet operating internationally under DNV, ABS, ClassNK, and Lloyd's Register certifications.
          </p>
        </div>

        {/* Horizontal Animated Fleet Bars - Editorial Thin Lines */}
        <div className="space-y-10 max-w-5xl">
          {fleetData.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-syne text-lg sm:text-xl font-bold tracking-tight text-[#071A2B]">
                  {item.type}
                </span>
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#176B87]">
                  <CountUpNumber end={item.count} /> <span className="text-xs text-[#667783] font-normal">UNITS</span>
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[rgba(7,26,43,0.12)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-[#071A2B] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
