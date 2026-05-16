import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "コイヨミ | 恋愛占いMVP",
  description: "恋愛タイプ、相性、LINE/DMの文面をやさしく診断する恋愛占いWebアプリです。",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
