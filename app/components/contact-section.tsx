"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCopyToClipboard } from "usehooks-ts";
import { Copy } from "lucide-react";
import SplitSection from "./shared/layout/split-section";
import SectionMarker from "./shared/section-marker";

const EMAIL = "hello@markslorach.com";

export default function ContactSection() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [, copy] = useCopyToClipboard();

  const handleCopy = async (text: string) => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch {
      console.error("Failed to copy!");
    }
  };

  useEffect(() => {
    if (!isCopied) return;
    const timeout = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <SplitSection className="gap-7.5 md:gap-10">
      <div className="md:-mt-1 md:min-w-50">
        <SectionMarker>Contact</SectionMarker>
      </div>

      <div className="border-border w-full md:border-t md:pt-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="font-heading text-foreground text-[21px] leading-7 font-[450] tracking-[-0.01em] md:text-[22px]">
            {EMAIL}
          </p>

          <div className="relative size-fit select-none">
            <AnimatePresence>
              {isCopied && (
                <motion.span
                  role="status"
                  initial={{ opacity: 0, y: 4, rotate: 1 }}
                  animate={{ opacity: 1, y: 0, rotate: 4 }}
                  exit={{ opacity: 0, y: 4, rotate: 1 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="bg-primary-muted border-primary-border text-primary absolute -top-8 -right-5 z-10 rounded-sm border px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] whitespace-nowrap uppercase shadow-xs"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => handleCopy(EMAIL)}
              aria-label="Copy email address"
              className="text-primary focus-visible:outline-primary group flex h-11 items-center rounded-[3px] font-mono text-[11px] leading-4 font-medium tracking-[0.1em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span className="border-primary-border group-hover:bg-primary-muted flex h-7 min-w-18 items-center justify-center gap-1.5 rounded-[3px] border px-2 transition-colors duration-200 ease-in-out">
                <Copy aria-hidden="true" className="size-3" />
                Copy
              </span>
            </button>
          </div>
        </div>
      </div>
    </SplitSection>
  );
}
