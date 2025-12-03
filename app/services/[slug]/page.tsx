"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

type ServiceSlug = "ms-circle-cutting" | "ms-square-cutting" | "scrap-cutting-processing" | "custom-industrial-cutting"

type ServiceMedia = {
  images: string[]
  videos: string[]
}

type ServiceDetail = {
  title: string
  category: string
  summary: string
  longDescription: string
  points: string[]
  media: ServiceMedia
}

const services: Record<ServiceSlug, ServiceDetail> = {
  "ms-circle-cutting": {
    title: "MS Circle Cutting Services",
    category: "MS Circle Cutting",
    summary: "High-precision MS circle cutting from 16mm to 100mm for fabrication, engineering, and industrial use.",
    longDescription:
      "Regal Profile provides high-accuracy MS circle cutting services for fabrication units, engineering works, and industrial plants. Using advanced profile cutting and machining equipment, we ensure each circle is uniform in diameter, thickness, and weight. Our MS circle cutting is ideal for flanges, base plates, machine components, and heavy fabrication projects requiring consistent quality and timely delivery.",
    points: [
      "Circle cutting range from 16mm to 100mm thickness",
      "Uniform diameters with smooth edge finish",
      "Suitable for flanges, base plates and heavy fabrication",
      "Bulk and job-work circle cutting for engineering units",
      "High repeat accuracy for regular production requirements",
      "Daily MS circle cutting rates available on request",
    ],
    media: {
      images: ["/MS circle.jpg", "/MS circle 2.jpg", "/MS circle with machining.jpg"],
      videos: ["/MS circle cutting.mp4"],
    },
  },
  "ms-square-cutting": {
    title: "MS Square Cutting Services",
    category: "MS Square Cutting",
    summary: "Precision MS square and plate cutting with smooth finish and consistent sizing.",
    longDescription:
      "Our MS square cutting services are designed for fabrication units, structure manufacturers, and engineering workshops that need flat, square plates with consistent dimensions. Using profile cutting machines and proper gauging, we deliver accurately cut MS squares and plates that are ready for welding, drilling, and assembly work. From small parts to heavy base plates, we support a wide range of industrial applications.",
    points: [
      "Square and rectangular plate cutting as per drawing or size list",
      "Smooth, uniform edges suitable for welding and machining",
      "Ideal for base plates, gussets, stiffeners and templates",
      "Support for one-off jobs as well as regular production",
      "Bulk MS square cutting with competitive wholesale rates",
      "MS sheet and plate cutting services across Mumbai and Maharashtra",
    ],
    media: {
      images: ["/MS Squre plate.jpg", "/MS base plate.jpg", "/MS plate.jpg"],
      videos: ["/VID-20251113-WA0001.mp4"],
    },
  },
  "scrap-cutting-processing": {
    title: "Scrap Cutting & Processing",
    category: "Scrap Cutting & Processing",
    summary: "Industrial MS scrap cutting, segregation, and processing for bulk buyers.",
    longDescription:
      "Regal Profile offers organized MS scrap cutting and processing services for foundries, rolling mills, and scrap buyers. We cut and size scrap plates, off-cuts, and structural material so that it is ready for melting and recycling. Our facility in Darukhana, Mazgaon, Mumbai is equipped to handle bulk scrap with systematic sorting and safe handling practices.",
    points: [
      "Cutting of MS plate scrap and structural scrap to furnace-ready sizes",
      "Segregation of scrap by thickness and category for better yield",
      "Suitable for foundries, rolling mills and large scrap buyers",
      "Consistent sizing improves handling and loading efficiency",
      "On-time processing for regular industrial scrap contracts",
      "Located close to industrial scrap markets in Darukhana, Mazgaon",
    ],
    media: {
      images: ["/Profile cutting machine.jpg", "/Pug machine.jpg", "/MS template & MS ring tool cut.jpg"],
      videos: ["/VID-20251113-WA0045.mp4", "/VID-20251113-WA0047.mp4"],
    },
  },
  "custom-industrial-cutting": {
    title: "Custom Industrial Cutting Solutions",
    category: "Custom Industrial Cutting",
    summary: "Tailored MS cutting solutions for heavy industries, machine parts, and manufacturing needs.",
    longDescription:
      "Beyond standard circle and square cutting, Regal Profile supports custom MS cutting requirements for industrial and engineering applications. From templates and patterns to special machine parts and foundation plates, we work from drawings, samples, or measurements to deliver accurate, repeatable results. Our combination of profile cutting, drilling, and machining allows us to support complex job work with quick turnaround.",
    points: [
      "Custom MS templates, rings, brackets and foundation plates",
      "Support for pattern-based and drawing-based cutting jobs",
      "Integration with drilling and basic machining where required",
      "Ideal for OEMs, fabrication shops, and engineering contractors",
      "Flexible batch sizes from prototypes to production quantities",
      "Technical support to optimise plate utilisation and cutting layouts",
    ],
    media: {
      images: [
        "/MS template.jpg",
        "/MS template 2.jpg",
        "/MS ring.jpg",
        "/MS foundation plate.jpg",
        "/Template.jpg",
      ],
      videos: ["/VID-20251113-WA0050.mp4", "/VID-20251113-WA0053.mp4"],
    },
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = (params.slug || "ms-circle-cutting") as ServiceSlug
  const service = services[slug] || services["ms-circle-cutting"]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = service.media.images
  const videos = service.media.videos

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Media - Image Carousel */}
            <div>
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden shadow-xl mb-6 relative group">
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${service.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {images.length > 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevImage}
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? "bg-primary w-8" : "bg-border w-2"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextImage}
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2">
                    {images.map((img, index) => (
                      <button
                        key={img}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex ? "border-primary" : "border-border hover:border-accent"
                        }`}
                      >
                        <img src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4 border border-accent/30">
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{service.summary}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.longDescription}</p>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-6">Why Choose This Service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Block */}
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 transition-all">
                <h3 className="font-bold text-foreground mb-4">Contact Regal Profile</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-semibold">Regal Profile</p>
                  <a href="tel:7738786141" className="text-accent hover:underline text-sm font-medium block">
                    7738786141
                  </a>
                  <a
                    href="mailto:regalprofile01@gmail.com"
                    className="text-accent hover:underline text-sm font-medium block break-all"
                  >
                    regalprofile01@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    177/10, 178/10, Gurukrupa Hutments, Reti Bunder Road, Darukhana, Mazgaon, Mumbai – 400010,
                    Maharashtra, India.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Videos Section */}
          {videos.length > 0 && (
            <Card className="p-8 bg-card border border-border mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Service Videos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div
                    key={video}
                    className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg"
                  >
                    <video
                      src={video}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Need This Service?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Today&apos;s Rate
                </Button>
              </Link>
              <a href="tel:7738786141">
                <Button variant="outline" size="lg">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


