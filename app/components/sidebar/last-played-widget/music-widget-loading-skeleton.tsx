import { Skeleton } from "@/components/ui/skeleton";
import { Headphones } from "lucide-react";

export default function MusicWidgetLoadingSkeleton() {
  return (
    <div className="relative flex flex-col gap-3 overflow-clip rounded-sm border p-2 shadow-xs">
      <div className="from-primary/15 to-primary-muted/80 absolute inset-0 -z-10 bg-linear-to-br" />

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>

        <Headphones className="text-primary/60 size-3.5" strokeWidth={2} />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-16 rounded-sm shadow-xs" />

        <div className="flex min-w-0 flex-col gap-0.5">
          <div className="flex h-6 items-center">
            <Skeleton className="h-4 w-28 rounded-sm" />
          </div>
          <div className="flex h-5 items-center">
            <Skeleton className="h-3.5 w-16 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
