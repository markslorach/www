import Link from "next/link";
import { cn } from "@/lib/utils";

type InlineLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export default function InlineLink({
  href,
  className,
  children,
  ...props
}: InlineLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground underline decoration-[#0892d0] decoration-dotted decoration-1 underline-offset-4 transition-colors duration-150 hover:decoration-solid",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
