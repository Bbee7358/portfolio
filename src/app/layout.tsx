import type { Metadata } from "next";
import "./globals.css";

const siteName = "渡邉幸大朗 | Portfolio";
const siteDescription =
  "慶應義塾大学総合政策学部の渡邉幸大朗によるポートフォリオ。ロボティクス、メディアアート、Web 制作を横断しながら、背景と判断の見える作品を整理しています。";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "渡邉幸大朗",
    "ポートフォリオ",
    "ロボティクス",
    "メディアアート",
    "Web制作",
    "技術開発",
    "慶應義塾大学",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
