import { Skeleton } from "@/components/ui/skeleton";

export default function MusicWidgetLoadingSkeleton() {
  return (
    <div
      className="bg-card flex flex-col gap-3 overflow-clip rounded-sm border p-2 shadow-xs"
      role="status"
      aria-label="Loading last played track"
    >
      <div className="flex h-3.5 items-center">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>
      </div>
      <div className="flex min-h-18 items-center gap-3">
        <Skeleton className="size-17.5 shrink-0 rounded-sm shadow-xs motion-reduce:animate-none" />

        <div className="flex min-w-0 flex-1 flex-col gap-1" aria-hidden="true">
          <div className="flex h-6 items-center">
            <Skeleton className="h-4 w-28 rounded-sm motion-reduce:animate-none" />
          </div>
          <div className="flex h-5 items-center">
            <Skeleton className="h-3.5 w-16 rounded-sm motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
