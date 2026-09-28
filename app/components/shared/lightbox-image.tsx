"use client";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { useScrollLock } from "usehooks-ts";
import { motion, AnimatePresence } from "motion/react";
import CloseIcon from "@/app/components/icons/close-icon";

export default function LightboxImage({
  src,
  alt,
  width,
  height,
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
      <div className="cursor-zoom-in" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          {...props}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.35, ease: "easeInOut", delay: 0.3 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-background/95 fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              aria-label="Close lightbox"
              className="text-primary hover:text-foreground absolute top-6 right-6 z-50 transition-colors duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon className="size-6" />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,

                transition: { duration: 0.25, ease: "easeInOut" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="flex w-full max-w-6xl justify-center"
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="h-auto max-h-[90vh] w-auto max-w-full rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
