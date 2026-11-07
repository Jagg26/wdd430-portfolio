import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "John García | Developer Portfolio", template: "%s | John García" },
  description: "John García’s developer portfolio, featuring React projects and an exploration of Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="sr-only z-50 rounded bg-teal-900 p-4 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
