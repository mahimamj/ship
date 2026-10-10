"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Target, Eye, ShieldCheck, Heart, Zap, Users, Sparkles, Sliders, Smile } from "lucide-react";

export const MissionVisionValues: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const coreValues = [
    { name: "Reliability", desc: "Consistently delivering on promises, vessel schedules, and technical safety standards.", icon: ShieldCheck, color: "text-teal-400" },
    { name: "Honesty", desc: "Absolute financial transparency, open reporting, and ethical business conduct.", icon: Heart, color: "text-amber-400" },
    { name: "Safety", desc: "Uncompromising ISM & SOLAS protocols protecting human lives, vessels, and oceans.", icon: Compass, color: "text-emerald-400" },
    { name: "Teamwork", desc: "Unified collaboration between shore-based management, port agents, and onboard crew.", icon: Users, color: "text-blue-400" },
    { name: "Innovation", desc: "Pioneering satellite digital PMS monitoring, AI telemetry, and maritime cyber security.", icon: Sparkles, color: "text-purple-400" },
    { name: "Flexibility", desc: "Agile marine solutions tailored dynamically to market changes and ship owner budgets.", icon: Sliders, color: "text-cyan-400" },
    { name: "Positive Thinking", desc: "Proactive problem-solving mindset across complex dry dock and offshore challenges.", icon: Smile, color: "text-orange-400" },
  ];

  return (
    <section className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Our Purpose & Ethos
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Mission, Vision & <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-slate-400 text-base">
            Guided by integrity, safety, and innovation in every vessel we manage and seafarer we train.
          </p>
        </div>

        {/* Split Layout: Mission & Vision */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-teal-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white">Our Mission</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                "Our Mission is to Provide Ship Owners and Operators With a Complete Range of Solutions That Optimize Vessel Performance, Enhance Safety and Compliance, and Maximize Operational Efficiency. We Understand the Unique Challenges of the Shipping Industry and Strive to Deliver Customized Services Tailored to Meet the Specific Needs of Each Client."
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center space-x-3 text-xs text-teal-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
              <span>Tailored Solutions & Operational Excellence</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white">Our Vision</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                "Our Vision for Ship Management Services is to Be a Globally Recognized Leader in the Industry, Delivering Excellence in Operations, Safety, and Compliance. We Strive to Minimize Environmental Impact and Promote Sustainability, Leveraging Innovation and Technology to Drive Efficiency and Performance."
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center space-x-3 text-xs text-cyan-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>IMO 2030 / 2050 Decarbonization Readiness</span>
            </div>
          </motion.div>
        </div>

        {/* 7 Core Values Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-poppins text-center text-white">
            Our 7 Core Pillars of Conduct
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-2xl p-4 text-center transition duration-300 hover:border-teal-500/40 hover:-translate-y-1 flex flex-col items-center justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center mb-3">
                    <Icon className={`w-5 h-5 ${value.color}`} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold font-poppins text-white mb-1">
                      {value.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-light leading-snug">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
