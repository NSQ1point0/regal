"use client"

import Link from "next/link"
import { ArrowRight, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/home/hero-section"
import HighlightCard from "@/components/home/highlight-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const stats = [
    { number: "30", label: "Years of Experience", icon: Target },
    { number: "500+", label: "Industrial Projects", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Zap },
  ]

  const featuredProducts = [
    { id: 1, name: "M.S Square Plate", image: "/MS Squre plate.jpg" },
    { id: 2, name: "M.S Base Plate", image: "/MS base plate.jpg" },
    { id: 4, name: "M.S Circle", image: "/MS circle.jpg" },
    { id: 6, name: "M.S Template", image: "/MS template.jpg" },
    { id: 8, name: "M.S Slip On Flange", image: "/MS slip on flang.jpg" },
    { id: 9, name: "M.S Weldneck Flange", image: "/MS weldneck flang.jpg" },
  ]

  const videos = [
    "/VID-20251113-WA0001.mp4",
    "/VID-20251113-WA0007.mp4",
    "/VID-20251113-WA0045.mp4",
    "/VID-20251113-WA0047.mp4",
    "/VID-20251113-WA0048.mp4",
    "/VID-20251113-WA0049.mp4",
    "/VID-20251113-WA0050.mp4",
    "/VID-20251113-WA0051.mp4",
    "/VID-20251113-WA0052.mp4",
    "/VID-20251113-WA0053.mp4",
    "/VID-20251113-WA0054.mp4",
    "/VID-20251113-WA0055.mp4",
    "/VID-20251113-WA0056.mp4",
    "/VID-20251113-WA0057.mp4",
    "/VID-20251113-WA0058.mp4",
    "/VID-20251113-WA0059.mp4",
    "/VID-20251113-WA0060.mp4",
    "/VID-20251113-WA0061.mp4",
    "/VID-20251113-WA0062.mp4",
    "/VID-20251113-WA0063.mp4",
    "/VID-20251113-WA0064.mp4",
    "/VID-20251113-WA0065.mp4",
    "/VID-20251113-WA0066.mp4",
    "/VID-20251113-WA0067.mp4",
    "/VID-20251113-WA0068.mp4",
    "/VID-20251113-WA0069.mp4",
    "/VID-20251113-WA0070.mp4",
    "/MS circle cutting.mp4",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview */}
      <section className="py-20 bg-muted/30 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Industrial Excellence Since 1994</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                REGAL PROFILE has been a trusted partner in the industrial manufacturing sector for 30 years. We
                specialize in precision profile cutting, lathe work, and drilling services with cutting-edge machinery
                and a team of experienced professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button variant="default" size="lg">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return <HighlightCard key={index} stat={stat} icon={Icon} />
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Core Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Using the latest technology and precision-engineered equipment to deliver exceptional results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Profile Cutting",
                description:
                  "Precision cutting services for mild steel and sheet metal profiles with superior edge quality",
                equipment: "Profile Cutting Machines",
              },
              {
                title: "Lathe Services",
                description: "Expert lathe machining for complex cylindrical and precision components",
                equipment: "CNC Lathe Machines",
              },
              {
                title: "Drilling & Milling",
                description: "High-precision drilling and milling operations with radial drill machines",
                equipment: "Radial Drill & Milling",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border group hover:border-accent/30 hover:translate-y-[-4px]"
              >
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <p className="text-sm font-semibold text-accent">{service.equipment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Carousel */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Manufacturing Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our precision manufacturing in action - from cutting to finishing
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {videos.map((video, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg group">
                      <video
                        src={video}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12 bg-background/80 hover:bg-background border-border" />
              <CarouselNext className="right-0 md:-right-12 bg-background/80 hover:bg-background border-border" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured Products - Modern Grid */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Precision-engineered components manufactured with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border border-border/50 h-full flex flex-col">
                    <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        Premium industrial component engineered for precision and durability
                      </p>
                      <button className="inline-flex items-center text-accent font-semibold text-sm hover:gap-2 gap-1 transition-all duration-300">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="default" size="lg">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to discuss your industrial manufacturing needs and discover how REGAL PROFILE can help your
            business thrive.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-none"
            >
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
