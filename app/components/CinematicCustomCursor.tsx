"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CinematicCustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useSpring(0, { damping: 32, stiffness: 280 });
  const mouseY = useSpring(0, { damping: 32, stiffness: 280 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("[data-cursor]");
        if (interactiveEl) {
          const text =
            interactiveEl.getAttribute("data-cursor-text") ||
            (interactiveEl.tagName === "BUTTON" || interactiveEl.tagName === "A"
              ? "OPEN"
              : "EXPLORE");
          setCursorText(text);
          setIsHovered(true);
          return;
        }
      }

      setIsHovered(false);
      setCursorText("");
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: isHovered ? 88 : 14,
          height: isHovered ? 88 : 14,
          backgroundColor: isHovered
            ? "rgba(23, 107, 135, 0.12)"
            : "rgba(7, 26, 43, 0.85)",
          borderColor: isHovered
            ? "rgba(23, 107, 135, 0.5)"
            : "rgba(7, 26, 43, 0.85)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="rounded-full border flex items-center justify-center"
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-mono tracking-[0.25em] text-[#071A2B] font-semibold uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
