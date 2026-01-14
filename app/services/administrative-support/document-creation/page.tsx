"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  CheckCircle,
  FileEdit,
  Layout,
  Presentation,
  FileSpreadsheet,
  Award,
  Sparkles,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const DOCUMENT_TYPES = [
  {
    icon: Presentation,
    title: "Presentations & Decks",
    description: "Professional PowerPoint and Google Slides presentations with compelling visuals, consistent branding, and persuasive storytelling."
  },
  {
    icon: FileText,
    title: "Reports & Proposals",
    description: "Comprehensive business reports, proposals, and whitepapers formatted to industry standards with data visualization."
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheets & Data",
    description: "Excel and Google Sheets documents with formulas, charts, pivot tables, and automated reporting systems."
  },
  {
    icon: FileEdit,
    title: "Templates & SOPs",
    description: "Custom templates, standard operating procedures, and documentation that streamline your business processes."
  }
];

const BENEFITS = [
  "Professional, on-brand documents every time",
  "Fast turnaround with 24-48 hour delivery",
  "Unlimited revisions until perfect",
  "Expert formatting and design",
  "Template creation for recurring needs",
  "Version control and document management"
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief & Requirements",
    description: "Share your content, brand guidelines, and specific requirements with our team."
  },
  {
    number: "02",
    title: "First Draft",
    description: "Receive a professionally formatted first draft within 24-48 hours."
  },
  {
    number: "03",
    title: "Revisions",
    description: "Request unlimited changes until the document meets your exact specifications."
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Get your polished document in multiple formats ready for distribution."
  }
];

const STATS = [
  { value: "1000+", label: "Documents Created" },
  { value: "24-48h", label: "Average Turnaround" },
  { value: "99%", label: "Client Satisfaction" }
];

export default function DocumentCreationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-white pt-32 pb-20 md:pt-40 md:pb-32 px-6"> */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#5C5C5C] mb-8"
          >
            <Link href="/services" className="hover:text-[#215ACD] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/administrative-support" className="hover:text-[#215ACD] transition-colors">Administrative Support</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Document Creation</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-purple-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <FileText className="w-4 h-4" />
                Document Creation Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-[#215ACD]">Professional</span>
                <br />
                <span className="text-black">Documents That</span>
                <br />
                <span className="text-black">Impress</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                From presentations to reports, our expert team creates polished, professional documents that elevate your brand and save you hours of formatting work.
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
                  <Link href="/services/administrative-support">
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent rounded-2xl" />
              <Image
                src="https://placehold.co/600x500/f3e8ff/215acd?text=Document+Creation"
                alt="Document Creation Services"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Documents We </span>
              <span className="text-[#215ACD]">Create</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Whatever your document needs, we deliver professional results with consistent branding and expert formatting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DOCUMENT_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-[#215ACD]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{type.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Our </span>
              <span className="text-[#215ACD]">Process</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              A streamlined workflow that ensures quality results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 h-full">
                  <div className="text-[48px] font-bold text-[#215ACD]/20 mb-4">{step.number}</div>
                  <h3 className="text-[20px] font-semibold text-[#414141] mb-3">{step.title}</h3>
                  <p className="text-[#5C5C5C] text-[15px] leading-relaxed">{step.description}</p>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#215ACD]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-2xl p-8 md:p-12 text-white">
              <Award className="w-12 h-12 mb-6" />
              <h3 className="text-[28px] md:text-[32px] font-bold mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Every document is reviewed by our quality assurance team before delivery, ensuring pixel-perfect formatting and zero errors.
              </p>
              <ul className="space-y-3">
                {[
                  "Brand guideline compliance",
                  "Grammar and spell-check",
                  "Formatting consistency",
                  "Visual design review"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-6">
                <span className="text-[#414141]">Why Choose Our </span>
                <span className="text-[#215ACD]">Document Services?</span>
              </h2>

              <div className="space-y-4">
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
                Ready for Professional Documents?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Stop struggling with formatting. Let our experts create stunning documents that represent your brand perfectly.
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
                  <Link href="/services/administrative-support">View All Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Fast turnaround
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Unlimited revisions
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Expert quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Document Creation" />
    </main>
  );
}
