import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bodyClassName = inter.className + " dark";

export const metadata: Metadata = {
  title: "Advent of Code 2023",
  description: "Advent of Code 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
