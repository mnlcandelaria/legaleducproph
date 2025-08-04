import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ConditionalLayout from "@/components/ConditionalLayout";

import { Playfair_Display } from 'next/font/google';

import Providers from './providers';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'LegalEducProPH - Bar Review Center',
  description: "Helping future attorneys pass the bar exam with confidence for over 25 years.",
  icons: {
    icon: '/favicon.png', // path relative to /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
            >
            <Providers>
              <ThemeProvider attribute="class" defaultTheme="light">
                  <ConditionalLayout>
                      {children}
                  </ConditionalLayout>
              </ThemeProvider>
            </Providers>
            </body>
        </html>
    );
}
