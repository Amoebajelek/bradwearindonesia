import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Navbar from "./_components/Navbar";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bradwear Indonesia | Workshirt Specialist",
  description: "Official Website of Bradwear Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Analytics />
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
