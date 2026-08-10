"use client";

import React from "react";
import { motion } from "framer-motion";

export const MissionVisionSplit: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="label-mono text-[#176B87] block font-semibold">
              // 01 ARCHITECTURE
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-[#071A2B]">
              OUR MISSION
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#071A2B]/80 font-light leading-relaxed">
              To deliver uncompromising technical vessel management, crew welfare, and maritime safety standards that maximize shipowners' asset value while ensuring zero incidents and full regulatory compliance across every voyage.
            </p>
          </motion.div>

          {/* Right: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="label-mono text-[#176B87] block font-semibold">
              // 02 HORIZON
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-[#071A2B]">
              OUR VISION
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#071A2B]/80 font-light leading-relaxed">
              To set the global benchmark in sustainable, data-driven ship management—leading the decarbonization of international commercial shipping through advanced CII fuel optimization and STCW certified seamanship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
