import type { Metadata } from "next";
import "./globals.css";
import "./guide-template.css";

export const metadata: Metadata = {
  title: "Duna Area & Project Guides",
  description:
    "Dubai area and project investment guides by DUNA GROUP.",
  icons: {
    icon: "/duna-logo.png",
    shortcut: "/duna-logo.png",
    apple: "/duna-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@400;500;600;700&family=Cormorant+Garamond:ital@1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
