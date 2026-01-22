"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  BookOpen,
  TrendingUp,
  FileText,
  DollarSign,
  PieChart,
  Receipt,
  Target,
  Zap,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description: "Accurate daily bookkeeping and transaction recording to keep your financial records organized and up-to-date.",
    link: "/services/finance-accounts/bookkeeping"
  },
  {
    icon: DollarSign,
    title: "Payroll Processing",
    description: "Complete payroll management including salary calculations, tax deductions, and compliance reporting.",
    link: "/services/finance-accounts/payroll-processing"
  },
  {
    icon: Receipt,
    title: "Tax Preparation",
    description: "Expert tax preparation and filing services to maximize deductions and ensure compliance.",
    link: "/services/finance-accounts/tax-preparation"
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description: "Comprehensive financial statements, P&L reports, balance sheets, and cash flow analysis.",
    link: "/services/finance-accounts/financial-reporting"
  },
  {
    icon: PieChart,
    title: "Budget Planning",
    description: "Strategic budget planning and forecasting to help you make informed financial decisions.",
    link: "/services/finance-accounts/budget-planning"
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description: "Expert financial advice and consulting to optimize your business finances and growth strategy.",
    link: "/services/finance-accounts/financial-consulting"
  }
];

const BENEFITS = [
  "Certified accountants with 15+ years experience",
  "99.9% accuracy in financial reporting",
  "Save 40% on accounting costs vs in-house",
  "Real-time access to financial dashboards",
  "Tax compliance and audit support",
  "Secure, encrypted financial data handling"
];

const USE_CASES = [
  {
    title: "Small Business",
    description: "Complete accounting solutions for small businesses and startups.",
    metrics: "Full-service"
  },
  {
    title: "Tax Season",
    description: "Stress-free tax preparation and filing with maximum deductions.",
    metrics: "30% avg savings"
  },
  {
    title: "Growth Planning",
    description: "Financial forecasting and budgeting for business expansion.",
    metrics: "Strategic insights"
  },
  {
    title: "Compliance",
    description: "Ensure regulatory compliance and audit readiness year-round.",
    metrics: "100% compliant"
  }
];

const STATS = [
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "$5M+", label: "Managed Monthly" },
  { value: "500+", label: "Businesses Served" }
];

export default function FinanceAccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-cyan-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#5C5C5C] mb-8"
          >
            <Link href="/services" className="hover:text-[#215ACD] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Finance & Accounts</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-cyan-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Calculator className="w-4 h-4" />
                Finance & Accounts
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Expert </span>
                <span className="text-[#215ACD]">Financial</span>
                <br />
                <span className="text-black">Management</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional finance and accounting services to keep your books accurate, taxes compliant, and financial decisions data-driven.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  className="bg-[#215ACD] hover:bg-[#1a49a8] text-white px-8 py-6 rounded text-[15px] font-medium"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#215ACD] text-[#215ACD] hover:bg-[#F1F5FF] px-8 py-6 rounded text-[15px] font-medium"
                >
                  <Link href="/services">
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Back to Services
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200"
              >
                {STATS.map((stat, index) => (
                  <div key={index}>
                    <div className="text-[28px] md:text-[36px] font-bold text-[#215ACD]">{stat.value}</div>
                    <div className="text-[13px] text-[#5C5C5C] mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative h-[500px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-2xl" />
              <Image
                src="/service-icons/finance-accounts/service-icon.png"
                alt="Finance & Accounts Services"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Complete Financial </span>
              <span className="text-[#215ACD]">Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From bookkeeping to tax preparation, we handle all aspects of your business finances with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] rounded-xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#215ACD]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{service.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#215ACD] font-medium hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Common </span>
              <span className="text-[#215ACD]">Use Cases</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              See how businesses leverage our financial expertise to stay compliant and profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:border-[#215ACD]/30 transition-colors"
              >
                <h3 className="text-[18px] font-semibold text-[#414141] mb-3">{useCase.title}</h3>
                <p className="text-[#5C5C5C] text-[14px] leading-relaxed mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#215ACD] px-3 py-1 rounded-full text-xs font-medium">
                  <Target className="w-3 h-3" />
                  {useCase.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-6">
                <span className="text-[#414141]">Why Choose Our </span>
                <span className="text-[#215ACD]">Financial Services?</span>
              </h2>

              <div className="space-y-4 mb-8">
                {BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#215ACD]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#215ACD]" />
                    </div>
                    <span className="text-[#414141]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-2xl p-8 text-white">
                <Shield className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Bank-Level Security</h3>
                <p className="text-white/90 mb-4">
                  Your financial data is protected with enterprise-grade encryption and strict confidentiality protocols.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    256-bit encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    SOC 2 certified
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Regular audits
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8">
                <Zap className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Real-Time Insights</h3>
                <p className="text-[#5C5C5C]">
                  Access your financial data anytime with real-time dashboards and automated reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-[24px] overflow-hidden p-12 md:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-6">
                Ready to Streamline Your Finances?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our certified accountants handle your finances so you can focus on growing your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded text-[15px] font-medium bg-transparent min-w-[200px]"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  99.9% accuracy
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  $5M+ managed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Certified CPAs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Finance & Accounts" />
    </main>
  );
}