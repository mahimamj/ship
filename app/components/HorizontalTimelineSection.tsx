"use client";

import React, { useState, useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";

export const HorizontalTimelineSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const num4Ref = useRef<HTMLSpanElement>(null);

  const timelineData = [
    {
      year: "2002",
      title: "FOUNDATION & INCORPORATION",
      desc: "Incorporated in Dubai to provide technical marine agency and vessel support services across Arabian Gulf shipping lanes.",
      image: "/images/hero_vessel.png",
    },
    {
      year: "2014",
      title: "MUMBAI CREWING HQ & RPSL LICENSING",
      desc: "Established Mumbai crewing hub with Directorate General of Shipping approval (RPSL-MUM-506) for STCW certified sea officers.",
      image: "/images/crew_training.png",
    },
    {
      year: "2024",
      title: "59 MANAGED FLEET MILESTONE",
      desc: "Crossed 59 active managed vessels across tankers, containers, dry bulk, and DP2 offshore field support ships.",
      image: "/images/hero_vessel.png",
    },
    {
      year: "2026",
      title: "CII CARBON REDUCTION & DIGITAL TELEMETRY",
      desc: "Pioneered real-time CII carbon intensity monitoring, hull clean analytics, and automated 24/7 voyage dispatch.",
      image: "/images/dry_dock_engineering.png",
    },
  ];

  useEffect(() => {
    const { ScrollTrigger, gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Timeline scroll trigger
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

      // Count up helper for Heritage Stats
      const animateValue = (targetRef: React.RefObject<HTMLSpanElement | null>, endVal: number, padZero = false) => {
        if (!targetRef.current) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: endVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            if (targetRef.current) {
              const currentInt = Math.floor(obj.val);
              targetRef.current.innerText = padZero && currentInt < 10 ? `0${currentInt}` : `${currentInt}`;
            }
          },
        });
      };

      animateValue(num1Ref, 24);
      animateValue(num2Ref, 59);
      animateValue(num3Ref, 3, true);
      animateValue(num4Ref, 24);
    }, sectionRef);

    return () => ctx.revert();
  }, [timelineData.length]);

  const current = timelineData[activeIdx];

  return (
    <section ref={sectionRef} id="timeline-heritage" className="py-20 md:py-32 bg-[#F5F5F2] text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#0077B6] tracking-widest uppercase block mb-2">
              // HERITAGE &amp; HISTORICAL PROGRESSION
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              COMPANY TIMELINE
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-manrope text-slate-600 max-w-md leading-relaxed">
            Two decades of disciplined growth from a regional ship agency into an international ship management powerhouse.
          </p>
        </div>

        {/* HERITAGE STATS GRID INTEGRATED DIRECTLY IN TIMELINE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg">
          <div className="space-y-1 p-2">
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#071A2B] leading-none">
              <span ref={num1Ref}>24</span><span className="text-[#0077B6]">+</span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">
              YEARS IN MARITIME OPS
            </p>
          </div>

          <div className="space-y-1 p-2 border-l border-slate-100">
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#071A2B] leading-none">
              <span ref={num2Ref}>59</span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">
              VESSELS MANAGED
            </p>
          </div>

          <div className="space-y-1 p-2 border-l border-slate-100">
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#071A2B] leading-none">
              <span ref={num3Ref}>03</span> <span className="text-xs text-[#0077B6] font-mono uppercase font-bold">HUBS</span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">
              GLOBAL COMMAND HUBS
            </p>
          </div>

          <div className="space-y-1 p-2 border-l border-slate-100">
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#071A2B] leading-none">
              <span ref={num4Ref}>24</span><span className="text-[#0077B6]">/7</span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">
              ROUND-THE-CLOCK DISPATCH
            </p>
          </div>
        </div>

        {/* Horizontal Year Selector Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 overflow-x-auto gap-4 scrollbar-none">
          {timelineData.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.year}
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col items-start transition-all duration-300 shrink-0 ${
                  isActive ? "scale-105" : "opacity-50 hover:opacity-100"
                }`}
              >
                <span
                  className={`font-syne text-2xl sm:text-4xl font-extrabold transition-colors ${
                    isActive ? "text-[#0077B6]" : "text-slate-400"
                  }`}
                >
                  {item.year}
                </span>
                <div
                  className={`h-1 w-full mt-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#0077B6]" : "bg-transparent"
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
              <span className="font-mono text-xs font-bold text-[#0077B6] tracking-widest uppercase">
                MILESTONE // {current.year}
              </span>
              <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-[#071A2B] leading-tight">
                {current.title}
              </h3>
              <p className="text-sm font-manrope font-normal text-slate-600 leading-relaxed max-w-xl">
                {current.desc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-[280px] sm:h-[360px] rounded-3xl overflow-hidden relative bg-white border border-slate-200 shadow-xl">
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
