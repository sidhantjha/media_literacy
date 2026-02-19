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
          <div className="w-full px-4">
            {/* =====================
               HEADER
               ===================== */}
            <header className="py-8 px-8">
              <div className="grid grid-cols-3 items-center">
                {/* LEFT: Brand */}
                <Link href="/" className="group justify-self-start">
                  <div className="text-m tracking-[0.35em]">
                    Writing on the Wall
                  </div>
                </Link>

                {/* CENTER: Nav */}
                <nav className="justify-self-center flex items-center gap-8 text-base text-[var(--muted)]">
                  <Link
                    className="hover:text-[var(--paper)] transition"
                    href="/articles"
                  >
                    Articles
                  </Link>
                  <Link
                    className="hover:text-[var(--paper)] transition"
                    href="/about"
                  >
                    About
                  </Link>
                  <ThemeToggle />
                </nav>

                {/* RIGHT: Spacer to keep center true */}
                <div className="justify-self-end" />
              </div>

              <div className="mt-6 h-px w-full bg-[var(--rule)]" />
            </header>

            {/* =====================
               PAGE CONTENT
               ===================== */}
            {children}

            {/* =====================
               FOOTER
               ===================== */}
            <footer className="py-10">
              <div className="h-px w-full bg-[var(--rule)]" />
              <div className="mt-6 text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} • Built with care • Print-first thinking
                <span className="mx-2">—</span>
                A project by{" "}
                <span className="text-[var(--paper)]">Maitreyi Jha</span>
              </div>
            </footer>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
