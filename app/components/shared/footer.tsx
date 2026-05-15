import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-muted-foreground text-[13px] leading-none">
      <p>
        Mark Slorach · 2026 · Built with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          Next.js
        </Link>
      </p>
    </footer>
  );
}
