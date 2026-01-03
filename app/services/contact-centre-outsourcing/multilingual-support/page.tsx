import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, ArrowRight, CheckCircle, Languages, Users, Clock, Target, Shield, Zap } from "lucide-react"

export default function MultilingualSupportPage() {
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
                <span className="text-primary font-semibold">Multilingual Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Connect with <span className="text-primary">Global Customers</span> in Their Language
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive multilingual support services that break down language barriers, build cultural connections, and provide exceptional customer experiences to your global audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Launch Multilingual Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/contact-centre-outsourcing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/contact-centre-multilingual-support.jpg"
                alt="Multilingual Support Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Global Language Support Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive multilingual support services that combine linguistic expertise with cultural understanding to serve your global customer base effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Languages,
                title: "Language Specialization",
                description: "Native-speaking agents with deep cultural and linguistic expertise",
                features: ["Native language fluency", "Cultural context", "Regional dialects", "Industry terminology"]
              },
              {
                icon: Users,
                title: "Cultural Competence",
                description: "Cultural sensitivity and understanding for authentic customer interactions",
                features: ["Cultural training", "Local customs", "Communication styles", "Relationship building"]
              },
              {
                icon: Clock,
                title: "24/7 Global Coverage",
                description: "Round-the-clock support across all time zones and regions",
                features: ["Time zone optimization", "Follow-the-sun model", "Holiday coverage", "Emergency support"]
              },
              {
                icon: Target,
                title: "Market-Specific Solutions",
                description: "Tailored support strategies for specific regional markets and customer segments",
                features: ["Market research", "Local compliance", "Regional preferences", "Customized solutions"]
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous quality monitoring and linguistic accuracy verification",
                features: ["Language quality checks", "Cultural appropriateness", "Accuracy monitoring", "Performance metrics"]
              },
              {
                icon: Zap,
                title: "Rapid Scaling",
                description: "Flexible scaling of language capabilities to match business growth",
                features: ["Quick language onboarding", "Resource allocation", "Demand forecasting", "Capacity planning"]
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

      {/* Language Coverage */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Language Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide support in multiple languages to serve your global customer base across different regions and markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: "European Languages",
                languages: "Spanish, French, German, Italian, Dutch",
                coverage: "Western & Eastern Europe",
                expertise: "EU market regulations"
              },
              {
                region: "Asian Languages",
                languages: "Mandarin, Japanese, Korean, Hindi, Thai",
                coverage: "East & Southeast Asia",
                expertise: "Asian business customs"
              },
              {
                region: "Americas Coverage",
                languages: "Portuguese, Spanish, French, English",
                coverage: "North & South America",
                expertise: "Regional variations"
              },
              {
                region: "Middle East & Africa",
                languages: "Arabic, Hebrew, Turkish, Swahili",
                coverage: "MENA region & Africa",
                expertise: "Cultural nuances"
              }
            ].map((region, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{region.region}</CardTitle>
                  <CardDescription>{region.coverage}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Languages</div>
                      <div className="text-xs text-muted-foreground">{region.languages}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Regional Expertise</div>
                      <div className="text-xs text-muted-foreground">{region.expertise}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Expand Your Global Reach?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us break down language barriers and provide exceptional multilingual support that connects you with customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Multilingual Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/contact-centre-outsourcing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Multilingual Support" />
    </main>
  )
}