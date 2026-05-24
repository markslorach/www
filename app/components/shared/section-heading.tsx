import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "not-prose text-muted-foreground/50 [&>span]:text-foreground mb-10 text-sm leading-none font-medium uppercase [&>span]:mr-2",
        className,
      )}
    >
      {children}
    </h2>
  );
}
