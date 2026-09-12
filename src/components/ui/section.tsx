import type { ReactNode } from "react";

interface SectionProps {
  index: number;
  label: string;
  children: ReactNode;
}

export default function Section({ index, label, children }: SectionProps) {
  return (
    <section className="border-t border-border pt-8 pb-20 md:pt-10 md:pb-28">
      <div className="flex items-baseline gap-3 mb-10 md:mb-14">
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
