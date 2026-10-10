"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/gsapHelper";

export const Section2StatementStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const num4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Headline word reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Count up helper: starts from 0 on client mount & animates up to endVal
      const animateValue = (targetRef: React.RefObject<HTMLSpanElement | null>, endVal: number, padZero = false) => {
        if (!targetRef.current) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: endVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 90%",
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
  }, []);

  const headlineText = "24+ YEARS OF MOVING WHAT MATTERS.";
  const words = headlineText.split(" ");

  return (
    <section id="about" ref={sectionRef} className="relative py-28 md:py-40 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="label-mono text-[#176B87] mb-8 font-semibold tracking-widest text-xs">
          // HERITAGE & OPERATIONAL SCALE
        </p>

        {/* Headline */}
        <div className="max-w-5xl mb-24 md:mb-36">
          <h2 ref={headlineRef} className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#071A2B]">
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em] last:mr-0">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pt-12 border-t border-[rgba(7,26,43,0.12)]">
          {/* Stat 1: Initial SSR renders 24+ for SEO crawlers */}
          <div className="flex flex-col justify-between">
            <div className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none mb-4">
              <span ref={num1Ref}>24</span>
              <span className="text-[#176B87]">+</span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#667783] uppercase leading-relaxed font-semibold">
              YEARS IN MARITIME OPERATIONS
            </p>
          </div>

          {/* Stat 2: Initial SSR renders 59 for SEO crawlers */}
          <div className="flex flex-col justify-between">
            <div className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none mb-4">
              <span ref={num2Ref}>59</span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#667783] uppercase leading-relaxed font-semibold">
              VESSELS UNDER TECHNICAL MANAGEMENT
            </p>
          </div>

          {/* Stat 3: Initial SSR renders 03 HUBS for SEO crawlers */}
          <div className="flex flex-col justify-between">
            <div className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none mb-4">
              <span ref={num3Ref}>03</span>
              <span className="text-3xl sm:text-4xl text-[#176B87] font-semibold"> HUBS</span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#667783] uppercase leading-relaxed font-semibold">
              GLOBAL OPERATIONAL COMMAND HUBS
            </p>
          </div>

          {/* Stat 4: Initial SSR renders 24/7 for SEO crawlers */}
          <div className="flex flex-col justify-between">
            <div className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none mb-4">
              <span ref={num4Ref}>24</span>
              <span className="text-[#176B87]">/7</span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#667783] uppercase leading-relaxed font-semibold">
              ROUND-THE-CLOCK FLEET DISPATCH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
