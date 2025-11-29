"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const products: Record<number, any> = {
    1: {
      name: "M.S Square Plate",
      category: "Plates & Sheets",
      description:
        "High-quality mild steel square plates manufactured with precision cutting and finishing techniques.",
      longDescription:
        "Our M.S Square Plates are ideal for industrial applications requiring flat, square surfaces. Each plate is cut with precision using our advanced profile cutting machines to ensure perfect edges and consistent thickness. These plates are widely used in construction, machinery bases, structural supports, and various fabrication projects.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Standard thickness: 6mm - 50mm",
        "Standard sizes: 100mm x 100mm to 2000mm x 2000mm",
        "Custom sizes available upon request",
        "Surface: Smooth finish, mill scale removed",
        "Edge quality: Precision cut with clean edges",
        "Tolerance: ±0.5mm on dimensions",
        "Certification: Quality assured, IS 2062 compliant",
      ],
      features: [
        "Precision-engineered dimensions",
        "Superior surface finish",
        "High durability and strength",
        "Custom size options",
        "Quick delivery",
        "Competitive pricing",
        "Weldable and machinable",
        "Rust-resistant coating available",
      ],
      images: ["/MS Squre plate.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    2: {
      name: "M.S Base Plate",
      category: "Plates & Sheets",
      description: "Heavy-duty mild steel base plates designed for machinery foundations and structural support.",
      longDescription:
        "M.S Base Plates are essential components for mounting heavy machinery, equipment, and structural elements. Manufactured with precision drilling and machining, these plates provide stable foundations and ensure proper load distribution. Available in various thicknesses and sizes to meet specific application requirements.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 10mm - 100mm available",
        "Standard sizes: Custom dimensions",
        "Hole drilling: Precision drilled as per specifications",
        "Surface finish: Machined or as-cut",
        "Flatness: Within 0.5mm tolerance",
        "Load capacity: Designed for heavy-duty applications",
        "Standards: IS 2062, ASTM A36",
      ],
      features: [
        "Heavy-duty construction",
        "Precision hole drilling",
        "Excellent load distribution",
        "Custom dimensions available",
        "Machined surface finish",
        "Long-lasting durability",
        "Suitable for welding",
        "Quality tested",
      ],
      images: ["/MS base plate.jpg", "/MS base plate 1.jpg", "/MS base plate 2.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    3: {
      name: "M.S Bolt Plate",
      category: "Plates & Components",
      description: "Precision-manufactured mild steel bolt plates with accurately drilled holes for fastening applications.",
      longDescription:
        "M.S Bolt Plates are specialized components designed for secure fastening and connection purposes. These plates feature precision-drilled holes that ensure perfect alignment and reliable connections in structural and mechanical assemblies. Ideal for construction, machinery mounting, and industrial applications.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 6mm - 40mm",
        "Hole drilling: Precision drilled to specifications",
        "Hole sizes: Standard or custom",
        "Surface finish: Smooth, deburred edges",
        "Flatness: High precision maintained",
        "Tolerance: ±0.2mm on hole positions",
        "Standards: IS 2062 compliant",
      ],
      features: [
        "Precision hole drilling",
        "Accurate hole positioning",
        "Clean, deburred edges",
        "High flatness tolerance",
        "Custom hole patterns",
        "Reliable fastening",
        "Cost-effective solution",
        "Quick turnaround",
      ],
      images: ["/MS bolt plate.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    4: {
      name: "M.S Circle",
      category: "Circular Components",
      description: "Perfectly machined mild steel circular plates and discs for various industrial applications.",
      longDescription:
        "Our M.S Circle components are manufactured with precision lathe and milling machines to ensure perfect roundness and smooth surfaces. These circular plates are widely used in machinery, automotive, construction, and fabrication industries. Available in various diameters and thicknesses with optional machining and finishing services.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Diameter: 50mm - 1000mm available",
        "Thickness: 3mm - 100mm",
        "Surface: Smooth finish standard, polished available",
        "Concentric accuracy: ±0.1mm",
        "Roundness: High precision maintained",
        "Machining: Lathe turning, face milling available",
        "Standards: IS 2062, ASTM A36",
      ],
      features: [
        "Perfect concentricity",
        "Smooth surfaces",
        "Custom diameters",
        "Precision machining",
        "Multiple finishes available",
        "Quality guaranteed",
        "Consistent roundness",
        "Wide size range",
      ],
      images: ["/MS circle.jpg", "/MS circle 2.jpg", "/MS circle with machining.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    5: {
      name: "M.S Plate",
      category: "Plates & Sheets",
      description: "Standard mild steel plates available in various sizes and thicknesses for general industrial use.",
      longDescription:
        "M.S Plates are versatile flat steel products used across multiple industries for construction, fabrication, and manufacturing purposes. These plates are cut to size with precision and can be further processed with drilling, welding, and machining as per customer requirements.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 3mm - 100mm",
        "Standard sizes: Custom cutting available",
        "Surface: Mill scale or cleaned",
        "Edge: Sheared or flame cut",
        "Tolerance: Standard plate tolerances",
        "Grades: IS 2062 E250, E350",
        "Applications: General fabrication",
      ],
      features: [
        "Versatile applications",
        "Custom cutting available",
        "Multiple thickness options",
        "Cost-effective",
        "Easy to weld and fabricate",
        "Standard quality grades",
        "Quick delivery",
        "Bulk order discounts",
      ],
      images: ["/MS plate.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    6: {
      name: "M.S Template",
      category: "Templates & Patterns",
      description: "Precision-cut mild steel templates for marking, cutting, and fabrication purposes.",
      longDescription:
        "M.S Templates are precision-manufactured patterns used for accurate marking, cutting, and fabrication in various industries. These templates ensure consistency and accuracy in production processes. Available in standard sizes including 56mm templates and custom dimensions as per specific requirements.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 3mm - 12mm",
        "Standard sizes: 56mm, custom dimensions",
        "Cutting: Profile cutting, laser cutting",
        "Surface: Clean edges, burr-free",
        "Accuracy: ±0.2mm tolerance",
        "Hole patterns: As per specifications",
        "Applications: Marking, cutting guides",
      ],
      features: [
        "Precision cutting",
        "Accurate dimensions",
        "Clean, burr-free edges",
        "Multiple size options",
        "Custom patterns available",
        "Durable and reusable",
        "Consistent quality",
        "Quick production",
      ],
      images: [
        "/MS template.jpg",
        "/MS template 2.jpg",
        "/MS template 3.jpg",
        "/MS template 4.jpg",
        "/MS template 5.jpg",
        "/MS template 6.jpg",
        "/MS template 7.jpg",
        "/MS template 56mm.jpg",
        "/MS template cutting.jpg",
      ],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    7: {
      name: "M.S Ring",
      category: "Rings & Components",
      description: "Precision-turned mild steel rings for mechanical assemblies with guaranteed concentricity.",
      longDescription:
        "Our M.S Rings are precision-manufactured components ideal for bearings, mechanical assemblies, and industrial applications requiring exact specifications. These rings are turned on precision lathes to ensure perfect concentricity and smooth bore finish. Widely used in machinery, automotive, and fabrication industries.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Inner diameter: 10mm - 500mm",
        "Outer diameter: Custom available",
        "Height/Width: 5mm - 200mm",
        "Bore: Smooth and concentric",
        "Tolerance: ±0.05mm on bore",
        "Surface finish: Turned or polished",
        "Concentricity: High precision maintained",
      ],
      features: [
        "Smooth bore finish",
        "Concentricity guaranteed",
        "Custom dimensions",
        "Precision turned",
        "Multiple sizes available",
        "Cost-effective",
        "High accuracy",
        "Quality tested",
      ],
      images: ["/MS ring.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    8: {
      name: "M.S Slip On Flange",
      category: "Flanges",
      description: "Versatile slip-on flanges suitable for various piping applications with easy installation.",
      longDescription:
        "M.S Slip-On Flanges are economical and versatile flanges offering easy installation and cost-effectiveness without compromising reliability. These flanges slide over the pipe and are welded both inside and outside, making them ideal for low-pressure applications. Available in various sizes and pressure ratings.",
      specifications: [
        "Type: Slip-on flange",
        "Material: Mild Steel (M.S)",
        "Pressure rating: Up to 150 PSI (Class 150)",
        "Size range: 1/2\" to 24\" (DN 15 to DN 600)",
        "Standards: ANSI B16.5, IS 1538",
        "Surface finish: As machined",
        "Bore: Standard or custom",
        "Face finish: Raised face or flat face",
      ],
      features: [
        "Easy installation",
        "Cost-effective solution",
        "Multiple sizes available",
        "Quick delivery",
        "Reliable performance",
        "Industry standard compliant",
        "Suitable for low-pressure applications",
        "Welding-friendly design",
      ],
      images: ["/MS slip on flang.jpg", "/MS slip on flang 2.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    9: {
      name: "M.S Weldneck Flange",
      category: "Flanges",
      description: "High-strength weldneck flanges designed for demanding industrial piping systems.",
      longDescription:
        "M.S Weldneck Flanges are engineered for high-pressure and high-temperature applications with superior structural integrity. The long tapered hub provides excellent reinforcement and stress distribution. These flanges are ideal for critical piping systems requiring reliable connections and long service life.",
      specifications: [
        "Type: Weldneck flange",
        "Material: Mild Steel (M.S)",
        "Pressure rating: Up to 2500 PSI (Class 2500)",
        "Size range: 1/2\" to 48\" (DN 15 to DN 1200)",
        "Standards: ANSI B16.5, ASME B16.47",
        "Hub: Long tapered hub design",
        "Bore: Precision finished",
        "Face finish: Raised face standard",
      ],
      features: [
        "High pressure rated",
        "Superior strength",
        "ANSI/ASME compliant",
        "Weld-friendly design",
        "Industrial proven",
        "Long service life",
        "Excellent stress distribution",
        "Reliable sealing",
      ],
      images: ["/MS weldneck flang.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    10: {
      name: "M.S Foundation Plate",
      category: "Plates & Components",
      description: "Heavy-duty foundation plates designed for structural support and equipment mounting.",
      longDescription:
        "M.S Foundation Plates are specialized components used for providing stable foundations for heavy machinery, equipment, and structural elements. These plates are manufactured with precision drilling and are designed to distribute loads evenly, ensuring long-term stability and reliability.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 12mm - 150mm",
        "Standard sizes: Custom dimensions",
        "Hole drilling: Precision drilled as per specifications",
        "Surface: Machined for flatness",
        "Flatness: Within 0.3mm tolerance",
        "Load capacity: Designed for heavy loads",
        "Applications: Machinery foundations, structural support",
      ],
      features: [
        "Heavy-duty construction",
        "Precision drilling",
        "Excellent load distribution",
        "Custom dimensions",
        "Machined surface",
        "High flatness tolerance",
        "Long-lasting durability",
        "Quality assured",
      ],
      images: ["/MS foundation plate.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    11: {
      name: "Loss Head JSW Template",
      category: "Templates & Patterns",
      description: "Specialized JSW templates for loss head applications with precision cutting.",
      longDescription:
        "Loss Head JSW Templates are specialized patterns designed for specific industrial applications. These templates are precision-cut to exact specifications, ensuring accuracy and consistency in production processes. Ideal for marking, cutting, and fabrication purposes in specialized manufacturing applications.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 3mm - 10mm",
        "Cutting: Precision profile cutting",
        "Surface: Clean edges, burr-free",
        "Accuracy: ±0.2mm tolerance",
        "Design: JSW specific pattern",
        "Applications: Loss head manufacturing",
        "Quality: High precision maintained",
      ],
      features: [
        "Specialized design",
        "Precision cutting",
        "Accurate dimensions",
        "Clean edges",
        "Consistent quality",
        "Durable construction",
        "Reusable templates",
        "Custom modifications available",
      ],
      images: ["/Loss head jsw template.jpg", "/Loss head jsw template 2.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
    12: {
      name: "M.S Godrej Lock Template",
      category: "Templates & Patterns",
      description: "Precision-cut templates for Godrej lock manufacturing and assembly applications.",
      longDescription:
        "M.S Godrej Lock Templates are specialized patterns designed for lock manufacturing and assembly processes. These templates ensure precise hole positioning and accurate dimensions required for lock mechanisms. Manufactured with high precision to meet exact specifications for reliable lock production.",
      specifications: [
        "Material: Mild Steel (M.S)",
        "Thickness: 3mm - 8mm",
        "Cutting: Precision profile cutting",
        "Hole patterns: As per lock specifications",
        "Surface: Clean, burr-free edges",
        "Accuracy: ±0.1mm tolerance",
        "Applications: Lock manufacturing",
        "Design: Godrej specific pattern",
      ],
      features: [
        "Specialized lock templates",
        "Precision hole patterns",
        "Accurate dimensions",
        "Clean, burr-free edges",
        "Consistent quality",
        "Durable and reusable",
        "Custom modifications",
        "Quick production",
      ],
      images: ["/MS godrej lock template.jpg"],
      contactInfo: {
        name: "Hamza Faiyaz Khan",
        phone: "+91-7738786141",
        email: "regalprofile01@gmail.com",
      },
    },
  }

  const product = products[productId] || products[1]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Image Carousel - Modern with real images */}
            <div>
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden shadow-xl mb-6 relative group">
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={product.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Carousel Controls */}
              {product.images.length > 1 && (
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
                      {product.images.map((_, index) => (
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

                  {/* Thumbnail preview */}
                  <div className="flex gap-2">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex ? "border-primary" : "border-border hover:border-accent"
                        }`}
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4 border border-accent/30">
                  {product.category}
                </span>
              </div>

              <h1 className="text-5xl font-bold text-foreground mb-6">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.longDescription}</p>

              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 transition-all">
                <h3 className="font-bold text-foreground mb-4">Contact for This Product</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-semibold">{product.contactInfo.name}</p>
                  <a
                    href={`tel:${product.contactInfo.phone}`}
                    className="text-accent hover:underline text-sm font-medium block"
                  >
                    {product.contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${product.contactInfo.email}`}
                    className="text-accent hover:underline text-sm font-medium block break-all"
                  >
                    {product.contactInfo.email}
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Specifications */}
          <Card className="p-8 bg-card mb-12 border border-border hover:border-accent/30 transition-all">
            <h2 className="text-2xl font-bold text-foreground mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.specifications.map((spec, index) => {
                const [label, ...valueParts] = spec.split(":")
                const value = valueParts.join(":").trim()
                return (
                  <div
                    key={index}
                    className="flex justify-between py-4 px-4 rounded-lg hover:bg-muted/30 transition-colors border-b border-border last:border-0"
                  >
                    <span className="font-semibold text-foreground">{label.trim()}</span>
                    <span className="text-muted-foreground text-right font-medium">{value || "Available"}</span>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Action Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Interested in This Product?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Browse Other Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
