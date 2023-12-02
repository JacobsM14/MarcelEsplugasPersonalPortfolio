import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0px", padding: "0px" }}>{children}</body>
    </html>
  );
}
