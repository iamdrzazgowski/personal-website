"use client";

import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface SectionProps {
  index: number;
  label: string;
  children: ReactNode;
}

export default function Section({ index, label, children }: SectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // async-cheap-condition-before-await: check the cheap sync guard
      // before loading gsap over the network.
      if (prefersReducedMotion()) return;

      // bundle-dynamic-imports + bundle-conditional: gsap + ScrollTrigger
      // (~100KB) load on demand for scroll reveals instead of bloating the
      // initial bundle. Hero keeps a static import because its animation
      // runs immediately on first paint.
      let cancelled = false;
      let ctx: { revert: () => void } | undefined;

      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
        ([gsapModule, scrollTriggerModule]) => {
          if (cancelled || !rootRef.current) return;
          const gsap = gsapModule.default;
          const { ScrollTrigger } = scrollTriggerModule;
          gsap.registerPlugin(ScrollTrigger);

          ctx = gsap.context(() => {
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
          }, rootRef);
        },
      );

      return () => {
        cancelled = true;
        ctx?.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className=" pt-8 pb-20 md:pt-10 md:pb-28">
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
