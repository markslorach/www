"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
  { label: "now", href: "/now" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 py-12">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            "group text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200 ease-in-out",
            link.href === pathname && "text-foreground",
          )}
        >
          <span
            className={cn(
              "w-2.5 text-blue-400 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100",
              { "opacity-100": link.href === pathname },
            )}
          >
            /
          </span>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
