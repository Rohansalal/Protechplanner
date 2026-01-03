
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Administrative Support",
    slug: "administrative-support",
    subpages: [
      { title: "Email Management", slug: "email-management" },
      { title: "Document Creation", slug: "document-creation" },
      { title: "Data Entry", slug: "data-entry" },
      { title: "File Organization", slug: "file-organization" },
      { title: "Travel Coordination", slug: "travel-coordination" },
      { title: "Expense Management", slug: "expense-management" },
    ]
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    subpages: [
      { title: "Live Chat Support", slug: "live-chat-support" },
      { title: "Email Support", slug: "email-support" },
      { title: "Phone Support", slug: "phone-support" },
      { title: "Help Desk", slug: "help-desk" },
      { title: "Order Processing", slug: "order-processing" },
      { title: "Customer Feedback", slug: "customer-feedback" }
    ]
  },
  {
    title: "Appointment Scheduling",
    slug: "appointment-scheduling",
    subpages: [
      { title: "Calendar Management", slug: "calendar-management" },
      { title: "Booking Systems", slug: "booking-systems" },
      { title: "Reminder Services", slug: "reminder-services" },
      { title: "Timezone Coordination", slug: "time-zone-coordination" },
      { title: "Rescheduling Management", slug: "rescheduling-management" },
      { title: "Meeting Coordination", slug: "meeting-coordination" },
    ]
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    subpages: [
      { title: "Content Creation", slug: "content-creation" },
      { title: "Analytics Reporting", slug: "analytics" },
      { title: "Community Management", slug: "community-management" },
      { title: "Hashtag Optimization", slug: "hashtag-optimization" },
      { title: "Post Scheduling", slug: "post-scheduling" },
      { title: "Influencer Outreach", slug: "influencer-outreach" },
    ]
  },
  {
    title: "Business Analytics",
    slug: "business-analytics",
    subpages: [
      { title: "Customer Report Creation", slug: "customer-report-creation" },
      { title: "Dashboard Creation", slug: "dashboard-creation" },
      { title: "Data Collection Analysis", slug: "data-collection-analysis" },
      { title: "Forecasting Creation", slug: "forecasting-creation" },
      { title: "KPI Monitoring", slug: "kpi-monitoring" },
      { title: "Market Research", slug: "market-research" },
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    subpages: [
      { title: "SEO Services", slug: "seo" },
      { title: "PPC Management", slug: "ppc" },
      { title: "Email Marketing", slug: "email-marketing" },
      { title: "Content Marketing", slug: "content-marketing" },
      { title: "Social Media Marketing", slug: "social-media-marketing" },
      { title: "Analytics Reporting", slug: "analytics-reporting" },
    ]
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    subpages: [
      { title: "Blog Writing", slug: "blog-posts-articles" },
      { title: "Email Marketing", slug: "email-marketing" },
      { title: "Marketing Materials", slug: "marketing-materials" },
      { title: "Technical Writing", slug: "technical-writing" },
      { title: "Website Copy", slug: "website-copy" },
      { title: "Social Media Content", slug: "social-media-content" },
    ]
  },
  {
    title: "Hire Developers",
    slug: "hire-developers",
    subpages: [
      { title: "Frontend Developers", slug: "frontend" },
      { title: "Backend Developers", slug: "backend" },
      { title: "Full Stack Developers", slug: "fullstack" },
      { title: "Mobile Developers", slug: "mobile" },
      { title: "DevOps Engineers", slug: "devops" },
      { title: "Specialized Developers", slug: "specialized" },
    ]
  },
  {
    title: "Graphic and Web Designing",
    slug: "graphic-web-designing",
    subpages: [
      { title: "Logo Design", slug: "brand-identity-design" },
      { title: "Mobile App Design", slug: "mobile-app-design" },
      { title: "UI/UX Design", slug: "web-design-ui-ux" },
      { title: "Print Design", slug: "print-design" },
      { title: "Digital Marketing Design", slug: "digital-marketing-design" },
      { title: "Social Media Graphics", slug: "social-media-graphics" },
    ]
  },
  {
    title: "Finance and Accounts",
    slug: "finance-accounts",
    subpages: [
      { title: "Bookkeeping", slug: "bookkeeping" },
      { title: "Budget Planning", slug: "budget-planning" },
      { title: "Financial Analysis", slug: "financial-consulting" },
      { title: "Financial Reporting", slug: "financial-reporting" },
      { title: "Payroll Processing", slug: "payroll-processing" },
      { title: "Tax Preparation", slug: "tax-preparation" },
    ]
  },
  {
    title: "Contact Centre Outsourcing",
    slug: "contact-centre-outsourcing",
    subpages: [
      { title: "Customer Support", slug: "customer-support" },
      { title: "Inbound Outbound Calling", slug: "inbound-outbound-calling" },
      { title: "Lead Generation", slug: "lead-generation" },
      { title: "Multilingual Support", slug: "multilingual-support" },
      { title: "Order Processing", slug: "order-processing" },
      { title: "Technical Support", slug: "technical-support" },
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    subpages: [
      { title: "App Security & Testing", slug: "app-security-testing" },
      { title: "Backend Development", slug: "backend-development" },
      { title: "Cross-Platform Development", slug: "cross-platform" },
      { title: "Native Android Development", slug: "native-android" },
      { title: "Native iOS Development", slug: "native-ios" },
      { title: "UI-UX Designer", slug: "ui-ux-design" },
    ]
  },
  {
    title: "Hire Virtual Assistance",
    slug: "hire-virtual-assistance",
    subpages: [
      { title: "Administrative Support", slug: "administrative-support" },
      { title: "Calendar Scheduling", slug: "calendar-scheduling" },
      { title: "Email Management", slug: "email-management" },
      { title: "Customer Support", slug: "customer-support" },
      { title: "Data Entry", slug: "data-entry" },
      { title: "Social Media Management", slug: "social-media-management" },
    ]
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug); // Default to first service for professional look

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              <Image src="/logo-new.png" alt="ProTech Planner Logo" width={180} height={60} className="w-auto h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-12 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  href="/services"
                  className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[960px] bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden mt-2">
                  <div className="flex h-[500px]">

                    {/* Left Panel: Service Categories */}
                    <div className="w-1/3 bg-slate-50 border-r border-slate-100 overflow-y-auto py-4">
                      <div className="px-4 mb-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Service Categories</h3>
                      </div>
                      <div className="space-y-1 px-3">
                        {services.map((service) => (
                          <div
                            key={service.slug}
                            onMouseEnter={() => setHoveredService(service.slug)}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className={`flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all duration-200 w-full group/item ${hoveredService === service.slug
                                ? 'bg-white text-[#213959] font-semibold shadow-sm ring-1 ring-slate-100'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-[#213959]'
                                }`}
                            >
                              <span className="truncate">{service.title}</span>
                              {hoveredService === service.slug && (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#213959]" />
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Panel: Sub-services */}
                    <div className="w-2/3 bg-white p-8 overflow-y-auto">
                      {hoveredService ? (
                        <div className="h-full flex flex-col animate-in fade-in duration-300">
                          {(() => {
                            const service = services.find(s => s.slug === hoveredService);
                            return service ? (
                              <>
                                <div className="mb-6 pb-6 border-b border-slate-100">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="text-2xl font-bold text-[#213959] mb-2">{service.title}</h3>
                                      <p className="text-slate-500 text-sm">Explore our professional capabilities in {service.title.toLowerCase()}.</p>
                                    </div>
                                    <Button asChild size="sm" variant="ghost" className="text-[#213959] hover:bg-indigo-50">
                                      <Link href={`/services/${service.slug}`}>
                                        View All <ChevronRight className="ml-1 w-4 h-4" />
                                      </Link>
                                    </Button>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  {service.subpages && service.subpages.length > 0 ? (
                                    service.subpages.map((subpage) => (
                                      <Link
                                        key={subpage.slug}
                                        href={`/services/${service.slug}/${subpage.slug}`}
                                        className="group/sub block p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200"
                                      >
                                        <div className="font-semibold text-slate-800 group-hover/sub:text-[#213959] mb-1 flex items-center gap-2">
                                          {subpage.title}
                                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#213959]" />
                                        </div>
                                        <div className="text-xs text-slate-500 line-clamp-2">
                                          Professional {subpage.title.toLowerCase()} services tailored for your business needs.
                                        </div>
                                      </Link>
                                    ))
                                  ) : (
                                    <div className="col-span-2 text-center py-12 text-slate-400">
                                      No sub-services listed yet.
                                    </div>
                                  )}
                                </div>
                              </>
                            ) : null;
                          })()}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-400">
                          <p>Hover over a category to view details</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
            >
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:bg-slate-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
              <Link
                href="/"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto">
                    <Link
                      href="/services"
                      className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <div key={service.slug}>
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                          {service.title}
                        </div>
                        {service.subpages?.map(sub => (
                          <Link
                            key={sub.slug}
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 px-2">
                <Button
                  asChild
                  className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}