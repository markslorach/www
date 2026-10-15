import BrokenHeartIcon from "@/app/components/icons/broken-heart-icon";

export default function MusicWidgetErrorState() {
  return (
    <div className="bg-card flex flex-col gap-3 overflow-clip rounded-sm border p-2 shadow-xs">
      <div className="flex h-3.5 items-center">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>
      </div>
      <div className="flex min-h-18 items-center gap-3">
        <div className="bg-artwork-placeholder/70 flex size-17.5 shrink-0 items-center justify-center rounded-sm shadow-xs">
          <BrokenHeartIcon className="text-primary/60 size-5" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
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
