import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from '@/lib/utils'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyamunga Portfolio",
  description: "dev Nyamunga's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.className)}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
