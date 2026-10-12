import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apibeta.vercel.app"),
  title: {
    default: "APIbeta | API Encyclopedia",
    template: "%s | APIbeta",
  },
  description:
    "APIbeta is a curated, verified encyclopedia of web APIs. Browse, filter and compare real APIs across weather, maps, finance, AI, payments and more, then learn how to make your first call.",
  applicationName: "APIbeta",
  keywords: [
    "API directory",
    "API encyclopedia",
    "REST API list",
    "compare APIs",
    "free APIs",
    "API documentation",
  ],
  openGraph: {
    type: "website",
    url: "https://apibeta.vercel.app",
    siteName: "APIbeta · API Encyclopedia",
    title: "APIbeta | API Encyclopedia",
    description:
      "A curated, verified encyclopedia of web APIs. Discover, compare and learn how to use real APIs — free at MVP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "APIbeta | API Encyclopedia",
    description:
      "A curated, verified encyclopedia of web APIs. Discover, compare and learn how to use real APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#05060a] text-white">{children}</body>
    </html>
  );
}
