"use client";

import React from "react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  stack?: boolean;
  id?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = "",
  stack = false,
  id,
}) => {
  return (
    <div
      id={id}
      className={`${stack ? "cinematic-stack-layer relative w-full min-h-screen origin-top will-change-transform z-10" : "relative"} ${className}`}
    >
      {children}
    </div>
  );
};
