"use me";
import React from "react";

interface WaveProps {
  flip?: boolean;
  color?: string;
}

export const OceanWaveDivider: React.FC<WaveProps> = ({ flip = false, color = "#0A192F" }) => {
  return (
    <div className={`w-full overflow-hidden leading-none z-10 ${flip ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full h-[60px] md:h-[90px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={color}
          className="transition-colors duration-500"
        ></path>
        <path
          d="M0,20 C200,100 450,10 700,70 C950,130 1100,30 1200,40 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.4"
        ></path>
      </svg>
    </div>
  );
};
