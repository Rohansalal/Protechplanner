"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  TrendingUp,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Heart,
  Award,
  Clock,
  DollarSign,
  Sparkles
} from "lucide-react"

const stats = [
  { icon: DollarSign, label: "Cost Savings", value: "78%", description: "Average reduction in operating costs" },
  { icon: TrendingUp, label: "Productivity Boost", value: "35%", description: "Increase in workforce efficiency" },
  { icon: Globe, label: "Market Growth", value: "$8.6B", description: "Projected market by 2028" },
  { icon: Shield, label: "Client Satisfaction", value: "98%", description: "Satisfaction rate maintained" },
]

const team = [
  {
    name: "Jennifer Martinez",
    role: "Founder & CEO",
    bio: "Former Fortune 500 executive with 15+ years in operations management. Passionate about helping businesses scale efficiently through strategic virtual assistance.",
    image: "/professional-woman-ceo-executive-headshot.jpg",
  },
  {
    name: "David Thompson",
    role: "Head of Operations",
    bio: "Expert in process optimization and team management with a proven track record of delivering exceptional service quality across global teams.",
    image: "/professional-operations-manager.png",
  },
  {
    name: "Sarah Kim",
    role: "Client Success Manager",
    bio: "Dedicated to building lasting partnerships and ensuring our clients maximize the value of their virtual assistant relationships.",
    image: "/professional-woman-client-success-manager-headshot.jpg",
  },
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from our rigorous 5-step vetting process to ongoing training and quality assurance.",
    color: "bg-blue-50 text-[#215ACD]"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our clients depend on us for critical business operations. We deliver consistent, dependable support with 99.9% uptime and accountability.",
    color: "bg-indigo-50 text-[#213959]"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We leverage cutting-edge AI tools, automation, and cloud-based technologies to provide efficient, modern virtual assistance solutions.",
    color: "bg-sky-50 text-[#215ACD]"
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We're not just service providers—we're an extension of your team, invested in your success and committed to your business goals.",
    color: "bg-blue-50 text-[#213959]"
  },
]

const differentiators = [
  {
    title: "Highly Educated Professionals",
    description: "91% of our virtual assistants hold college degrees, bringing expertise and professionalism to every task.",
    icon: Award
  },
  {
    title: "24/7 Global Coverage",
    description: "With assistants across all time zones, we provide round-the-clock support to keep your business running smoothly.",
    icon: Clock
  },
  {
    title: "Specialized Expertise",
    description: "From administrative support to marketing, bookkeeping, and technical services—we match you with the right specialist.",
    icon: Target
  },
  {
    title: "Proven ROI",
    description: "Our clients save an average of 67% in operating costs while boosting productivity by up to 35%.",
    icon: TrendingUp
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Blue Gradient */}
      <section className="relative bg-gradient-to-br from-[#215ACD] via-[#1a4aa8] to-[#213959] text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Trusted by 500+ Businesses Worldwide</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Businesses Through Expert Virtual Assistance
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Since 2016, ProTech Planner has been revolutionizing how businesses operate by providing
                world-class virtual assistant services that drive efficiency, reduce costs, and fuel growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Rigorous 5-step vetting process for all assistants</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">24/7 support across all global time zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">AI-powered tools and modern automation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/diverse-team-of-virtual-assistants-working-togethe.jpg"
                  alt="ProTech Planner team"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#215ACD] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#215ACD]">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background with Blue Accents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our virtual assistant services deliver measurable impact backed by real data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-gray-100 hover:border-[#215ACD]/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#215ACD] to-[#213959] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#215ACD]">{stat.value}</div>
                  <div className="font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Light Blue Background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#215ACD] rounded-2xl mb-4">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To empower businesses of all sizes by providing exceptional virtual assistant services that
            <span className="font-semibold text-[#215ACD]"> free up valuable time</span>,
            <span className="font-semibold text-[#215ACD]"> reduce operational costs by up to 78%</span>, and
            <span className="font-semibold text-[#215ACD]"> boost productivity by 35%</span>.
            We're committed to being the trusted partner that helps our clients focus on what truly matters—growing their business.
          </p>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why ProTech Planner Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another virtual assistant service—we're your strategic partner in business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#215ACD]/30 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#215ACD] to-[#213959] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Light Background */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering excellence in virtual assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#215ACD]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-[#215ACD] to-[#213959] flex items-center justify-center overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6 space-y-3 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <div className="text-[#215ACD] font-semibold text-sm uppercase tracking-wide">{member.role}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <value.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Gradient */}
      <section className="relative py-24 bg-gradient-to-br from-[#215ACD] via-[#1a4aa8] to-[#213959] text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100">
            Join 500+ businesses that have already saved 78% in costs and boosted productivity by 35%.
            Let's discuss how ProTech Planner can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#215ACD] font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Link href="/contact">
                Start Your Partnership Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#215ACD] bg-transparent font-semibold text-lg px-8 py-6 transition-all"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
