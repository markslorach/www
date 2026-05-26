// app/components/shared/stack.tsx
import { cn } from "@/lib/utils";

type SpacerSize = "sm" | "md" | "lg" | "xl" | "2xl";

const gapMap: Record<SpacerSize, string> = {
  sm: "gap-6",
  md: "gap-9",
  lg: "gap-14",
  xl: "gap-20",
  "2xl": "gap-24",
};

type StackProps = React.HTMLAttributes<HTMLElement> & {
  gap?: SpacerSize;
  as?: React.ElementType;
};

export default function Stack({
  gap = "lg",
  as: Component = "div",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Component
      className={cn("flex flex-col", gapMap[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
