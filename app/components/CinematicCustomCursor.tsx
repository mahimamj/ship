"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const CinematicCustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const handleMove = (x: number, y: number, target: HTMLElement | null) => {
      mouseX.set(x);
      mouseY.set(y);
      if (!isVisible) setIsVisible(true);

      if (target) {
        const interactiveEl = target.closest(
          "[data-cursor], button, a, [role='button'], input, select, textarea"
        );
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

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY, e.target as HTMLElement | null);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
        handleMove(touch.clientX, touch.clientY, el);
      }
    };

    const handleHide = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleHide);
    window.addEventListener("touchend", handleHide);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      document.removeEventListener("mouseleave", handleHide);
      window.removeEventListener("touchend", handleHide);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: isHovered ? 76 : 16,
          height: isHovered ? 76 : 16,
          backgroundColor: isHovered
            ? "rgba(23, 107, 135, 0.15)"
            : "rgba(7, 26, 43, 0.85)",
          borderColor: isHovered
            ? "rgba(23, 107, 135, 0.6)"
            : "rgba(7, 26, 43, 0.85)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="rounded-full border flex items-center justify-center shadow-lg"
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


