"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Headphones,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Sparkles,
  PhoneCall
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: PhoneCall,
    title: "Inbound Call Handling",
    description: "Professional answering service for all incoming customer calls with warm, friendly greetings and efficient query resolution."
  },
  {
    icon: Headphones,
    title: "Outbound Calling",
    description: "Proactive customer outreach for follow-ups, surveys, appointment reminders, and sales support."
  },
  {
    icon: Users,
    title: "Multilingual Support",
    description: "Serve global customers with support agents fluent in multiple languages and cultural contexts."
  },
  {
    icon: Clock,
    title: "24/7 Phone Coverage",
    description: "Round-the-clock phone support ensures your customers can always reach a live person when they need help."
  }
];

const BENEFITS = [
  "Professional call handling with your brand voice",
  "Reduce wait times and abandoned calls",
  "Detailed call logging and CRM integration",
  "Call recording for quality assurance",
  "Escalation protocols for complex issues",
  "Real-time call analytics and reporting"
];

const CALL_TYPES = [
  {
    title: "Customer Inquiries",
    description: "Product information, pricing, availability, and general questions handled professionally.",
    icon: "📞"
  },
  {
    title: "Technical Support",
    description: "Troubleshooting, setup assistance, and technical issue resolution.",
    icon: "🔧"
  },
  {
    title: "Order Management",
    description: "Order placement, tracking, modifications, and returns processing.",
    icon: "📦"
  },
  {
    title: "Appointment Scheduling",
    description: "Calendar management, booking confirmations, and reminder calls.",
    icon: "📅"
  }
];

const STATS = [
  { value: "<20sec", label: "Average Wait Time" },
  { value: "95%", label: "First Call Resolution" },
  { value: "24/7", label: "Phone Coverage" }
];

export default function PhoneSupportPage() {
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
            <span className="text-[#215ACD] font-medium">Phone Support</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-green-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Phone className="w-4 h-4" />
                Phone Support Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-[#215ACD]">Professional</span>
                <br />
                <span className="text-black">Phone Support</span>
                <br />
                <span className="text-black">That Converts</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Deliver exceptional customer experiences with professional inbound and outbound phone support that represents your brand perfectly.
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
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent rounded-2xl" />
              <Image
                src="https://placehold.co/600x500/f0fdf4/215acd?text=Phone+Support"
                alt="Phone Support Services"
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
              <span className="text-[#215ACD]">Phone Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From inbound support to outbound campaigns, we handle all your phone communication needs.
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

      {/* Call Types Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Call Types </span>
              <span className="text-[#215ACD]">We Handle</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Our trained agents handle a wide variety of customer calls with professionalism and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CALL_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-[18px] font-semibold text-[#414141] mb-3">{type.title}</h3>
                <p className="text-[#5C5C5C] text-[14px] leading-relaxed">{type.description}</p>
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
                <span className="text-[#215ACD]">Phone Support?</span>
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

            <div className="bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-2xl p-8 text-white">
              <Shield className="w-10 h-10 mb-4" />
              <h3 className="text-[24px] font-bold mb-3">Quality Assurance</h3>
              <p className="text-white/90 mb-4">
                Every call is monitored for quality, with regular training sessions to ensure our agents represent your brand perfectly.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Call recording and monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Regular performance reviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Ongoing agent training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Customer satisfaction tracking
                </li>
              </ul>
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
                Ready for Professional Phone Support?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our expert team handle your customer calls with the professionalism your brand deserves.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Phone Support
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
                  24/7 coverage
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Expert agents
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Quality assured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Phone Support" />
    </main>
  );
}