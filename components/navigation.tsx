"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Menu, X, ChevronDown, Mail, FileText, Database, Folder, Plane, DollarSign,
  MessageSquare, Phone, Headphones, ShoppingCart, MessageCircle, Calendar,
  BarChart3, TrendingUp, PieChart, Eye, AlertCircle, LineChart,
  PenTool, Zap, Users, Megaphone, Code, Smartphone, Palette, Briefcase,
  CreditCard, BadgePercent, Receipt, ArrowRight,
  Building2, Key, Store, ShieldCheck, Stethoscope
} from "lucide-react"

// Icon mapping for subservices
const iconMap = {
  // Administrative Support
  "email-management": Mail,
  "document-creation": FileText,
  "data-entry": Database,
  "file-organization": Folder,
  "travel-coordination": Plane,
  "expense-management": DollarSign,

  // Customer Service
  "live-chat-support": MessageSquare,
  "email-support": Mail,
  "phone-support": Phone,
  "help-desk": Headphones,
  "order-processing": ShoppingCart,
  "customer-feedback": MessageCircle,

  // Appointment Scheduling
  "calendar-management": Calendar,
  "booking-systems": BarChart3,
  "reminder-services": AlertCircle,
  "time-zone-coordination": AlertCircle,
  "rescheduling-management": AlertCircle,
  "meeting-coordination": Users,

  // Social Media Management
  "content-creation": PenTool,
  "analytics": TrendingUp,
  "community-management": Users,
  "hashtag-optimization": Zap,
  "post-scheduling": Calendar,
  "influencer-outreach": Megaphone,

  // Business Analytics
  "customer-report-creation": FileText,
  "dashboard-creation": BarChart3,
  "data-collection-analysis": Database,
  "forecasting-creation": LineChart,
  "kpi-monitoring": Eye,
  "market-research": Briefcase,

  // Digital Marketing
  "seo": TrendingUp,
  "ppc": Zap,
  "email-marketing": Mail,
  "content-marketing": PenTool,
  "social-media-marketing": Megaphone,
  "analytics-reporting": BarChart3,

  // Content Writing
  "blog-posts-articles": FileText,
  "marketing-materials": PenTool,
  "technical-writing": Code,
  "website-copy": PenTool,
  "social-media-content": Megaphone,

  // Hire Developers
  "frontend": Code,
  "backend": Code,
  "fullstack": Code,
  "mobile": Smartphone,
  "devops": AlertCircle,
  "specialized": Briefcase,

  // Graphic and Web Designing
  "brand-identity-design": Palette,
  "mobile-app-design": Smartphone,
  "web-design-ui-ux": Palette,
  "print-design": PenTool,
  "digital-marketing-design": PenTool,
  "social-media-graphics": Palette,

  // Finance and Accounts
  "bookkeeping": Receipt,
  "budget-planning": BarChart3,
  "financial-consulting": Briefcase,
  "financial-reporting": FileText,
  "payroll-processing": DollarSign,
  "tax-preparation": BadgePercent,

  // Contact Centre Outsourcing
  "customer-support": Headphones,
  "inbound-outbound-calling": Phone,
  "lead-generation": Zap,
  "multilingual-support": Users,
  "technical-support": Headphones,

  // Mobile App Development
  "app-security-testing": AlertCircle,
  "backend-development": Code,
  "cross-platform": Smartphone,
  "native-android": Smartphone,
  "native-ios": Smartphone,
  "ui-ux-design": Palette,

  // Hire Virtual Assistance
  "administrative-support": Mail,
  "calendar-scheduling": Calendar,
  "social-media-management": Megaphone,
}

const industries = [
  {
    title: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    description: "Lead qualification & transaction coordination"
  },
  {
    title: "Property Management",
    slug: "property",
    icon: Key,
    description: "Tenant support & maintenance coordination"
  },
  {
    title: "Small Business",
    slug: "small-business-owners",
    icon: Store,
    description: "Operational support & executive assistance"
  },
  {
    title: "E-Commerce",
    slug: "ecommerce",
    icon: ShoppingCart,
    description: "Order processing & inventory management"
  },
  {
    title: "Insurance & Finance",
    slug: "insurance",
    icon: ShieldCheck,
    description: "Policy renewals & claims processing"
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    icon: Stethoscope,
    description: "Patient scheduling & intake processing"
  }
]

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

function SubServiceIcon({ slug }: { slug: keyof typeof iconMap }) {
  const IconComponent = iconMap[slug] || AlertCircle
  return <IconComponent className="w-4 h-4" />
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-m.png"
                alt="ProTech Planner Logo"
                width={200}
                height={60}
                className="h-15 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-12 flex items-baseline space-x-6">
              <Link
                href="/"
                style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}
                className="px-4 py-3 rounded-md transition-colors hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  href="/services"
                  className="px-4 py-3 rounded-md transition-colors flex items-center gap-2 hover:bg-slate-50"
                >
                  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Services</span>
                  <div style={{ width: 24, height: 24, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: 24, height: 24, left: 0, top: 0, position: 'absolute' }} />
                    <div style={{ width: 13.31, height: 7.67, left: 5.33, top: 8.33, position: 'absolute', background: 'black', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                  </div>
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[900px] bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex" onMouseLeave={() => setHoveredService(null)}>
                    {/* Services List */}
                    <div className="w-2/5 bg-gradient-to-b from-[#213959]/5 to-[#213959]/10 rounded-l-2xl p-4">
                      <div className="mb-4">
                        <Link
                          href="/services"
                          className="text-lg font-bold text-[#213959] hover:text-[#1a2d47] transition-colors inline-flex items-center gap-2"
                        >
                          All Services
                        </Link>
                        <p className="text-xs text-slate-500 mt-1">
                          Complete business solutions
                        </p>
                      </div>
                      <div className="space-y-1">
                        {services.map((service) => (
                          <div
                            key={service.slug}
                            className="relative"
                            onMouseEnter={() => setHoveredService(service.slug)}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className={`flex items-center justify-between px-3 py-2 text-xs transition-all duration-200 rounded-lg group/item w-full border-l-2 ${hoveredService === service.slug
                                ? 'bg-[#213959]/20 text-[#213959] border-[#213959] font-semibold shadow-sm'
                                : 'border-transparent hover:bg-[#213959]/10 hover:text-[#213959] text-slate-700'
                                }`}
                            >
                              <span className="font-medium whitespace-nowrap truncate">
                                {service.title}
                              </span>
                              <ArrowRight className={`w-4 h-4 flex-shrink-0 ml-2 transition-all duration-200 ${hoveredService === service.slug ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subpages - Right Panel */}
                    <div className="w-3/5 bg-white rounded-r-2xl min-h-[400px]">
                      {(() => {
                        const service = services.find(s => s.slug === hoveredService);
                        return service ? (
                          <div className="h-full flex flex-col animate-in fade-in duration-200">
                            {/* Service Header */}
                            <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50/50 to-white">
                              <h3 className="text-xl font-bold text-[#213959] mb-1">
                                {service.title}
                              </h3>
                              <p className="text-xs text-slate-500">
                                Comprehensive solutions to streamline your operations
                              </p>
                            </div>

                            {/* Subservices Grid */}
                            <div className="flex-1 p-4">
                              {service.subpages && service.subpages.length > 0 ? (
                                <div className="grid grid-cols-2 gap-3">
                                  {service.subpages.map((subpage) => (
                                    <Link
                                      key={subpage.slug}
                                      href={`/services/${service.slug}/${subpage.slug}`}
                                      className="group/subpage block p-3 rounded-lg border border-transparent hover:border-[#213959]/20 hover:bg-indigo-50/30 transition-all duration-200"
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                          <div className="w-5 h-5 text-[#213959]/60 group-hover/subpage:text-[#213959] transition-colors flex-shrink-0">
                                            <SubServiceIcon slug={subpage.slug as keyof typeof iconMap} />
                                          </div>
                                          <h4 className="font-medium text-slate-700 group-hover/subpage:text-[#213959] transition-colors text-xs whitespace-nowrap truncate">
                                            {subpage.title}
                                          </h4>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-[#213959]/40 group-hover/subpage:text-[#213959] transition-all duration-200 flex-shrink-0 opacity-0 group-hover/subpage:opacity-100 transform group-hover/subpage:translate-x-0 -translate-x-2" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="text-center py-6">
                                  <div className="w-12 h-12 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <Menu className="h-6 w-6 text-slate-400" />
                                  </div>
                                  <p className="text-slate-500 text-xs mb-3">
                                    More specialized services coming soon
                                  </p>
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-[#213959]/20 text-[#213959] hover:bg-[#213959]/5"
                                  >
                                    <Link href="/contact">Contact Us</Link>
                                  </Button>
                                </div>
                              )}
                            </div>

                            {/* CTA Button */}
                            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-br-2xl">
                              <Button
                                asChild
                                size="sm"
                                className="w-full bg-[#213959] hover:bg-[#1a2d47] text-white h-9 text-xs font-semibold"
                              >
                                <Link href={`/services/${service.slug}`}>
                                  Explore {service.title}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full p-6 text-center">
                            <div className="max-w-xs">
                              <div className="w-16 h-16 mx-auto mb-4 bg-[#213959]/10 rounded-xl flex items-center justify-center">
                                <ChevronDown className="h-8 w-8 text-[#213959]" />
                              </div>
                              <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Explore Services
                              </h3>
                              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                                Hover over any service to view specialized solutions
                              </p>
                              <Button
                                asChild
                                size="sm"
                                className="bg-[#213959] hover:bg-[#1a2d47] text-white h-9 px-6 text-xs"
                              >
                                <Link href="/contact">Get Consultation</Link>
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              {/* Industries Dropdown Removed as requested per design, but keeping logic if needed later or hidden.
                  User asked: "now change the header section only with this industries section also thier so dont remove it"
                  Verify: The user wanted to KEEP the "Industries" section logic available or just styles?
                  "header section only with this industries section also thier so dont remove it" -> This likely means Keep the Industries dropdown but maybe style it?
                  However, the provided design DOES NOT include an "Industries" link.
                  "Home, Services, About, Blog, Contact" are the only links in the request.
                  I will comment it out to match the visual design strictly while preserving code if I misinterpreted "dont remove it".
                  Actually, re-reading: "industries section also thier so dont remove it"
                  This implies the Industries LOGIC/Page exists, but maybe not in the header?
                  OR it implies I should ADD Industries to the requested list?
                  The requested HTML structure explicitly list: Home, Services, About, Blog, Contact. No Industries.
                  But the text says "industries section also thier so dont remove it".
                  I will KEEP the Industries dropdown but style it like the others (Black, Inter 16px) to be safe.
              */}
              <div className="relative group">
                <button
                  className="px-4 py-3 rounded-md transition-colors flex items-center gap-2 hover:bg-slate-50"
                >
                  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Industries</span>
                  <div style={{ width: 24, height: 24, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: 24, height: 24, left: 0, top: 0, position: 'absolute' }} />
                    <div style={{ width: 13.31, height: 7.67, left: 5.33, top: 8.33, position: 'absolute', background: 'black', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                  </div>
                </button>

                <div className="absolute top-full left-0 w-80 bg-white border border-slate-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                  <div className="grid gap-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#213959]/5 text-[#213959] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#213959] group-hover/item:text-white transition-colors">
                          <industry.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover/item:text-[#213959]">
                            {industry.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {industry.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}
                className="px-4 py-3 rounded-md transition-colors hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/blog"
                style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}
                className="px-4 py-3 rounded-md transition-colors hover:bg-slate-50"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}
                className="px-4 py-3 rounded-md transition-colors hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, background: '#215ACD', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                <div style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Get Started</div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-12 w-12 text-slate-700 hover:bg-slate-100"
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
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white rounded-2xl mt-2 shadow-xl border border-slate-100">
              <Link
                href="/"
                className="text-slate-700 hover:text-[#213959] block px-4 py-4 rounded-xl text-base font-medium border-b border-slate-100 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-slate-700 hover:text-[#213959] w-full text-left px-4 py-4 rounded-xl text-base font-medium flex items-center justify-between border-b border-slate-100 hover:bg-slate-50"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 space-y-3 mt-3 max-h-[60vh] overflow-y-auto">
                    <Link
                      href="/services"
                      className="text-[#213959] hover:text-[#1a2d47] block px-4 py-3 rounded-xl text-sm font-medium bg-[#213959]/5"
                      onClick={() => setIsOpen(false)}
                    >
                      All Services
                    </Link>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <div key={service.slug} className="space-y-1">
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-slate-700 hover:text-[#213959] block px-4 py-2 rounded-lg text-xs font-medium bg-slate-50 hover:bg-slate-100 flex items-center justify-between"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{service.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          {service.subpages && (
                            <div className="pl-3 space-y-1 border-l-2 border-slate-200">
                              {service.subpages.map((subpage) => (
                                <Link
                                  key={subpage.slug}
                                  href={`/services/${service.slug}/${subpage.slug}`}
                                  className="text-slate-500 hover:text-[#213959] block px-3 py-1 rounded text-xs bg-white hover:bg-slate-50 group/mobile-subpage flex items-center justify-between"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 text-[#213959]/60">
                                      <SubServiceIcon slug={subpage.slug as keyof typeof iconMap} />
                                    </div>
                                    {subpage.title}
                                  </div>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/mobile-subpage:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="text-slate-700 hover:text-[#213959] w-full text-left px-4 py-4 rounded-xl text-base font-medium flex items-center justify-between border-b border-slate-100 hover:bg-slate-50"
                >
                  Industries
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isMobileIndustriesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="pl-4 space-y-2 mt-3 mb-3">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="text-slate-700 hover:text-[#213959] block px-4 py-2 rounded-lg text-sm font-medium bg-slate-50 hover:bg-slate-100 flex items-center gap-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <industry.icon className="w-4 h-4 text-[#213959]" />
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-slate-700 hover:text-[#213959] block px-4 py-4 rounded-xl text-base font-medium border-b border-slate-100 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-[#213959] block px-4 py-4 rounded-xl text-base font-medium border-b border-slate-100 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-[#213959] block px-4 py-4 rounded-xl text-base font-medium border-b border-slate-100 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-[#213959] hover:bg-[#1a2d47] text-white h-12 text-base font-semibold shadow-md"
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


// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Menu, X, ChevronDown, ChevronRight,
//   // Admin & Office
//   Mail, FileText, Database, FolderOpen, Plane, DollarSign, Calendar, Clock,
//   // Communication
//   MessageSquare, Phone, Headphones, ShoppingBag, Users, Bell,
//   // Marketing & Social
//   Share2, BarChart, Hash, Send, Star, Megaphone, Globe, MousePointer,
//   // Analytics
//   PieChart, TrendingUp, LineChart, Target, Search,
//   // Development & Tech
//   Code, Smartphone, Layers, Server, Cpu, Shield, Terminal, Settings, Wrench,
//   // Design
//   PenTool, Image as ImageIcon, Layout, Printer, Palette, Video,
//   // Finance
//   Calculator, Receipt, CreditCard, Briefcase, FileSpreadsheet,
//   // General
//   UserPlus, UserCheck, Mic
// } from "lucide-react"

// // Complete data structure
// const services = [
//   {
//     title: "Administrative Support",
//     slug: "administrative-support",
//     subpages: [
//       { title: "Email Management", slug: "email-management", icon: Mail, description: "Inbox organization and timely correspondence." },
//       { title: "Document Creation", slug: "document-creation", icon: FileText, description: "Formatting and creating professional documents." },
//       { title: "Data Entry", slug: "data-entry", icon: Database, description: "Accurate and efficient data processing." },
//       { title: "File Organization", slug: "file-organization", icon: FolderOpen, description: "Digital filing systems and cloud management." },
//       { title: "Travel Coordination", slug: "travel-coordination", icon: Plane, description: "Itinerary planning and booking management." },
//       { title: "Expense Management", slug: "expense-management", icon: DollarSign, description: "Tracking receipts and report preparation." },
//     ]
//   },
//   {
//     title: "Customer Service",
//     slug: "customer-service",
//     subpages: [
//       { title: "Live Chat Support", slug: "live-chat-support", icon: MessageSquare, description: "Real-time visitor assistance." },
//       { title: "Email Support", slug: "email-support", icon: Mail, description: "Ticket handling and query resolution." },
//       { title: "Phone Support", slug: "phone-support", icon: Phone, description: "Inbound/outbound call handling." },
//       { title: "Help Desk", slug: "help-desk", icon: Headphones, description: "Technical troubleshooting and support." },
//       { title: "Order Processing", slug: "order-processing", icon: ShoppingBag, description: "Managing fulfillments and returns." },
//       { title: "Customer Feedback", slug: "customer-feedback", icon: Star, description: "Survey collection and satisfaction analysis." }
//     ]
//   },
//   {
//     title: "Appointment Scheduling",
//     slug: "appointment-scheduling",
//     subpages: [
//       { title: "Calendar Management", slug: "calendar-management", icon: Calendar, description: "Daily schedule optimization." },
//       { title: "Booking Systems", slug: "booking-systems", icon: MousePointer, description: "Setup of automated booking tools." },
//       { title: "Reminder Services", slug: "reminder-services", icon: Bell, description: "Reducing no-shows via follow-ups." },
//       { title: "Timezone Coordination", slug: "time-zone-coordination", icon: Globe, description: "Global meeting synchronization." },
//       { title: "Rescheduling Mgmt", slug: "rescheduling-management", icon: Clock, description: "Handling cancellations efficiently." },
//       { title: "Meeting Coordination", slug: "meeting-coordination", icon: Users, description: "Agenda prep and participant invites." },
//     ]
//   },
//   {
//     title: "Social Media Management",
//     slug: "social-media-management",
//     subpages: [
//       { title: "Content Creation", slug: "content-creation", icon: PenTool, description: "Visuals and copy for posts." },
//       { title: "Analytics Reporting", slug: "analytics", icon: BarChart, description: "Growth and engagement tracking." },
//       { title: "Community Management", slug: "community-management", icon: MessageSquare, description: "Replying to comments and DMs." },
//       { title: "Hashtag Optimization", slug: "hashtag-optimization", icon: Hash, description: "Reach expansion strategies." },
//       { title: "Post Scheduling", slug: "post-scheduling", icon: Calendar, description: "Content calendar management." },
//       { title: "Influencer Outreach", slug: "influencer-outreach", icon: Share2, description: "Partnership coordination." },
//     ]
//   },
//   {
//     title: "Business Analytics",
//     slug: "business-analytics",
//     subpages: [
//       { title: "Customer Reports", slug: "customer-report-creation", icon: FileSpreadsheet, description: "Detailed consumer behavior insights." },
//       { title: "Dashboard Creation", slug: "dashboard-creation", icon: Layout, description: "Visualizing key performance metrics." },
//       { title: "Data Collection", slug: "data-collection-analysis", icon: Database, description: "Gathering and cleaning raw data." },
//       { title: "Trend Forecasting", slug: "forecasting-creation", icon: TrendingUp, description: "Predictive market analysis." },
//       { title: "KPI Monitoring", slug: "kpi-monitoring", icon: Target, description: "Tracking business goals." },
//       { title: "Market Research", slug: "market-research", icon: Search, description: "Competitor and industry analysis." },
//     ]
//   },
//   {
//     title: "Digital Marketing",
//     slug: "digital-marketing",
//     subpages: [
//       { title: "SEO Services", slug: "seo", icon: Search, description: "Ranking improvement on search engines." },
//       { title: "PPC Management", slug: "ppc", icon: MousePointer, description: "Ad campaign optimization." },
//       { title: "Email Marketing", slug: "email-marketing", icon: Send, description: "Newsletter and drip campaigns." },
//       { title: "Content Marketing", slug: "content-marketing", icon: FileText, description: "Blog and article strategy." },
//       { title: "Social Media Ads", slug: "social-media-marketing", icon: Megaphone, description: "Paid social campaign management." },
//       { title: "Conversion Optimization", slug: "cro", icon: TrendingUp, description: "Improving website action rates." },
//     ]
//   },
//   {
//     title: "Content Writing",
//     slug: "content-writing",
//     subpages: [
//       { title: "Blog Writing", slug: "blog-posts-articles", icon: PenTool, description: "SEO-optimized articles." },
//       { title: "Copywriting", slug: "website-copy", icon: FileText, description: "Persuasive sales copy." },
//       { title: "Technical Writing", slug: "technical-writing", icon: Code, description: "Manuals and documentation." },
//       { title: "Ghostwriting", slug: "ghostwriting", icon: UserCheck, description: "Writing on behalf of leaders." },
//       { title: "Press Releases", slug: "press-releases", icon: Megaphone, description: "Official company announcements." },
//       { title: "Product Descriptions", slug: "product-descriptions", icon: ShoppingBag, description: "E-commerce catalog copy." },
//     ]
//   },
//   {
//     title: "Hire Developers",
//     slug: "hire-developers",
//     subpages: [
//       { title: "Frontend Devs", slug: "frontend", icon: Layout, description: "React, Vue, and Angular experts." },
//       { title: "Backend Devs", slug: "backend", icon: Server, description: "Node, Python, and Java specialists." },
//       { title: "Full Stack Devs", slug: "fullstack", icon: Layers, description: "End-to-end application builders." },
//       { title: "Mobile Devs", slug: "mobile", icon: Smartphone, description: "iOS and Android engineers." },
//       { title: "DevOps Engineers", slug: "devops", icon: Settings, description: "CI/CD and infrastructure." },
//       { title: "QA Testers", slug: "qa-testing", icon: Shield, description: "Automated and manual testing." },
//     ]
//   },
//   {
//     title: "Graphic & Web Design",
//     slug: "graphic-web-designing",
//     subpages: [
//       { title: "Logo Design", slug: "brand-identity-design", icon: Star, description: "Brand identity creation." },
//       { title: "Mobile App Design", slug: "mobile-app-design", icon: Smartphone, description: "iOS and Android UI." },
//       { title: "UI/UX Design", slug: "web-design-ui-ux", icon: Layout, description: "User-centered web interfaces." },
//       { title: "Print Design", slug: "print-design", icon: Printer, description: "Brochures, cards, and flyers." },
//       { title: "Social Graphics", slug: "social-media-graphics", icon: ImageIcon, description: "Visuals for social feeds." },
//       { title: "Infographics", slug: "infographics", icon: PieChart, description: "Visual data representation." },
//     ]
//   },
//   {
//     title: "Finance and Accounts",
//     slug: "finance-accounts",
//     subpages: [
//       { title: "Bookkeeping", slug: "bookkeeping", icon: Briefcase, description: "Daily financial recording." },
//       { title: "Budget Planning", slug: "budget-planning", icon: PieChart, description: "Financial forecasting." },
//       { title: "Financial Analysis", slug: "financial-consulting", icon: LineChart, description: "Profitability assessment." },
//       { title: "Reporting", slug: "financial-reporting", icon: FileSpreadsheet, description: "Balance sheets and P&L." },
//       { title: "Payroll Processing", slug: "payroll-processing", icon: Users, description: "Salary and wage management." },
//       { title: "Tax Preparation", slug: "tax-preparation", icon: Receipt, description: "Tax filing assistance." },
//     ]
//   },
//   {
//     title: "Contact Centre",
//     slug: "contact-centre-outsourcing",
//     subpages: [
//       { title: "Inbound Support", slug: "customer-support", icon: Headphones, description: "Answering incoming queries." },
//       { title: "Outbound Calling", slug: "inbound-outbound-calling", icon: Phone, description: "Sales and survey calls." },
//       { title: "Lead Generation", slug: "lead-generation", icon: Target, description: "Qualifying sales prospects." },
//       { title: "Multilingual Support", slug: "multilingual-support", icon: Globe, description: "Support in various languages." },
//       { title: "Order Taking", slug: "order-processing", icon: ShoppingBag, description: "Processing phone orders." },
//       { title: "Tech Support", slug: "technical-support", icon: Wrench, description: "Level 1 and 2 troubleshooting." },
//     ]
//   },
//   {
//     title: "Mobile App Dev",
//     slug: "mobile-app-development",
//     subpages: [
//       { title: "Security & Testing", slug: "app-security-testing", icon: Shield, description: "Vulnerability assessment." },
//       { title: "Backend API", slug: "backend-development", icon: Server, description: "Server-side logic." },
//       { title: "Cross-Platform", slug: "cross-platform", icon: Layers, description: "Flutter and React Native." },
//       { title: "Native Android", slug: "native-android", icon: Smartphone, description: "Kotlin/Java development." },
//       { title: "Native iOS", slug: "native-ios", icon: Smartphone, description: "Swift/Obj-C development." },
//       { title: "App Maintenance", slug: "app-maintenance", icon: Settings, description: "Updates and bug fixes." },
//     ]
//   },
//   {
//     title: "Hire Virtual Assistance",
//     slug: "hire-virtual-assistance",
//     subpages: [
//       { title: "General Admin", slug: "administrative-support", icon: Briefcase, description: "Day-to-day operations." },
//       { title: "Calendar Scheduling", slug: "calendar-scheduling", icon: Calendar, description: "Meeting management." },
//       { title: "Email Mgmt", slug: "email-management", icon: Mail, description: "Inbox zero strategies." },
//       { title: "Personal Assistant", slug: "personal-assistant", icon: UserPlus, description: "Lifestyle management." },
//       { title: "Data Mining", slug: "data-entry", icon: Database, description: "Information research." },
//       { title: "Research", slug: "web-research", icon: Search, description: "Topic and market research." },
//     ]
//   }
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug);

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100 font-sans">
//       {/* --- CSS to Hide Scrollbar --- */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;  /* IE and Edge */
//           scrollbar-width: none;  /* Firefox */
//         }
//       `}</style>

//       <div className="w-full max-w-[1349px] mx-auto px-6 sm:px-8 lg:px-0">
//         <div className="flex justify-between items-center h-[100px]">

//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="/logo.png"
//                 alt="ProTech Planner Logo"
//                 width={380}
//                 height={360}
//                 className="w-auto h-12 sm:h-16 lg:h-[80px] object-contain transition-all"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="flex items-center space-x-8">
//               <Link
//                 href="/"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown Wrapper */}
//               <div className="group h-full flex items-center">
//                 <Link
//                   href="/services"
//                   className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
//                 >
//                   Services
//                   <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//                 </Link>

//                 {/* --- MEGA MENU CONTAINER START --- */}
//                 <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 px-4 w-full flex justify-center">
//                   <div className="w-[95vw] max-w-[1400px] h-auto min-h-[433px] bg-[#F1F5FF] rounded-[8px] shadow-[0px_2px_20px_rgba(33,90,205,0.2)] flex overflow-hidden">

//                     {/* --- LEFT PANEL: CATEGORIES --- */}
//                     {/* Applied 'no-scrollbar' class here */}
//                     {/* --- LEFT PANEL: CATEGORIES --- */}
//                     {/* Applied 'no-scrollbar' class here */}
//                     <div className="w-[30%] max-w-[350px] min-w-[280px] h-full flex flex-col p-[10px] gap-[1px] relative flex-shrink-0 border-r border-[#215ACD]/10">
//                       <div className="w-full h-[40px] flex items-end px-[24px] mb-[10px]">
//                         <span className="font-semibold text-[20px] text-[#215ACD]/60 leading-[200%]">
//                           Categories
//                         </span>
//                       </div>
//                       <div className="flex flex-col gap-[1px] overflow-y-auto max-h-[380px] no-scrollbar">
//                         {services.map((service) => (
//                           <div
//                             key={service.slug}
//                             onMouseEnter={() => setHoveredService(service.slug)}
//                             className={`
//                               w-full h-[60px] flex items-center justify-between px-[24px] rounded-[4px] cursor-pointer transition-all duration-200 flex-shrink-0
//                               ${hoveredService === service.slug
//                                 ? 'bg-[#215ACD]/20'
//                                 : 'bg-transparent hover:bg-[#215ACD]/10'
//                               }
//                             `}
//                           >
//                             <span className="text-[20px] font-normal text-black leading-[300%] truncate">
//                               {service.title}
//                             </span>
//                             {hoveredService === service.slug && (
//                               <ChevronRight className="w-[24px] h-[24px] text-black" />
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>



//                     {/* --- RIGHT PANEL: SUB-SERVICES --- */}
//                     {/* Applied 'no-scrollbar' class here */}
//                     <div className="flex-1 p-[42px] overflow-y-auto no-scrollbar">
//                       {hoveredService ? (
//                         <div className="grid grid-cols-2 gap-x-[40px] gap-y-[22px]">
//                           {(() => {
//                             const service = services.find(s => s.slug === hoveredService);
//                             return service && service.subpages ? (
//                               service.subpages.map((subpage) => {
//                                 const IconComponent = subpage.icon || ChevronRight;
//                                 return (
//                                   <Link
//                                     key={subpage.slug}
//                                     href={`/services/${service.slug}/${subpage.slug}`}
//                                     className="group/item flex items-start gap-[9px] w-full max-w-[380px] p-2 rounded-lg hover:bg-white/50 transition-colors"
//                                   >
//                                     <div className="w-[38px] h-[38px] bg-[#D6E3FF] rounded-[4px] flex items-center justify-center flex-shrink-0">
//                                       <IconComponent className="w-[24px] h-[24px] text-[#213959]" />
//                                     </div>
//                                     <div className="flex flex-col gap-[8px]">
//                                       <h4 className="text-[20px] font-medium text-black leading-none group-hover/item:text-[#213959] transition-colors">
//                                         {subpage.title}
//                                       </h4>
//                                       <p className="text-[14px] font-normal text-black/60 leading-[17px]">
//                                         {subpage.description}
//                                       </p>
//                                     </div>
//                                   </Link>
//                                 );
//                               })
//                             ) : null;
//                           })()}
//                         </div>
//                       ) : null}
//                     </div>

//                   </div>
//                 </div>
//                 {/* --- MEGA MENU CONTAINER END --- */}

//               </div>

//               <Link
//                 href="/about"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <Button
//               asChild
//               className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
//             >
//               <Link href="/contact">Start Free Trial</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-700 hover:bg-slate-100"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
//             <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
//               <Link
//                 href="/"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>

//               <div>
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {isMobileServicesOpen && (
//                   <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
//                     <Link
//                       href="/services"
//                       className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       View All Services
//                     </Link>
//                     {services.map((service) => (
//                       <div key={service.slug}>
//                         <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
//                           {service.title}
//                         </div>
//                         {service.subpages?.map(sub => (
//                           <Link
//                             key={sub.slug}
//                             href={`/services/${service.slug}/${sub.slug}`}
//                             className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {sub.title}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/about"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>

//               <div className="pt-4 px-2">
//                 <Button
//                   asChild
//                   className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/contact">Get Started</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }