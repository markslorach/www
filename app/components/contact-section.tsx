"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCopyToClipboard } from "usehooks-ts";
import { Copy } from "lucide-react";

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
    <div className="group relative size-fit" onClick={() => handleCopy(EMAIL)}>
      <AnimatePresence>
        {isCopied && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.13, ease: "easeInOut" }}
            className="bg-muted-foreground/10 text-muted-foreground absolute -top-8 -right-6 rounded-sm px-2 py-0.5 text-xs shadow-xs"
          >
            copied!
          </motion.span>
        )}
      </AnimatePresence>

      <p className="text-muted-foreground group-hover:text-primary cursor-pointer text-[15px] leading-none transition-colors duration-200 ease-in-out">
        <Copy className="text-primary mr-2 inline size-3.5" />
        {EMAIL}
      </p>
    </div>
  );
}
