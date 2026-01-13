"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileText,
  Phone,
  Calendar,
  Users,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  Mail
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Administrative Support",
    description: "Comprehensive administrative services to keep your business running smoothly and efficiently.",
    features: [
      "Email management and organization",
      "Document creation and formatting",
      "Data entry and database management",
      "File organization and digital filing systems",
      "Travel planning and coordination",
      "Expense tracking and reporting",
    ],
    slug: "administrative-support",
  },
  {
    icon: Phone,
    title: "Customer Service",
    description: "Professional customer support to maintain excellent relationships with your clients.",
    features: [
      "Live chat support during business hours",
      "Inbound and outbound phone support",
      "Email customer service management",
      "Order processing and tracking",
      "Complaint resolution and follow-up",
      "Customer satisfaction surveys",
    ],
    slug: "customer-service",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Efficient calendar management to optimize your time and improve client experience.",
    features: [
      "Calendar management across platforms",
      "Appointment booking and confirmation",
      "Meeting coordination and logistics",
      "Automated reminder services",
      "Rescheduling and cancellation handling",
      "Time zone coordination for global clients",
    ],
    slug: "appointment-scheduling",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic social media management to grow your online presence and engagement.",
    features: [
      "Content creation and curation",
      "Post scheduling across platforms",
      "Community management and engagement",
      "Social media analytics and reporting",
      "Hashtag research and optimization",
      "Influencer outreach coordination",
    ],
    slug: "social-media-management",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Data-driven insights and reporting to help you make informed business decisions.",
    features: [
      "Data collection and analysis",
      "Custom report creation",
      "Market research and competitor analysis",
      "Performance tracking and KPI monitoring",
      "Dashboard creation and maintenance",
      "Trend analysis and forecasting",
    ],
    slug: "business-analytics",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing services to expand your online reach and drive growth.",
    features: [
      "SEO optimization and keyword research",
      "Content marketing strategy and execution",
      "PPC campaign management",
      "Email marketing campaigns",
      "Website analytics and optimization",
      "Online reputation management",
    ],
    slug: "digital-marketing",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Professional content creation services to engage your audience and boost your brand.",
    features: [
      "Blog posts and articles",
      "Website copy and landing pages",
      "Social media content",
      "Email newsletters",
      "Product descriptions",
      "SEO-optimized content",
    ],
    slug: "content-writing",
  },
  {
    icon: Users,
    title: "Hire Developers",
    description: "Access skilled developers for your web and software development projects.",
    features: [
      "Full-stack web development",
      "Frontend and backend specialists",
      "Database design and management",
      "API development and integration",
      "Quality assurance and testing",
      "Ongoing maintenance and support",
    ],
    slug: "hire-developers",
  },
  {
    icon: BarChart3,
    title: "Graphic and Web Designing",
    description: "Creative design services to enhance your brand identity and user experience.",
    features: [
      "Logo and brand identity design",
      "Website UI/UX design",
      "Marketing materials and brochures",
      "Social media graphics",
      "Print design services",
      "Responsive web design",
    ],
    slug: "graphic-web-designing",
  },
  {
    icon: Calendar,
    title: "Finance and Accounts",
    description: "Professional financial management and accounting services for your business.",
    features: [
      "Bookkeeping and record maintenance",
      "Financial reporting and analysis",
      "Tax preparation and filing",
      "Payroll processing",
      "Budget planning and forecasting",
      "Accounts payable/receivable management",
    ],
    slug: "finance-accounts",
  },
  {
    icon: Globe,
    title: "Outsource to India",
    description: "Cost-effective outsourcing solutions leveraging India's skilled workforce.",
    features: [
      "Access to skilled professionals",
      "Cost-effective solutions",
      "24/7 support coverage",
      "Quality assurance processes",
      "Scalable team solutions",
      "Cultural compatibility training",
    ],
    slug: "outsource-india",
  },
  {
    icon: FileText,
    title: "Legal Process Outsourcing",
    description: "Specialized legal support services to streamline your legal operations.",
    features: [
      "Document review and analysis",
      "Legal research and writing",
      "Contract drafting and review",
      "Compliance monitoring",
      "Litigation support services",
      "Intellectual property services",
    ],
    slug: "legal-process-outsourcing",
  },
  {
    icon: Phone,
    title: "Mobile App Development",
    description: "End-to-end mobile application development for iOS and Android platforms.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Maintenance and updates",
      "Performance monitoring",
    ],
    slug: "mobile-app-development",
  },
  {
    icon: Users,
    title: "Hire Virtual Assistance",
    description: "Dedicated virtual assistants to handle your administrative and business tasks.",
    features: [
      "Administrative support",
      "Email management",
      "Calendar scheduling",
      "Customer service support",
      "Data entry and research",
      "Project coordination",
    ],
    slug: "hire-virtual-assistance",
  },
  {
    icon: Phone,
    title: "Contact Centre Outsourcing",
    description: "Professional call center services to enhance your customer experience.",
    features: [
      "Inbound and outbound calling",
      "Customer support services",
      "Lead generation and qualification",
      "Order processing and tracking",
      "Technical support services",
      "Multilingual support options",
    ],
    slug: "contact-centre-outsourcing",
  },
  {
    icon: Globe,
    title: "Offshore Business Registration",
    description: "Complete business setup and registration services in offshore jurisdictions.",
    features: [
      "Company incorporation services",
      "Legal documentation preparation",
      "Regulatory compliance assistance",
      "Banking setup support",
      "Ongoing compliance monitoring",
      "Tax optimization strategies",
    ],
    slug: "offshore-business-registration",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-black">
              Our Virtual <span className="text-[#215ACD]">Assistant Services</span>
            </h1>
            <p className="text-xl text-black max-w-3xl leading-relaxed">
              Discover our comprehensive range of virtual assistant services designed to streamline your operations, boost productivity, and help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-white to-[#F5F5F5] rounded-lg border border-[#F2F2F2] overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Content */}
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-b from-white to-[#F2F0FE] rounded border border-[#F2F0FE] flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#215ACD]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-[#414141]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#5C5C5C] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-[#15D137] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-[#15D137]" />
                        </div>
                        <span className="text-black text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 px-4 py-2.5 bg-[#215ACD] hover:bg-[#1a49a8] text-white rounded text-center text-sm font-normal transition-colors"
                    >
                      Get started
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 px-4 py-2.5 border border-[#215ACD] text-[#215ACD] hover:bg-[#215ACD] hover:text-white rounded text-center text-sm font-medium transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-[#215ACD]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-medium">💬 We're Here to Help</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start a <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">Conversation</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your business? We're here to help you succeed with our expert virtual assistant services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#215ACD] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#215ACD] px-8 py-6 text-lg font-semibold rounded-lg">
                Learn About Us
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { label: "Happy Clients", value: "2000+" },
              { label: "Response Time", value: "< 24h" },
              { label: "Success Rate", value: "98%" },
              { label: "Support", value: "24/7" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
