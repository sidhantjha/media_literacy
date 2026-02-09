import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { meta, content } = getArticleBySlug(params.slug);

    return (
      <main className="pb-16">
        <article className="mx-auto max-w-3xl">
          {/* Article header */}
          <header className="rounded-2xl border border-[var(--rule)] bg-[var(--paper2)] p-7">
            <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
              {meta.date}
            </div>

            <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-[var(--paper)]">
              {meta.title}
            </h1>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)] max-w-prose">
              {meta.excerpt}
            </p>
          </header>

          {/* Article body */}
          <div
            className="
              prose
              mt-12
              max-w-none
              prose-headings:font-serif
              prose-headings:text-[var(--paper)]
              prose-p:text-[var(--paper)]
              prose-p:leading-7
              prose-a:text-[var(--paper)]
              prose-a:underline
              prose-blockquote:border-[var(--rule)]
              prose-blockquote:text-[var(--muted)]
              prose-strong:text-[var(--paper)]
              prose-li:text-[var(--paper)]
            "
          >
            <MDXRemote
              source={content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
