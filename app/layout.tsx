import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Script } from "vm"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.protechplanner.com'),
  title: "Virtual Assistant Services | ProTech Planner | Expert Business Support",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  description:
    "ProTech Planner provides premium virtual assistant services including administrative support, customer service outsourcing, content writing, digital marketing & more. Get expert support from global team 24/7. Scale your business affordably.",
  keywords: [
    "virtual assistant",
    "virtual assistants",
    "remote assistant",
    "business virtual assistant",
    "administrative assistant",
    "business outsourcing",
    "outsourcing services",
    "administrative support services",
    "customer service outsourcing",
    "customer service virtual assistant",
    "digital marketing services",
    "content writing services",
    "web development services",
    "graphic design services",
    "finance accounting services",
    "legal process outsourcing",
    "LPO services",
    "mobile app development",
    "India outsourcing",
    "offshore outsourcing",
    "24/7 support services",
    "cost effective solutions",
    "business support services",
    "email management",
    "data entry services",
    "appointment scheduling",
    "virtual assistant near me",
    "hire virtual assistant",
    "professional virtual assistant",
    "affordable virtual assistant",
    "experienced virtual assistant team",
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
        url: '/favicon.ico',
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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }

import TawkTo from "@/components/TawkTo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        {/* Live chat */}
        <TawkTo />
      </body>
    </html>
  );
}
