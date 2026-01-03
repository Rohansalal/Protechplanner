import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, ArrowRight, Image, Video, PenTool, Palette, Zap, CheckCircle, Users } from "lucide-react"

export default function ContentCreationPage() {
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Content Creation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Captivating Content That <span className="text-primary">Drives Engagement</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional content creation services that tell your brand's story and connect with your audience across all social media platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Create My Content
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
                src="/social-media-content-creation.jpg"
                alt="Social Media Content Creation Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Content Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From static graphics to dynamic videos, we create content that captures attention and drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Image,
                title: "Visual Graphics",
                description: "Eye-catching static and animated graphics for all platforms",
                features: ["Custom templates", "Brand-aligned designs", "Platform-optimized sizes", "Trending styles"]
              },
              {
                icon: Video,
                title: "Video Content",
                description: "Engaging video content that tells your brand story",
                features: ["Short-form videos", "Reels & TikTok", "Story content", "Video editing"]
              },
              {
                icon: PenTool,
                title: "Copywriting",
                description: "Compelling captions and messaging that resonates",
                features: ["Engaging captions", "Hashtag strategy", "Call-to-actions", "Brand voice consistency"]
              },
              {
                icon: Palette,
                title: "Brand Design",
                description: "Consistent visual identity across all content",
                features: ["Brand guidelines", "Color palettes", "Typography", "Visual hierarchy"]
              },
              {
                icon: Zap,
                title: "Interactive Content",
                description: "Content that encourages audience participation",
                features: ["Polls & quizzes", "Interactive stories", "User-generated content", "Contests"]
              },
              {
                icon: Users,
                title: "Strategy Development",
                description: "Content strategy aligned with business goals",
                features: ["Content planning", "Audience research", "Competitive analysis", "Performance optimization"]
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
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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

      {/* Content Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Content Creation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A streamlined process that ensures consistent, high-quality content delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We learn about your brand, audience, and goals to create a tailored content strategy."
              },
              {
                step: "02",
                title: "Content Planning",
                description: "Development of content calendar and creative concepts aligned with your objectives."
              },
              {
                step: "03",
                title: "Creation & Production",
                description: "Our team creates engaging content optimized for each social media platform."
              },
              {
                step: "04",
                title: "Review & Optimization",
                description: "Content review, performance analysis, and continuous optimization based on results."
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Elevate Your Content?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create compelling content that captures attention and drives engagement for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Creating Content
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
      <AutoConsultationModal serviceName="Content Creation" />
    </main>
  )
}