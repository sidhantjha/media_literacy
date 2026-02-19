import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="pb-16 px-4">
      <div className="flex items-end justify-between gap-6">
        <h1 className="font-serif text-4xl">Articles</h1>
        <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
          {articles.length} POSTS
        </div>
      </div>

      <p className="mt-3 max-w-prose text-sm leading-6 text-[var(--muted)]">
        Essays on topics ranging a grand scale - aimed at looking through a magnifying glass and giving you the truth.
      </p>

      <div className="mt-6 h-px w-full bg-[var(--rule)]" />

      {articles.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[var(--rule)] bg-[var(--paper2)] p-7">
          <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
            NO POSTS YET
          </div>
          <div className="mt-3 font-serif text-2xl text-[var(--paper)]">
            Drafts in progress.
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Check back soon — new writing is published every two weeks.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group rounded-2xl border border-[var(--rule)] bg-[var(--paper2)] p-6 transition hover:brightness-[0.98]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-serif text-2xl leading-tight text-[var(--paper)] group-hover:underline">
                  {a.title}
                </h2>
                <span className="text-xs tracking-[0.25em] text-[var(--muted)]">
                  {a.date}
                </span>
              </div>

              <p className="mt-3 max-w-prose text-sm leading-6 text-[var(--muted)]">
                {a.excerpt}
              </p>

              {a.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--rule)] bg-[var(--paper)] px-3 py-1 text-[10px] tracking-[0.25em] text-[var(--ink)]"
                    >
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
