import { cn } from "@/lib/utils";

type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-article prose-li:my-4! [&_li:last-child]:mb-0! [&>*:first-child]:mt-0! [&>*:last-child]:mb-0 [&>h2]:mt-14 [&>h2]:mb-9",
        className,
      )}
    >
      {children}
    </div>
  );
}
