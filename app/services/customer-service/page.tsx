"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Mail,
  AlertCircle,
  ShoppingCart,
  BarChart3,
  Headphones,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Live Chat Support",
    description: "Real-time chat support to provide immediate assistance and boost customer satisfaction",
    icon: MessageCircle,
    image: "/service-icons/customer services/Live-chat.png",
    href: "/services/customer-service/live-chat-support",
  },
  {
    title: "Phone Support",
    description: "Professional inbound and outbound phone support for personalized customer interactions",
    icon: Phone,
    image: "/service-icons/customer services/service-icon.png",
    href: "/services/customer-service/phone-support",
  },
  {
    title: "Email Support",
    description: "Comprehensive email management with timely, professional responses to customer inquiries",
    icon: Mail,
    image: "/service-icons/customer services/service-icon.png",
    href: "/services/customer-service/email-support",
  },
  {
    title: "Help Desk Support",
    description: "Multi-channel technical support with integrated ticketing and knowledge base",
    icon: AlertCircle,
    image: "/service-icons/customer services/Help_Desk.png",
    href: "/services/customer-service/help-desk",
  },
  {
    title: "Order Processing",
    description: "Complete order management from entry to fulfillment and tracking",
    icon: ShoppingCart,
    image: "/service-icons/customer services/service-icon.png",
    href: "/services/customer-service/order-processing",
  },
  {
    title: "Customer Feedback",
    description: "Systematic feedback collection and analysis to improve customer satisfaction",
    icon: BarChart3,
    image: "/service-icons/customer services/Customer-Feedback.png",
    href: "/services/customer-service/customer-feedback",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "24/7 Availability",
    description: "Round-the-clock customer support ensures your customers always get help when they need it.",
    icon: Clock,
  },
  {
    title: "Expert Team",
    description: "Highly trained customer service professionals who represent your brand with excellence.",
    icon: Users,
  },
  {
    title: "Scalable Solutions",
    description: "Flexible support that grows with your business, from startup to enterprise.",
    icon: TrendingUp,
  },
  {
    title: "Multi-Channel Support",
    description: "Seamless customer experience across phone, email, chat, and social media.",
    icon: Headphones,
  },
];

const STATS = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "<2min", label: "Average Response Time" },
  { value: "50K+", label: "Tickets Resolved Monthly" }
];

export default function CustomerServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-white pt-4 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-indigo-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Phone className="w-4 h-4" />
                Customer Service Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-[#215ACD]">Exceptional</span>
                <br />
                <span className="text-black">Customer Support</span>
                <br />
                <span className="text-black">That Delights</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Transform customer interactions into lasting relationships with our professional, multi-channel customer service solutions.
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
                  <Link href="/contact">Schedule Consultation</Link>
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
              className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0"
            >
              <Image
                src="/service-icons/customer services/service-icon.png"
                alt="Customer Service Excellence"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Complete </span>
              <span className="text-[#215ACD]">Customer Service Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From live chat to phone support, we provide comprehensive multi-channel customer service to exceed your clients' expectations.
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
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#215ACD]/30 transition-all duration-300 flex flex-col group"
              >
                {/* Card Illustration Area */}
                <div className="relative h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>

                <div className="p-8 pt-6 flex-1 flex flex-col gap-3">
                  <h3 className="text-[20px] font-semibold text-[#414141] font-['Inter']">
                    {service.title}
                  </h3>
                  <p className="text-[#5C5C5C] text-[16px] leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#215ACD] font-medium text-[15px] hover:gap-3 transition-all duration-300 mt-2 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Why Choose Our </span>
              <span className="text-[#215ACD]">Customer Service?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#414141] mb-3">{reason.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-[24px] overflow-hidden p-12 md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-6">
                Ready to Enhance Customer Experience?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our professional customer service team help you build stronger relationships and drive customer loyalty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Customer Support
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
                  24/7 support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Expert team
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Multi-channel
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Customer Service" />
    </main>
  );
}