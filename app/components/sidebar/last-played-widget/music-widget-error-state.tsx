import { Headphones, HeartCrack } from "lucide-react";

export default function MusicWidgetErrorState() {
  return (
    <div className="bg-card relative flex flex-col gap-3 rounded-md border p-3 shadow-xs">
      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>

        <Headphones className="text-primary/60 size-3.5" strokeWidth={2} />
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-artwork-placeholder/70 flex size-16 shrink-0 items-center justify-center rounded-md shadow-xs">
          <HeartCrack className="text-primary/60 size-5" />
        </div>

        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="font-heading truncate text-[19px] leading-6 font-[450] tracking-[-0.01em]">
            Error
          </p>

          <p className="text-body truncate text-[15px] leading-5">
            Blame Last.fm <span className="text-foreground">👊</span>
          </p>
        </div>
      </div>
    </div>
  );
}
