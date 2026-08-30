"use client";

import React, { useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const { ScrollTrigger } = initGSAP();

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        setProgress(Math.round(self.progress * 100));
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#176B87] via-[#00D26A] to-cyan-300 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
