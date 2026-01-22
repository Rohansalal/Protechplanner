"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  ArrowRight,
  CheckCircle,
  FileText,
  Globe,
  Share2,
  Mail,
  BookOpen,
  Briefcase,
  Target,
  TrendingUp,
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
    icon: FileText,
    title: "Blog Posts & Articles",
    description: "Engaging, SEO-optimized blog posts and articles that attract readers and establish your authority.",
    link: "/services/content-writing/blog-posts-articles"
  },
  {
    icon: Globe,
    title: "Website Copy",
    description: "Compelling website copy that converts visitors into customers with clear, persuasive messaging.",
    link: "/services/content-writing/website-copy"
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Creative social media content that engages your audience and builds brand awareness.",
    link: "/services/content-writing/social-media-content"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Persuasive email campaigns that nurture leads and drive conversions with strategic messaging.",
    link: "/services/content-writing/email-marketing"
  },
  {
    icon: BookOpen,
    title: "Technical Writing",
    description: "Clear, accurate technical documentation, guides, and manuals for complex products and services.",
    link: "/services/content-writing/technical-writing"
  },
  {
    icon: Briefcase,
    title: "Marketing Materials",
    description: "Professional brochures, case studies, white papers, and sales materials that drive results.",
    link: "/services/content-writing/marketing-materials"
  }
];

const BENEFITS = [
  "Professional writers with industry expertise",
  "SEO-optimized content for better rankings",
  "Unlimited revisions until perfect",
  "Fast turnaround without quality compromise",
  "Consistent brand voice across all content",
  "Plagiarism-free, original content guaranteed"
];

const USE_CASES = [
  {
    title: "Content Marketing",
    description: "Build authority and attract organic traffic with high-quality blog content.",
    metrics: "500+ articles/month"
  },
  {
    title: "Website Launch",
    description: "Complete website copywriting for new business launches and rebrands.",
    metrics: "50+ pages"
  },
  {
    title: "Lead Nurturing",
    description: "Email sequences that guide prospects through your sales funnel.",
    metrics: "40% conversion"
  },
  {
    title: "Product Documentation",
    description: "Clear technical documentation that helps users succeed with your product.",
    metrics: "Custom projects"
  }
];

const STATS = [
  { value: "10K+", label: "Content Pieces" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24-48hrs", label: "Avg Turnaround" }
];

export default function ContentWritingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-emerald-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#5C5C5C] mb-8"
          >
            <Link href="/services" className="hover:text-[#215ACD] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Content Writing</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-emerald-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <PenTool className="w-4 h-4" />
                Content Writing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Words That </span>
                <span className="text-[#215ACD]">Convert</span>
                <br />
                <span className="text-black">Content That Sells</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional content writing services that engage your audience, boost SEO rankings, and drive conversions across all platforms and formats.
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-2xl" />
              <Image
                src="/service-icons/content-writing/service-icon.png"
                alt="Content Writing Services"
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
              <span className="text-[#414141]">Complete Content Writing </span>
              <span className="text-[#215ACD]">Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From blog posts to technical documentation, we create compelling content for every business need.
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
              See how businesses leverage our content writing expertise to achieve their goals.
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
                <span className="text-[#215ACD]">Content Writing?</span>
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
                <h3 className="text-[24px] font-bold mb-3">Quality Guarantee</h3>
                <p className="text-white/90 mb-4">
                  Every piece of content is original, plagiarism-free, and professionally edited to meet the highest standards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    100% original content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Professional editing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Unlimited revisions
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8">
                <Zap className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Fast Delivery</h3>
                <p className="text-[#5C5C5C]">
                  Get high-quality content delivered quickly with our 24-48 hour average turnaround time for most projects.
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
                Ready to Elevate Your Content?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our professional writers create compelling content that engages your audience and drives results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Your Project
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
                  10K+ pieces written
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  98% satisfaction
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24-48hr delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Content Writing" />
    </main>
  );
}