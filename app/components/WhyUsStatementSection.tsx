"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhyUsStatementSection: React.FC = () => {
  const statements = [
    {
      keyword: "SAFETY",
      sub: "is not a feature.",
      main: "It is the foundation.",
    },
    {
      keyword: "EFFICIENCY",
      sub: "is not an option.",
      main: "It is the standard.",
    },
    {
      keyword: "COMPLIANCE",
      sub: "is not a burden.",
      main: "It is our promise.",
    },
  ];

  return (
    <section className="py-20 md:py-36 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 sm:space-y-28">
        <div className="border-b border-[rgba(7,26,43,0.12)] pb-8">
          <span className="label-mono text-[#176B87] mb-2.5 block font-semibold">
            // OPERATIONAL PRINCIPLES
          </span>
          <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#071A2B]">
            WHY OCEANIC STAR
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {statements.map((st, idx) => (
            <motion.div
              key={st.keyword}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="border-l-2 border-[#071A2B] pl-5 sm:pl-10 py-1"
            >
              <div className="font-jakarta font-extrabold text-[clamp(2.2rem,8vw,5.5rem)] tracking-tight text-[#071A2B] leading-none break-words">
                {st.keyword}
              </div>
              <div className="text-lg sm:text-2xl font-manrope font-light text-[#667783] mt-2">
                {st.sub}
              </div>
              <div className="text-xl sm:text-3xl font-jakarta font-bold text-[#176B87] mt-1">
                {st.main}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
