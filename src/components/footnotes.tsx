import { ReactNode } from "react";

export function FootnoteRef({ id }: { id: string }) {
  return (
    <sup className="footnote-ref">
      <a href={`#footnote-${id}`}>{id}</a>
    </sup>
  );
}

export function Footnotes({ children }: { children: ReactNode }) {
  return (
    <section className="footnotes">
      <hr />
      <ol>{children}</ol>
    </section>
  );
}

export function Footnote({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <li id={`footnote-${id}`} className="footnote">
      {children}
    </li>
  );
}
