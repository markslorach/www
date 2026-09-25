import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col gap-10 md:flex-row",
        className,
      )}
    >
      {children}
    </section>
  );
}
