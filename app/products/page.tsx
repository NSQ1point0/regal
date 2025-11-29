"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "M.S Square Plate",
      category: "Plates & Sheets",
      description: "High-quality mild steel square plates with precision cutting and finishing for industrial applications",
      specifications: ["Custom sizes available", "Smooth finish", "High durability", "IS 2062 compliant"],
      image: "/MS Squre plate.jpg",
    },
    {
      id: 2,
      name: "M.S Base Plate",
      category: "Plates & Sheets",
      description: "Heavy-duty mild steel base plates designed for machinery foundations and structural support",
      specifications: ["Precision hole drilling", "Heavy-duty construction", "Custom dimensions", "Machined finish"],
      image: "/MS base plate.jpg",
    },
    {
      id: 3,
      name: "M.S Bolt Plate",
      category: "Plates & Components",
      description: "Precision-manufactured mild steel bolt plates with accurately drilled holes for fastening",
      specifications: ["Precision hole drilling", "Accurate positioning", "Clean edges", "Custom patterns"],
      image: "/MS bolt plate.jpg",
    },
    {
      id: 4,
      name: "M.S Circle",
      category: "Circular Components",
      description: "Perfectly machined mild steel circular plates and discs for various industrial applications",
      specifications: ["Perfect concentricity", "Custom diameters", "Precision machining", "Multiple finishes"],
      image: "/MS circle.jpg",
    },
    {
      id: 5,
      name: "M.S Plate",
      category: "Plates & Sheets",
      description: "Standard mild steel plates available in various sizes and thicknesses for general industrial use",
      specifications: ["Multiple thickness options", "Custom cutting", "Easy to weld", "Cost-effective"],
      image: "/MS plate.jpg",
    },
    {
      id: 6,
      name: "M.S Template",
      category: "Templates & Patterns",
      description: "Precision-cut mild steel templates for marking, cutting, and fabrication purposes",
      specifications: ["Precision cutting", "Accurate dimensions", "Clean edges", "Custom patterns"],
      image: "/MS template.jpg",
    },
    {
      id: 7,
      name: "M.S Ring",
      category: "Rings & Components",
      description: "Precision-turned mild steel rings for mechanical assemblies with guaranteed concentricity",
      specifications: ["Smooth bore", "Concentricity guaranteed", "Custom dimensions", "Precision turned"],
      image: "/MS ring.jpg",
    },
    {
      id: 8,
      name: "M.S Slip On Flange",
      category: "Flanges",
      description: "Versatile slip-on flanges suitable for various piping applications with easy installation",
      specifications: ["Easy installation", "Multiple sizes", "Cost-effective", "ANSI B16.5 compliant"],
      image: "/MS slip on flang.jpg",
    },
    {
      id: 9,
      name: "M.S Weldneck Flange",
      category: "Flanges",
      description: "High-strength weldneck flanges designed for demanding industrial piping systems",
      specifications: ["High pressure rated", "ANSI compliant", "Superior strength", "Weld-friendly design"],
      image: "/MS weldneck flang.jpg",
    },
    {
      id: 10,
      name: "M.S Foundation Plate",
      category: "Plates & Components",
      description: "Heavy-duty foundation plates designed for structural support and equipment mounting",
      specifications: ["Heavy-duty construction", "Precision drilling", "Load distribution", "Custom dimensions"],
      image: "/MS foundation plate.jpg",
    },
    {
      id: 11,
      name: "Loss Head JSW Template",
      category: "Templates & Patterns",
      description: "Specialized JSW templates for loss head applications with precision cutting",
      specifications: ["Specialized design", "Precision cutting", "Accurate dimensions", "Consistent quality"],
      image: "/Loss head jsw template.jpg",
    },
    {
      id: 12,
      name: "M.S Godrej Lock Template",
      category: "Templates & Patterns",
      description: "Precision-cut templates for Godrej lock manufacturing and assembly applications",
      specifications: ["Specialized lock templates", "Precision hole patterns", "Accurate dimensions", "Durable"],
      image: "/MS godrej lock template.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90">Precision-engineered industrial components and metal products</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-center text-muted-foreground text-lg mb-8 leading-relaxed">
              All our products are manufactured using state-of-the-art machinery and quality-assured processes. Each
              product undergoes rigorous quality control to ensure precision and durability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id}>
                <Link href={`/products/${product.id}`} className="block h-full">
                  <Card className="h-full hover:shadow-2xl hover:border-accent/50 transition-all duration-300 cursor-pointer bg-card overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <span className="text-xs font-semibold text-white uppercase tracking-wide">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-[280px]">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {product.description}
                      </p>

                      {/* Specifications */}
                      <div className="space-y-2 mb-6">
                        {product.specifications.slice(0, 2).map((spec, index) => (
                          <div key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full"></span>
                            {spec}
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <button className="inline-flex items-center justify-center text-accent font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-300">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Custom Solutions Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Specifications",
                description: "We can manufacture products to your exact specifications and requirements",
              },
              {
                title: "Bulk Orders",
                description: "Competitive pricing available for large volume orders and long-term contracts",
              },
              {
                title: "Quality Guaranteed",
                description: "Every product undergoes rigorous quality testing before delivery",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card text-center hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss your specific requirements and get a tailored quote for your project.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
