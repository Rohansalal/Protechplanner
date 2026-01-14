"use client";

import { motion } from "framer-motion";
import {
  Plane,
  ArrowRight,
  CheckCircle,
  Hotel,
  Car,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
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
    icon: Plane,
    title: "Flight Booking & Management",
    description: "Find the best flight options, handle bookings, manage changes, and track loyalty programs to maximize your travel benefits."
  },
  {
    icon: Hotel,
    title: "Accommodation Arrangements",
    description: "Research and book hotels, Airbnbs, or corporate housing that meet your preferences and budget requirements."
  },
  {
    icon: Car,
    title: "Ground Transportation",
    description: "Coordinate rental cars, airport transfers, ride-sharing, and local transportation for seamless door-to-door travel."
  },
  {
    icon: Calendar,
    title: "Itinerary Planning",
    description: "Create detailed travel itineraries with all confirmations, addresses, and contact information in one organized document."
  }
];

const BENEFITS = [
  "Save 5-10 hours per trip on research and booking",
  "Access to corporate travel discounts and deals",
  "24/7 support for travel emergencies",
  "Comprehensive travel insurance coordination",
  "Visa and documentation assistance",
  "Detailed expense tracking and reporting"
];

const TRAVEL_TYPES = [
  {
    title: "Business Travel",
    description: "Executive trips, conferences, client meetings, and team offsites with full expense management.",
    features: ["Expense reports", "Meeting coordination", "Loyalty tracking"]
  },
  {
    title: "Group Travel",
    description: "Company retreats, team building events, and multi-person trips with coordinated logistics.",
    features: ["Group bookings", "Activity planning", "Budget management"]
  },
  {
    title: "International Travel",
    description: "Complex international trips with visa support, currency exchange, and local arrangements.",
    features: ["Visa assistance", "Travel insurance", "Local contacts"]
  },
  {
    title: "Personal Travel",
    description: "Vacation planning and personal trips with the same professional service and attention to detail.",
    features: ["Custom itineraries", "Activity booking", "Restaurant reservations"]
  }
];

const STATS = [
  { value: "500+", label: "Trips Coordinated" },
  { value: "30%", label: "Average Cost Savings" },
  { value: "24/7", label: "Travel Support" }
];

export default function TravelCoordinationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-sky-50/20 to-white pt-32 pb-20 md:pt-40 md:pb-32 px-6"> */}
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
            <span className="text-[#215ACD] font-medium">Travel Coordination</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-sky-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Plane className="w-4 h-4" />
                Travel Coordination Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Stress-Free </span>
                <span className="text-[#215ACD]">Travel</span>
                <br />
                <span className="text-black">Every Time</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                From flights to hotels to ground transportation, our expert travel coordinators handle every detail so you can focus on your trip, not the logistics.
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
                  <Link href="/contact">Plan Your Trip</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-transparent rounded-2xl" />
              <Image
                src="https://placehold.co/600x500/f0f9ff/215acd?text=Travel+Coordination"
                alt="Travel Coordination Services"
                fill
                className="object-contain drop-shadow-2xl"
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
              <span className="text-[#414141]">Complete </span>
              <span className="text-[#215ACD]">Travel Management</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              We handle every aspect of your travel from initial planning to post-trip expense reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#215ACD]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{service.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Types Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Travel </span>
              <span className="text-[#215ACD]">We Coordinate</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              Whether business or leisure, domestic or international, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TRAVEL_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-slate-100 hover:border-[#215ACD]/30 transition-colors"
              >
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{type.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-6">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-blue-50 text-[#215ACD] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
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
                <span className="text-[#414141]">Why Use Our </span>
                <span className="text-[#215ACD]">Travel Services?</span>
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
                <DollarSign className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Cost Savings</h3>
                <p className="text-white/90 mb-4">
                  Our travel experts know how to find the best deals and leverage corporate discounts to save you money on every trip.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">30%</div>
                  <div className="text-sm text-white/80">Average savings on travel costs</div>
                </div>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8">
                <Shield className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Travel Support</h3>
                <p className="text-[#5C5C5C]">
                  Flight delayed? Hotel issue? Our 24/7 support team is always available to handle travel emergencies and last-minute changes.
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
                Ready for Hassle-Free Travel?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our travel experts handle the details while you focus on your journey. Book your next trip with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Plan Your Trip
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
                  Best rates guaranteed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24/7 support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Full itineraries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Travel Coordination" />
    </main>
  );
}
