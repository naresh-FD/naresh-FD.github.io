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
  metadataBase: new URL("https://naresh-fd.github.io"),
  title: "Naresh Kumar R | Developer Portfolio",
  description:
    "Developer portfolio for Naresh Kumar R, featuring public GitHub projects for testing automation, documentation, security scanning, and AI governance.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Naresh Kumar R | Developer Portfolio",
    description:
      "Public GitHub work across React tooling, documentation, security scanning, and AI governance.",
    url: "https://naresh-fd.github.io/",
    siteName: "Naresh Kumar R",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Naresh Kumar R - practical tools for clearer engineering work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh Kumar R | Developer Portfolio",
    description:
      "Public GitHub work across React tooling, documentation, security scanning, and AI governance.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
