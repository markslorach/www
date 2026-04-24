"use client"
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-links";

export default function PageHeader() {
  const pathname = usePathname();
  const page = navLinks.find((link) => link.href === pathname);

  if (!page) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center gap-1.5 text-[12.5px] font-light font-mono tracking-tight text-muted-foreground mb-1">
        <span className="text-xs text-blue-300 font-bold">/</span>
        {page.label}
      </div>
    </div>
  );
}
