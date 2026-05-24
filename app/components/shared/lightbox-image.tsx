"use client";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { useScrollLock } from "usehooks-ts";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LightboxImage({
  src,
  alt,
  className,
  ...props
}: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "html",
  });

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      unlock();
    }

    return () => unlock();
  }, [isOpen, lock, unlock]);

  return (
    <>
      <div
        className="absolute inset-0 cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} className={className} {...props} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.35, ease: "easeInOut", delay: 0.2 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-background/95 fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="text-muted-foreground hover:text-foreground absolute top-6 right-6 z-50 transition-colors duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              <X className="size-5.5" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
              className="relative h-full max-h-[90vh] w-full max-w-6xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
