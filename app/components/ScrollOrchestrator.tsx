"use client";

import React, { useEffect, useRef } from "react";
import { initGSAP } from "@/lib/gsapHelper";
import { initAllScrollAnimations, initSectionStack, initHorizontalScrollGallery } from "@/lib/scrollAnimations";

export const ScrollOrchestrator: React.FC = () => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const galleryCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const { ScrollTrigger } = initGSAP();

    const timer = setTimeout(() => {
      initAllScrollAnimations(document);

      const stackContainer = document.getElementById("cinematic-stack");
      if (stackContainer) {
        cleanupRef.current = initSectionStack(stackContainer);
      }

      const horizontalContainer = document.getElementById("gsap-horizontal-gallery");
      if (horizontalContainer) {
        galleryCleanupRef.current = initHorizontalScrollGallery(horizontalContainer);
      }

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      cleanupRef.current?.();
      galleryCleanupRef.current?.();
      cleanupRef.current = null;
      galleryCleanupRef.current = null;
    };
  }, []);

  return null;
};

