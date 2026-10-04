"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  setStoredTheme,
  type Theme,
} from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(
      stored ??
        (document.documentElement.classList.contains("dark")
          ? "dark"
          : "light"),
    );
  }, []);

  const toggle = () => {
    // rerender-move-effect-to-event: DOM + storage writes happen in the
    // event handler instead of a useEffect subscribed to `theme`.
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    setStoredTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="inline-block min-w-13 text-left transition-colors duration-200 hover:text-foreground cursor-pointer"
    >
      [{theme === "dark" ? " Light " : " Dark "}]
    </button>
  );
}
