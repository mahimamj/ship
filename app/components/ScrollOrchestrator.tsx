"use client";

import React, { useEffect, useRef } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { initAllScrollAnimations, initSectionStack } from "@/lib/scrollAnimations";

export const ScrollOrchestrator: React.FC = () => {
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const { ScrollTrigger } = initGSAP();

    const timer = setTimeout(() => {
      initAllScrollAnimations(document);

      const stackContainer = document.getElementById("cinematic-stack");
      if (stackContainer) {
        cleanupRef.current = initSectionStack(stackContainer);
      }

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return null;
};
