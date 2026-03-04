"use client";

import { useInView } from "@/hooks/useInView";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface AnimateInProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}

const animationStyles: Record<Animation, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-6",
    to: "opacity-100 translate-y-0",
  },
  "fade-in": {
    from: "opacity-0",
    to: "opacity-100",
  },
  "fade-left": {
    from: "opacity-0 -translate-x-6",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 translate-x-6",
    to: "opacity-100 translate-x-0",
  },
};

export default function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimateInProps) {
  const { ref, isInView } = useInView();
  const { from, to } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${isInView ? to : from} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
