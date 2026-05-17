"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "thoughts", href: "/thoughts" },
  // { label: "now", href: "/now" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 py-12">
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
              "w-2.5 text-base font-medium text-blue-400 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100",
              link.href === pathname && "opacity-100",
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
