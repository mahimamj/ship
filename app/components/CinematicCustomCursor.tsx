"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CinematicCustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor position
  const mouseX = useSpring(0, { damping: 28, stiffness: 250 });
  const mouseY = useSpring(0, { damping: 28, stiffness: 250 });

  useEffect(() => {
    // Hide default cursor on desktop devices when custom cursor active
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over interactive hero text or buttons
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("[data-cursor]");
        if (interactiveEl) {
          const text = interactiveEl.getAttribute("data-cursor-text") || "EXPLORE";
          setCursorText(text);
          setIsHovered(true);
          return;
        }
      }

      if (isHovered) {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isHovered, isVisible]);

  // Hide custom cursor on mobile touch devices
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className="fixed top-0 left-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <motion.div
        animate={{
          width: isHovered ? 90 : 20,
          height: isHovered ? 90 : 20,
          backgroundColor: isHovered ? "rgba(79, 163, 184, 0.25)" : "rgba(245, 247, 248, 0.4)",
          borderColor: isHovered ? "rgba(79, 163, 184, 0.8)" : "rgba(245, 247, 248, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="rounded-full border backdrop-blur-[2px] flex items-center justify-center shadow-lg transition-colors"
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono tracking-widest text-[#F5F7F8] font-bold uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
