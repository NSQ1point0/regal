"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
    services: ["Profile Cutting", "Lathe Services", "Drilling & Milling", "Custom Manufacturing"],
    contact: {
      address: "177/10,178/10 GURUKRUPA HUTMENTS RETI BUNDER ROAD DARUKHANA MAZGAON MUMBAI-400010",
      phone: "+91-7738786141",
      email: "regalprofile01@gmail.com",
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">REGAL PROFILE</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              30 years of excellence in industrial manufacturing and precision services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.357-.675 1.228-1.387 2.528-1.387 2.704 0 3.202 1.778 3.202 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{footerLinks.contact.address}</p>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a
                  href={`tel:${footerLinks.contact.phone}`}
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  {footerLinks.contact.phone}
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  {footerLinks.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">&copy; {currentYear} REGAL PROFILE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
