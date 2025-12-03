"use client"

import Link from "next/link"
import { Ruler, Square, Recycle, Factory, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    slug: "ms-circle-cutting",
    title: "MS Circle Cutting",
    icon: Ruler,
    description: "High-accuracy circle cutting from 16mm to 100mm for fabrication, engineering, and industrial use.",
  },
  {
    slug: "ms-square-cutting",
    title: "MS Square Cutting",
    icon: Square,
    description: "Precision square sheets cut to requirement with a smooth finish and consistent sizing.",
  },
  {
    slug: "scrap-cutting-processing",
    title: "Scrap Cutting & Processing",
    icon: Recycle,
    description: "Industrial scrap cutting, segregation, and processing for bulk buyers.",
  },
  {
    slug: "custom-industrial-cutting",
    title: "Custom Industrial Cutting",
    icon: Factory,
    description: "Tailored cutting solutions for heavy industries, machine parts, and manufacturing needs.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MS Cutting &amp; Scrap Processing Services</h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-200">
            Premium MS circle cutting, MS square cutting, steel cutting, and scrap processing services in Darukhana,
            Mazgaon, Mumbai.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="p-8 bg-card border border-border hover:border-amber-500/70 hover:shadow-lg transition-all h-full cursor-pointer group">
                    <Icon className="w-10 h-10 text-amber-500 mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-amber-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="inline-flex items-center text-amber-500 text-sm font-semibold">
                      View Service Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

