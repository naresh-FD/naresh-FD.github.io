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
  title: "Naresh Kumar R | Associate Architect",
  description:
    "Associate Architect building secure enterprise platforms, local-first AI developer tools, repository intelligence, and mobile products.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Naresh Kumar R | Associate Architect",
    description:
      "Secure enterprise platforms, local-first AI developer tools, repository intelligence, and mobile products.",
    url: "https://naresh-fd.github.io/",
    siteName: "Naresh Kumar R",
    images: [
      {
        url: "/og-theme.png",
        width: 1536,
        height: 1024,
        alt: "Naresh Kumar R - Associate Architect and AI developer tooling builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh Kumar R | Associate Architect",
    description:
      "Secure enterprise platforms, local-first AI developer tools, repository intelligence, and mobile products.",
    images: ["/og-theme.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t||p;}catch(e){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
