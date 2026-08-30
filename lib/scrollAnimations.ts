"use client";

import { initGSAP } from "./gsapHelper";

export type ScrollRevealType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "clip-up"
  | "blur-in";

const REVEAL_FROM: Record<ScrollRevealType, Record<string, number | string>> = {
  "fade-up": { opacity: 0, y: 60 },
  "fade-down": { opacity: 0, y: -60 },
  "fade-left": { opacity: 0, x: -60 },
  "fade-right": { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.88 },
  "clip-up": { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  "blur-in": { opacity: 0, filter: "blur(12px)" },
};

const REVEAL_TO: Record<ScrollRevealType, Record<string, number | string>> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-down": { opacity: 1, y: 0 },
  "fade-left": { opacity: 1, x: 0 },
  "fade-right": { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  "clip-up": { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  "blur-in": { opacity: 1, filter: "blur(0px)" },
};

export function initScrollReveals(scope: Element | Document = document) {
  const { gsap } = initGSAP();
  const elements = scope.querySelectorAll<HTMLElement>("[data-scroll-reveal]");

  elements.forEach((el) => {
    const type = (el.dataset.scrollReveal || "fade-up") as ScrollRevealType;
    const delay = parseFloat(el.dataset.scrollDelay || "0");
    const duration = parseFloat(el.dataset.scrollDuration || "1");
    const start = el.dataset.scrollStart || "top 85%";

    gsap.fromTo(
      el,
      REVEAL_FROM[type] || REVEAL_FROM["fade-up"],
      {
        ...(REVEAL_TO[type] || REVEAL_TO["fade-up"]),
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      }
    );
  });
}

export function initSplitTextReveals(scope: Element | Document = document) {
  const { gsap } = initGSAP();
  const elements = scope.querySelectorAll<HTMLElement>("[data-scroll-split]");

  elements.forEach((el) => {
    const text = el.textContent || "";
    const words = text.split(/\s+/).filter(Boolean);

    el.innerHTML = words
      .map((word) => `<span class="split-word inline-block overflow-hidden"><span class="split-inner inline-block">${word}&nbsp;</span></span>`)
      .join("");

    const inners = el.querySelectorAll(".split-inner");
    gsap.fromTo(
      inners,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });
}

export function initParallaxElements(scope: Element | Document = document) {
  const { gsap } = initGSAP();
  const elements = scope.querySelectorAll<HTMLElement>("[data-scroll-parallax]");

  elements.forEach((el) => {
    const speed = parseFloat(el.dataset.scrollParallax || "0.3");
    const direction = el.dataset.scrollParallaxDir || "y";

    gsap.fromTo(
      el,
      direction === "x" ? { x: -80 * speed } : { y: 80 * speed },
      {
        ...(direction === "x" ? { x: 80 * speed } : { y: -80 * speed }),
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

export function initScrollCounters(scope: Element | Document = document) {
  const { gsap } = initGSAP();
  const elements = scope.querySelectorAll<HTMLElement>("[data-scroll-counter]");

  elements.forEach((el) => {
    const target = parseFloat(el.dataset.scrollCounter || "0");
    const suffix = el.dataset.scrollCounterSuffix || "";
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      onUpdate: () => {
        el.textContent = Math.floor(obj.val).toString() + suffix;
      },
    });
  });
}

export function initStaggerGroups(scope: Element | Document = document) {
  const { gsap } = initGSAP();
  const groups = scope.querySelectorAll<HTMLElement>("[data-scroll-stagger]");

  groups.forEach((group) => {
    const children = group.querySelectorAll<HTMLElement>("[data-scroll-stagger-item]");
    const start = group.dataset.scrollStart || "top 80%";

    gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start,
        },
      }
    );
  });
}

export function initSectionStack(container: HTMLElement) {
  const { gsap } = initGSAP();
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const layers = gsap.utils.toArray<HTMLElement>(".cinematic-stack-layer", container);

    layers.forEach((layer, i) => {
      layer.style.zIndex = String(10 + i);

      if (i === 0) return;

      const prevLayer = layers[i - 1];

      gsap.fromTo(
        layer,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: layer,
            start: "top bottom",
            end: "top top",
            scrub: 0.5,
            pin: prevLayer,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });

  return () => mm.revert();
}

export function initHeroScrollExit(
  section: HTMLElement,
  bg: HTMLElement,
  content: HTMLElement
) {
  const { gsap } = initGSAP();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=120%",
      scrub: 0.8,
      pin: false,
    },
  });

  tl.to(bg, { scale: 1.18, ease: "none" }, 0)
    .to(bg.querySelector("video, img") || bg, { opacity: 0.4, ease: "none" }, 0)
    .to(content, { y: -120, opacity: 0, ease: "power2.in" }, 0)
    .to(section, { backgroundColor: "#FFFFFF", ease: "none" }, 0.6);

  return tl;
}

export function initAllScrollAnimations(scope: Element | Document = document) {
  initScrollReveals(scope);
  initSplitTextReveals(scope);
  initParallaxElements(scope);
  initScrollCounters(scope);
  initStaggerGroups(scope);
}
