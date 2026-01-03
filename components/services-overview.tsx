import { Briefcase, Headphones, BarChart3, Globe, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function ServicesOverview() {
  const services = [
    {
      title: "Administrative Support",
      description: "Streamline your daily operations with expert handling of emails, scheduling, and documentation.",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/services/administrative-support"
    },
    {
      title: "Customer Service",
      description: "Deliver exceptional support experiences with our dedicated customer service professionals.",
      icon: <Headphones className="w-6 h-6" />,
      href: "/services/customer-service"
    },
    {
      title: "Business Analytics",
      description: "Turn data into actionable insights with comprehensive reporting and analysis.",
      icon: <BarChart3 className="w-6 h-6" />,
      href: "/services/business-analytics"
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand reach with targeted social media, SEO, and content strategies.",
      icon: <Globe className="w-6 h-6" />,
      href: "/services/digital-marketing"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 bg-white text-[#213959] border-[#213959]/20">Our Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#213959] mb-4 tracking-tight">
              Comprehensive Virtual Solutions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide a wide range of professional services tailored to meet the unique needs of your business.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex bg-white text-[#213959] border-[#213959]/20 hover:bg-[#213959] hover:text-white">
            <Link href="/services">
              View All Services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-[#213959] mb-6 group-hover:bg-[#213959] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#213959] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-semibold text-[#213959] hover:text-indigo-600 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asChild className="w-full bg-[#213959] text-white">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
