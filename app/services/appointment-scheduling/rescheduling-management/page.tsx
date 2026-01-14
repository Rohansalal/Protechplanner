"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Zap,
  Shield,
  MessageSquare,
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
    title: "Flexible Rescheduling",
    description: "Easy rescheduling process that finds the next available time slot automatically based on preferences."
  },
  {
    icon: MessageSquare,
    title: "Automated Notifications",
    description: "Instant notifications to all parties when appointments are rescheduled with updated calendar invites."
  },
  {
    icon: Users,
    title: "Multi-Party Coordination",
    description: "Coordinate rescheduling across multiple participants with automatic availability checking."
  },
  {
    icon: Clock,
    title: "Priority Rescheduling",
    description: "Smart prioritization system that ensures urgent appointments are rescheduled first."
  }
];

const BENEFITS = [
  "Reschedule appointments in under 2 minutes",
  "Reduce scheduling conflicts by 85%",
  "Automatic calendar updates for all parties",
  "Handle 50+ reschedules per day",
  "24/7 rescheduling availability",
  "Detailed rescheduling analytics"
];

const RESCHEDULE_REASONS = [
  {
    emoji: "🚨",
    title: "Emergency Changes",
    description: "Immediate rescheduling for urgent conflicts and emergencies"
  },
  {
    emoji: "📅",
    title: "Calendar Conflicts",
    description: "Resolve double-bookings and scheduling conflicts automatically"
  },
  {
    emoji: "🌤️",
    title: "External Factors",
    description: "Weather, travel delays, and other external circumstances"
  },
  {
    emoji: "👤",
    title: "Client Requests",
    description: "Accommodate client rescheduling requests professionally"
  }
];

const STATS = [
  { value: "<2min", label: "Reschedule Time" },
  { value: "85%", label: "Conflict Reduction" },
  { value: "24/7", label: "Availability" }
];

export default function ReschedulingManagementPage() {
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
            <span className="text-[#215ACD] font-medium">Rescheduling Management</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-violet-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <RefreshCw className="w-4 h-4" />
                Rescheduling Management Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Effortless </span>
                <span className="text-[#215ACD]">Rescheduling</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional rescheduling management that handles changes smoothly, keeping all parties informed and calendars synchronized.
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
                src="https://placehold.co/600x500/f5f3ff/215acd?text=Rescheduling+Management"
                alt="Rescheduling Management Services"
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
              <span className="text-[#414141]">Smart </span>
              <span className="text-[#215ACD]">Rescheduling Features</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Advanced tools that make rescheduling appointments quick, easy, and conflict-free.
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

      {/* Reschedule Reasons Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Common </span>
              <span className="text-[#215ACD]">Rescheduling Scenarios</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESCHEDULE_REASONS.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{reason.emoji}</div>
                <h3 className="text-[18px] font-semibold text-[#414141] mb-2">{reason.title}</h3>
                <p className="text-[#5C5C5C] text-sm">{reason.description}</p>
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
                <span className="text-[#215ACD]">Rescheduling Service?</span>
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
                <h3 className="text-[24px] font-bold mb-3">Lightning Fast Rescheduling</h3>
                <p className="text-white/90 mb-4">
                  Reschedule appointments in under 2 minutes with our streamlined process and automated availability checking.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">&lt;2min</div>
                  <div className="text-sm text-white/80">Average rescheduling time</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Bell className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Automatic Updates</h3>
                <p className="text-[#5C5C5C]">
                  All parties receive instant notifications with updated calendar invites when appointments are rescheduled.
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
                Ready to Simplify Rescheduling?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our team handle all your rescheduling needs with speed, professionalism, and zero conflicts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Rescheduling Service
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
                  Fast processing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Auto notifications
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24/7 available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Rescheduling Management" />
    </main>
  );
}