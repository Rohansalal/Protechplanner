import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, Zap, BarChart3, CheckCircle, RefreshCw, Target } from "lucide-react"

export default function PostSchedulingPage() {
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
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Post Scheduling</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Strategic Scheduling for <span className="text-primary">Maximum Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Optimize your social media presence with data-driven scheduling that ensures your content reaches the right audience at the perfect time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Optimize My Schedule
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/social-media-management">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/social-media-scheduling-dashboard.jpg"
                alt="Social Media Post Scheduling Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Smart Scheduling Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Advanced scheduling features that save time and maximize your social media performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "Optimal Timing",
                description: "Post when your audience is most active for maximum engagement",
                features: ["Audience activity analysis", "Time zone optimization", "Peak engagement times", "A/B testing"]
              },
              {
                icon: Zap,
                title: "Multi-Platform",
                description: "Schedule across all major social media platforms from one dashboard",
                features: ["Cross-platform scheduling", "Platform-specific optimization", "Batch scheduling", "API integration"]
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Monitor and adjust scheduling based on performance data",
                features: ["Engagement analytics", "Performance reports", "Schedule optimization", "ROI tracking"]
              },
              {
                icon: RefreshCw,
                title: "Content Recycling",
                description: "Automatically reshare top-performing content",
                features: ["Evergreen content recycling", "Performance-based resharing", "Content variety", "Audience growth"]
              },
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Align posting schedule with marketing campaigns and events",
                features: ["Campaign integration", "Event scheduling", "Seasonal planning", "Content sequencing"]
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Ensure content quality and consistency across all posts",
                features: ["Content review process", "Brand consistency", "Error prevention", "Quality control"]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Supported Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We manage scheduling across all major social media platforms with platform-specific best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Facebook", color: "bg-blue-500" },
              { name: "Instagram", color: "bg-pink-500" },
              { name: "Twitter", color: "bg-black" },
              { name: "LinkedIn", color: "bg-blue-700" },
              { name: "Pinterest", color: "bg-red-600" },
              { name: "TikTok", color: "bg-black" }
            ].map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-sm">{platform.name[0]}</span>
                </div>
                <h3 className="font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-background rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Weekly Scheduling Sample</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday", posts: "3-4 posts", focus: "Content variety" },
                    { day: "Tuesday", posts: "2-3 posts", focus: "Engagement focus" },
                    { day: "Wednesday", posts: "3-4 posts", focus: "Mid-week boost" },
                    { day: "Thursday", posts: "2-3 posts", focus: "Audience interaction" },
                    { day: "Friday", posts: "3-4 posts", focus: "Weekend planning" },
                    { day: "Saturday", posts: "1-2 posts", focus: "Leisure content" },
                    { day: "Sunday", posts: "1-2 posts", focus: "Community building" }
                  ].map((day, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="font-medium">{day.day}</div>
                        <div className="text-sm text-muted-foreground">{day.focus}</div>
                      </div>
                      <div className="text-right font-semibold">{day.posts}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Scheduling Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Save 10+ hours per week on manual posting",
                    "Increase engagement by 40% with optimal timing",
                    "Maintain consistent brand presence",
                    "Scale content across multiple platforms",
                    "Track and optimize performance in real-time",
                    "Coordinate with marketing campaigns"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Posting Schedule?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us handle your social media scheduling so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Scheduling Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/social-media-management">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Post Scheduling" />
    </main>
  )
}