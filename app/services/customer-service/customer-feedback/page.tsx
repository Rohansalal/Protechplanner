// app/services/customer-service/customer-feedback/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BarChart3, CheckCircle, ArrowRight, TrendingUp, Users, MessageCircle, Zap } from "lucide-react"

export default function CustomerFeedbackPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Customer Feedback</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Actionable <span className="text-accent">Customer Insights</span> for Business Growth
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Transform customer feedback into valuable business intelligence. Our comprehensive feedback collection and analysis services help you understand your customers and drive improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Feedback Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/customer-service">View All Customer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/customer-feedback-analysis.jpg"
                alt="Customer Feedback Analysis and Insights"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content Boxes - Similar structure as other pages */}
      {/* ... Content boxes for Customer Feedback ... */}

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Customer Feedback Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Comprehensive feedback solutions to help you understand and improve customer experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$30/hour",
                description: "Essential feedback collection",
                features: ["Survey creation", "Basic feedback collection", "Standard reporting", "Email surveys"],
              },
              {
                name: "Professional",
                price: "$45/hour",
                description: "Advanced feedback analytics",
                features: [
                  "Multi-channel feedback collection",
                  "Sentiment analysis",
                  "Advanced reporting",
                  "Customer segmentation",
                  "Actionable insights",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Comprehensive feedback intelligence",
                features: [
                  "Real-time feedback monitoring",
                  "Predictive analytics",
                  "Custom dashboard",
                  "Competitive analysis",
                  "Strategic recommendations",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-accent shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Unlock Customer Insights?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Transform customer feedback into actionable business intelligence with our professional feedback services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Feedback Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/customer-service">View All Customer Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Customer Feedback" />
    </main>
  )
}