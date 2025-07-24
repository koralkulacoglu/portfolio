"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { RefObject } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  // SSR-safe: default to desktop, update after mount
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    // On mobile, always show content (no animation)
    if (isMobile) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    if (!isIntersecting) {
      switch (animation) {
        case "fadeUp":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideLeft":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "slideRight":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "scale":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={isMobile ? undefined : (ref as RefObject<HTMLDivElement>)}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
