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
  title: "Naresh FD | Developer Portfolio",
  description:
    "Developer portfolio for Naresh FD, featuring public GitHub projects for testing automation, documentation, security scanning, and AI governance.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Naresh FD | Developer Portfolio",
    description:
      "Public GitHub work across React tooling, documentation, security scanning, and AI governance.",
    url: "https://naresh-fd.github.io/",
    siteName: "Naresh FD",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/50324374?v=4",
        width: 460,
        height: 460,
        alt: "Naresh FD GitHub avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Naresh FD | Developer Portfolio",
    description:
      "Public GitHub work across React tooling, documentation, security scanning, and AI governance.",
    images: ["https://avatars.githubusercontent.com/u/50324374?v=4"],
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
