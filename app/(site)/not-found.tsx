import Link from "next/link";
import NullIslandArtwork from "@/app/components/null-island-artwork";
import InlineLink from "@/app/components/shared/inline-link";
import SplitSection from "@/app/components/shared/layout/split-section";
import SectionMarker from "@/app/components/shared/section-marker";

export default function NotFound() {
  return (
    <SplitSection className="items-center gap-0 md:mx-auto md:max-w-3xl md:gap-10 md:pt-8">
      <div className="contents md:flex md:w-full md:max-w-md md:flex-1 md:flex-col md:gap-5">
        <div className="w-full">
          <SectionMarker>404</SectionMarker>
        </div>

        <div className="order-2 mt-12 flex w-full flex-col gap-5 md:order-0 md:mt-0">
          <h1 className="font-heading text-foreground text-[28px] leading-10 font-medium tracking-[-0.02em] md:text-[32px] md:leading-11">
            You've wandered off.
          </h1>

          <div className="text-body flex flex-col gap-4 text-lg leading-8">
            <p>There's no page out here.</p>

            <InlineLink href="/" className="w-fit">
              Head back home
            </InlineLink>
          </div>
        </div>
      </div>

      <figure className="bg-polaroid relative order-1 mt-10 flex w-fit translate-x-5 scale-[1.15] rotate-[-1.5deg] flex-col self-start rounded-xs px-2 pt-2 shadow-[0_1px_3px_rgb(28_27_24/7%)] md:order-0 md:mt-0 md:translate-x-0 md:self-auto">
        <div className="size-44 overflow-clip">
          <NullIslandArtwork />
        </div>

        <figcaption className="text-polaroid-foreground flex flex-col gap-0.5 pt-2.25 pb-2.75 font-mono text-[9px] leading-3 tracking-widest">
          <Link
            href="https://www.google.com/maps/search/?api=1&query=0%2C0"
            target="_blank"
            rel="noreferrer"
            aria-label="View Null Island on Google Maps (opens in a new tab)"
            className="w-fit font-medium decoration-dotted underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none"
          >
            0.000°N 0.000°E
          </Link>
          <span>NULL ISLAND</span>
        </figcaption>
      </figure>
    </SplitSection>
  );
}
