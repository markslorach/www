import { Headphones, HeartCrack } from "lucide-react";

export default function MusicWidgetErrorState() {
  return (
    <div className="bg-muted-foreground/20 relative flex flex-col gap-2 rounded-md border p-2 shadow-xs">
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
        <div className="bg-muted-foreground/10 flex size-14 items-center justify-center rounded-md shadow-xs">
          <HeartCrack className="text-muted-foreground/50 size-5" />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <p className="truncate leading-none font-medium">Error</p>

          <p className="text-muted-foreground dark:text-muted-foreground/70 truncate text-sm leading-none">
            Blame Last.fm <span className="text-foreground">👊</span>
          </p>
        </div>
      </div>
    </div>
  );
}
