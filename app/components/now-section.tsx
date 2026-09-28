import { allNows } from "content-collections";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import UKTime from "./uk-time";
import GlasgowWeather from "./glasgow-weather";
import MusicWidget from "./sidebar/last-played-widget/music-widget";
import InlineLink from "./shared/inline-link";
import SplitSection from "./shared/layout/split-section";
import SectionMarker from "./shared/section-marker";

export default function NowSection() {
  const now = allNows[0];

  if (!now) return null;

  return (
    <SplitSection className="gap-7.5 md:gap-10">
      <div className="md:min-w-50 md:pt-1.5">
        <SectionMarker>Now</SectionMarker>

        <div className="mt-5 flex flex-col gap-1 md:pl-3.5 font-mono">
          <p className="text-body text-xs leading-4 font-medium">
            Glasgow, Scotland
          </p>
          <div className="text-muted-foreground flex flex-col text-[11px] leading-4 tracking-[0.04em]">
            <UKTime />
            <GlasgowWeather />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-10">
        <div className="flex flex-1 flex-col items-start">
          <p className="text-body text-[17px] leading-8 text-pretty md:text-lg">
            {now.summary}
          </p>

          {/* <InlineLink
            href="/now"
            className="group mt-4 inline-flex items-center gap-1 font-mono text-[10px] leading-3 font-medium tracking-[0.08em] uppercase md:text-[11px] md:tracking-widest"
          >
            More now
            <ArrowRightIcon
              className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </InlineLink> */}
        </div>

        <div className="w-full shrink-0 rotate-[0.5deg] md:w-60 md:pt-1">
          <MusicWidget />
        </div>
      </div>
    </SplitSection>
  );
}
