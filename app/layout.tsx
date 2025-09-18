import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Script from "next/script"; // ✅ use Next.js Script
import MatomoTracker from "@/components/matomo-tracker";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyamunga Portfolio",
  description: "dev Nyamunga's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7M97VT9');
          `}
        </Script>

        {/* ✅ Matomo Analytics */}
        <Script id="matomo-analytics" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//your-server-ip:8080/"; // replace with your server/domain
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.className
        )}
      >
        {/* Google Tag Manager - NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7M97VT9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers>
          <Header />
          <main className="grow">
            <MatomoTracker /> {/* ✅ Tracks SPA route changes */}
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
