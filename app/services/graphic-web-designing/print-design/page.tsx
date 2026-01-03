import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Printer, ArrowRight, CheckCircle, FileText, Package, Mail, Users, Target, Palette } from "lucide-react"

export default function PrintDesignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Printer className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Print Design</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Create <span className="text-primary">Tangible Brand Experiences</span> That Last
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional print design services that transform your brand into physical materials that make lasting impressions and build credibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design Print Materials
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/graphic-web-designing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/graphic-design-print-materials.jpg"
                alt="Print Design Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Print Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Print Design Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From business cards to packaging, we create print materials that communicate your brand story and leave lasting impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Business Stationery",
                description: "Professional business cards, letterheads, and envelopes",
                features: ["Premium paper stocks", "Print finishing", "Brand consistency", "Multiple variations"]
              },
              {
                icon: Users,
                title: "Marketing Collateral",
                description: "Brochures, flyers, and promotional materials that convert",
                features: ["Compelling layouts", "High-quality imagery", "Clear messaging", "Call-to-action design"]
              },
              {
                icon: Package,
                title: "Packaging Design",
                description: "Eye-catching packaging that stands out on shelves",
                features: ["Structural design", "Brand application", "Regulatory compliance", "Production-ready files"]
              },
              {
                icon: Mail,
                title: "Direct Mail Design",
                description: "Targeted mail pieces that capture attention and drive response",
                features: ["Personalization design", "Response mechanisms", "Format optimization", "Mailing guidelines"]
              },
              {
                icon: Target,
                title: "Presentation Design",
                description: "Professional presentations that communicate effectively",
                features: ["Slide decks", "Infographic elements", "Chart design", "Speaker notes"]
              },
              {
                icon: Palette,
                title: "Print Production",
                description: "Expert guidance through the entire print production process",
                features: ["Print specifications", "Color management", "Paper selection", "Quality control"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Print Materials */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Specialized Print Materials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We design a wide range of print materials to meet your business communication needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Business Essentials",
                items: "Business Cards, Letterheads, Envelopes",
                turnaround: "3-5 business days",
                bestFor: "Professional correspondence"
              },
              {
                category: "Marketing Materials",
                items: "Brochures, Flyers, Posters",
                turnaround: "5-7 business days",
                bestFor: "Promotional campaigns"
              },
              {
                category: "Corporate Documents",
                items: "Reports, Presentations, Proposals",
                turnaround: "4-6 business days",
                bestFor: "Business communications"
              },
              {
                category: "Packaging & Labels",
                items: "Product Packaging, Labels, Stickers",
                turnaround: "7-10 business days",
                bestFor: "Product presentation"
              }
            ].map((material, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{material.category}</CardTitle>
                  <CardDescription>{material.items}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Turnaround Time</div>
                      <div className="text-xs text-muted-foreground">{material.turnaround}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Best For</div>
                      <div className="text-xs text-muted-foreground">{material.bestFor}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Make a Lasting Impression?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create professional print materials that elevate your brand and communicate your message with impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Print Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/graphic-web-designing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Print Design" />
    </main>
  )
}