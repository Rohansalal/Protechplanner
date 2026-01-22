"use client";

import { motion } from "framer-motion";
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layout,
  Smartphone,
  FileImage,
  Share2,
  Printer,
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
    icon: Sparkles,
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logos, color schemes, typography, and brand guidelines.",
    image: "/service-icons/graphic-web-designing/brand-identity-design.png",
    link: "/services/graphic-web-designing/brand-identity-design"
  },
  {
    icon: Layout,
    title: "Web Design & UI/UX",
    description: "Modern, responsive website designs with intuitive user interfaces and exceptional user experiences.",
    image: "/service-icons/graphic-web-designing/web-design-ui-ux.png",
    link: "/services/graphic-web-designing/web-design-ui-ux"
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Beautiful, user-friendly mobile app interfaces for iOS and Android platforms.",
    image: "/service-icons/graphic-web-designing/mobile-app-design.png",
    link: "/services/graphic-web-designing/mobile-app-design"
  },
  {
    icon: Share2,
    title: "Social Media Graphics",
    description: "Eye-catching social media graphics, posts, stories, and ad creatives for all platforms.",
    image: "/service-icons/graphic-web-designing/social-media-graphics.png",
    link: "/services/graphic-web-designing/social-media-graphics"
  },
  {
    icon: FileImage,
    title: "Digital Marketing Design",
    description: "Compelling marketing materials including banners, infographics, email templates, and landing pages.",
    image: "/service-icons/graphic-web-designing/digital-marketing-design.png",
    link: "/services/graphic-web-designing/digital-marketing-design"
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Professional print materials including brochures, business cards, flyers, and packaging design.",
    image: "/service-icons/graphic-web-designing/print-design.png",
    link: "/services/graphic-web-designing/print-design"
  }
];

const BENEFITS = [
  "Award-winning designers with 10+ years experience",
  "Unlimited revisions until you're 100% satisfied",
  "Fast 24-48 hour turnaround on most projects",
  "Modern designs that convert visitors to customers",
  "Full brand consistency across all materials",
  "Source files and complete ownership included"
];

const USE_CASES = [
  {
    title: "Brand Launch",
    description: "Complete brand identity from logo to website for new business launches.",
    metrics: "Full package"
  },
  {
    title: "Website Redesign",
    description: "Modern website redesigns that improve user experience and conversions.",
    metrics: "3x conversion boost"
  },
  {
    title: "Marketing Campaigns",
    description: "Cohesive design assets for multi-channel marketing campaigns.",
    metrics: "50+ assets"
  },
  {
    title: "App Interface",
    description: "Intuitive mobile app UI/UX design that users love.",
    metrics: "4.8+ app rating"
  }
];

const STATS = [
  { value: "1000+", label: "Designs Created" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24-48hrs", label: "Avg Turnaround" }
];

export default function GraphicWebDesigningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-pink-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#5C5C5C] mb-8"
          >
            <Link href="/services" className="hover:text-[#215ACD] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#215ACD] font-medium">Graphic & Web Designing</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-pink-50 text-[#215ACD] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Palette className="w-4 h-4" />
                Graphic & Web Designing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter'] mb-6"
              >
                <span className="text-black">Designs That </span>
                <span className="text-[#215ACD]">Captivate</span>
                <br />
                <span className="text-black">Brands That Inspire</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] mb-8"
              >
                Professional graphic design and web design services that bring your brand vision to life with stunning visuals and exceptional user experiences.
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
              className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-transparent rounded-2xl" />
              <Image
                src="/service-icons/graphic-web-designing/service-icon.png"
                alt="Graphic & Web Designing Services"
                fill
                className="object-contain drop-shadow-2xl"
                priority
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
              <span className="text-[#414141]">Complete Design </span>
              <span className="text-[#215ACD]">Solutions</span>
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
              From brand identity to web design, we create cohesive visual experiences that elevate your brand.
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
                {/* Card Image Area */}
                <div className="relative h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center p-6">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-[#215ACD]" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col gap-3">
                  <h3 className="text-[22px] font-semibold text-[#414141] mb-3">{service.title}</h3>
                  <p className="text-[#5C5C5C] leading-relaxed mb-4 flex-1">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-[#215ACD] font-medium hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
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
              See how businesses leverage our design expertise to build memorable brands.
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
                <span className="text-[#414141]">Why Choose Our </span>
                <span className="text-[#215ACD]">Design Services?</span>
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
                <TrendingUp className="w-10 h-10 mb-4" />
                <h3 className="text-[24px] font-bold mb-3">Conversion-Focused Design</h3>
                <p className="text-white/90 mb-4">
                  Our designs aren't just beautiful - they're strategically crafted to convert visitors into customers and drive business results.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    User psychology principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    A/B tested layouts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Mobile-first approach
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-8">
                <Zap className="w-10 h-10 text-[#215ACD] mb-4" />
                <h3 className="text-[24px] font-bold text-[#414141] mb-3">Rapid Delivery</h3>
                <p className="text-[#5C5C5C]">
                  Get professional designs delivered in 24-48 hours with unlimited revisions until you're completely satisfied.
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
                Ready to Transform Your Brand?
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mb-8">
                Let our award-winning designers create stunning visuals that elevate your brand and captivate your audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Your Project
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
                  1000+ designs
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  98% satisfaction
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  24-48hr delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Graphic & Web Designing" />
    </main>
  );
}