"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Bell
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: Calendar,
    title: "Multi-Calendar Sync",
    description: "Seamlessly sync and manage multiple calendars across Google, Outlook, Apple, and other platforms in one place."
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that finds optimal meeting times based on availability, preferences, and time zones."
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Coordinate schedules across teams, departments, and organizations with shared calendar views and permissions."
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Customizable reminder systems via email, SMS, and push notifications to reduce no-shows and missed meetings."
  }
];

const BENEFITS = [
  "Save 10+ hours per week on scheduling",
  "Eliminate double-booking conflicts",
  "Real-time calendar synchronization",
  "Reduce scheduling back-and-forth by 80%",
  "24/7 calendar access from any device",
  "Detailed scheduling analytics and insights"
];

const CALENDAR_FEATURES = [
  {
    emoji: "🔄",
    title: "Auto-Sync",
    description: "Real-time synchronization across all your calendar platforms"
  },
  {
    emoji: "🎯",
    title: "Priority Blocking",
    description: "Automatically block time for high-priority tasks and meetings"
  },
  {
    emoji: "📱",
    title: "Mobile Access",
    description: "Full calendar management from iOS and Android devices"
  },
  {
    emoji: "🔒",
    title: "Privacy Controls",
    description: "Granular privacy settings for different calendar events"
  }
];

const STATS = [
  { value: "10hrs", label: "Saved Weekly" },
  { value: "99.9%", label: "Sync Accuracy" },
  { value: "5+", label: "Platforms Supported" }
];

export default function CalendarManagementPage() {
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
            <Link href="/services/appointment-scheduling" className="hover:text-[#215ACD] transition-colors">Appointment Scheduling</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Calendar Management</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-violet-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Calendar className="w-4 h-4" />
                Calendar Management Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Master Your </span>
                <span className="text-[#215ACD]">Calendar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional calendar management that keeps you organized, on time, and in control of your schedule across all platforms.
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
                  <Link href="/services/appointment-scheduling">
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 to-transparent rounded-2xl" />
              <Image
                src="https://placehold.co/600x500/f5f3ff/215acd?text=Calendar+Management"
                alt="Calendar Management Services"
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
              <span className="text-[#414141]">Powerful </span>
              <span className="text-[#215ACD]">Calendar Features</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Everything you need to manage your calendar efficiently and never miss an important meeting.
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

      {/* Calendar Features Grid */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Advanced </span>
              <span className="text-[#215ACD]">Calendar Tools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CALENDAR_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-[18px] font-semibold text-[#414141] mb-2">{feature.title}</h3>
                <p className="text-[#5C5C5C] text-sm">{feature.description}</p>
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
                <span className="text-[#215ACD]">Calendar Management?</span>
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
                <Zap className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Save 10+ Hours Weekly</h3>
                <p className="text-white/90 mb-4">
                  Our calendar management saves an average of 10 hours per week by eliminating scheduling conflicts and automating routine tasks.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">10hrs</div>
                  <div className="text-sm text-white/80">Average time saved per week</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Shield className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Secure & Private</h3>
                <p className="text-[#5C5C5C]">
                  Enterprise-grade security with end-to-end encryption and granular privacy controls for all your calendar data.
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
                Ready to Master Your Calendar?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our team manage your calendar professionally and save you hours every week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Calendar Service
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded text-[15px] font-medium bg-transparent min-w-[200px]"
                >
                  <Link href="/services/appointment-scheduling">View All Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Multi-platform sync
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24/7 access
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Secure & private
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Calendar Management" />
    </main>
  );
}
