"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  CheckCircle,
  Users,
  Bell,
  RefreshCw,
  Globe,
  Settings,
  Clock,
  TrendingUp,
  Zap,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Calendar Management",
    description: "Comprehensive calendar management across multiple platforms to keep your schedule organized",
    icon: Calendar,
    image: "/service-icons/appointment-scheduling/calendar-management.png",
    href: "/services/appointment-scheduling/calendar-management",
  },
  {
    title: "Booking Systems",
    description: "Professional online booking systems that make scheduling effortless for your clients",
    icon: Users,
    image: "/service-icons/appointment-scheduling/booking-systems.png",
    href: "/services/appointment-scheduling/booking-systems",
  },
  {
    title: "Meeting Coordination",
    description: "Complete meeting coordination and logistics management for seamless operations",
    icon: Settings,
    image: "/service-icons/appointment-scheduling/meeting-coordination.png",
    href: "/services/appointment-scheduling/meeting-coordination",
  },
  {
    title: "Reminder Services",
    description: "Automated reminder systems to reduce no-shows and keep everyone on schedule",
    icon: Bell,
    image: "/service-icons/appointment-scheduling/reminder-services.png",
    href: "/services/appointment-scheduling/reminder-services",
  },
  {
    title: "Rescheduling Management",
    description: "Efficient rescheduling and cancellation handling to maintain schedule flexibility",
    icon: RefreshCw,
    image: "/service-icons/appointment-scheduling/rescheduling-management.png",
    href: "/services/appointment-scheduling/rescheduling-management",
  },
  {
    title: "Time Zone Coordination",
    description: "Global time zone coordination for international clients and remote meetings",
    icon: Globe,
    image: "/service-icons/appointment-scheduling/time-zone-coordination.png",
    href: "/services/appointment-scheduling/time-zone-coordination",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Save 10+ Hours Weekly",
    description: "Eliminate the back-and-forth of scheduling and focus on what matters most.",
    icon: Clock,
  },
  {
    title: "Reduce No-Shows by 80%",
    description: "Automated reminders ensure your appointments are kept and valued.",
    icon: Target,
  },
  {
    title: "24/7 Booking Availability",
    description: "Let clients book appointments anytime, anywhere, without your involvement.",
    icon: Zap,
  },
  {
    title: "Scalable Solutions",
    description: "From solo practitioners to enterprise teams, we scale with your needs.",
    icon: TrendingUp,
  },
];

const STATS = [
  { value: "10hrs", label: "Saved Per Week" },
  { value: "80%", label: "No-Show Reduction" },
  { value: "5K+", label: "Appointments Monthly" }
];

export default function AppointmentSchedulingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-violet-50/20 to-white pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-violet-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Calendar className="w-4 h-4" />
                Appointment Scheduling Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Never Miss </span>
                <span className="text-[#215ACD]">Another</span>
                <br />
                <span className="text-black">Appointment</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional appointment scheduling and calendar management that saves you time, reduces no-shows, and delights your clients.
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 to-transparent rounded-2xl" />
              <Image
                src="/service-icons/appointment-scheduling/service-icon.png"
                alt="Appointment Scheduling Services"
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
              <span className="text-[#215ACD]">Scheduling Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From calendar management to meeting coordination, we handle all aspects of appointment scheduling with precision.
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
                <div className="h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full p-6 flex items-center justify-center">
                      {/* Decorative Circle Background */}
                      <div className="absolute w-[150px] h-[150px] bg-violet-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Icon/Graphic Representative */}
                      <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-10 h-10 text-[#215ACD]" strokeWidth={1.5} />
                      </div>

                      {/* Floating decorative 'cards' behind */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-8 -translate-y-2 w-16 h-20 bg-[#FDDA77] rounded-lg -z-0 rotate-[-12deg] opacity-80" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-[-10px] -translate-y-[-10px] w-20 h-16 bg-[#215ACD] rounded-lg -z-0 rotate-[5deg] opacity-10" />
                    </div>
                  )}
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
              <span className="text-[#215ACD]">Scheduling Services?</span>
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
                Ready to Optimize Your Schedule?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our scheduling experts help you manage your time more efficiently and improve your client experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Scheduling Service
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
                  Save 10+ hours weekly
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  80% no-show reduction
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24/7 booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Appointment Scheduling" />
    </main>
  );
}