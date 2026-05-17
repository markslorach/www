import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-muted-foreground/70 text-[13px] leading-none">
      <p>
        Mark Slorach · 2026 · Inspired by{" "}
        <Link
          href="https://deadsimplesites.com"
          target="_blank"
          className="hover:text-muted-foreground"
        >
          Dead Simple Sites
        </Link>
      </p>
    </footer>
  );
}
