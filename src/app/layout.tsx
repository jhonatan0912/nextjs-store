import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store App",
  description: "A simple store app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-red-hat-text bg-rose-50">{children}</body>
    </html>
  );
}
