export default function About() {
  return (
    <main className="pb-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--rule)] bg-black/20 p-8">
        <div className="text-xs tracking-[0.35em] text-[var(--muted)]">ABOUT</div>
        <h1 className="mt-4 font-serif text-4xl">A print-first blog for modern thinking.</h1>

        <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
          This site publishes short essays on media literacy, argument quality, and critical thinking—
          blending old-academia aesthetics with modern clarity.
        </p>

        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
          New articles every two weeks. No noise. Just careful writing.
        </p>
      </div>
    </main>
  );
}
