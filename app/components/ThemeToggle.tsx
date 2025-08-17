"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="rounded-md border px-3 py-1.5 text-sm text-foreground transition-colors"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--card-bg)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--card-bg)';
      }}
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
