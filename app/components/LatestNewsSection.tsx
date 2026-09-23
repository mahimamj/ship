"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Share2, Sparkles, Clock } from "lucide-react";

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
  badge?: string;
  title: string;
  caption: string;
}

export const LINKEDIN_COMPANY_ID = "oceanic-star-shipping-private-limited";
export const LINKEDIN_COMPANY_URL = `https://www.linkedin.com/company/${LINKEDIN_COMPANY_ID}/`;

// Top 5 Recently Added LinkedIn Posts from Oceanic Star Group Company ID
export const RECENT_LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    companyName: "Oceanic Star Shipping Private Limited",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "18 hours ago",
    badge: "FLEET DISPATCH",
    title: "M/V Oceanic Trade Wind Completes Bosphorus Transit",
    caption: "Our Istanbul technical superintendency team successfully coordinated Bosphorus transit and husbandry dispatch for M/V Oceanic Trade Wind. Smooth sailing through Eurasian maritime corridors.",
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    companyName: "Oceanic Star Shipping Private Limited",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "1 day ago",
    badge: "CONSOLATION PRIZE // SEAFARER PHOTOGRAPHY '26",
    title: "Seafarer Photography Contest — High Seas Stargazing",
    caption: "Congratulations to OS Saruk Khan on capturing the night sky over the Arabian Sea from the bridge wing! Celebrating seafarer talent at sea.",
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    companyName: "Oceanic Star Shipping Private Limited",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "4 days ago",
    badge: "FIRST PLACE // EXCELLENCE IN MAINTENANCE",
    title: "Marine Engineering Excellence Award — AB Indrajit Tandel",
    caption: "Recognizing outstanding precision welding & deck machinery overhaul during scheduled drydocking. Compliance & craftmanship at its peak.",
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80",
    companyName: "Oceanic Star Shipping Private Limited",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "1 week ago",
    badge: "CREWING & SAFETY",
    title: "RPSL-MUM-506 STCW Officer Induction Batch 2026",
    caption: "Welcoming 24 deck & engine officer cadets at our Navi Mumbai maritime training center. Empowering next-generation seafarer leadership.",
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1000&q=80",
    companyName: "Oceanic Star Shipping Private Limited",
    companyId: LINKEDIN_COMPANY_ID,
    linkedinUrl: LINKEDIN_COMPANY_URL,
    timeAgo: "2 weeks ago",
    badge: "SUSTAINABILITY & DIVERSITY",
    title: "Expanding Women Seafarers Cadre across Managed Tanker Fleet",
    caption: "Proud to welcome 4 new female marine officers on board our dual-fuel tanker fleet. Championing gender equality and meritocracy at sea.",
  },
];

export const LatestNewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % RECENT_LINKEDIN_POSTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + RECENT_LINKEDIN_POSTS.length) % RECENT_LINKEDIN_POSTS.length);
  };

  return (
    <section id="latest-news" className="py-16 md:py-24 bg-white text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0077B6] font-bold tracking-widest uppercase mb-2">
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
              <span>LINKEDIN LIVE FEED (COMPANY ID: {LINKEDIN_COMPANY_ID})</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-[#071A2B] tracking-tight">
              Latest news
            </h2>
          </div>

          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white font-mono text-xs font-bold transition shadow-md self-start sm:self-auto"
          >
            <LinkedInIcon className="w-4 h-4 text-white" />
            <span>Follow on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Posts Grid Display matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT_LINKEDIN_POSTS.slice(0, 3).map((post) => (
            <a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F5F2] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0A66C2] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl transform hover:-translate-y-1"
            >
              <div>
                {/* Post Cover Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.badge && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-[#071A2B]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold rounded-md shadow-md border border-white/20">
                      {post.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-[#0A66C2] text-white p-2 rounded-lg shadow-md">
                    <LinkedInIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Post Text Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-syne text-lg font-bold text-[#071A2B] group-hover:text-[#0A66C2] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-manrope text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer with LinkedIn Brand Tag */}
              <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-[#071A2B] truncate max-w-[180px]">{post.companyName}</span>
                </div>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.timeAgo}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Remaining 2 Posts (Sub-grid layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {RECENT_LINKEDIN_POSTS.slice(3, 5).map((post) => (
            <a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F5F2] rounded-2xl p-4 border border-slate-200 hover:border-[#0A66C2] transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 shadow-sm hover:shadow-lg"
            >
              <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 relative bg-slate-800">
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
                <h4 className="font-syne text-base font-bold text-[#071A2B] group-hover:text-[#0A66C2] transition line-clamp-2">
                  {post.title}
                </h4>
                <p className="font-manrope text-xs text-slate-600 line-clamp-2">
                  {post.caption}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{post.companyName}</span>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Dot indicators representing 5 active LinkedIn posts */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {RECENT_LINKEDIN_POSTS.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === 0 ? "w-6 bg-[#0A66C2]" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
