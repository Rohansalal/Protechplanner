import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, ArrowRight, Zap, Users, BarChart3, CheckCircle, Target, RefreshCw } from "lucide-react"

export default function EmailMarketingPage() {
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
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Email Marketing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Nurture Relationships with <span className="text-primary">Strategic Email</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Personalized email marketing campaigns that build customer loyalty, drive conversions, and deliver exceptional ROI through targeted communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Launch Email Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/digital-marketing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/digital-marketing-email-campaigns.jpg"
                alt="Email Marketing Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Email Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Email Marketing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From list building to automation, we create email campaigns that convert and build lasting customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "List Building",
                description: "Grow your email list with targeted lead generation strategies",
                features: ["Lead magnet creation", "Opt-in forms", "Landing pages", "List segmentation"]
              },
              {
                icon: Zap,
                title: "Email Automation",
                description: "Set up automated email sequences that nurture leads 24/7",
                features: ["Welcome sequences", "Drip campaigns", "Behavioral triggers", "Lead scoring"]
              },
              {
                icon: Target,
                title: "Campaign Strategy",
                description: "Strategic planning for maximum engagement and conversions",
                features: ["Content planning", "Send time optimization", "A/B testing", "Personalization"]
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Track and optimize email performance with detailed analytics",
                features: ["Open rate tracking", "Click-through analysis", "Conversion tracking", "ROI measurement"]
              },
              {
                icon: CheckCircle,
                title: "Template Design",
                description: "Professional email templates that reflect your brand",
                features: ["Responsive design", "Brand alignment", "Mobile optimization", "Accessibility"]
              },
              {
                icon: RefreshCw,
                title: "List Management",
                description: "Maintain list health and improve deliverability",
                features: ["List cleaning", "Spam testing", "Compliance management", "Re-engagement campaigns"]
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

      {/* Email Performance */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven Email Marketing Results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our strategic approach to email marketing delivers exceptional engagement and conversion rates.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    metric: "Average Open Rate",
                    value: "28.5%",
                    description: "Across all client campaigns (industry avg: 21%)"
                  },
                  {
                    metric: "Click-Through Rate",
                    value: "4.8%",
                    description: "Higher engagement through targeted content"
                  },
                  {
                    metric: "Conversion Rate",
                    value: "3.2%",
                    description: "From email clicks to conversions"
                  },
                  {
                    metric: "ROI on Email Marketing",
                    value: "4,200%",
                    description: "Average return on email marketing investment"
                  }
                ].map((result, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{result.metric}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {result.value}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Email Campaign Types</h3>
              <div className="space-y-6">
                {[
                  {
                    type: "Welcome Series",
                    purpose: "Onboarding new subscribers",
                    frequency: "3-5 emails over 2 weeks",
                    results: "25% engagement rate"
                  },
                  {
                    type: "Newsletter",
                    purpose: "Regular content delivery",
                    frequency: "Weekly or bi-weekly",
                    results: "18% open rate average"
                  },
                  {
                    type: "Promotional",
                    purpose: "Drive sales and conversions",
                    frequency: "As needed for offers",
                    results: "5.2% conversion rate"
                  },
                  {
                    type: "Re-engagement",
                    purpose: "Win back inactive subscribers",
                    frequency: "Quarterly campaigns",
                    results: "12% re-engagement rate"
                  }
                ].map((campaign, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{campaign.type}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{campaign.results}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{campaign.purpose}</div>
                    <div className="text-xs text-muted-foreground">Frequency: {campaign.frequency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Launch High-Converting Email Campaigns?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create email marketing strategies that nurture leads and drive consistent revenue for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Email Marketing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/digital-marketing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Email Marketing" />
    </main>
  )
}