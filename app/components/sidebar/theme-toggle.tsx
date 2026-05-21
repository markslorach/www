"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbSunHighFilled, TbMoonFilled } from "react-icons/tb";

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
        <TbMoonFilled className="size-5 md:size-4.5" />
      ) : (
        <TbSunHighFilled className="size-5 md:size-4.5" />
      )}
    </button>
  );
}
