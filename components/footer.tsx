import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, Award, Users, Headphones, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f3f5f9] text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Company Info & Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/logo-m.png"
              alt="ProTech Planner Logo"
              className="h-12 w-auto mb-6"
            />

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Your trusted partner in virtual assistance. We provide professional, reliable, and cost-effective solutions to help your business thrive.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#215ACD]/10 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Certified VAs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#215ACD]/10 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-xs text-gray-600 font-medium">2000+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#215ACD]/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-xs text-gray-600 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#215ACD]/10 rounded-lg flex items-center justify-center">
                  <Headphones className="h-4 w-4 text-[#215ACD]" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Quick Setup</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <Twitter className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#215ACD] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <Instagram className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Virtual Assistant Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#213959] mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              VA Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services/administrative-support"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customer-service"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services/appointment-scheduling"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-management"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-analytics"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#215ACD] hover:text-[#1a49a8] font-medium transition-colors inline-flex items-center gap-2 text-sm"
                >
                  View All Services
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#213959] mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-600 hover:text-[#215ACD] transition-colors hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#213959] mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#215ACD] rounded-full"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Call Us</span>
                  <a
                    href="tel:+918377963214"
                    className="text-gray-700 hover:text-[#215ACD] transition-colors text-sm font-medium"
                  >
                    +91-8377963214
                  </a>
                  <a
                    href="tel:+13168446584"
                    className="text-gray-700 hover:text-[#215ACD] transition-colors text-sm font-medium"
                  >
                    +1 316-844-6584
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Email Us</span>
                  <a
                    href="mailto:info@protechplanner.com"
                    className="text-gray-700 hover:text-[#215ACD] transition-colors break-all text-sm font-medium"
                  >
                    info@protechplanner.com
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#215ACD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#215ACD]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Offices</span>
                  <div className="text-sm">
                    <p className="text-[#213959] font-semibold">USA</p>
                    <p className="text-gray-600 text-xs">Houston, Texas</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-[#213959] font-semibold">India</p>
                    <p className="text-gray-600 text-xs">Greater Noida, UP</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="flex items-center gap-3 pt-3 px-4 py-3 bg-white rounded-lg border border-gray-200">
                <Clock className="h-5 w-5 text-[#215ACD]" />
                <div>
                  <span className="text-[#213959] font-bold text-sm">24/7 Available</span>
                  <p className="text-xs text-gray-500">Round-the-clock support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2016 - 2026 <span className="font-semibold text-[#213959]">ProTech Planner</span>. All rights reserved. | Professional Virtual Assistant Services
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#215ACD] transition-colors font-medium">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-600 hover:text-[#215ACD] transition-colors font-medium">
                Terms
              </Link>
              <Link href="/refund-policy" className="text-gray-600 hover:text-[#215ACD] transition-colors font-medium">
                Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}