// app/services/content-writing/blog-posts-articles/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, Search, Target, TrendingUp, Users, BarChart, Eye, Share2, Calendar } from "lucide-react"

export default function BlogPostsArticlesPage() {
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
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Blog Posts & Articles</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Expert <span className="text-primary">Blog Content</span> That Drives Traffic & Authority
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We specialize in creating SEO-optimized blog posts and articles that establish your thought leadership, 
                attract qualified traffic, and convert readers into loyal customers. Our proven content strategy delivers measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Your Blog Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#blog">View Blog Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/blog-writing-content-strategy.jpg" alt="Blog Writing Strategy" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Our Blog Writing Service Stands Out</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just write content—we create strategic assets that drive real business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Data-Driven SEO Strategy",
                description: "Our comprehensive keyword research and competitor analysis ensure your content ranks for high-value terms that drive qualified traffic."
              },
              {
                icon: Users,
                title: "Audience-Focused Writing",
                description: "We create content that resonates with your target audience, addressing their pain points and providing genuine solutions."
              },
              {
                icon: TrendingUp,
                title: "Conversion Optimization",
                description: "Every piece includes strategic CTAs and engagement elements designed to move readers through your sales funnel."
              },
              {
                icon: Calendar,
                title: "Consistent Content Calendar",
                description: "We help you maintain a regular publishing schedule that keeps your audience engaged and improves SEO performance."
              },
              {
                icon: BarChart,
                title: "Performance Tracking",
                description: "Regular analytics reporting shows exactly how your content is performing and where opportunities exist."
              },
              {
                icon: Target,
                title: "Industry Expertise",
                description: "Our writers specialize in various industries, ensuring accurate, authoritative content that builds trust."
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

      {/* What We Deliver */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Comprehensive Blog Writing Services</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">SEO-Optimized Blog Posts</h3>
                    <p className="text-muted-foreground">800-2000 word articles targeting specific keywords with comprehensive coverage and engaging storytelling.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Thought Leadership Articles</h3>
                    <p className="text-muted-foreground">In-depth pieces that establish your authority and provide unique insights in your industry.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How-To Guides & Tutorials</h3>
                    <p className="text-muted-foreground">Step-by-step content that helps your audience solve problems and positions you as a helpful resource.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry News & Analysis</h3>
                    <p className="text-muted-foreground">Timely content that keeps your audience informed about relevant developments in your field.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Our Blog Writing Process</h2>
              <div className="space-y-6">
                {[
                  { step: "Strategy & Research", description: "Comprehensive keyword research and content planning aligned with your business goals" },
                  { step: "Outline Development", description: "Detailed structure ensuring logical flow and comprehensive topic coverage" },
                  { step: "Expert Writing", description: "Engaging, well-researched content written by industry-specialized writers" },
                  { step: "SEO Optimization", description: "Strategic keyword placement, meta descriptions, and internal linking" },
                  { step: "Quality Assurance", description: "Thorough editing, fact-checking, and plagiarism verification" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-background rounded-lg border">
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
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven Results with Our Blog Content</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We deliver measurable impact that drives business growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, metric: "247%", description: "Average organic traffic growth" },
              { icon: Share2, metric: "189%", description: "Increase in social shares" },
              { icon: Users, metric: "156%", description: "More email subscribers" },
              { icon: BarChart, metric: "83%", description: "Higher conversion rates" }
            ].map((result, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <result.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Transform Your Blog Content?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's create compelling blog content that establishes your authority, drives qualified traffic, and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Blog Strategy
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
      <AutoConsultationModal serviceName="Blog Posts & Articles" />
    </main>
  )
}