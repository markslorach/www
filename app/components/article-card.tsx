import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Writing } from "@/.content-collections/generated";

export default function ArticleCard({ article }: { article: Writing }) {
  return (
    <Link
      href={`/thoughts/${article._meta.path}`}
      className="group relative block"
    >
      <div className="dark:bg-muted-foreground/4 bg-muted-foreground/6 absolute -inset-1 hidden rounded-md opacity-0 transition-all duration-200 group-hover:-inset-x-4 group-hover:-inset-y-2 group-hover:opacity-100 lg:block" />

      <div className="flex w-full items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate">{article.title}</h3>
        </div>

        <time
          dateTime={article.date}
          className="text-muted-foreground/70 shrink-0 text-sm"
        >
          {format(parseISO(article.date), "d MMM yyyy")}
        </time>
      </div>
    </Link>
  );
}
