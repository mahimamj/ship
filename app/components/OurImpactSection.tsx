"use client";

import React from "react";
import { ShieldCheck, Heart, Award, Sparkles, Anchor, Globe, Users } from "lucide-react";

export const OurImpactSection: React.FC = () => {
  return (
    <section id="our-impact" className="py-16 md:py-28 bg-[#F5F5F2] text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Title */}
        <div className="border-b border-slate-300 pb-4">
          <span className="font-mono text-xs font-bold text-[#0077B6] tracking-widest uppercase block mb-1">
            // SUSTAINABILITY &amp; SOCIAL RESPONSIBILITY
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-[#071A2B] tracking-tight">
            Our impact
          </h2>
        </div>

        {/* 2-Column Split matching reference screenshot design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Artwork Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 relative overflow-hidden">
              {/* Brand Banner Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <Anchor className="w-5 h-5 text-[#0077B6]" />
                  <span className="font-syne text-sm font-extrabold tracking-wider text-[#071A2B]">
                    OCEANIC STAR
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold rounded-full border border-emerald-200">
                  SDG 5 &amp; 14 CERTIFIED
                </span>
              </div>

              {/* Generated Women Seafarers Impact Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/images/women_seafarers_impact.jpg"
                  alt="Our Inspiring Women Seafarers at Sea"
                  className="w-full h-full object-cover shadow-inner hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Quote Banner */}
              <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between text-xs font-mono font-bold text-[#0077B6]">
                <span>EQUAL OPPORTUNITY AT SEA</span>
                <span>MLC 2006 COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Catchy Impact Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2B] leading-tight tracking-tight">
              Our inspiring women <br />
              <span className="text-[#0077B6]">seafarers</span>
            </h3>

            {/* Simple & Catchy Line */}
            <p className="font-manrope text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
              &ldquo;Breaking barriers on open waters. At Oceanic Star, we advocate gender equality across our global fleet, creating safe, inclusive, and empowering opportunities for women seafarers while championing UN Sustainable Development Goals.&rdquo;
            </p>

            <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              In a traditionally male-dominated field, Oceanic Star is stepping up as a champion of gender diversity at sea. Today, women make up just 1.2% of seafarers worldwide. We are committed to help bridge the gender gap on board our vessels by implementing policies and practices to meet that objective. We believe in equal employment opportunities and fostering a safe and inclusive working culture where every person is respected, supported, and encouraged to meet their fullest potential. Our inspiring women seafarers fearlessly navigate the open waters, break barriers, and prove that diversity is key to a successful and sustainable maritime future.
            </p>

            {/* SDG 5 Badge Box */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FF3A21] rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg font-bold">
                <span className="text-xs font-mono font-extrabold leading-none">SDG</span>
                <span className="text-xl font-syne font-black leading-none mt-0.5">5</span>
              </div>

              <div>
                <h4 className="font-syne text-sm font-bold text-[#071A2B]">UN SDG 5: Gender Equality</h4>
                <p className="font-manrope text-xs text-slate-600">
                  Achieve gender equality and empower all women and girls across marine operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
