"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// import { AnimatePresence, motion } from "motion/react";
import DarkThemeIcon from "../icons/dark-theme-icon";
import LightThemeIcon from "../icons/light-theme-icon";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div className="size-11 shrink-0 md:-mr-3">
      {mounted && (
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="text-primary hover:text-foreground flex size-11 items-center justify-center rounded-sm transition-colors"
          aria-label={label}
        >
          {/* <AnimatePresence mode="wait" initial={false}> */}
          {/*   <motion.span */}
          {/*     key={isDark ? "sun" : "moon"} */}
          {/*     initial={{ rotate: -180, scale: 0.6, filter: "blur(0.7px)" }} */}
          {/*     animate={{ rotate: 0, scale: 1, filter: "blur(0px)" }} */}
          {/*     exit={{ rotate: 180, scale: 0.6, filter: "blur(0.7px)" }} */}
          {/*     transition={{ duration: 0.15, ease: "easeInOut" }} */}
          {/*     className="block" */}
          {/*   > */}
          {/*     {isDark ? <LightThemeIcon /> : <DarkThemeIcon />} */}
          {/*   </motion.span> */}
          {/* </AnimatePresence> */}
          {isDark ? (
            <LightThemeIcon className="h-6 w-5" />
          ) : (
            <DarkThemeIcon className="size-5" />
          )}
        </button>
      )}
    </div>
  );
}
