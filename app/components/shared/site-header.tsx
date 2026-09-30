"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const links = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  // { label: "Notes", href: "/notes" },
  { label: "Uses", href: "/uses" },
  // { label: "Now", href: "/now" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b-border hidden items-center justify-between border-b pb-6 font-mono text-[11px] leading-none uppercase md:flex">
      <Link href="/" className="text-foreground font-medium tracking-[0.16em]">
        Mark Slorach
      </Link>

      <div className="flex items-center gap-7">
        <nav className="text-muted-foreground flex gap-7 tracking-[0.14em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn({
                "group hover:text-foreground relative flex items-center font-medium transition-colors": true,
                "text-foreground": pathname === link.href,
              })}
            >
              <span
                className={cn({
                  "text-marker absolute right-full mr-1 text-xs font-bold opacity-0 transition-opacity group-hover:opacity-100": true,
                  "opacity-100": pathname === link.href,
                })}
                aria-hidden="true"
              >
                /
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
