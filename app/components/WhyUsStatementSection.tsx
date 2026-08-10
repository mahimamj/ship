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
    <section className="py-28 md:py-40 bg-[#FFFFFF] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24 sm:space-y-32">
        <div className="border-b border-[rgba(7,26,43,0.12)] pb-10">
          <span className="label-mono text-[#176B87] mb-3 block font-semibold">
            // OPERATIONAL PRINCIPLES
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B]">
            WHY OCEANIC STAR
          </h2>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {statements.map((st, idx) => (
            <motion.div
              key={st.keyword}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="border-l-2 border-[#071A2B] pl-8 sm:pl-12 py-2"
            >
              <div className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#071A2B] leading-none">
                {st.keyword}
              </div>
              <div className="text-xl sm:text-3xl font-manrope font-light text-[#667783] mt-2">
                {st.sub}
              </div>
              <div className="text-2xl sm:text-4xl font-syne font-bold text-[#176B87] mt-1">
                {st.main}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
