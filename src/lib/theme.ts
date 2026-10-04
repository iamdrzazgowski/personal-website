// client-localstorage-schema + js-cache-storage:
// versioned key, minimal payload (theme string only), and try/catch
// because localStorage throws in private browsing / quota / disabled.

export type Theme = "light" | "dark";

const THEME_KEY = "theme:v1";
const LEGACY_THEME_KEY = "theme";

export function getStoredTheme(): Theme | null {
  try {
    const stored =
      window.localStorage.getItem(THEME_KEY) ??
      window.localStorage.getItem(LEGACY_THEME_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
}

export function setStoredTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore: private browsing, quota exceeded, or disabled storage.
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
