// app/services/content-writing/marketing-materials/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, PenTool, FileText, Briefcase, Award, Users, BarChart, Target, Shield } from "lucide-react"

export default function MarketingMaterialsPage() {
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
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Marketing Materials</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">Marketing Collateral</span> That Converts
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We create comprehensive marketing materials that establish credibility, demonstrate expertise, 
                and drive business growth through compelling storytelling and persuasive messaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Create Marketing Materials
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#marketing">View Marketing Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/marketing-materials-content.jpg" alt="Marketing Materials Content" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Marketing Materials Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating all types of marketing collateral that builds trust and drives business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Case Studies",
                description: "Compelling success stories that demonstrate your expertise and proven results for clients",
                features: ["Client success stories", "Problem-solution format", "Measurable results", "Testimonial integration"]
              },
              {
                icon: Briefcase,
                title: "Whitepapers",
                description: "In-depth research documents that establish thought leadership and industry authority",
                features: ["Research-based content", "Industry insights", "Data analysis", "Expert positioning"]
              },
              {
                icon: Award,
                title: "Brochures & Flyers",
                description: "Professional print and digital collateral that showcases your services and value proposition",
                features: ["Benefit-focused copy", "Clear service descriptions", "Call-to-action optimization", "Brand consistency"]
              },
              {
                icon: Users,
                title: "Sales Presentations",
                description: "Persuasive presentation content that effectively communicates your value to prospects",
                features: ["Engaging storytelling", "Problem-agitation-solution", "Visual content planning", "Objection handling"]
              },
              {
                icon: Shield,
                title: "Press Releases",
                description: "Newsworthy announcements that generate media coverage and brand awareness",
                features: ["Newsworthy angles", "Media-friendly format", "Quote integration", "Distribution guidance"]
              },
              {
                icon: BarChart,
                title: "Business Proposals",
                description: "Professional proposals that clearly articulate value and win new business opportunities",
                features: ["Client-focused messaging", "Solution positioning", "ROI demonstration", "Professional formatting"]
              }
            ].map((material, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <material.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{material.title}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {material.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
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

      {/* Our Expertise */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Our Marketing Materials Stand Out</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine strategic thinking with compelling storytelling to create marketing collateral that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Audience-Focused",
                description: "Content tailored to resonate with your specific target audience and decision-makers"
              },
              {
                icon: Shield,
                title: "Credibility Building",
                description: "Materials that establish trust and position your brand as an industry authority"
              },
              {
                icon: BarChart,
                title: "Results-Oriented",
                description: "Focus on measurable outcomes and clear value propositions that drive action"
              },
              {
                icon: Users,
                title: "Brand Consistency",
                description: "Maintaining your unique brand voice and messaging across all marketing collateral"
              }
            ].map((expertise, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <expertise.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{expertise.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{expertise.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Marketing Materials Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Discovery & Research",
                    description: "Understanding your business objectives, target audience, and competitive landscape"
                  },
                  {
                    step: "Content Strategy",
                    description: "Developing messaging frameworks and content structures aligned with your goals"
                  },
                  {
                    step: "Comprehensive Writing",
                    description: "Crafting compelling, well-researched content that tells your brand story effectively"
                  },
                  {
                    step: "Review & Refinement",
                    description: "Collaborative feedback process to ensure the content meets your expectations"
                  },
                  {
                    step: "Final Polish & Delivery",
                    description: "Professional formatting and preparation of materials for immediate use"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.step}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { metric: "40-60%", description: "Higher conversion rates from proposals" },
                      { metric: "3x", description: "More qualified leads from case studies" },
                      { metric: "50%+", description: "Increase in brand credibility and trust" },
                      { metric: "35%+", description: "Faster sales cycles with better materials" },
                      { metric: "2-3x", description: "More media coverage with professional press releases" }
                    ].map((result, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <span className="text-2xl font-bold text-primary">{result.metric}</span>
                        <span className="text-muted-foreground text-right">{result.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Elevate Your Marketing Materials?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's create professional marketing collateral that establishes your authority, builds trust with prospects, and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Create Marketing Materials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/content-writing">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Marketing Materials" />
    </main>
  )
}