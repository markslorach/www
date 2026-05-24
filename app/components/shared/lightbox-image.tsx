"use client";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { useScrollLock } from "usehooks-ts";
import { X } from "lucide-react";

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

      {isOpen && (
        <div
          className="bg-background/95 fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="text-muted-foreground hover:text-foreground absolute top-6 right-6 z-50 transition-colors duration-200 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-5.5" />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-6xl">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
