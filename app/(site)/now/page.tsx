import Link from "next/link";

export default function UsesPage() {
  return (
    <section className="text-muted-foreground mb-14 space-y-4 text-[15px] text-pretty">
      <h1 className="text-foreground text-xl leading-6 font-medium tracking-tight">
        /now
      </h1>

      <p className="text-pretty">
        Following the tend of the{" "}
        <Link
          href="https://nownownow.com/about"
          target="_blank"
          className="text-foreground underline decoration-[#0892d0] decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid"
        >
          now
        </Link>{" "}
        page. This is what I am currently focused on.
      </p>
    </section>
  );
}
