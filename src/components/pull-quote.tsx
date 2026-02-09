import { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <aside className="pull-quote">
      {children}
    </aside>
  );
}
