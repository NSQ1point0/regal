"use client"

import { Card } from "@/components/ui/card"
import { Zap, Users, Cog, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const infrastructure = [
    "Profile cutting machine",
    "Lathe machine",
    "Drill machine",
    "Milling machines",
    "Welding machines",
    "Bending machines",
    "Power press",
  ]

  const services = [
    "Mild steel profile cutting services",
    "Sheet metal profile cutting services",
    "Lathe machine services",
    "Drill machine services",
  ]

  const strengths = [
    "Supporting client company demands of improving business efficiency with precision job work",
    "Delivering solutions using Profile Cutting machines",
    "Expertise in Lathe and Radial Drill Machine operations",
    "Expertise in handling a variety of metals",
    "Expertise in delivering precise cutting results with optimum edge quality",
  ]

  const contactInfo = {
    address: "10/83, Lakdi Bunder, Darukhana, Reay Road, Mumbai - 400010",
    phone: ["+91-22-23755778", "23758333"],
    mobile: "+91-9821132101",
    email: ["regalprofile@gmail.com", "sales@regalprofile.com"],
    website: "www.regalprofile.com",
    gst: "27AAPPK1319M1ZD",
    contacts: [
      { name: "Faiyaz Taufique Khan", phone: "9821570170 / 7738786141", email: "Regalprofile01@gmail.com" },
      { name: "Hamza Faiyaz Khan", phone: "7738786141" },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About REGAL PROFILE</h1>
          <p className="text-lg opacity-90">30 Years of Industrial Excellence and Precision Manufacturing</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We have a well-structured infrastructure that comprises various departments. These units support us in
                the execution of all our business operations in a streamlined manner. Our workplace is installed with
                latest machines and tools, which help us in providing excellent services to our clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Being a client-centric organization, we ensure to serve our clients with utmost satisfaction. Our
                professionals keep in constant touch with the clients to understand their specific needs and offer
                services accordingly.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-card border-l-4 border-l-accent">
                <h3 className="font-bold text-primary mb-2">Client-Centric Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We offer easy payment options to our clients for hassle-free monetary transactions.
                </p>
              </Card>
              <Card className="p-6 bg-card border-l-4 border-l-accent">
                <h3 className="font-bold text-primary mb-2">Transparent Dealings</h3>
                <p className="text-sm text-muted-foreground">
                  Our ethical business policies have helped us attain a respectable position in the market.
                </p>
              </Card>
              <Card className="p-6 bg-card border-l-4 border-l-accent">
                <h3 className="font-bold text-primary mb-2">Quality Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  We measure quality with the service satisfaction we deliver to our customers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Quality */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Zap className="text-accent w-8 h-8" />
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We work with a vision of bringing consistency in terms of cost effectiveness, accuracy and speed that
                will help in handling the required job works. Utilizing the best available technology, we try to get the
                work done as per the requirement of client in fast and efficient manner.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Award className="text-accent w-8 h-8" />
                Quality Policy
              </h3>
              <div className="space-y-4">
                {[
                  "Laying special attention on quality of services delivered in adherence to international norms",
                  "Maintaining stringent quality control at each stage of job work",
                  "Team of experts ensuring strict control through regular quality checks",
                ].map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-center">Our Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We have a well-established infrastructure with the latest machinery and tools to handle precision
            requirements efficiently.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Cog className="w-6 h-6" />
                Machinery & Equipment
              </h3>
              <div className="space-y-3">
                {infrastructure.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground capitalize">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Users className="w-6 h-6" />
                Service Areas
              </h3>
              <div className="space-y-3">
                {services.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction & Strengths */}
      <section className="py-20 bg-muted/30 texture-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Our Strengths</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Our consistent business approach and client-centric policies have helped us emerge as a leading name in our
            area of operations. These strengths have been instrumental in gaining a large customer base.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{strength}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Contact Information</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card">
              <h3 className="text-xl font-bold mb-6 text-primary">Main Office</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="text-foreground font-medium">{contactInfo.address}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <div className="space-y-1">
                    {contactInfo.phone.map((p, i) => (
                      <a key={i} href={`tel:${p}`} className="text-accent hover:underline">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                  <a href={`tel:${contactInfo.mobile}`} className="text-accent hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <div className="space-y-1">
                    {contactInfo.email.map((e, i) => (
                      <a key={i} href={`mailto:${e}`} className="text-accent hover:underline block">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="text-xl font-bold mb-6 text-primary">Contact Persons</h3>
              <div className="space-y-6">
                {contactInfo.contacts.map((contact, index) => (
                  <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                    <p className="font-bold text-foreground mb-2">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Phone:</strong> {contact.phone}
                    </p>
                    {contact.email && (
                      <p className="text-sm text-muted-foreground">
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                          {contact.email}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-primary/5">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Website</p>
                <a href={`https://${contactInfo.website}`} className="text-accent hover:underline font-medium">
                  {contactInfo.website}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">GST Number</p>
                <p className="text-foreground font-medium">{contactInfo.gst}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Business Since</p>
                <p className="text-foreground font-medium">1994 (30 Years)</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
