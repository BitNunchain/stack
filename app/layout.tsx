import type { ReactNode } from "react"
import type { Metadata } from "next"
import React from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { PerformanceMonitor } from "@/components/qa/performance-monitor"
import "./globals.css"


type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "BitnunEco - Next-Generation Blockchain Ecosystem",
  description:
    "Revolutionary browser-based blockchain platform with Action Mining, zero-energy consumption, and comprehensive Web3 features. Mine BTN tokens, trade eco-NFTs, participate in DAO governance, and build the sustainable future of blockchain technology.",
  generator: "BitnunEco Platform",
  keywords: [
    "blockchain",
    "cryptocurrency",
    "sustainable",
    "eco-friendly",
    "mining",
    "NFT",
    "DeFi",
    "Web3",
    "DAO",
    "BTN token",
    "browser mining",
    "action mining",
  ],
  authors: [{ name: "BitnunEco Team" }],
  creator: "BitnunEco",
  publisher: "BitnunEco",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitnuneco.vercel.app",
    siteName: "BitnunEco",
    title: "BitnunEco - Next-Generation Blockchain Ecosystem",
    description: "Revolutionary browser-based blockchain platform with Action Mining and comprehensive Web3 features",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BitnunEco Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitnunEco - Next-Generation Blockchain Ecosystem",
    description: "Revolutionary browser-based blockchain platform with Action Mining and comprehensive Web3 features",
    images: ["/og-image.png"],
    creator: "@BitnunEco",
    site: "@BitnunEco",
  },
  other: {
    "twitter:label1": "Platform",
    "twitter:data1": "Web3 Blockchain",
    "twitter:label2": "Features",
    "twitter:data2": "Action Mining, DeFi, NFTs",
    "fb:app_id": "your-facebook-app-id",
    "og:site_name": "BitnunEco",
    "og:type": "website",
    "article:author": "BitnunEco Team",
    "article:publisher": "https://facebook.com/bitnuneco",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

/**
 * @param {{ children: React.ReactNode }} props
 */
/**
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Example meta tag added as requested */}
        <meta name="example-meta" content="This is an example meta tag." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color meta tags for supported browsers.
            Note: 'theme-color' is not supported by Firefox, Firefox for Android, Opera.
            For broader support, use platform-specific tags below. */}
  {/* 'theme-color' meta is not supported by Firefox, Firefox for Android, Opera */}
  <meta name="theme-color" content="#164e63" />
        <meta name="msapplication-navbutton-color" content="#164e63" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BitnunEco" />
        <meta name="application-name" content="BitnunEco" />
        <meta name="msapplication-TileColor" content="#164e63" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        <meta name="twitter:dnt" content="on" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BitnunEco",
              description:
                "Revolutionary browser-based blockchain platform with Action Mining and comprehensive Web3 features",
              url: "https://bitnuneco.vercel.app",
              logo: "https://bitnuneco.vercel.app/logo.png",
              sameAs: [
                "https://twitter.com/BitnunEco",
                "https://facebook.com/bitnuneco",
                "https://linkedin.com/company/bitnuneco",
                "https://github.com/bitnuneco",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "contact@bitnuneco.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              foundingDate: "2024",
              industry: "Blockchain Technology",
              keywords: "blockchain, cryptocurrency, sustainable mining, Web3, DeFi, NFT, DAO governance",
              offers: {
                "@type": "Offer",
                name: "BitnunEco Platform Services",
                description:
                  "Comprehensive blockchain ecosystem with Action Mining, DeFi trading, NFT marketplace, and DAO governance",
                category: "Blockchain Services",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BitnunEco Platform",
              description: "Browser-based blockchain platform with Action Mining technology",
              url: "https://bitnuneco.vercel.app",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free to use blockchain platform",
              },
              featureList: [
                "Action Mining",
                "BTN Token Trading",
                "NFT Marketplace",
                "DeFi Services",
                "DAO Governance",
                "Cross-Chain Bridge",
                "VR/AR Mining",
              ],
              screenshot: "https://bitnuneco.vercel.app/screenshot.png",
              softwareVersion: "1.0.0",
              datePublished: "2024-12-01",
              author: {
                "@type": "Organization",
                name: "BitnunEco Team",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div id="root">
          <Suspense
            fallback={
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                  <p className="text-cyan-400 font-semibold">Loading BitnunEco...</p>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
        <Analytics />
        <SpeedInsights />
        <PerformanceMonitor />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined" && typeof document !== "undefined") {
                // Twitter Widget
                window.twttr = (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                  if (d.getElementById(id)) return t;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = "https://platform.twitter.com/widgets.js";
                  fjs.parentNode.insertBefore(js, fjs);
                  t._e = [];
                  t.ready = function(f) {
                    t._e.push(f);
                  };
                  return t;
                }(document, "script", "twitter-wjs"));

                // Facebook SDK
                window.fbAsyncInit = function() {
                  if (typeof FB !== "undefined") {
                    FB.init({
                      appId: 'your-facebook-app-id',
                      cookie: true,
                      xfbml: true,
                      version: 'v18.0'
                    });
                  }
                };
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "https://connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined" && typeof navigator !== "undefined" && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
