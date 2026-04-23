"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-links";

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky h-screen top-0 min-w-50 border-r min-h-screen py-16 pr-8">
      <header className="space-y-2 mb-12 tracking-[0.013rem]">
        <h1 className="text-[15px] font-medium">Mark Slorach</h1>
        <div className="text-[13.5px] text-muted-foreground font-light space-y-[1.8px]">
          <p>Software Developer</p>
          <p>Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿</p>
        </div>
      </header>

      <nav className="flex flex-col gap-1.5 text-[12.5px] font-light font-mono text-muted-foreground">
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link href={link.href} key={link.label} className="group flex items-center gap-1.5">
            <span className={cn({
              "text-xs text-blue-300 font-bold transition-opacity duration-200 ease-in-out": true,
              "opacity-100": isActive,
              "opacity-0 group-hover:opacity-100": !isActive,
            })}>/</span>
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  );
}
