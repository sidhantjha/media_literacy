export function Blockquote({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <blockquote className="my-8 border-l-2 border-[var(--rule)] pl-6">
      <p className="text-[var(--paper)] italic leading-7">{children}</p>
      {author && (
        <footer className="mt-2 text-sm text-[var(--muted)]">— {author}</footer>
      )}
    </blockquote>
  );
}