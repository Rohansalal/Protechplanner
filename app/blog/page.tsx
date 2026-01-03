import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    title: "10 Ways Virtual Assistants Can Transform Your Business Operations",
    excerpt:
      "Discover how virtual assistants can streamline your workflows, reduce costs, and help you focus on strategic growth initiatives.",
    author: "Jennifer Martinez",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Business Growth",
    image: "/business-transformation-virtual-assistant-producti.jpg",
  },
  {
    title: "The Complete Guide to Outsourcing Customer Service",
    excerpt:
      "Learn best practices for outsourcing customer service to virtual assistants while maintaining quality and customer satisfaction.",
    author: "David Thompson",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Customer Service",
    image: "/customer-service-outsourcing-virtual-support.jpg",
  },
  {
    title: "Maximizing ROI: How to Measure Virtual Assistant Performance",
    excerpt:
      "Key metrics and strategies to track the success of your virtual assistant partnership and ensure maximum return on investment.",
    author: "Sarah Kim",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance",
    image: "/roi-measurement-business-analytics-performance-tra.jpg",
  },
  {
    title: "Remote Work Best Practices: Managing Virtual Teams Effectively",
    excerpt:
      "Essential tips for managing virtual assistants and remote teams to ensure productivity, communication, and successful outcomes.",
    author: "Jennifer Martinez",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Management",
    image: "/remote-team-management-virtual-collaboration.jpg",
  },
  {
    title: "Social Media Management: Why You Need a Virtual Assistant",
    excerpt:
      "Explore how virtual assistants can elevate your social media presence with consistent posting, engagement, and strategic content.",
    author: "David Thompson",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "Digital Marketing",
    image: "/social-media-management-virtual-assistant-marketin.jpg",
  },
  {
    title: "Cost-Effective Business Growth: The Virtual Assistant Advantage",
    excerpt:
      "Learn how virtual assistants provide a cost-effective solution for scaling your business without the overhead of full-time employees.",
    author: "Sarah Kim",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Business Growth",
    image: "/cost-effective-business-growth-virtual-assistant-s.jpg",
  },
]

const categories = ["All", "Business Growth", "Customer Service", "Performance", "Management", "Digital Marketing"]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Virtual Assistant <span className="text-primary">Insights & Tips</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay updated with the latest trends, best practices, and insights in virtual assistance and business
            operations. Learn how to maximize your productivity and grow your business.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="border-2 hover:border-primary/20 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                        {blogPosts[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-balance">{blogPosts[0].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                      </div>
                      <Button asChild>
                        <Link href="#" className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary/20 transition-colors overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href="#" className="flex items-center gap-1">
                            Read
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={index === 0 ? "default" : "ghost"}
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">{category}</Link>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Get the latest virtual assistant tips and business insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-md text-foreground bg-background border-0"
                    />
                  </div>
                  <Button variant="secondary" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="space-y-2">
                      <Link
                        href="#"
                        className="text-sm font-semibold hover:text-primary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      {index < 2 && <hr className="border-border" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Implement These Strategies?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our expert virtual assistants help you put these insights into action and transform your business
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}