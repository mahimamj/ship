"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, CheckCircle2, ChevronRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineEvents = [
    {
      year: "2002",
      title: "Inception in Mumbai",
      description: "Founded Oceanic Star Shipping Pvt. Ltd. in Mumbai, India, delivering RPSL-certified crew recruitment and vessel support services.",
      metric: "Established HQ",
    },
    {
      year: "2008",
      title: "ISO & ISM Certification",
      description: "Achieved ISO 9001:2015 accreditation and ISM compliance, expanding full technical management for bulk carriers and product tankers.",
      metric: "Quality Milestone",
    },
    {
      year: "2014",
      title: "Dubai Operations Expansion",
      description: "Established Oceanic Star Fleet Ship Management LLC in Dubai, UAE to serve Arabian Gulf & Middle East fleet operators.",
      metric: "Dubai LLC Launch",
    },
    {
      year: "2019",
      title: "Sri Lanka Branch & Training",
      description: "Opened regional hub in Colombo, Sri Lanka & launched advanced maritime simulator training center for deck & engine officers.",
      metric: "Global Hub",
    },
    {
      year: "2024",
      title: "Cyber Security & Modernization",
      description: "Integrated IMO 2021 Cyber Risk Management, satellite IoT monitoring, and AI-driven PMS dry dock analytics.",
      metric: "Digital Maritime",
    },
    {
      year: "2026",
      title: "Global Fleet Leadership",
      description: "Managing over 50+ ocean vessels with 1,000+ active crew members operating across worldwide shipping routes.",
      metric: "Present Day",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            About Oceanic Star Group
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Two Decades of <span className="text-gradient">Maritime Excellence</span>
          </h2>
          <p className="text-slate-400 text-base">
            Providing premier technical ship management, crew management, and marine engineering solutions 
            across key maritime centers in Dubai, India, and Sri Lanka.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/crew_training.png"
                alt="Oceanic Star Executive Officers"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-5 border border-teal-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg font-poppins">
                    24+
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Years of Proven Performance</div>
                    <div className="text-xs text-slate-300">Servicing International Ship Owners Since 2002</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white">
              Trusted Maritime Partner Across Dubai, India & International Routes
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong className="text-white">Oceanic Star Fleet Ship Management LLC</strong> is an International Ship Management Organization delivering leading industry services to various ship owners and managers worldwide. Oceanic Star Fleet is headquartered at <strong className="text-teal-400">Dubai, UAE</strong>, with a team of industry professionals committed to providing tailormade, highest quality ship management services as per client specific requirements.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Oceanic Star Fleet has successfully established a global presence with branch offices available in <strong className="text-white">India</strong> and <strong className="text-white">Sri-Lanka</strong>. We operate strictly under IMO, ISM Code, STCW 2010, and MLC 2006 compliance, ensuring vessel safety, environmental protection, zero operational downtime, and high crew retention.
            </p>

            {/* Regional Presence Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="text-xs font-bold text-white">Mumbai HQ</div>
                  <div className="text-[10px] text-slate-400">India Operations</div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="text-xs font-bold text-white">Dubai Hub</div>
                  <div className="text-[10px] text-slate-400">UAE Fleet Mgmt</div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="text-xs font-bold text-white">Colombo Hub</div>
                  <div className="text-[10px] text-slate-400">Sri Lanka Agency</div>
                </div>
              </div>
            </div>

            {/* Quick Bullets */}
            <div className="space-y-2 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DG Shipping Approved RPSL License (RPSL-MUM-245)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Bureau Veritas ISO 9001:2015 Certified Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Financial Accounting & PMS Reporting</span>
              </div>
            </div>

          </div>
        </div>

        {/* Animated History Timeline */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold font-poppins text-white flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-teal-400" />
                <span>Oceanic Star Journey Timeline</span>
              </h3>
              <p className="text-xs text-slate-400">Click on any milestone year to view expansion history</p>
            </div>
            <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">2002 — 2026</span>
          </div>

          {/* Timeline Year Tabs */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
            {timelineEvents.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveTimeline(index)}
                className={`py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300 ${
                  activeTimeline === index
                    ? "bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white shadow-lg scale-105"
                    : "bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                <div className="text-xs opacity-75">{item.metric}</div>
                <div className="text-base font-poppins font-bold">{item.year}</div>
              </button>
            ))}
          </div>

          {/* Active Event Details */}
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-teal-500/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
                Milestone Phase • {timelineEvents[activeTimeline].year}
              </span>
              <h4 className="text-xl font-bold text-white font-poppins">
                {timelineEvents[activeTimeline].title}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {timelineEvents[activeTimeline].description}
              </p>
            </div>

            <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl px-5 py-3 text-center min-w-[160px]">
              <span className="text-xs text-slate-400 block">Strategic Focus</span>
              <span className="text-sm font-bold text-teal-300 font-poppins">
                {timelineEvents[activeTimeline].metric}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
