import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improved font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bigfxacademy.com'),
  title: {
    default: "Big FX Trading Academy - Master the Markets | Professional Trading Education",
    template: "%s | Big FX Trading Academy"
  },
  description: "Big FX Trading Academy offers professional trading education, live sessions, market analysis, and proven strategies. Learn forex, crypto, and stock trading from expert traders with years of experience. Join our community of successful traders.",
  keywords: [
    "Big FX Trading Academy",
    "forex trading course",
    "cryptocurrency trading",
    "trading education",
    "professional trading",
    "market analysis",
    "trading strategies",
    "technical analysis",
    "risk management",
    "trading psychology",
    "day trading",
    "swing trading",
    "forex signals",
    "trading mentorship",
    "financial markets",
    "trading community",
    "forex education",
    "crypto education",
    "trading tools",
    "trading indicators"
  ],
  authors: [
    { 
      name: "Big FX Trading Academy",
      url: "https://bigfxacademy.com/about"
    }
  ],
  creator: "Big FX Trading Academy",
  publisher: "Big FX Trading Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bigfxacademy.com",
    siteName: "Big FX Trading Academy",
    title: "Big FX Trading Academy - Professional Trading Education & Analysis",
    description: "Transform your trading with Big FX Academy's comprehensive education, live trading sessions, expert analysis, and proven strategies. Join thousands of successful traders worldwide.",
    images: [
      {
        url: "/bigfxlogo.jpg", // Logo as the primary Open Graph image
        width: 800,
        height: 800,
        alt: "Big FX Trading Academy Logo",
        type: "image/jpg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BigFXAcademy",
    creator: "@BigFXAcademy",
    title: "Big FX Trading Academy - Expert Trading Education",
    description: "Learn professional trading strategies, technical analysis, and risk management. Join our community of successful traders and transform your trading journey.",
    images: [
      {
        url: "/bigfxlogo.jpg", // Logo as the primary Twitter card image
        alt: "Big FX Trading Academy Logo",
        width: 800,
        height: 800,
      }
    ],
  },
  icons: {
    icon: [
      { url: "/bigfxlogo.jpg", sizes: "any", type: "image/jpg" }, // Favicon using the logo
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
  applicationName: "Big FX Trading Academy",
  other: {
    "theme-color": "#4a8eff",
    "msapplication-TileColor": "#4a8eff",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4a8eff" />
        <link rel="canonical" href="https://bigfxacademy.com" />
        <link rel="alternate" hrefLang="en" href="https://bigfxacademy.com" />
        <link rel="alternate" hrefLang="x-default" href="https://bigfxacademy.com" />
        <link rel="icon" href="/bigfxlogo.jpg" sizes="any" type="image/jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
