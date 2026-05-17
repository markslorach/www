import { allWritings } from "content-collections";

export default function Thoughts() {
  const posts = allWritings
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (posts.length === 0) return null;

  return (
    <section className="mb-20">
      <h2 className="text-muted-foreground/50 mb-10 text-sm leading-none font-medium uppercase">
        Thoughts
      </h2>
    </section>
  );
}
