import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function MobileFooter() {
  return (
    <footer className="text-muted-foreground border-t-muted-border flex h-17 items-center justify-between border-t font-mono text-[11px] md:hidden">
      <p>Mark Slorach - 2026</p>

      <Link
        href="https://github.com/markslorach/www.git"
        target="blank"
        className="inline-flex items-center gap-1 border-b border-dotted border-current pb-0.5"
      >
        <span>Source</span>
        <ArrowUpRightIcon className="size-2.5" aria-hidden="true" />
      </Link>
    </footer>
  );
}
