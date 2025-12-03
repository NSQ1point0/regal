"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-900">
      <Image
        src="/banner.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-gears"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base text-accent font-semibold tracking-[0.3em] uppercase mb-4">
          Regal Profile • Darukhana, Mazgaon, Mumbai
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Premium MS Circle &amp; Square Cutting Services in Mumbai
        </h1>
        <p className="text-lg md:text-2xl text-slate-100 mb-6 font-medium">
          High-precision cutting, fast delivery, competitive rates — trusted by industries across Maharashtra.
        </p>
        <p className="text-sm md:text-base text-slate-200/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Specialized in MS circle cutting, MS square cutting, steel cutting, and scrap processing for fabrication
          units, engineering works, and manufacturing plants.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/rates"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm md:text-base shadow-lg hover:bg-primary/90 transition-colors"
          >
            Get Today’s Rate
          </a>
          <a
            href="tel:7738786141"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-accent text-white font-semibold text-sm md:text-base hover:bg-white/5 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-transparent"></div>
    </section>
  )
}
