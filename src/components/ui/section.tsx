"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  index: number;
  label: string;
  children: ReactNode;
}

export default function Section({ index, label, children }: SectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".reveal", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className=" pt-8 pb-20 md:pt-10 md:pb-28"
    >
      <div className="reveal mb-10 flex items-baseline gap-3 md:mb-14">
        <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          / {label}
        </span>
      </div>
      {children}
    </section>
  );
}
