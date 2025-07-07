import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

const siteConfig = {
  title: "Discord Enhanced Role Styles",
  description:
    "Test and generate code for Discord's Role Styles in advance.",
  url: "https://discord-enhanced-role-styles.vercel.app",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "discord",
    "role",
    "style",
    "css",
    "generator",
  ],
  creator: "jimin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@__jimin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
