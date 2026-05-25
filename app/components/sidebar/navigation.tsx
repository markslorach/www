"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const primaryLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
];

export const metaLinks = [
  { label: "uses", href: "/uses" },
  { label: "now", href: "/now" },
];

const linkGroups = [primaryLinks, metaLinks];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-5 md:py-12">
      {linkGroups.map((group, i) => (
        <div key={i} className="flex flex-col gap-2 md:gap-1">
          {group.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "group text-muted-foreground hover:text-foreground flex text-xl items-center gap-1 md:text-sm transition-colors duration-200 ease-in-out",
                link.href === pathname && "text-foreground",
              )}
            >
              <span
                className={cn(
                  "w-2.5 text-base font-medium text-[#0892d0] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100",
                  link.href === pathname && "opacity-100",
                )}
              >
                /
              </span>
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
