"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  GraduationCap,
  HeartPulse,
  Award,
  RefreshCw,
  CreditCard,
  Plane,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const CrewManagementTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const wheelSteps = [
    { num: 1, title: "Client Centered Approach", desc: "Tailoring every crew matrix to ship owner OPEX and operational needs." },
    { num: 2, title: "Dedicated Client Support", desc: "24/7 dedicated crewing superintendents handling all vessel calls." },
    { num: 3, title: "Recruit & Retain Talent", desc: "96.8% seafarer retention rate through career advancement." },
    { num: 4, title: "High Quality Care", desc: "Comprehensive P&I insurance, medical care, and family welfare." },
    { num: 5, title: "Professional Team", desc: "Handpicked officers meeting rigorous technical & safety standards." },
    { num: 6, title: "True To Our Values", desc: "Honesty, safety, teamwork, and absolute financial transparency." },
    { num: 7, title: "20+ Years Experience", desc: "Established in 2002 with proven global maritime expertise." },
  ];

  const crewingPrinciples = [
    {
      title: "People Not Just Profiles",
      icon: Users,
      desc: "We don't just match resumes to vacancies, we believe the power of personalities, dedication and experience. Our crewing team handpicks seafarers who meet our technical requirements and who are aligned with company's values and culture.",
    },
    {
      title: "Lifelong Learners",
      icon: GraduationCap,
      desc: "Beyond recruitment, we are deeply committed to the growth of our crew members. Our training programmes are more than just courses, they are a commitment to continuous improvement to ensure that they stay updated with the latest safety standards and industry advancements. We empower our crew with the knowledge and skills to tackle the complexities of the maritime world.",
    },
    {
      title: "Global Reach, Local Touch",
      icon: Globe2,
      desc: "With a global network, we can find talent from the farthest corners of the maritime world.",
    },
  ];

  return (
    <section id="crew" className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Our Crew Management Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Crew <span className="text-gradient">Management</span>
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            We provide comprehensive crew management solutions including key services for <strong className="text-white">Bulk Carriers</strong>, <strong className="text-white">Containers</strong>, <strong className="text-white">General Cargo Vessels</strong>, and <strong className="text-white">Tankers</strong>.
          </p>

          {/* Key Services Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto text-xs">
            <div className="bg-slate-900/80 border border-teal-500/30 rounded-xl p-3.5 flex items-center justify-center space-x-2 text-teal-300 font-semibold">
              <RefreshCw className="w-4 h-4 text-teal-400" />
              <span>Crew Rotation</span>
            </div>
            <div className="bg-slate-900/80 border border-teal-500/30 rounded-xl p-3.5 flex items-center justify-center space-x-2 text-teal-300 font-semibold">
              <CreditCard className="w-4 h-4 text-teal-400" />
              <span>Payroll</span>
            </div>
            <div className="bg-slate-900/80 border border-teal-500/30 rounded-xl p-3.5 flex items-center justify-center space-x-2 text-teal-300 font-semibold">
              <HeartPulse className="w-4 h-4 text-teal-400" />
              <span>ILO & Flag Medical</span>
            </div>
            <div className="bg-slate-900/80 border border-teal-500/30 rounded-xl p-3.5 flex items-center justify-center space-x-2 text-teal-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Crew Welfare etc.</span>
            </div>
          </div>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {crewingPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-teal-400 transition duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-xs font-semibold text-teal-400">
                  <span>Oceanic Star Ethos</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 7-Step Flexible Solution Wheel */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-teal-500/30 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">
              7-Step Crewing Excellence Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white">
              Flexible Solution For All Your Shipping Needs
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {wheelSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-white/10 hover:border-teal-400 rounded-2xl p-4 text-center transition duration-300 flex flex-col items-center justify-between group hover:-translate-y-1"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00F5D4] text-slate-950 font-extrabold font-poppins text-sm flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold font-poppins text-white mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-light leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
