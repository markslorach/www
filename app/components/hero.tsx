import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-muted-foreground mb-20 space-y-4 text-[15px]">
      <h1 className="text-foreground text-lg font-medium">👋 Hey, I'm Mark.</h1>

      <p>
        I'm a full-stack developer, self-hosting enthusiast and former
        videographer & drone operator who made the jump into software.
      </p>

      <p>
        I'm currently building <i>fujirecipes.film</i>, a community for
        discovering and sharing Fujifilm camera recipes. I'll be sharing updates{" "}
        <Link
          href="#"
          className="text-foreground underline decoration-blue-400 decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid"
        >
          here
        </Link>{" "}
        as it comes together.
      </p>

      <p>
        When I'm not coding, I'm usually out exploring. Otherwise, you'll
        probably find me in a beer garden or falling down a rabbit hole of
        Docker containers in my homelab.
      </p>

      <p>
        Find me on{" "}
        <Link
          href="https://github.com/markslorach"
          target="_blank"
          aria-label="GitHub"
          className="text-foreground"
        >
          <FaGithub
            aria-hidden="true"
            className="mr-1 inline size-3.5 align-middle"
          />
          <span className="underline decoration-blue-400 decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid">
            GitHub
          </span>
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.linkedin.com/in/markslorach"
          target="_blank"
          aria-label="LinkedIn"
          className="text-foreground"
        >
          <FaLinkedin
            aria-hidden="true"
            className="mr-1 inline size-3.5 align-middle"
          />
          <span className="underline decoration-blue-400 decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid">
            LinkedIn
          </span>
        </Link>
        .
      </p>
    </section>
  );
}
