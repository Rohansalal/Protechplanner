"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  FileText,
  Database,
  FolderOpen,
  Plane,
  CreditCard,
  Clock,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Award,
  Check
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AutoConsultationModal } from "@/components/auto-consultation-modal";
import { Button } from "@/components/ui/button";

// ============================================================================
// DATA CONSTANTS
// ============================================================================

const SERVICES = [
  {
    title: "Email Management",
    description: "Optimize your day-to-day with expert email, scheduling, and document management",
    icon: Mail,
    href: "/service-icons/administrtive-support/email management (1).png ",
  },
  {
    title: "Document Creation",
    description: "Elevate your support with our team of dedicated customer service professionals",
    icon: FileText,
    href: "/services/administrative-support/document-creation",
  },
  {
    title: "Data Entry & Management",
    description: "Streamline your schedule and optimize availability with expert calendar support.",
    icon: Database,
    href: "/services/administrative-support/data-entry",
  },
  {
    title: "File Organization",
    description: "Optimize your day-to-day with expert email, scheduling, and document management",
    icon: FolderOpen,
    href: "/services/administrative-support/file-organization",
  },
  {
    title: "Travel Coordination",
    description: "Elevate your support with our team of dedicated customer service professionals",
    icon: Plane,
    href: "/services/administrative-support/travel-coordination",
  },
  {
    title: "Expense Management",
    description: "Streamline your schedule and optimize availability with expert calendar support.",
    icon: CreditCard,
    href: "/services/administrative-support/expense-management",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Rapid 24/7 Response Cycles",
    description: "Your business doesn't stop when you log off. Our global presence ensures administrative tasks are processed overnight, so you wake up to completed work and a cleared inbox.",
    icon: Clock,
    badge: "24/7"
  },
  {
    title: "The \"VirtueAssist\" Vetting Standard",
    description: "Skip the hiring headache. Every assistant passes a rigorous 5-step vetting process—testing for technical mastery and proactive communication—before they ever touch your business.",
    icon: Award,
  },
  {
    title: "Security-First Operations",
    description: "We treat your sensitive business data with the highest level of integrity. From managing your calendar to processing expenses, our team follows strict security protocols to ensure your documents and login credentials remain private and protected.",
    icon: ShieldCheck,
  },
  {
    title: "Focus on High-Value Growth",
    description: "Stop drowning in \"busy work.\" We've saved our clients over 50,000+ hours, allowing founders to shift from managing folders to making high-level strategic decisions.",
    icon: TrendingUp,
  },
  {
    title: "Seamless Tech Integration",
    description: "Our team arrives fully proficient in your existing tech stack—from Google Workspace and Microsoft 365 to CRM management—ensuring an instant, friction-free handover.",
    icon: Cpu,
  }
];

const APPLICATIONS = [
  { name: "Google Workspace", color: "#4285F4", x: "0%", y: "-50%" },
  { name: "Slack", color: "#4A154B", x: "45%", y: "-25%" },
  { name: "Office 365", color: "#F25022", x: "0%", y: "50%" },
  { name: "Zoom", color: "#2D8CFF", x: "-45%", y: "-25%" },
  { name: "Asana", color: "#F06A6A", x: "-45%", y: "25%" },
  { name: "Trello", color: "#0079BF", x: "45%", y: "25%" },
];

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter']"
          >
            <span className="text-black">Streamline Your </span>
            <span className="text-[#215ACD]">Business</span>
            <span className="text-black"> with </span>
            <br className="hidden lg:block" />
            <span className="text-[#215ACD]">Administrative support</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] max-w-xl"
          >
            Comprehensive administrative services to keep your business running smoothly and efficiently while you focus in what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Button
              asChild
              className="bg-[#215ACD] hover:bg-[#1a49a8] text-white px-8 py-6 rounded text-[15px] font-medium"
            >
              <Link href="/contact">Get started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#215ACD] text-[#215ACD] hover:bg-[#F1F5FF] px-8 py-6 rounded text-[15px] font-medium bg-transparent"
            >
              <Link href="/contact">Schedule consultation</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Abstract Graphic Collage */}
        <div className="relative h-[500px] w-full hidden lg:block">
          {/* Background Blurs */}
          <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#7DA0E5] opacity-30 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] bg-[#96D5FF] opacity-30 rounded-full blur-[60px]" />

          {/* Central Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="relative w-full h-full max-w-[600px] max-h-[500px]">
              <Image
                src="/service-icons/administrtive-support/Group 1000003314 (1).png  "
                alt="Administrative Dashboard"
                fill
                className="object-contain drop-shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] overflow-hidden right-[5%] w-[120px] h-[80px] bg-white rounded-lg shadow-xl border border-slate-100 flex flex-col p-3 z-10"
              >
                <div className="h-2 w-12 bg-slate-200 rounded mb-2" />
                <div className="h-2 w-20 bg-slate-100 rounded mb-1" />
                <div className="h-2 w-16 bg-slate-100 rounded" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[0%] w-[160px] h-[100px] bg-white rounded-lg shadow-xl border border-slate-100 p-4 z-10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">VA</div>
                  <div className="h-2 w-16 bg-slate-200 rounded" />
                </div>
                <div className="flex gap-1 items-end h-8">
                  <div className="w-2 h-4 bg-blue-200 rounded-sm" />
                  <div className="w-2 h-6 bg-blue-400 rounded-sm" />
                  <div className="w-2 h-3 bg-blue-200 rounded-sm" />
                  <div className="w-2 h-8 bg-blue-500 rounded-sm" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SERVICES GRID SECTION
// ============================================================================

function ServicesGridSection() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
            <span className="text-[#414141]">Complete </span>
            <span className="text-[#215ACD]">Administrative Solutions</span>
          </h2>
          <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
            From email management to document creation, we handle all your administrative tasks with precision and professionalism.
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
              <div className="h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden p-6 flex items-center justify-center">
                {/* Decorative Circle Background */}
                <div className="absolute w-[150px] h-[150px] bg-blue-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Icon/Graphic Representative */}
                <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-[#215ACD]" strokeWidth={1.5} />
                </div>

                {/* Floating decorative 'cards' behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-8 -translate-y-2 w-16 h-20 bg-[#FDDA77] rounded-lg -z-0 rotate-[-12deg] opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[-10px] -translate-y-[-10px] w-20 h-16 bg-[#215ACD] rounded-lg -z-0 rotate-[5deg] opacity-10" />
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
  );
}

// ============================================================================
// WHY CHOOSE US SECTION
// ============================================================================

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
            <span className="text-[#414141]">Why </span>
            <span className="text-[#215ACD]">Choose Our </span>
            <br className="md:hidden" />
            <span className="text-[#414141]">Administrative support</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-[8px] p-8 border border-[#F2F2F2] hover:border-[#215ACD]/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-6 h-6 text-[#215ACD]" />
              </div>

              <h3 className="text-[20px] font-semibold text-[#414141] font-['Inter'] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#5C5C5C] text-[16px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// APPLICATIONS SECTION
// ============================================================================

function ApplicationsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-16">
          <span className="text-[#215ACD]">Applications</span>
          <span className="text-[#414141]"> we use </span>
        </h2>

        {/* Circular Animation Container */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center z-20">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Virtue</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Connect</span>
            </div>
          </div>

          {/* Orbit Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-slate-100/50 animate-spin-slow opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-slate-100/50 animate-reverse-spin opacity-50" />

          {/* Floating Icons */}
          {APPLICATIONS.map((app, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center z-10"
              style={{
                marginLeft: "-2.5rem",
                marginTop: "-2.5rem",
                transform: `translate(${app.x}, ${app.y})`
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs text-center p-1"
                style={{ backgroundColor: app.color }}
              >
                {app.name.substring(0, 2)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#215ACD] rounded-[24px] overflow-hidden p-8 md:p-16 text-center">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-[32px] md:text-[42px] font-semibold text-white leading-tight">
              Ready to Delegate & Scale?
            </h2>
            <p className="text-[#DFDFDF] text-[18px] md:text-[20px] max-w-2xl">
              Join 2,000+ businesses that scaled efficiently with our virtual assistants. Start with zero commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
              <Button
                asChild
                className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
              >
                <Link href="/contact">Book free consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded text-[15px] font-medium bg-transparent min-w-[200px]"
              >
                <Link href="/process">Detailed process</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/90 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AdministrativeSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />
      <ServicesGridSection />
      <WhyChooseUsSection />
      <ApplicationsSection />
      <CTASection />

      <Footer />
      <AutoConsultationModal serviceName="Administrative Support" />
    </main>
  );
}