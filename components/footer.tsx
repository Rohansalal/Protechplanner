import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, Award, Users, Headphones } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Company Info & Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/logo-m.png"
              alt="ProTech Planner Logo"
              className="h-14 w-auto mb-6 filter brightness-0 invert"
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Your trusted partner in virtual assistance. We provide professional, reliable, and cost-effective solutions to help your business thrive.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-[#215ACD]/20 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-slate-400">Certified VAs</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-[#215ACD]/20 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-slate-400">2000+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-[#215ACD]/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-slate-400">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-[#215ACD]/20 rounded-lg flex items-center justify-center">
                  <Headphones className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-slate-400">Quick Setup</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Virtual Assistant Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              VA Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/administrative-support"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Data Entry & Research
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Email Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-slate-400 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Call Us</span>
                  <a
                    href="tel:+918377963214"
                    className="text-slate-300 hover:text-[#215ACD] transition-colors"
                  >
                    +91-8377963214
                  </a>
                  <a
                    href="tel:+13168446584"
                    className="text-slate-300 hover:text-[#215ACD] transition-colors"
                  >
                    +1 316-844-6584
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Email Us</span>
                  <a
                    href="mailto:info@protechplanner.com"
                    className="text-slate-300 hover:text-[#215ACD] transition-colors break-all"
                  >
                    info@protechplanner.com
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Offices</span>
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">USA</p>
                    <p className="text-slate-400">Houston, Texas</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">India</p>
                    <p className="text-slate-400">Greater Noida, UP</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-700">
                <Clock className="h-5 w-5 text-[#215ACD]" />
                <div>
                  <span className="text-white font-semibold">24/7 Available</span>
                  <p className="text-xs text-slate-400">Round-the-clock support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2016 - 2026 ProTech Planner. All rights reserved. | Professional Virtual Assistant Services
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-[#215ACD] transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-slate-400 hover:text-[#215ACD] transition-colors">
                Terms
              </Link>
              <Link href="/refund-policy" className="text-slate-400 hover:text-[#215ACD] transition-colors">
                Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}