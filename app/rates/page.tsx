"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Today’s MS Cutting Rates</h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-200">
            Live MS circle cutting and MS square cutting rates from Regal Profile, Darukhana, Mazgaon, Mumbai.
          </p>
        </div>
      </section>

      {/* Rates Tables */}
      <section className="py-20 bg-slate-950 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <p className="text-sm text-slate-300">
            Daily price may change. Contact our team for today’s exact MS cutting and material rates.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* MS Circle Cutting Rates */}
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-amber-400">MS Circle Cutting Rates</h2>
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
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400">MS Square Cutting Rates</h2>
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

          <div className="mt-6">
            <p className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500 text-sm text-amber-300 font-semibold">
              💬 Rates change daily — contact us on WhatsApp for today&apos;s updated prices.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
    </main>
  )
}


