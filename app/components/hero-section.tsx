import { Avatar, AvatarImage } from "@/components/ui/avatar";
import InlineLink from "./shared/inline-link";

export default function HeroSection() {
  return (
    <header className="text-muted-foreground flex flex-col gap-5 text-[15px] text-pretty">
      <Avatar className="mb-1 size-18 after:border-none md:hidden">
        <AvatarImage src="/images/profile.webp" />
      </Avatar>

      <h1 className="text-foreground text-xl leading-6 font-medium tracking-tight">
        👋 Hey, I'm Mark.
      </h1>

      <p>
        I'm a full-stack developer, self-hosting enthusiast and freelance
        videographer who made the jump into software.
      </p>

      <p>
        I'm currently building <i>fujirecipes.film</i> - a community for
        discovering and sharing Fujifilm camera recipes. I'll be sharing updates{" "}
        <InlineLink href="#" className="hidden">
          here
        </InlineLink>{" "}
        as it comes together.
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
          Github
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
    </header>
  );
}
