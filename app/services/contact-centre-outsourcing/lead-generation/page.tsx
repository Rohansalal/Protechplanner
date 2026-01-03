import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, ArrowRight, CheckCircle, Target, Zap, BarChart3, Filter, Database, TrendingUp } from "lucide-react"

export default function LeadGenerationPage() {
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Lead Generation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Generate <span className="text-primary">High-Quality Leads</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Strategic lead generation services that identify, qualify, and nurture potential customers, creating a steady pipeline of qualified opportunities for your sales team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Lead Generation
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
                src="/contact-centre-lead-generation.jpg"
                alt="Lead Generation Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Lead Generation Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Data-driven lead generation strategies that combine advanced targeting, professional outreach, and systematic qualification to deliver sales-ready leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Strategic Targeting",
                description: "Precision targeting based on demographic, firmographic, and behavioral data",
                features: ["Ideal customer profiling", "Market segmentation", "Competitor analysis", "Opportunity mapping"]
              },
              {
                icon: Zap,
                title: "Multi-Channel Outreach",
                description: "Integrated outreach across phone, email, social media, and digital channels",
                features: ["Channel optimization", "Message personalization", "Timing optimization", "Response tracking"]
              },
              {
                icon: Filter,
                title: "Advanced Qualification",
                description: "Rigorous lead qualification using BANT and other proven methodologies",
                features: ["BANT qualification", "Lead scoring", "Interest assessment", "Timeline evaluation"]
              },
              {
                icon: Database,
                title: "Data Intelligence",
                description: "Comprehensive data management and enrichment for better targeting",
                features: ["Data cleansing", "Contact enrichment", "List building", "Database management"]
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Real-time tracking and optimization of lead generation campaigns",
                features: ["Conversion tracking", "ROI measurement", "Campaign optimization", "Performance reporting"]
              },
              {
                icon: TrendingUp,
                title: "Pipeline Management",
                description: "Systematic management of leads through the entire sales funnel",
                features: ["Lead nurturing", "Follow-up automation", "Pipeline reporting", "Sales alignment"]
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

      {/* Lead Generation Performance */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven Lead Generation Results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our strategic approach to lead generation delivers measurable results and a consistent pipeline of qualified opportunities.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    metric: "Lead Qualification Rate",
                    value: "42%",
                    description: "Prospects that meet qualification criteria"
                  },
                  {
                    metric: "Appointment Setting Success",
                    value: "28%",
                    description: "Qualified leads that schedule meetings"
                  },
                  {
                    metric: "Conversion to Opportunity",
                    value: "35%",
                    description: "Leads that become sales opportunities"
                  },
                  {
                    metric: "Cost Per Qualified Lead",
                    value: "$45",
                    description: "Average cost for sales-ready leads"
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
              <h3 className="text-2xl font-bold mb-6 text-center">Lead Generation Campaign Types</h3>
              <div className="space-y-6">
                {[
                  {
                    type: "Cold Calling Campaigns",
                    focus: "New customer acquisition",
                    volume: "500-2000 calls/month",
                    qualification: "BANT methodology"
                  },
                  {
                    type: "Warm Lead Follow-up",
                    focus: "Marketing qualified leads",
                    volume: "200-800 leads/month",
                    qualification: "Interest & timing"
                  },
                  {
                    type: "Appointment Setting",
                    focus: "Sales meeting scheduling",
                    volume: "50-200 appointments/month",
                    qualification: "Decision-maker access"
                  },
                  {
                    type: "Event Follow-up",
                    focus: "Trade show & webinar leads",
                    volume: "Custom based on event",
                    qualification: "Engagement level"
                  }
                ].map((campaign, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{campaign.type}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{campaign.volume}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Focus: {campaign.focus}</div>
                    <div className="text-xs text-primary">Qualification: {campaign.qualification}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Fill Your Sales Pipeline?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us generate a consistent stream of qualified leads that convert into customers and drive revenue growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Lead Generation Campaign
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
      <AutoConsultationModal serviceName="Lead Generation" />
    </main>
  )
}