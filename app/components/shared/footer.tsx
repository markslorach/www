import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-muted-foreground/70 flex items-center justify-between text-[13px] leading-none">
      <p>
        Mark Slorach · 2026{" "}
        <span className="hidden md:inline">
          · Inspired by{" "}
          <Link
            href="https://deadsimplesites.com"
            target="_blank"
            className="hover:text-muted-foreground"
          >
            Dead Simple Sites
          </Link>
        </span>
      </p>

      <Link
        href="https://github.com/markslorach/www.git"
        target="blank"
        className="hover:text-muted-foreground transition-colors duration-200 ease-in-out"
      >
        <FaGithub className="size-4.5" />
      </Link>
    </footer>
  );
}
