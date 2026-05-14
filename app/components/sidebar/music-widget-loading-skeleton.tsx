import { Skeleton } from "@/components/ui/skeleton";
import { Headphones } from "lucide-react";

export default function MusicWidgetLoadingSkeleton() {
  return (
    <div className="bg-muted-foreground/20 flex flex-col gap-2 rounded-md border p-2 shadow-xs">
      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground dark:text-muted-foreground/70 text-xs leading-none tracking-wider uppercase">
          Last Played
        </h3>

        <Headphones
          className="text-muted-foreground/50 size-3.5"
          strokeWidth={2.3}
        />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="size-14" />
        
        <div className="flex min-w-0 flex-col gap-1">
          <Skeleton className="h-3.5 w-20" />
          <Skeleton className="h-3 w-30" />
        </div>
      </div>
    </div>
  );
}
