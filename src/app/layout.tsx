import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Portfolio Microsite",
  description: "A mobile-first fashion trend designer portfolio built for interviews and QR sharing."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
