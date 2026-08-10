"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUpNumber({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export const Section2StatementStats: React.FC = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const isHeadlineInView = useInView(headlineRef, { once: true, margin: "-100px" });

  const headlineText = "24+ YEARS OF MOVING WHAT MATTERS.";
  const words = headlineText.split(" ");

  const stats = [
    { value: 24, suffix: "+", label: "YEARS IN MARITIME OPERATIONS" },
    { value: 59, suffix: "", label: "VESSELS UNDER TECHNICAL MANAGEMENT" },
    { value: 3, suffix: " HUBS", label: "GLOBAL OPERATIONAL COMMAND HUBS" },
    { value: 24, suffix: "/7", label: "ROUND-THE-CLOCK FLEET DISPATCH" },
  ];

  return (
    <section id="about" className="relative py-28 md:py-40 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Monospace label */}
        <p className="label-mono text-[#667783] mb-8 font-semibold tracking-widest text-xs">
          // HERITAGE & OPERATIONAL SCALE
        </p>

        {/* Word-by-word animated headline */}
        <div ref={headlineRef} className="max-w-5xl mb-24 md:mb-36">
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#071A2B]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeadlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.3em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Massive statistics with generous whitespace - NO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pt-12 border-t border-[rgba(7,26,43,0.12)]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between"
            >
              <div className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none mb-4">
                {stat.value === 3 ? (
                  <>
                    0<CountUpNumber end={stat.value} />
                    <span className="text-3xl sm:text-4xl text-[#176B87] font-semibold">{stat.suffix}</span>
                  </>
                ) : (
                  <>
                    <CountUpNumber end={stat.value} />
                    <span className="text-[#176B87]">{stat.suffix}</span>
                  </>
                )}
              </div>
              <p className="text-xs font-mono tracking-widest text-[#667783] uppercase leading-relaxed font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
