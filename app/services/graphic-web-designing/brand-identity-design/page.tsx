import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, ArrowRight, CheckCircle, Palette, Type, Layers, Target, Users, Zap } from "lucide-react"

export default function BrandIdentityDesignPage() {
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
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Brand Identity Design</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Build a <span className="text-primary">Memorable Brand</span> That Stands Out
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive brand identity design that creates a cohesive visual language, builds recognition, and establishes emotional connections with your target audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design My Brand
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
                src="/graphic-design-brand-identity.jpg"
                alt="Brand Identity Design Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Brand Identity Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From logo creation to comprehensive brand guidelines, we build identities that tell your unique story and drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Palette,
                title: "Logo Design",
                description: "Unique, memorable logos that capture your brand essence and values",
                features: ["Multiple concepts", "Vector formats", "Color variations", "Application guidelines"]
              },
              {
                icon: Type,
                title: "Typography Systems",
                description: "Strategic font selection that enhances readability and brand personality",
                features: ["Font pairing", "Hierarchy systems", "Web fonts", "License management"]
              },
              {
                icon: Layers,
                title: "Brand Guidelines",
                description: "Comprehensive manuals ensuring consistent brand application",
                features: ["Usage rules", "Color systems", "Logo variations", "Do's and don'ts"]
              },
              {
                icon: Target,
                title: "Brand Strategy",
                description: "Research-based approach to positioning and visual identity development",
                features: ["Market research", "Competitor analysis", "Target audience", "Brand positioning"]
              },
              {
                icon: Users,
                title: "Brand Applications",
                description: "Implementation across all touchpoints for cohesive brand presence",
                features: ["Business cards", "Letterheads", "Email signatures", "Social media kits"]
              },
              {
                icon: Zap,
                title: "Brand Evolution",
                description: "Refreshing and modernizing existing brands for renewed impact",
                features: ["Brand audits", "Modernization", "Rebranding strategy", "Launch planning"]
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

      {/* Brand Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Brand Creation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A structured approach to ensure your brand identity perfectly represents your business and resonates with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description: "Deep dive into your business, market, and audience"
              },
              {
                step: "02",
                title: "Strategy & Concept",
                description: "Develop brand positioning and visual direction"
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Create logo, color palette, and typography systems"
              },
              {
                step: "04",
                title: "Application & Guidelines",
                description: "Implement across touchpoints and create usage rules"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your Unique Brand Identity?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create a compelling brand identity that differentiates your business and builds lasting customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Brand Design
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
      <AutoConsultationModal serviceName="Brand Identity Design" />
    </main>
  )
}