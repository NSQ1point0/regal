"use client"

import Link from "next/link"
import { ArrowRight, Ruler, Square, Recycle, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/home/hero-section"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-muted/30 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Regal Profile</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Regal Profile is a trusted MS circle cutting and MS square cutting specialist based in Darukhana,
                Mazgaon, Mumbai. With years of experience in metal cutting and scrap processing, we provide accurate,
                uniform, and high-quality cutting solutions for industrial applications, fabrication units, engineering
                works, and manufacturing plants.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We use advanced cutting machines to ensure precision, consistency, and fast delivery. Daily rate updates
                are available for bulk and retail orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button variant="default" size="lg">
                    View Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-l-4 border-l-amber-500">
                <p className="text-sm text-muted-foreground">
                  Business Type: MS Circle Cutting, MS Square Cutting, Steel Cutting, Scrap Processing, Industrial Metal
                  Cutting, Wholesale MS Material Supply.
                </p>
              </Card>
              <Card className="p-6 bg-card">
                <p className="text-sm text-muted-foreground">
                  Address: 177/10, 178/10, Gurukrupa Hutments, Reti Bunder Road, Darukhana, Mazgaon, Mumbai – 400010,
                  Maharashtra, India.
                </p>
              </Card>
              <Card className="p-6 bg-card">
                <p className="text-sm text-muted-foreground">Phone: 7738786141 • Email: regalprofile01@gmail.com</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            High-precision MS cutting services for fabrication, engineering, and heavy industry applications.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <Link href="/services/ms-circle-cutting">
              <Card className="p-8 bg-card border border-border hover:border-amber-500/70 hover:shadow-lg transition-all h-full cursor-pointer">
                <Ruler className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">MS Circle Cutting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-accuracy circle cutting from 16mm to 100mm for fabrication, engineering, and industrial use.
                </p>
              </Card>
            </Link>
            <Link href="/services/ms-square-cutting">
              <Card className="p-8 bg-card border border-border hover:border-amber-500/70 hover:shadow-lg transition-all h-full cursor-pointer">
                <Square className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">MS Square Cutting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Precision square sheets cut to requirement with a smooth finish and consistent sizing.
                </p>
              </Card>
            </Link>
            <Link href="/services/scrap-cutting-processing">
              <Card className="p-8 bg-card border border-border hover:border-amber-500/70 hover:shadow-lg transition-all h-full cursor-pointer">
                <Recycle className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Scrap Cutting &amp; Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Industrial scrap cutting, segregation, and processing for bulk buyers.
                </p>
              </Card>
            </Link>
            <Link href="/services/custom-industrial-cutting">
              <Card className="p-8 bg-card border border-border hover:border-amber-500/70 hover:shadow-lg transition-all h-full cursor-pointer">
                <Factory className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Custom Industrial Cutting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tailored cutting solutions for heavy industries, machine parts, and manufacturing needs.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Today’s Rates Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Today’s MS Cutting Rates</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Competitive wholesale and retail rates for MS circle and square cutting. Daily price may change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* MS Circle Cutting Rates */}
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">MS Circle Cutting Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-300">
                      <th className="py-2 pr-4">Size Range</th>
                      <th className="py-2">Rate Per KG</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-100">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">16–25 mm</td>
                      <td className="py-2">65 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">25–40 mm</td>
                      <td className="py-2">67 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">40–56 mm</td>
                      <td className="py-2">68 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">56–70 mm</td>
                      <td className="py-2">70 Rs/kg</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">70–100 mm</td>
                      <td className="py-2">75 Rs/kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* MS Square Cutting Rates */}
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-sky-400">MS Square Cutting Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-300">
                      <th className="py-2 pr-4">Size Range</th>
                      <th className="py-2">Rate Per KG</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-100">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">16–25 mm</td>
                      <td className="py-2">61 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">25–40 mm</td>
                      <td className="py-2">63 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">40–56 mm</td>
                      <td className="py-2">65 Rs/kg</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 pr-4">56–70 mm</td>
                      <td className="py-2">66 Rs/kg</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">70–100 mm</td>
                      <td className="py-2">70 Rs/kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500 text-sm text-amber-300 font-semibold">
              💬 Rates change daily — contact us on WhatsApp for today&apos;s updated prices.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button variant="default" size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                Get Today’s Rate
              </Button>
            </Link>
            <a href="tel:7738786141">
              <Button variant="outline" size="lg" className="border-slate-200 text-black hover:bg-slate-800 hover:text-white">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Reliable MS Cutting in Mumbai?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact Regal Profile for MS circle cutting, MS square cutting, and industrial scrap processing services in
            Darukhana, Mazgaon, Mumbai.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-none"
            >
              Contact Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
