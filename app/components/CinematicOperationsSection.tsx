"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VIDEOS } from "@/lib/content/videos";

export const CinematicOperationsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.4], [0.95, 1.02]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1.02]);
  const scale3 = useTransform(scrollYProgress, [0.6, 1], [0.95, 1.02]);

  const ops = [
    {
      number: "01",
      title: "AT SEA",
      tagline: "GLOBAL VOYAGE DISPATCH & NAVIGATION",
      desc: "Real-time vessel position tracking, weather routing, speed-fuel optimization, and continuous ocean passage monitoring.",
      video: VIDEOS.atSea,
      image: "/images/hero_vessel.png",
      scale: scale1,
    },
    {
      number: "02",
      title: "ON BOARD",
      tagline: "RPSL CERTIFIED CREW & SEAFARER SAFETY",
      desc: "MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers.",
      video: VIDEOS.onBoard,
      image: "/images/crew_training.png",
      scale: scale2,
    },
    {
      number: "03",
      title: "ON SHORE",
      tagline: "TECHNICAL ENGINEERING & DRYDOCK AUDITS",
      desc: "Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, and regulatory compliance.",
      video: VIDEOS.onShore,
      image: "/images/dry_dock_engineering.png",
      scale: scale3,
    },
  ];

  return (
    <section ref={containerRef} className="py-28 md:py-40 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[rgba(7,26,43,0.12)] pb-10 mb-20">
          <span className="label-mono text-[#176B87] mb-3 block font-semibold">
            // OPERATIONAL REVEAL
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B]">
            CINEMATIC OPERATIONS
          </h2>
        </div>

        {/* 3 Large Full-Width Video Reveal Containers */}
        <div className="space-y-24">
          {ops.map((op) => (
            <div key={op.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs font-bold tracking-widest text-[#176B87]">
                  SPECTRUM // {op.number}
                </span>
                <h3 className="font-syne text-3xl sm:text-5xl font-extrabold text-[#071A2B]">
                  {op.title}
                </h3>
                <p className="font-mono text-xs text-[#071A2B] font-semibold tracking-wider">
                  {op.tagline}
                </p>
                <p className="text-xs sm:text-sm font-manrope font-light text-[#667783] leading-relaxed max-w-lg">
                  {op.desc}
                </p>
              </div>

              <motion.div
                style={{ scale: op.scale }}
                className="lg:col-span-7 h-[360px] sm:h-[460px] rounded-3xl overflow-hidden relative bg-[#071A2B] border border-[rgba(7,26,43,0.12)] shadow-xl"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={op.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
