"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IoMoon className="size-4.5" />
      ) : (
        <IoSunny className="size-4.5" />
      )}
    </button>
  );
}
