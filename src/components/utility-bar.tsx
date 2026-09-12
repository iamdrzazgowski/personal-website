"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

interface Clock {
  time: string;
  year: number;
}

export default function UtilityBar() {
  const [clock, setClock] = useState<Clock | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock({
        time: new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Warsaw",
        }).format(now),
        year: now.getFullYear(),
      });
    };

    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      <span>Portfolio / {clock?.year ?? "—"}</span>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-foreground"
            aria-hidden
          />
          Lublin, PL{clock ? ` — ${clock.time}` : ""}
        </span>
        <span className="h-3 w-px bg-(--subtle-border)" aria-hidden />
        <ThemeToggle />
      </div>
    </header>
  );
}
