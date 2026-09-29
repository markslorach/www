import { Headphones, HeartCrack } from "lucide-react";

export default function MusicWidgetErrorState() {
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
        <div className="bg-artwork-placeholder/70 flex size-16 shrink-0 items-center justify-center rounded-sm shadow-xs">
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
