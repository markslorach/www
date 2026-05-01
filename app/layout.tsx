import type { Metadata } from "next";
import { Geist_Mono, DM_Serif_Display, Lora, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const switzer = localFont({
  src: [
    { path: "../fonts/Switzer-Variable.woff2", style: "normal" },
    { path: "../fonts/Switzer-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter", 
  display: "swap"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifDisplay = Lora({
  variable: "--font-serif",
  display: "swap",
})


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
    <html lang="en" className={cn(switzer.variable, inter.variable, serifDisplay.variable, geistMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
