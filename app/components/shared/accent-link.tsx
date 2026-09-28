import Link from "next/link";
import { cn } from "@/lib/utils";

type AccentLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export default function AccentLink({
  href,
  className,
  children,
  ...props
}: AccentLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-primary decoration-primary underline decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
