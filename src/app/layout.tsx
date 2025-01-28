import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niklas Terhorst - Network Security Administrator",
  description: "Portfolio of Niklas Terhorst - Network Security Administrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
