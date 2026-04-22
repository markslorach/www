import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Alice } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Inter({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alice = Alice({
  weight: "400",
  variable: "--font-alice",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Slorach - Software Developer",
  description: "Software Developer based in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable, alice.variable)}>
      <body>{children}</body>
    </html>
  );
}
