import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  const latest = articles.slice(0, 2);
  const editorial = articles[2];

  return (
    <main className="pb-24">
      {/* =====================
         HERO / FRONT PAGE
         ===================== */}
      <section className="grid gap-12 md:grid-cols-12">
        {/* Left: main editorial */}
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-[var(--rule)] bg-[var(--card)] p-7">
            <div className="flex min-h-[380px] flex-col">
              <div>
                <div className="text-xs tracking-[0.35em] text-[var(--muted)]">
                  MEDIA LITERACY
                </div>

                <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[var(--paper)]">
                  Artistry, criticism, and the discipline of noticing what others miss.
                </h1>

                <p className="mt-5 max-w-prose text-sm leading-6 text-[var(--muted)]">
                  A newspaper-meets-personal-blog: short essays every two weeks on how
                  narratives form, how incentives bend truth, and how to build a calm,
                  evidence-first mind.
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/articles"
                    className="rounded-full border border-[var(--rule)] bg-[var(--paper)] px-5 py-2 text-sm text-[var(--ink)]"
                  >
                    Read articles
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-[var(--rule)] px-5 py-2 text-sm text-[var(--paper)]"
                  >
                    About
                  </Link>
                </div>
              </div>

              {/* Bottom slot */}
              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-[var(--rule)] bg-black/10 px-5 py-4">
                  <div className="text-[10px] tracking-[0.35em] text-[var(--muted)]">
                    IN THIS JOURNAL
                  </div>
                  <div className="mt-2 grid gap-2 text-sm text-[var(--paper)] md:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--paper)]/70" />
                      <span>Short essays. Clear claims. Calm tone.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--paper)]/70" />
                      <span>One pattern, one bias, one method.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: clickable collage */}
        <div className="md:col-span-5">
          <div className="relative min-h-[460px]">
            {/* FEATURE */}
            <Link
              href={`/articles/${articles[0]?.slug}`}
              className="absolute right-0 top-0 w-[88%] rotate-[0.8deg]
                         rounded-2xl border border-[var(--rule)] bg-[var(--paper)]
                         p-5 text-[var(--ink)] shadow-2xl
                         transition hover:scale-[1.015]"
            >
              <div className="text-[10px] tracking-[0.25em] opacity-60">
                FEATURE
              </div>
              <div className="mt-2 font-serif text-xl">
                {articles[0]?.title}
              </div>
            </Link>

            {/* ANNOTATION */}
            <Link
              href={`/articles/${articles[1]?.slug}`}
              className="absolute left-0 top-28 w-[90%] -rotate-[1.2deg]
                         rounded-2xl border border-[var(--rule)] bg-[var(--card)]
                         p-5 shadow-2xl
                         transition hover:scale-[1.015]"
            >
              <div className="text-[10px] tracking-[0.25em] text-[var(--muted)]">
                ANNOTATION
              </div>
              <div className="mt-2 font-serif text-2xl leading-tight text-[var(--paper)]">
                {articles[1]?.title}
              </div>
            </Link>

            {/* COLUMN */}
            <Link
              href={`/articles/${articles[2]?.slug}`}
              className="absolute right-2 bottom-28 w-[82%] rotate-[1deg]
                         rounded-2xl border border-[var(--rule)] bg-[var(--paper)]
                         p-5 text-[var(--ink)] shadow-2xl
                         transition hover:scale-[1.015]"
            >
              <div className="text-[10px] tracking-[0.25em] opacity-60">
                COLUMN
              </div>
              <div className="mt-2 text-sm">
                {articles[2]?.title}
              </div>
            </Link>

            {/* ESSAY */}
            <Link
              href={`/articles/${articles[3]?.slug}`}
              className="absolute left-6 bottom-0 w-[86%] -rotate-[0.6deg]
                         rounded-2xl border border-[var(--rule)] bg-[var(--card)]
                         p-5 shadow-2xl
                         transition hover:scale-[1.015]"
            >
              <div className="text-[10px] tracking-[0.25em] text-[var(--muted)]">
                ESSAY
              </div>
              <div className="mt-2 font-serif text-lg text-[var(--paper)]">
                {articles[3]?.title}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================
         LATEST
         ===================== */}
      <section className="mt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl">Latest</h2>
          <Link href="/articles" className="text-sm text-[var(--muted)]">
            Browse all →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {latest.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="rounded-2xl border border-[var(--rule)] bg-[var(--card)] p-7 transition hover:bg-black/20"
            >
              <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
                {a.date}
              </div>
              <div className="mt-2 font-serif text-2xl text-[var(--paper)]">
                {a.title}
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================
         EDITORIAL WEEKLY
         ===================== */}
      {editorial && (
        <section className="mt-24 max-w-4xl">
          <div className="rounded-2xl border border-[var(--rule)] bg-[var(--card)] p-8">
            <div className="text-xs tracking-[0.35em] text-[var(--muted)]">
              EDITORIAL · WEEKLY
            </div>
            <h3 className="mt-3 font-serif text-3xl text-[var(--paper)]">
              {editorial.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {editorial.excerpt}
            </p>
            <Link
              href={`/articles/${editorial.slug}`}
              className="mt-4 inline-block text-sm underline"
            >
              Read editorial →
            </Link>
          </div>
        </section>
      )}

      {/* =====================
         WHAT IS MEDIA LITERACY
         ===================== */}
      <section className="mt-28 max-w-3xl">
        <h2 className="font-serif text-3xl">What is media literacy?</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          Media literacy is the long-form skill of reading the world with attention.
          It involves understanding how stories are constructed, why certain frames
          dominate discourse, and how incentives quietly shape what is amplified or
          ignored. In practice, it is less about fact-checking individual claims and
          more about recognizing patterns—what repeats, what benefits, and what
          remains consistently unsaid.
        </p>
      </section>
    </main>
  );
}
