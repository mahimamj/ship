"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-none stroke-current stroke-[2.2]`} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.74-3.83 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

export const FollowTheJourneySection: React.FC = () => {
  const companyChannels = [
    {
      name: "LinkedIn (Company)",
      url: "https://www.linkedin.com/company/oceanic-star-shipping-private-limited/",
      Icon: LinkedinIcon,
      subtitle: "Oceanic Star Shipping Pvt. Ltd.",
      brandColor: "#0A66C2",
    },
    {
      name: "Instagram (Company)",
      url: "https://www.instagram.com/oceanicstarshippingpvtltd?stkn=MTUyY2N3amU5bjcyNQ==",
      Icon: InstagramIcon,
      subtitle: "Official Instagram Page",
      brandColor: "#E4405F",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAF7] text-[#061B2A] py-16 sm:py-20 px-6 sm:px-12 border-t border-slate-200 select-none">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        
        {/* Top Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#C59B27] uppercase block">
            CONNECT &amp; FOLLOW
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight leading-tight">
            Follow Oceanic Star Group
          </h2>

          <p className="font-manrope text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with our official company updates, fleet dispatches, seafarer recruitment notices, and operational announcements.
          </p>
        </div>

        {/* Official Company Channels Row */}
        <div className="pt-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {companyChannels.map((channel, idx) => {
              const Icon = channel.Icon;
              return (
                <a
                  key={idx}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-white border-2 border-[#0068B7]/30 shadow-md hover:shadow-xl hover:border-[#0068B7] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  <div className="p-2 rounded-full bg-sky-50 group-hover:bg-[#0068B7] text-[#0068B7] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="text-left">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[#0B2545] tracking-wide block">
                      {channel.name}
                    </span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#0068B7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
