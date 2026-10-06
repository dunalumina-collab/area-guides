import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duna Area & Project Guides",
  description:
    "Dubai area and project investment guides by Duna Lumina Real Estate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
