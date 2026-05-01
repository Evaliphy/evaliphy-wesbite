import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/Header";
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
  metadataBase: new URL("https://evaliphy.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Evaliphy | Simplify End-to-End AI Testing",
    template: "%s | Evaliphy",
  },
  description:
    "Evaliphy simplifies end-to-end AI testing. Write assertions like API tests, run in CI, and get human-readable reports. Open source, no ML overhead, no vendor lock-in.",
  keywords: [
    "end-to-end AI testing",
    "AI testing framework",
    "LLM testing",
    "Playwright for AI",
    "open source AI testing",
    "AI testing in CI",
    "human-readable AI reports",
    "no vendor lock-in",
    "no ML overhead",
    "LLM as a judge",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Evaliphy Team" }],
  creator: "Evaliphy",
  publisher: "Evaliphy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evaliphy.com",
    siteName: "Evaliphy",
    title: "Evaliphy | Simplify End-to-End AI Testing",
    description:
      "Like Playwright for your AI system: simple assertions, CI-ready runs, and human-readable reports. Open source with no vendor lock-in.",
    images: [
      {
        url: "/images/report.png",
        width: 1200,
        height: 630,
        alt: "Evaliphy Evaluation Report",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaliphy | Simplify End-to-End AI Testing",
    description:
      "Like Playwright for your AI system: simple assertions, CI-ready runs, and human-readable reports.",
    images: ["/images/report.png"],
    creator: "@evaliphy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EE5iEfQ7-Rh-VFtGGyswlapyYuVtps-1JgNx4dz6ppY",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-zinc-100">
        <div className="bg-amber-50 border-b border-amber-100 py-2 px-4 text-center text-xs font-medium text-amber-800">
          Evaliphy is currently in beta. It is not recommended for production use yet. Please try it out and{" "}
          <a
            href="https://forms.gle/5CQGzonT1XUUHCJu6"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-amber-200 hover:decoration-amber-400 transition-colors"
          >
            share your feedback
          </a>
          .
        </div>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-100 py-12">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-center text-sm leading-loose text-zinc-500">
                Simplify end-to-end AI testing. Assertions, CI, and human-readable reports. Open source and no vendor lock-in. &copy; {new Date().getFullYear()}
              </p>
              <a
                href="/llm.txt"
                className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors underline underline-offset-4"
              >
                llm.txt
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
