import { cn } from "@/lib/utils";

type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-article [&_li:last-child]:mb-0! [&>h2]:mt-14 [&>h2]:mb-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
