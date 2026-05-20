import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Link
        href="/"
        className="text-muted-foreground flex items-center text-sm"
      >
        <ArrowLeft className="mr-1 size-4" />
        Return home
      </Link>
      <p className="text-muted-foreground my-10">Page not found.</p>
    </>
  );
}
