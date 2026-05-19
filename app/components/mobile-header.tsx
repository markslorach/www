"use client";
import { useEffect, useState } from "react";
import { useScrollLock, useWindowSize } from "usehooks-ts";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Navigation from "./sidebar/navigation";
import MusicWidget from "./sidebar/music-widget";
import Link from "next/link";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  const { width } = useWindowSize();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (width >= 768) setIsOpen(false);
  }, [width]);

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
      <header className="z-20 flex justify-between pt-6 pb-10 md:hidden">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="font-medium">@markslorach</h1>
        </Link>

        <button onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? <Menu className="size-5.5" /> : <X className="size-5.5" />}
        </button>
      </header>

      {isOpen && <MobileMenu />}
    </>
  );
}

function MobileMenu() {
  return (
    <div className="bg-card fixed inset-0 z-10 flex flex-col px-6 pt-24 pb-6">
      <div className="flex-1">
        <Navigation />
      </div>
      <MusicWidget />
    </div>
  );
}
