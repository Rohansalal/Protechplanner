"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Multi-Channel Feedback Collection",
    description: "Gather feedback through surveys, emails, social media, live chat, and phone calls for comprehensive insights."
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis",
    description: "Advanced AI-powered sentiment analysis to understand customer emotions and identify trends in real-time."
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Transform raw feedback into actionable insights with detailed reports, dashboards, and recommendations."
  },
  {
    icon: Target,
    title: "Issue Resolution Tracking",
    description: "Track and manage customer concerns from feedback to resolution, ensuring no issue goes unaddressed."
  }
];

const BENEFITS = [
  "Increase customer satisfaction by 35%",
  "Identify product improvement opportunities",
  "Reduce churn with proactive issue resolution",
  "Boost NPS (Net Promoter Score) by 25 points",
  "Real-time feedback monitoring and alerts",
  "Comprehensive analytics and reporting"
];

const FEEDBACK_TYPES = [
  {
    emoji: "⭐",
    title: "Product Reviews",
    description: "Collect and manage product ratings and reviews across all channels"
  },
  {
    emoji: "📊",
    title: "NPS Surveys",
    description: "Measure customer loyalty with Net Promoter Score surveys"
  },
  {
    emoji: "💬",
    title: "Support Feedback",
    description: "Gather feedback on customer service interactions and support quality"
  },
  {
    emoji: "🎯",
    title: "Feature Requests",
    description: "Capture and prioritize customer feature requests and suggestions"
  }
];

const STATS = [
  { value: "35%", label: "Satisfaction Increase" },
  { value: "10K+", label: "Feedback Monthly" },
  { value: "24hrs", label: "Response Time" }
];

export default function CustomerFeedbackPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
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
            <Link href="/services/customer-service" className="hover:text-[#215ACD] transition-colors">Customer Service</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Customer Feedback</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-purple-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <MessageSquare className="w-4 h-4" />
                Customer Feedback Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Turn Feedback Into </span>
                <span className="text-[#215ACD]">Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Comprehensive feedback management that transforms customer insights into actionable strategies for continuous improvement.
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
                  <Link href="/services/customer-service">
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
                src="https://placehold.co/600x500/faf5ff/215acd?text=Customer+Feedback"
                alt="Customer Feedback Services"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Comprehensive </span>
              <span className="text-[#215ACD]">Feedback Management</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Collect, analyze, and act on customer feedback to drive continuous improvement and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#215ACD]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{feature.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Types Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Types of </span>
              <span className="text-[#215ACD]">Feedback We Manage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEEDBACK_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{type.emoji}</div>
                <h3 className="text-[18px] font-semibold text-[#414141] mb-2">{type.title}</h3>
                <p className="text-[#5C5C5C] text-sm">{type.description}</p>
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
                <span className="text-[#215ACD]">Feedback Services?</span>
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

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-2xl p-8 text-white">
                <Star className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Boost Customer Satisfaction</h3>
                <p className="text-white/90 mb-4">
                  Our feedback management increases customer satisfaction by an average of 35% within the first 6 months.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">+35%</div>
                  <div className="text-sm text-white/80">Average satisfaction increase</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Lightbulb className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Actionable Insights</h3>
                <p className="text-[#5C5C5C]">
                  We don't just collect feedback—we analyze it and provide clear, actionable recommendations for improvement.
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
                Ready to Harness Customer Feedback?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Transform customer insights into growth opportunities with our comprehensive feedback management services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Feedback Service
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded text-[15px] font-medium bg-transparent min-w-[200px]"
                >
                  <Link href="/services/customer-service">View All Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Real-time insights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24/7 monitoring
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Expert analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Customer Feedback Management" />
    </main>
  );
}