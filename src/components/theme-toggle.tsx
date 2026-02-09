"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border border-[var(--rule)] px-3 py-1 text-xs text-[var(--muted)] hover:text-[var(--paper)]"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
