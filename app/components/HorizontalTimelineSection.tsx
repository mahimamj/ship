"use client";

import React, { useState, useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";

export const HorizontalTimelineSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      year: "2002",
      title: "FOUNDATION & INCORPORATION",
      desc: "Incorporated in Dubai to provide technical marine agency and vessel support services across Gulf shipping lanes.",
      image: "/images/hero_vessel.png",
    },
    {
      year: "2008",
      title: "TECHNICAL MANAGEMENT EXPANSION",
      desc: "Expanded into full technical vessel management for oil tankers and dry bulk carriers under ISM & ISPS certification.",
      image: "/images/dry_dock_engineering.png",
    },
    {
      year: "2014",
      title: "MUMBAI CREWING HQ & RPSL LICENSING",
      desc: "Established Mumbai crewing hub with Directorate General of Shipping approval (RPSL-MUM-245) for STCW certified crew.",
      image: "/images/crew_training.png",
    },
    {
      year: "2019",
      title: "COLOMBO HUB & OFFSHORE DISPATCH",
      desc: "Opened Sri Lanka operations desk expanding offshore launch boat services, CTM, and bunkering coordination.",
      image: "/images/cinematic_vessel_bg.png",
    },
    {
      year: "2024",
      title: "59 MANAGED FLEET MILESTONE",
      desc: "Crossed 59 active managed vessels across tankers, containers, bulkers, and DP2 offshore field support ships.",
      image: "/images/hero_vessel.png",
    },
    {
      year: "2026",
      title: "CII CARBON REDUCTION & DIGITAL FLEET",
      desc: "Pioneered real-time CII carbon intensity monitoring, hull clean analytics, and automated 24/7 voyage dispatch.",
      image: "/images/dry_dock_engineering.png",
    },
  ];

  useEffect(() => {
    const { ScrollTrigger, gsap } = initGSAP();

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 30%",
        end: "bottom 70%",
        onUpdate: (self) => {
          const index = Math.min(
            timelineData.length - 1,
            Math.floor(self.progress * timelineData.length)
          );
          setActiveIdx(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [timelineData.length]);

  const current = timelineData[activeIdx];

  return (
    <section ref={sectionRef} className="py-20 md:py-36 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-8 mb-12 gap-6">
          <div data-scroll-reveal="fade-up">
            <span className="label-mono text-[#176B87] mb-2.5 block font-semibold">
              // HISTORICAL PROGRESSION &amp; MILESTONES
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none" data-scroll-split>
              COMPANY TIMELINE
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-manrope text-[#667783] max-w-md leading-relaxed" data-scroll-reveal="fade-left" data-scroll-delay="0.15">
            Two decades of disciplined growth from a regional ship agency into an international ship management powerhouse.
          </p>
        </div>

        {/* Horizontal Year Selector Navigation */}
        <div className="flex items-center justify-between border-b border-[rgba(7,26,43,0.12)] pb-6 mb-10 overflow-x-auto gap-4 scrollbar-none">
          {timelineData.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.year}
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col items-start transition-all duration-300 shrink-0 ${
                  isActive ? "scale-105" : "opacity-50 hover:opacity-100"
                }`}
                data-cursor
                data-cursor-text="YEAR"
              >
                <span
                  className={`font-syne text-2xl sm:text-4xl font-extrabold transition-colors ${
                    isActive ? "text-[#071A2B]" : "text-[#667783]"
                  }`}
                >
                  {item.year}
                </span>
                <div
                  className={`h-1 w-full mt-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#00D26A]" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-3 transition-all duration-500">
              <span className="font-mono text-xs font-bold text-[#00D26A] tracking-widest uppercase">
                MILESTONE // {current.year}
              </span>
              <h3 className="font-syne text-xl sm:text-3xl font-extrabold text-[#071A2B] leading-tight break-words">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-manrope font-light text-[#667783] leading-relaxed max-w-xl">
                {current.desc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-[280px] sm:h-[380px] rounded-3xl overflow-hidden relative bg-[#071A2B] border border-[rgba(7,26,43,0.12)] shadow-lg">
              <img
                key={current.year}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-500 scale-100 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

