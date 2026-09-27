import { Skeleton } from "@/components/ui/skeleton";
import { Headphones } from "lucide-react";

export default function MusicWidgetLoadingSkeleton() {
  return (
    <div className="bg-card flex flex-col gap-3 rounded-md border p-3 shadow-xs">
      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>

        <Headphones className="text-primary/60 size-3.5" strokeWidth={2} />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-16" />

        <div className="flex min-w-0 flex-col gap-1.5">
          <Skeleton className="h-4 w-20 rounded-sm" />
          <Skeleton className="h-3.5 w-28 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
