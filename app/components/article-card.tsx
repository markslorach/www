import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Writing } from "@/.content-collections/generated";

export default function ArticleCard({ article }: { article: Writing }) {
  return (
    <Link
      href={`/thoughts/${article._meta.path}`}
      className="flex w-full items-center justify-between gap-4"
    >
      <div className="min-w-0">
        <h3 className="truncate">{article.title}</h3>
      </div>

      <time
        dateTime={article.date}
        className="text-muted-foreground/70 shrink-0 text-sm"
      >
        {format(parseISO(article.date), "d MMM yyyy")}
      </time>
    </Link>
  );
}
