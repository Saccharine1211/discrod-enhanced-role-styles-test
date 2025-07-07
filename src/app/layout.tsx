import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Enhanced Role Styles Test",
  description: "Discord Enhanced Role Styles Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
