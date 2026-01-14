"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Calendar,
  CreditCard,
  Bell,
  Users,
  Smartphone,
  Zap,
  Shield
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
    title: "Online Booking Portal",
    description: "Custom-branded booking pages that integrate seamlessly with your website and social media platforms."
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Accept deposits and payments at the time of booking with secure payment gateway integration."
  },
  {
    icon: Bell,
    title: "Automated Confirmations",
    description: "Instant booking confirmations via email and SMS with calendar invites and meeting details."
  },
  {
    icon: Users,
    title: "Group Booking Management",
    description: "Handle individual and group bookings with capacity management and waitlist functionality."
  }
];

const BENEFITS = [
  "24/7 online booking availability",
  "Reduce no-shows by 80% with automated reminders",
  "Accept bookings from any device",
  "Integrate with 50+ calendar platforms",
  "Customizable booking rules and restrictions",
  "Real-time availability updates"
];

const BOOKING_TYPES = [
  {
    emoji: "👤",
    title: "One-on-One",
    description: "Individual appointments with automatic scheduling and reminders"
  },
  {
    emoji: "👥",
    title: "Group Sessions",
    description: "Manage group bookings with capacity limits and waitlists"
  },
  {
    emoji: "🔄",
    title: "Recurring",
    description: "Set up recurring appointments with flexible scheduling options"
  },
  {
    emoji: "⚡",
    title: "Instant Booking",
    description: "Real-time booking confirmation for immediate appointments"
  }
];

const STATS = [
  { value: "24/7", label: "Booking Availability" },
  { value: "80%", label: "No-Show Reduction" },
  { value: "50+", label: "Integrations" }
];

export default function BookingSystemsPage() {
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
            <span className="text-[#215ACD] font-medium">Booking Systems</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-violet-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Globe className="w-4 h-4" />
                Booking Systems Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Seamless </span>
                <span className="text-[#215ACD]">Online Booking</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional booking systems that make it easy for customers to schedule appointments 24/7 while reducing no-shows and administrative work.
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
                src="https://placehold.co/600x500/f5f3ff/215acd?text=Booking+Systems"
                alt="Booking Systems Services"
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
              <span className="text-[#414141]">Complete </span>
              <span className="text-[#215ACD]">Booking Solution</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Everything you need to accept and manage online bookings efficiently and professionally.
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

      {/* Booking Types Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Flexible </span>
              <span className="text-[#215ACD]">Booking Options</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOKING_TYPES.map((type, index) => (
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
                <span className="text-[#215ACD]">Booking Systems?</span>
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
                <Bell className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Reduce No-Shows by 80%</h3>
                <p className="text-white/90 mb-4">
                  Automated reminders via email and SMS ensure your customers never forget their appointments.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">80%</div>
                  <div className="text-sm text-white/80">Average no-show reduction</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Smartphone className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Mobile-Friendly</h3>
                <p className="text-[#5C5C5C]">
                  Fully responsive booking pages that work perfectly on all devices, making it easy for customers to book on the go.
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
                Ready to Launch Your Booking System?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Start accepting appointments 24/7 with our professional booking system setup and management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Booking System
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
                  24/7 booking
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Auto reminders
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Payment ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Booking Systems" />
    </main>
  );
}
