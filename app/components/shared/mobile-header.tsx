"use client";
import { useEffect, useState } from "react";
import { useScrollLock, useWindowSize } from "usehooks-ts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MusicWidget from "../sidebar/last-played-widget/music-widget";
import ThemeToggle from "./theme-toggle";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Notes", href: "/notes" },
  { label: "Uses", href: "/uses" },
  { label: "Now", href: "/now" },
];

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
      <header className="border-b-muted-border relative z-20 flex h-17 items-center justify-between border-b md:hidden">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-foreground font-mono text-[11px] font-medium tracking-[0.16em] uppercase"
        >
          Mark Slorach
        </Link>

        <div className="flex items-center gap-4">
          {!isOpen && <ThemeToggle />}

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="text-foreground font-mono text-[11px] font-medium tracking-[0.16em] uppercase"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {isOpen && <MobileMenu pathname={pathname} />}
    </>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div
      id="mobile-menu"
      className="bg-background fixed inset-0 z-10 flex flex-col px-6 pt-26 pb-6"
    >
      <nav className="flex w-fit flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-b-border-subtle flex items-baseline gap-2.5 py-2.5"
          >
            <span
              aria-hidden="true"
              className="text-primary w-2 shrink-0 font-mono text-sm font-bold tracking-[0.04em]"
            >
              {pathname === link.href ? "/" : ""}
            </span>
            <span
              className={cn({
                "text-body hover:text-foreground font-sans text-[26px]/[34px] font-medium tracking-[-0.01em] transition-colors": true,
                "text-foreground": pathname === link.href,
              })}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
      {/* <MusicWidget /> */}
    </div>
  );
}
