"use client";

import React, { useEffect, useRef } from "react";

export const OceanParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes representing vessels / sonar waypoints
    const numParticles = 40;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ocean grid
      ctx.strokeStyle = "rgba(13, 148, 136, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw animated radar sweep in top-right or center area
      const centerX = width * 0.8;
      const centerY = height * 0.4;
      const radarRadius = Math.min(width, height) * 0.35;

      // Draw concentric radar rings
      ctx.strokeStyle = "rgba(0, 245, 212, 0.08)";
      ctx.lineWidth = 1.5;
      [0.3, 0.6, 0.9].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radarRadius * r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Radar line
      const sweepX = centerX + Math.cos(radarAngle) * radarRadius;
      const sweepY = centerY + Math.sin(radarAngle) * radarRadius;

      const gradient = ctx.createLinearGradient(centerX, centerY, sweepX, sweepY);
      gradient.addColorStop(0, "rgba(0, 245, 212, 0.3)");
      gradient.addColorStop(1, "rgba(0, 245, 212, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      radarAngle += 0.008;

      // 3. Update & render floating particles (maritime sonar dots)
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.2;

        ctx.fillStyle = `rgba(0, 245, 212, ${Math.max(0.1, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby dots with delicate sonar lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(13, 148, 136, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
    />
  );
};
