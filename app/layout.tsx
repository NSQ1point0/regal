import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Oswald } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Regal Profile - MS Circle & Square Cutting in Darukhana, Mazgaon, Mumbai",
  description:
    "Regal Profile offers high-precision MS circle cutting and MS square cutting services in Darukhana, Mazgaon, Mumbai. Reliable industrial steel cutting, scrap processing, and daily updated MS rates. Contact for bulk orders.",
  keywords: [
    "ms circle cutting services",
    "ms circle cutting in mumbai",
    "ms circle cutting darukhana",
    "ms circle cutting mazgaon",
    "ms square cutting services",
    "ms square cutting in mumbai",
    "ms sheet cutting",
    "ms plate cutting",
    "steel cutting services mumbai",
    "industrial metal cutting mumbai",
    "scrap cutting darukhana",
    "scrap processing mazgaon",
    "ms thickness cutting",
    "ms wholesale supplier mumbai",
    "steel scrap cutting service",
    "metal circle cutting near me",
    "metal fabrication cutting",
    "industrial steel processor",
  ],
  openGraph: {
    title: "Regal Profile - MS Circle & Square Cutting Services in Mumbai",
    description:
      "Regal Profile offers high-precision MS circle cutting and MS square cutting services in Darukhana, Mazgaon, Mumbai. Reliable industrial steel cutting, scrap processing, and daily updated MS rates. Contact for bulk orders.",
    type: "website",
    locale: "en_IN",
    siteName: "Regal Profile",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} font-sans antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
