import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service the Community Inc. – Website",
  description:
    "Official website for Service the Community Inc. built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
