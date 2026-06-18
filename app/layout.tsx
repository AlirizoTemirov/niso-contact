import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niso Bakery Contact",
  description: "Niso Bakery Cafe raqamli tashrif kartasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="h-full min-w-80">
      <body className="h-full overflow-hidden font-sans">{children}</body>
    </html>
  );
}
