"use client"

import type { LucideIcon } from "lucide-react"

interface HighlightCardProps {
  stat: {
    number: string
    label: string
  }
  icon: LucideIcon
}

export default function HighlightCard({ stat, icon: Icon }: HighlightCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
        <div>
          <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      </div>
    </div>
  )
}
