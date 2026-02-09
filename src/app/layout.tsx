import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProviders } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Critical Thinking Journal",
  description: "Artistry + media literacy + old academia, modern execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain">
        <ThemeProviders>
          <div className="mx-auto max-w-6xl px-4">
            <header className="py-8">
              <div className="flex items-baseline justify-between gap-6">
                <Link href="/" className="group">
                  <div className="text-xs tracking-[0.35em] text-[var(--muted)]">
                    THE JOURNAL
                  </div>
                  <div className="mt-2 font-serif text-3xl leading-none">
                    Critical Thinking
                    <span className="ml-2 text-[var(--muted)]">—</span>
                  </div>
                </Link>

                <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
                  <Link
                    className="hover:text-[var(--paper)]"
                    href="/articles"
                  >
                    Articles
                  </Link>
                  <Link
                    className="hover:text-[var(--paper)]"
                    href="/about"
                  >
                    About
                  </Link>
                  <ThemeToggle />
                </nav>
              </div>

              <div className="mt-6 h-px w-full bg-[var(--rule)]" />
            </header>

            {children}

            <footer className="py-10">
              <div className="h-px w-full bg-[var(--rule)]" />
              <div className="mt-6 text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} • Built with care • Print-first
                thinking
                <span className="mx-2">—</span>
                A project by{" "}
                <span className="text-[var(--paper)]">
                  Maitreyi Jha
                </span>
              </div>
            </footer>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
