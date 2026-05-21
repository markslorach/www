"use client";
import { Children, useState } from "react";
import { cn } from "@/lib/utils";

type HoverFadeListProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverFadeList({
  children,
  className,
}: HoverFadeListProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className={cn(
            "transition-opacity duration-200 ease-in-out",
            index !== null && index !== i && "lg:opacity-70",
          )}
          onMouseEnter={() => setIndex(i)}
          onMouseLeave={() => setIndex(null)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
