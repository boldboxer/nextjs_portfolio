import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Script from "next/script"; // ✅ use Next.js Script
// import MatomoTracker from "@/components/matomo-tracker";
import "./globals.css";
import GtmPageView from "@/components/gtm-page-view.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyamunga Portfolio",
  description: "dev Nyamunga's portfolio",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "196x196",
        url: "/no-bg/favicon-196x196.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/no-bg/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/no-bg/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/no-bg/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        url: "/no-bg/favicon-128.png",
      },
    ],
    apple: [
      {
        sizes: "57x57",
        url: "/no-bg/apple-touch-icon-57x57.png",
      },
      {
        sizes: "114x114",
        url: "/no-bg/apple-touch-icon-114x114.png",
      },
      {
        sizes: "72x72",
        url: "/no-bg/apple-touch-icon-72x72.png",
      },
      {
        sizes: "144x144",
        url: "/no-bg/apple-touch-icon-144x144.png",
      },
      {
        sizes: "60x60",
        url: "/no-bg/apple-touch-icon-60x60.png",
      },
      {
        sizes: "120x120",
        url: "/no-bg/apple-touch-icon-120x120.png",
      },
      {
        sizes: "76x76",
        url: "/no-bg/apple-touch-icon-76x76.png",
      },
      {
        sizes: "152x152",
        url: "/no-bg/apple-touch-icon-152x152.png",
      },
    ],
  },
  other: {
    name: "msapplication-TileColor",
    content: "#FFFFFF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Tag Manager (GTM) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7M97VT9');
          `}
        </Script>
        {/* ✅ Matomo Analytics Check if works*/}
        {/* <Script id="matomo-analytics" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.qualifixdevs.online/"; // replace with your server/domain
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script> */}
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.className
        )}
      >
        {/* Google Tag Manager - NoScript fallback */}
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
            {/* <MatomoTracker /> ✅ Tracks SPA route changes */}
            <GtmPageView />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
