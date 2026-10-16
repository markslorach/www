import type { Metadata } from "next";
import { Fraunces, Recursive, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const recursiveMono = Recursive({
  variable: "--font-recursive-mono",
  subsets: ["latin"],
  axes: ["MONO", "CASL"],
});

export const metadata: Metadata = {
  title: "Mark Slorach | Software Developer",
  description: "Software Developer based in Scotland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${sourceSerif.variable} ${recursiveMono.variable} h-full antialiased md:scrollbar-gutter-stable`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
