import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ProTech Planner - Premium Virtual Assistant Services",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  description:
    "Professional virtual assistant services to streamline your business operations. Expert administrative support, customer service, and business management solutions.",
  keywords: [
    "virtual assistant",
    "remote support",
    "business outsourcing",
    "administrative services",
    "customer service",
    "digital marketing",
    "content writing",
    "web development",
    "graphic design",
    "finance accounting",
    "legal process outsourcing",
    "mobile app development",
    "India outsourcing",
    "24/7 support",
    "cost effective solutions"
  ],
  authors: [{ name: "ProTech Planner Team" }],
  creator: "ProTech Planner",
  publisher: "ProTech Planner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.protechplanner.com/',
    siteName: 'ProTech Planner',
    title: 'ProTechPlanner - Premium Virtual Assistant Services',
    description: 'Professional virtual assistant services to streamline your business operations. Expert administrative support, customer service, and business management solutions.',
    images: [
      {
        url: '/logo-m.png',
        width: 1200,
        height: 630,
        alt: 'ProtechPlanner - Virtual Assistant Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProTechPlanner- Premium Virtual Assistant Services',
    description: 'Professional virtual assistant services to streamline your business operations. Expert administrative support, customer service, and business management solutions.',
    images: ['/business-transformation-virtual-assistant-producti.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.protechplanner.com/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
