"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-gears"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">REGAL</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 tracking-tight">PROFILE</h1>
        </div>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">30 Years of Excellence</p>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Industrial manufacturing perfection through precision cutting, expert machining, and unwavering commitment to
          quality.
        </p>

        <p className="text-sm md:text-base text-accent font-semibold tracking-widest uppercase">
          IN THE INDUSTRIAL MARKET
        </p>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-foreground to-transparent"></div>
    </section>
  )
}
