import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

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
      <body className={bodyClassName}>
        <Header />
        {children}
      </body>
    </html>
  );
}
