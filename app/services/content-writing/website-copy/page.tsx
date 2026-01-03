// app/services/content-writing/website-copy/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Target, MousePointer, ShoppingCart, Users, ArrowUpRight, Home, Mail, HelpCircle, Shield, Zap } from "lucide-react"

export default function WebsiteCopyPage() {
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
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Website Copywriting</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Conversion-Focused <span className="text-primary">Website Copy</span> That Sells
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We specialize in crafting compelling website copy that transforms visitors into customers. 
                Our strategic approach ensures every word guides users toward conversion while building trust in your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Optimize Your Website Copy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#website">View Website Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/website-copywriting-conversion.jpg" alt="Website Copywriting" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Strategic Website Copy Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine conversion psychology with compelling storytelling to create website copy that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "User-Focused Messaging",
                description: "Copy that speaks directly to your ideal customers' needs, desires, and pain points"
              },
              {
                icon: Zap,
                title: "Conversion Optimization",
                description: "Strategic CTAs and persuasive elements designed to guide users toward action"
              },
              {
                icon: Shield,
                title: "Trust Building",
                description: "Social proof, guarantees, and transparent communication that builds credibility"
              },
              {
                icon: Users,
                title: "Brand Voice Consistency",
                description: "Maintaining your unique brand personality across all website pages"
              },
              {
                icon: MousePointer,
                title: "User Journey Mapping",
                description: "Copy that guides visitors seamlessly through your conversion funnel"
              },
              {
                icon: ArrowUpRight,
                title: "SEO Integration",
                description: "Search-optimized copy that ranks well while maintaining natural readability"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Website Copy Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle every aspect of your website's messaging to create a cohesive, conversion-focused experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Homepage Copy",
                description: "Compelling value propositions and clear navigation that captures attention immediately",
                features: ["Hero section copy", "Value proposition", "Primary CTAs", "Trust indicators"]
              },
              {
                icon: Target,
                title: "Landing Pages",
                description: "High-converting pages designed for specific campaigns, products, or services",
                features: ["Benefit-focused headlines", "Problem-solution framework", "Social proof integration", "Urgency elements"]
              },
              {
                icon: ShoppingCart,
                title: "Product/Service Pages",
                description: "Persuasive copy that highlights benefits and addresses customer objections",
                features: ["Feature-benefit translation", "Use case scenarios", "Objection handling", "Clear pricing structure"]
              },
              {
                icon: Users,
                title: "About Us Pages",
                description: "Authentic storytelling that builds emotional connection and trust with visitors",
                features: ["Brand story", "Mission & values", "Team introductions", "Company journey"]
              },
              {
                icon: Mail,
                title: "Contact Pages",
                description: "Clear, reassuring copy that removes friction and encourages inquiries",
                features: ["Multiple contact options", "Response time expectations", "Location details", "FAQ integration"]
              },
              {
                icon: HelpCircle,
                title: "FAQ & Support Pages",
                description: "Helpful content that reduces support requests and builds customer confidence",
                features: ["Anticipated questions", "Clear instructions", "Troubleshooting guides", "Resource links"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Website Copy Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Discovery & Audit",
                    description: "Comprehensive analysis of your current website, competitors, and target audience"
                  },
                  {
                    step: "Strategy Development",
                    description: "Creating a messaging framework that aligns with your business goals and user needs"
                  },
                  {
                    step: "Copywriting & Optimization",
                    description: "Crafting compelling copy for each page with clear conversion paths and SEO elements"
                  },
                  {
                    step: "Review & Refinement",
                    description: "Collaborative feedback process to ensure the copy meets your expectations"
                  },
                  {
                    step: "Implementation Support",
                    description: "Guidance for integrating the copy into your website with optimal formatting"
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
              <h2 className="text-3xl font-bold mb-8">Expected Results</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { metric: "25-40%", description: "Increase in overall conversion rates" },
                      { metric: "50%+", description: "Reduction in bounce rates" },
                      { metric: "2-3x", description: "More time spent on key pages" },
                      { metric: "30%+", description: "Improvement in lead quality" },
                      { metric: "60%+", description: "Higher engagement with CTAs" }
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Transform Your Website Copy?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's create website copy that converts visitors into customers and significantly grows your business revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Started with Website Copy
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
      <AutoConsultationModal serviceName="Website Copy" />
    </main>
  )
}