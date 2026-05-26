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
        "not-prose text-muted-foreground/70 dark:text-muted-foreground/60 [&>span]:text-foreground mb-9 text-sm leading-none font-medium uppercase [&>span]:mr-2",
        className,
      )}
    >
      {children}
    </h2>
  );
}
