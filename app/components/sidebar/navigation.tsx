import Link from "next/link";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
  { label: "now", href: "/now" },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-1 py-6">
      {navLinks.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
