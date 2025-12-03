"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const contactInfo = {
    office: {
      address:
        "177/10, 178/10, Gurukrupa Hutments, Reti Bunder Road, Darukhana, Mazgaon, Mumbai – 400010, Maharashtra, India.",
      phone: ["7738786141"],
      mobile: "7738786141",
      email: "regalprofile01@gmail.com",
    },
    contact: {
      name: "Hamza Faiyaz Khan",
      phone: "+91-7738786141",
      email: "regalprofile01@gmail.com",
    },
    website: "www.regalprofile.com",
    gst: "27AAPPK1319M1ZD",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with our team for inquiries, quotes, or collaborations</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Office Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{contactInfo.office.address}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
                  <div className="space-y-2">
                    <a href={`tel:${contactInfo.office.mobile}`} className="text-amber-500 hover:underline text-lg block">
                      {contactInfo.office.mobile}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contactInfo.office.email}`}
                      className="text-amber-500 hover:underline text-lg block break-all"
                    >
                      {contactInfo.office.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Person & Business Hours */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Business Hours */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Business Hours
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.hours.weekdays}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Saturday</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.hours.saturday}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sunday</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.hours.sunday}</p>
                </div>
              </div>
            </Card>

            {/* Contact Person */}
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-accent" />
                {contactInfo.contact.name}
              </h3>
              <div className="space-y-2">
                <a href={`tel:${contactInfo.contact.phone}`} className="text-amber-500 hover:underline text-lg block">
                  {contactInfo.contact.phone}
                </a>
                <a href={`mailto:${contactInfo.contact.email}`} className="text-amber-500 hover:underline text-lg block break-all">
                  {contactInfo.contact.email}
                </a>
              </div>
            </Card>

            {/* Business Details */}
            <Card className="p-8 bg-muted/30">
              <h3 className="text-lg font-bold text-foreground mb-4">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Website</p>
                  <a
                    href={`https://${contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:underline text-lg font-medium"
                  >
                    {contactInfo.website}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">GST Number</p>
                  <p className="text-sm text-foreground font-medium">{contactInfo.gst}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          {/*<Card className="p-12 bg-card max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-accent" />
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91-98XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Product inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Please tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>

              {submitted && (
                <div className="p-4 bg-accent/20 text-accent rounded-lg text-center font-semibold">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </Card>*/}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 texture-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Quick Contact Options</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For urgent MS circle cutting, MS square cutting, or scrap processing requirements, reach out directly via
            phone or visit our Darukhana, Mazgaon, Mumbai location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.office.mobile}`}>
              <Button variant="default" size="lg">Call Now</Button>
            </a>
            <a href={`mailto:${contactInfo.office.email}`}>
              <Button variant="outline" size="lg">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
