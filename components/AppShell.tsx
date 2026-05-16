import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/#type", label: "恋愛タイプ" },
  { href: "/#compatibility", label: "相性診断" },
  { href: "/#message", label: "文面添削" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-stone-900">
            <span className="grid size-9 place-items-center rounded-2xl bg-gradient-to-br from-pink-400 to-violet-400 text-white shadow-lg shadow-pink-200">恋</span>
            <span className="text-lg">コイヨミ</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-stone-600 sm:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-pink-500">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/#forms" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-500">
            無料で診断
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/70 bg-white/60 px-4 py-8 text-center text-sm text-stone-500">
        <p>© 2026 コイヨミ / MVP demo. 診断結果は仮データです。</p>
      </footer>
    </div>
  );
}
