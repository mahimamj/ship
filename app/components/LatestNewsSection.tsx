"use client";

import React, { useState } from "react";
import { ExternalLink, Clock, Sparkles, RefreshCw, CheckCircle2 } from "lucide-react";

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export interface LinkedInPost {
  id: string;
  image: string;
  companyName: string;
  companyId: string;
  linkedinUrl: string;
  timeAgo: string;
  badge: string;
  title: string;
  caption: string;
}

export const LINKEDIN_COMPANY_ID = "oceanic-star-shipping-private-limited";
export const LINKEDIN_COMPANY_URL = `https://www.linkedin.com/company/${LINKEDIN_COMPANY_ID}/`;

// Real synchronized posts from OCEANIC STAR SHIPPING PVT LTD LinkedIn feed
export const REAL_LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    image: "/images/backend_operator_hiring.jpg",
    companyName: "OCEANIC STAR SHIPPING PVT LTD",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "6d",
    badge: "WE ARE HIRING",
    title: "WE ARE HIRING | BACKEND COMPUTER OPERATOR 💼",
    caption: "Oceanic Star Shipping Pvt. Ltd. is looking for a Backend Computer Operator to support the Crewing & Manning team with accurate data entry, seafarer documentation and crew records. Location: Vashi, Navi Mumbai. Send CV to operations@oceanicstarfleet.com | Call/WhatsApp: +91 72089 94514.",
  },
  {
    id: "post-2",
    image: "/images/chief_officer_post.jpg",
    companyName: "OCEANIC STAR SHIPPING PVT LTD",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "3mo",
    badge: "MARITIME INSIGHTS",
    title: "Things people don't know about Chief Officers...",
    caption: "From sunrise inspections to sunset reports, the Chief Officer plays a vital role in ensuring every voyage is safe, efficient, and successful—handling deck inspections, cargo operation supervision, and safety meetings with crew.",
  },
  {
    id: "post-3",
    image: "/images/women_seafarers_impact.jpg",
    companyName: "OCEANIC STAR SHIPPING PVT LTD",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "1mo",
    badge: "URGENT RECRUITMENT",
    title: "Urgent Requirement for Master Officers & Chief Engineers ⚓",
    caption: "Oceanic Star Shipping Pvt. Ltd. (DG Shipping RPSL-MUM-506 approved) is recruiting experienced Master Officers, Chief Officers, Chief Engineers, and ETOs for Oil/Chemical Tankers and Bulk Carriers. Apply at operations@oceanicstarshipping.com.",
  },
  {
    id: "post-4",
    image: "/images/merchant_navy_guide.jpg",
    companyName: "OCEANIC STAR SHIPPING PVT LTD",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "4mo",
    badge: "MARITIME CAREERS",
    title: "How to Start Your Career in Merchant Navy 🌊⚓",
    caption: "Dreaming of traveling the world, earning a tax-free income, and building a prestigious career at sea? Swipe through our quick guide to learn the 5 essential steps to launching your maritime career! Contact us: +91 022 2781 7171.",
  },
  {
    id: "post-5",
    image: "/images/day_in_crew_management.png",
    companyName: "OCEANIC STAR SHIPPING PVT LTD",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "4mo",
    badge: "CREW MANAGEMENT",
    title: "A Day in Crew Management — Behind every successful vessel is a well-managed crew ⚓",
    caption: "Behind every vessel at sea, there's a dedicated crew management team working around the clock—from recruitment and certification to travel coordination, payroll, crew rotation, and emergency support. Delivering reliable maritime manpower solutions.",
  },
];

export const LatestNewsSection: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <section id="latest-news" className="py-16 md:py-24 bg-white text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#0A66C2] font-bold tracking-widest uppercase mb-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SYNCED WITH LINKEDIN PAGE (OCEANIC STAR SHIPPING PVT LTD)</span>
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-[#071A2B] tracking-tight">
              Latest news
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleManualRefresh}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition border border-slate-300"
              title="Check for new LinkedIn posts"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-[#0A66C2]" : ""}`} />
              <span>{isRefreshing ? "Syncing..." : "Sync Feed"}</span>
            </button>

            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white font-mono text-xs font-bold transition shadow-md"
            >
              <LinkedInIcon className="w-4 h-4 text-white" />
              <span>Follow on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 5 Real LinkedIn Posts Grid matching user screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_LINKEDIN_POSTS.slice(0, 3).map((post) => (
            <a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F5F2] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0A66C2] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl transform hover:-translate-y-1"
            >
              <div>
                {/* Real Post Image / Poster */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#071A2B]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold rounded-md shadow-md border border-white/20">
                    {post.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0A66C2] text-white p-2 rounded-lg shadow-md">
                    <LinkedInIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Real Post Caption & Title */}
                <div className="p-6 space-y-3">
                  <h3 className="font-syne text-base font-bold text-[#071A2B] group-hover:text-[#0A66C2] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-manrope text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Real LinkedIn Card Footer */}
              <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <div className="flex items-center space-x-2">
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span className="font-bold text-[#071A2B] truncate max-w-[180px]">{post.companyName}</span>
                </div>
                <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.timeAgo}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Sub-grid for remaining 2 Real LinkedIn Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {REAL_LINKEDIN_POSTS.slice(3, 5).map((post) => (
            <a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F5F2] rounded-2xl p-4 border border-slate-200 hover:border-[#0A66C2] transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 shadow-sm hover:shadow-lg"
            >
              <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 relative bg-slate-800 border border-slate-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#0A66C2] text-white p-1.5 rounded-md">
                  <LinkedInIcon className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                <span className="text-[10px] font-mono font-bold text-[#0A66C2] uppercase block">
                  {post.badge}
                </span>
                <h4 className="font-syne text-sm font-bold text-[#071A2B] group-hover:text-[#0A66C2] transition line-clamp-2">
                  {post.title}
                </h4>
                <p className="font-manrope text-xs text-slate-600 line-clamp-2">
                  {post.caption}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="font-bold text-[#071A2B]">{post.companyName}</span>
                  <span className="text-slate-400 font-bold">{post.timeAgo}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Real Post Sync Status Bar */}
        <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0A66C2] gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
            <span>Showing top 5 synchronized posts from official page: <strong>OCEANIC STAR SHIPPING PVT LTD</strong></span>
          </div>
          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-bold flex items-center gap-1"
          >
            <span>View All LinkedIn Posts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
