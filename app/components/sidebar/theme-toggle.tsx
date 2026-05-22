"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbSunHighFilled, TbMoonFilled } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -180, scale: 0.5, filter: "blur(0.5px)" }}
          animate={{ rotate: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ rotate: 180, scale: 0.5, filter: "blur(0.5px)" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="block"
        >
          {isDark ? (
            <TbMoonFilled className="size-5" />
          ) : (
            <TbSunHighFilled className="size-5" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
