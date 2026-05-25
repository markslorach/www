import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Link
        href="/"
        className="text-muted-foreground group hover:text-foreground flex items-center text-sm transition-colors duration-200 ease-in-out"
      >
        <ArrowLeft className="mr-1 size-4 transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5 group-hover:text-blue-400" />
        Back home
      </Link>
      <p className="text-muted-foreground my-10">Page not found.</p>
    </>
  );
}
