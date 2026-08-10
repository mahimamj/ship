"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe2, Clock, ShieldCheck, CheckCircle } from "lucide-react";

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: "20+",
      label: "Years Experience",
      subtext: "Since 2002 Inception",
      icon: Award,
      color: "from-teal-400 to-cyan-500",
    },
    {
      value: "1000+",
      label: "Professional Crew",
      subtext: "STCW Certified Seafarers",
      icon: Users,
      color: "from-cyan-400 to-blue-500",
    },
    {
      value: "Worldwide",
      label: "Operations Hubs",
      subtext: "Dubai • India • Sri Lanka",
      icon: Globe2,
      color: "from-emerald-400 to-teal-500",
    },
    {
      value: "24/7",
      label: "Support Center",
      subtext: "Real-time Vessel Tracking",
      icon: Clock,
      color: "from-amber-400 to-orange-500",
    },
    {
      value: "ISO 9001",
      label: "Quality Certified",
      subtext: "Bureau Veritas Audited",
      icon: ShieldCheck,
      color: "from-purple-400 to-indigo-500",
    },
    {
      value: "Approved",
      label: "DG Shipping & RPSL",
      subtext: "Full Flag State Compliance",
      icon: CheckCircle,
      color: "from-teal-300 to-emerald-400",
    },
  ];

  return (
    <section className="py-20 bg-[#0A192F] relative overflow-hidden border-y border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 text-center flex flex-col items-center justify-between border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition duration-300">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>

                <div className="space-y-1">
                  <div className={`text-2xl sm:text-3xl font-extrabold font-poppins bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white font-poppins">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
