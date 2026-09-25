import { cn } from "@/lib/utils";

type SplitSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SplitSection({
  children,
  className,
}: SplitSectionProps) {
  return (
    <section
      className={cn("flex w-full flex-col gap-10 md:flex-row", className)}
    >
      {children}
    </section>
  );
}
