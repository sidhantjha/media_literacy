  import Image from "next/image";
  import Link from "next/link";
  import { getAllArticles } from "@/lib/articles";

  export default function Home() {
    const articles = getAllArticles();

    return (
      <main className="pb-28 w-full">
        {/* =====================
          HERO / FRONT PAGE (FULL WIDTH)
          ===================== */}
        <section className="w-full px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 w-full min-h-[calc(100vh-240px)] items-stretch">
            {/* LEFT */}
            <div className="col-span-12 md:col-span-3 h-full">
              <div className="h-full rounded-2xl border border-[var(--rule)] bg-black/30 p-6 flex flex-col">
                <div className="text-xs tracking-[0.35em] text-[var(--muted)]">
                  MEDIA LITERACY
                </div>

                <h1 className="mt-4 font-serif text-4xl leading-tight">
                  Artistry, criticism, and the discipline of noticing what others miss.
                </h1>

                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  A newspaper-meets-personal-blog: short essays every two weeks on how
                  narratives form, how incentives bend truth, and how to build a calm,
                  evidence-first mind.
                </p>

                <div className="mt-auto pt-6">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/images/hero/sis1.jpg"
                      alt="Editorial aesthetic"
                      width={600}
                      height={400}
                      className="h-[500px] w-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/articles"
                    className="rounded-full border border-[var(--rule)] bg-[var(--paper)] px-5 py-2 text-sm text-black"
                  >
                    Read articles
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-[var(--rule)] px-5 py-2 text-sm"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="col-span-12 md:col-span-6 h-full">
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-hidden rounded-2xl border border-[var(--rule)] shadow-2xl">
                  <Image
                    src="/images/hero/SIS22.jpg"
                    alt="Featured visual"
                    width={1600}
                    height={900}
                    className="h-[700px] w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-6 max-w-[90%]">
                  <h2 className="font-serif text-4xl leading-tight">
                    "Journalism is printing what someone else does not want printed. Everything else is public relations."
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Media literacy is the quiet practice of noticing structure, incentives,
                    repetition, and omission — before reacting to headlines.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 md:col-span-3">
              <div className="grid grid-rows-2 gap-6 h-[900px]">
                <div className="overflow-hidden rounded-2xl border border-[var(--rule)]">
                  <Image
                    src="/images/hero/sis3.jpg"
                    alt="Secondary visual"
                    width={800}
                    height={600}
                    className="h-[400px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-[var(--rule)]">
                  <Image
                    src="/images/hero/sis44.jpg"
                    alt="Secondary visual"
                    width={800}
                    height={800}
                    className="h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================
          FEATURED ESSAYS (FULL WIDTH)
          ===================== */}
        <section className="w-full mt-28 px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 w-full min-h-[720px] items-stretch">
            {/* LEFT: Editorial Text */}
            <div className="col-span-12 md:col-span-4 h-full">
              <div className="h-full rounded-2xl border border-[var(--rule)] bg-black/30 p-10 flex flex-col">
                <div className="text-xs tracking-[0.35em] text-[var(--muted)]">
                  FEATURED
                </div>

                <h2 className="mt-4 font-serif text-3xl leading-tight">
                  Essays which do not leave the quiet part unsaid.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Noticing patterns, bias, the origin of concepts and their validity - a brain exercise and the writing on the wall before the wall ever does collapse. The silence you need when the noise of irrationality gets too loud. 
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/articles"
                    className="inline-block rounded-full border border-[var(--rule)] px-6 py-2.5 text-sm"
                  >
                    View all essays
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Article Stack */}
            <div className="col-span-12 md:col-span-8 h-full">
              <div className="grid grid-rows-3 gap-6 h-full">
                {articles.slice(0, 3).map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="h-full rounded-2xl border border-[var(--rule)] bg-black/25 p-8 hover:bg-black/35 transition flex flex-col"
                  >
                    <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
                      {a.date}
                    </div>

                    <div className="mt-2 font-serif text-2xl">{a.title}</div>

                    <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                      {a.excerpt}
                    </p>

                    <div className="mt-auto pt-4 text-sm text-[var(--muted)]">
                      Read →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================
          LATEST (FULL WIDTH)
          ===================== */}
        <section className="w-full mt-24 px-6 md:px-10">
          <div className="flex items-end justify-between w-full">
            <h2 className="font-serif text-3xl">Latest</h2>
            <Link href="/articles" className="text-sm text-[var(--muted)]">
              Browse all →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {articles.slice(0, 4).map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="rounded-2xl border border-[var(--rule)] bg-black/25 p-6 hover:bg-black/35 transition"
              >
                <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
                  {a.date}
                </div>
                <div className="mt-2 font-serif text-2xl">{a.title}</div>
                <p className="mt-2 text-sm text-[var(--muted)]">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================
          WHAT IS MEDIA LITERACY (FULL WIDTH, but readable)
          ===================== */}
        <section className="w-full mt-28 px-6 md:px-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-serif text-3xl">What is media literacy?</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Media literacy is the long-form skill of reading the world with attention.
              It involves understanding how stories are constructed, why certain frames
              dominate discourse, and how incentives quietly shape what is amplified or
              ignored. It is less about checking individual facts and more about noticing
              patterns — what repeats, who benefits, and what remains unsaid. This page hopes
               to help you start recognizing the patterns that create a literate consumer of media,
                prevent propaganda, expose the true nature of the world we live in and how
                 it may be reformed.
            </p>
          </div>
        </section>
      </main>
    );
  }
