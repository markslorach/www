"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// import { AnimatePresence, motion } from "motion/react";
import MoonIcon from "../icons/moon-icon";
import SunIcon from "../icons/sun-icon";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative h-2.75 w-5">
      {mounted && (
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="text-muted-foreground hover:text-primary absolute top-1/2 left-0 size-5 -translate-y-1/2 transition-colors"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
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
          {/*     {isDark ? <SunIcon /> : <MoonIcon />} */}
          {/*   </motion.span> */}
          {/* </AnimatePresence> */}
          <span className="block">{isDark ? <SunIcon /> : <MoonIcon />}</span>
        </button>
      )}
    </div>
  );
}
