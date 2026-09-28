import LightboxImage from "@/app/components/shared/lightbox-image";
import SplitSection from "@/app/components/shared/layout/split-section";
import AccentLink from "@/app/components/shared/accent-link";
import SectionMarker from "@/app/components/shared/section-marker";
import UsesSections from "./uses-sections";

export default function UsesPage() {
  return (
    <div>
      <SplitSection className="items-start">
        <div className="flex w-full shrink-0 items-center justify-between md:w-50 md:flex-col md:items-start md:gap-2.5 md:pt-2">
          <SectionMarker>Uses</SectionMarker>
          <p className="text-muted-foreground font-mono text-[11px] leading-4 tracking-[0.04em]">
            Updated Sep 2026
          </p>
        </div>

        <div className="w-full flex-1">
          <header className="flex flex-col gap-5.5">
            <h1 className="font-heading text-foreground text-[26px] leading-10 font-medium tracking-[-0.02em]">
              What I use.
            </h1>

            <p className="text-body max-w-160 text-[17px] leading-8 text-balance md:text-lg">
              A selection of the hardware, software and everyday desk setup I
              use.
              <br />
              Inspired by{" "}
              <AccentLink href="https://uses.tech" target="_blank">
                uses.tech
              </AccentLink>{" "}
              by{" "}
              <AccentLink href="https://wesbos.com/uses" target="_blank">
                Wes Bos
              </AccentLink>
              .
            </p>
          </header>

          <figure className="mt-9">
            <LightboxImage
              src="/images/desk-setup-new.webp"
              alt="My desk setup"
              width={3722}
              height={2115}
              preload
              sizes="(max-width: 768px) calc(100vw - 40px), 640px"
              className="h-auto w-full rounded-sm"
            />
          </figure>
        </div>
      </SplitSection>

      <UsesSections />
    </div>
  );
}
