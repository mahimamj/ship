"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Oceanic Star Group has managed our fleet of 8 Supramax bulk carriers for over 6 years. Their dry dock supervision and crew retention are exceptional, cutting our OPEX by 14% while maintaining flawless ISM safety records.",
      author: "Capt. Henrik Lindqvist",
      title: "Fleet Operations Director",
      company: "Nordic Bulk Shipping AG (Hamburg)",
      stars: 5,
    },
    {
      quote: "The Dubai team at Oceanic Star Fleet Ship Management LLC handles all our Arabian Gulf port calls and crew sign-offs with total efficiency. Zero delays, transparent disbursement accounting, and 24/7 responsiveness.",
      author: "Tariq Al-Mansoori",
      title: "VP Maritime Logistics",
      company: "Emirates Maritime Transport (Dubai)",
      stars: 5,
    },
    {
      quote: "Finding qualified STCW officers for chemical tankers is extremely demanding. Oceanic Star's Mumbai office delivers top-tier certified engineers and captains with zero vetting observations.",
      author: "Rajeshwar Rao",
      title: "Chief Operating Officer",
      company: "Pacific Star Tankers Ltd. (Singapore)",
      stars: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            What Ship Owners <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-slate-400 text-base">
            Endorsements from global fleet operators, ship owners, and charterers across Europe, Middle East, and Asia.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-teal-500/30 shadow-2xl relative"
          >
            <Quote className="w-12 h-12 text-teal-500/30 absolute top-6 right-6" />

            <div className="flex space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-slate-200 font-light italic leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex justify-between items-end border-t border-white/10 pt-6">
              <div>
                <h4 className="text-base font-bold font-poppins text-white">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-xs text-teal-400 font-semibold">{testimonials[currentIndex].title}</p>
                <p className="text-[11px] text-slate-400">{testimonials[currentIndex].company}</p>
              </div>

              {/* Slider controls */}
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-400 text-slate-200 hover:text-white transition"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-400 text-slate-200 hover:text-white transition"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
