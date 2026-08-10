"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  Headphones,
  Award,
  Users,
  Globe2,
  UserCheck,
  HeartHandshake,
  Clock,
  Eye,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const threePillars = [
    {
      title: "CAREER DEVELOPMENT",
      icon: Briefcase,
      desc: "We don't just provide jobs, we offer career paths. With access to a variety of vessel and routes, our crew members enjoy a dynamic and enriching career at sea.",
      badge: "Growth Paths",
    },
    {
      title: "HEALTH & SAFETY FOCUS",
      icon: ShieldCheck,
      desc: "Crew safety is our priority. Our rigorous health and safety standards ensure that every crew member is protected, from comprehensive insurance to mental health support.",
      badge: "100% Protected",
    },
    {
      title: "RESPONSIVE SUPPORT",
      icon: Headphones,
      desc: "Our dedicated support teams are always a call away, providing assistance and guidance to our crews, ensuring their concerns are addressed promptly.",
      badge: "24/7 Assistance",
    },
  ];

  const reasons = [
    {
      title: "20+ Years Experience",
      desc: "Inception in 2002 with proven track record across international shipping corridors.",
      icon: Award,
      stat: "24+ Yrs",
    },
    {
      title: "Professional Team",
      desc: "Led by veteran Class 1 Chief Engineers, Master Mariners, and STCW instructors.",
      icon: Users,
      stat: "100% Expert",
    },
    {
      title: "Global Network",
      desc: "Operating hubs in Dubai (UAE), Mumbai (India), and Colombo (Sri Lanka).",
      icon: Globe2,
      stat: "3 Global Hubs",
    },
    {
      title: "High Crew Retention",
      desc: "96.8% seafarer retention rate ensuring experienced stability on board.",
      icon: UserCheck,
      stat: "96.8% Retention",
    },
    {
      title: "Client-Centric Approach",
      desc: "Tailored vessel management solutions customized for each ship owner's OPEX.",
      icon: HeartHandshake,
      stat: "Bespoke OPEX",
    },
    {
      title: "Compliance & Transparency",
      desc: "Real-time PMS portal, open accounting, and complete financial auditability.",
      icon: Eye,
      stat: "100% Audit",
    },
  ];

  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Why Choose <span className="text-gradient">Oceanic Star Fleet Ship Management LLC</span>
          </h2>
          
          {/* Seafarers Mission Banner */}
          <div className="bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-teal-500/20 border border-teal-500/30 rounded-2xl p-6 mt-6 shadow-xl">
            <p className="text-base sm:text-lg font-bold font-poppins text-amber-300 tracking-wide uppercase leading-relaxed">
              "OUR MISSION IS NOT ONLY TO MANAGE BUT TO INSPIRE, DEVELOP AND SUPPORT THE BACKBONE OF MARITIME INDUSTRY - OUR SEAFARERS."
            </p>
          </div>
        </div>

        {/* 3 Core Highlight Pillars (Career, Health/Safety, Responsive Support) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {threePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-teal-400 transition-all duration-300"
              >
                {/* Wave Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#00F5D4]"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 group-hover:scale-110 transition duration-300 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full font-poppins">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-white mb-3 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-xs font-semibold text-teal-400 flex items-center space-x-1">
                  <span>Core Operational Commitment</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplementary Grid of Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded-full">
                      {item.stat}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-poppins text-white mb-2 group-hover:text-teal-300 transition">
                    {item.title}
                  </h4>

                  <p className="text-slate-300 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
