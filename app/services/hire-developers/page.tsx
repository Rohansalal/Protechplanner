"use client";

import { motion } from "framer-motion";
import {
  Code,
  ArrowRight,
  CheckCircle,
  Monitor,
  Server,
  Layers,
  Smartphone,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
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
    icon: Monitor,
    title: "Frontend Developers",
    description: "Expert React, Vue, Angular developers who create stunning, responsive user interfaces and experiences.",
    link: "/services/hire-developers/frontend"
  },
  {
    icon: Server,
    title: "Backend Developers",
    description: "Skilled Node.js, Python, Java developers who build robust, scalable server-side applications.",
    link: "/services/hire-developers/backend"
  },
  {
    icon: Layers,
    title: "Full Stack Developers",
    description: "Versatile developers proficient in both frontend and backend technologies for end-to-end solutions.",
    link: "/services/hire-developers/fullstack"
  },
  {
    icon: Smartphone,
    title: "Mobile Developers",
    description: "iOS, Android, and React Native developers who create native and cross-platform mobile apps.",
    link: "/services/hire-developers/mobile"
  },
  {
    icon: Settings,
    title: "DevOps Engineers",
    description: "DevOps experts who streamline deployment, automate workflows, and manage cloud infrastructure.",
    link: "/services/hire-developers/devops"
  },
  {
    icon: Sparkles,
    title: "Specialized Developers",
    description: "AI/ML, blockchain, IoT, and other specialized developers for cutting-edge technology projects.",
    link: "/services/hire-developers/specialized"
  }
];

const BENEFITS = [
  "Pre-vetted developers with 5+ years experience",
  "Flexible hiring models (hourly, monthly, project)",
  "Start within 48 hours of approval",
  "Save up to 60% on development costs",
  "Direct communication with developers",
  "Seamless integration with your team"
];

const USE_CASES = [
  {
    title: "MVP Development",
    description: "Build your minimum viable product quickly with dedicated development teams.",
    metrics: "2-3 months"
  },
  {
    title: "Team Augmentation",
    description: "Scale your existing team with skilled developers to meet project deadlines.",
    metrics: "Flexible scaling"
  },
  {
    title: "Product Development",
    description: "Full-cycle product development from concept to launch and beyond.",
    metrics: "End-to-end"
  },
  {
    title: "Legacy Modernization",
    description: "Update and modernize legacy systems with latest technologies and best practices.",
    metrics: "Custom timeline"
  }
];

const STATS = [
  { value: "500+", label: "Developers Available" },
  { value: "95%", label: "Client Retention" },
  { value: "48hrs", label: "Onboarding Time" }
];

export default function HireDevelopersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#5C5C5C] mb-8"
          >
            <Link href="/services" className="hover:text-[#215ACD] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Hire Developers</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-indigo-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Code className="w-4 h-4" />
                Hire Developers
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Hire Expert </span>
                <span className="text-[#215ACD]">Developers</span>
                <br />
                <span className="text-black">Build Faster</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Access a global pool of pre-vetted, experienced developers ready to join your team and accelerate your product development.
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
                  <Link href="/contact">Hire Developers Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#215ACD] text-[#215ACD] hover:bg-[#F1F5FF] px-8 py-6 rounded text-[15px] font-medium"
                >
                  <Link href="/services">
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-2xl" />
              <Image
                src="/service-icons/administrtive-support/Group 1000003314 (1).png"
                alt="Hire Developers Services"
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
              <span className="text-[#414141]">Expert Developers </span>
              <span className="text-[#215ACD]">For Every Need</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From frontend to backend, mobile to DevOps - find the perfect developer for your project.
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
                className="bg-[#F8F9FB] rounded-xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#215ACD]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{service.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#215ACD] font-medium hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
              <span className="text-[#414141]">Common </span>
              <span className="text-[#215ACD]">Use Cases</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              See how businesses leverage our developer talent to accelerate their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:border-[#215ACD]/30 transition-colors"
              >
                <h3 className="text-[18px] font-semibold text-[#414141] mb-3">{useCase.title}</h3>
                <p className="text-[#5C5C5C] text-[14px] leading-relaxed mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#215ACD] px-3 py-1 rounded-full text-xs font-medium">
                  <Target className="w-3 h-3" />
                  {useCase.metrics}
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
                <span className="text-[#414141]">Why Hire </span>
                <span className="text-[#215ACD]">Through Us?</span>
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
                <Shield className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Vetted Talent</h3>
                <p className="text-white/90 mb-4">
                  Every developer goes through rigorous technical screening and background checks before joining our network.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Technical assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Portfolio review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Background verification
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8">
                <Zap className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Quick Onboarding</h3>
                <p className="text-[#5C5C5C]">
                  Start working with your new developer within 48 hours. We handle all the paperwork and logistics.
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
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Access pre-vetted developers and start building your product within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Hire Developers Now
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
                  500+ developers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  48hr onboarding
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  60% cost savings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Hire Developers" />
    </main>
  );
}