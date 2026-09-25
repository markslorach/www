import InlineLink from "./shared/inline-link";
import SplitSection from "./shared/layout/split-section";
import SectionMarker from "./shared/section-marker";
import Polaroid from "./polaroid";

export default function HeroSection() {
  return (
    <SplitSection>
      <div className="flex flex-col gap-7.5 md:max-h-73.5 md:w-50 md:justify-between md:pt-3.5">
        <SectionMarker>Home</SectionMarker>

        <Polaroid />
      </div>

      <div className="flex w-full flex-1 flex-col gap-5.5">
        <h1 className="font-heading text-foreground text-2xl leading-10 font-medium tracking-[-0.02em]">
          Hey, I'm Mark.
        </h1>

        <div className="text-body flex flex-col gap-5 text-lg leading-8 text-pretty md:text-balance">
          <p>
            I'm a full-stack developer, self-hosting enthusiast and freelance
            videographer who made the jump into software.
          </p>

          <p>
            When I'm not coding, I'm usually out exploring. Otherwise, you'll
            probably find me in a beer garden or falling down a rabbit hole of
            Docker containers in my homelab.
          </p>

          <p>
            Find me on{" "}
            <InlineLink
              href="https://github.com/markslorach"
              target="_blank"
              aria-label="GitHub"
            >
              GitHub
            </InlineLink>{" "}
            and{" "}
            <InlineLink
              href="https://www.linkedin.com/in/markslorach"
              target="_blank"
              aria-label="LinkedIn"
            >
              LinkedIn
            </InlineLink>
            .
          </p>
        </div>
      </div>
    </SplitSection>
  );
}
