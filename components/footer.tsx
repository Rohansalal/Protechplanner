
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f7f7f7] to-[#FAF9F6] border-t border-[#031132]/10 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <img
              src="/logo-m.png"
              alt="ProTech Planner Logo"
              className="h-14 w-auto"
            />

            <p className="text-slate-400 leading-relaxed">
              <br />
              Professional virtual assistant services to help your business
              thrive. We handle the details so you can focus on growth.
            </p>
            <br />
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-[#031132] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-[#031132] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-[#031132] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-[#031132] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#031132]">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#031132]">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#031132]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918377963214"
                    className="text-slate-400 hover:text-[#031132] transition-colors"
                  >
                    India: +91-8377963214
                  </a>
                  <a
                    href="tel:+1 316-844-6584
"
                    className="text-slate-400 hover:text-[#031132] transition-colors"
                  >
                    USA: +1 316-844-6584
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <a
                  href="mailto:info@protechplanner.com"
                  className="text-slate-400 hover:text-[#031132] transition-colors"
                >
                  info@protechplanner.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <span className="text-[#031132] font-bold">
                    USA Office:
                  </span>
                  <span className="text-slate-400">
                    2123 Bluewillow Dr, Houston, Texas 77042, USA
                  </span>
                  <span className="text-[#031132] font-bold mt-2">
                    India Office:
                  </span>
                  <span className="text-slate-400">
                    Gaur City Center, 10th floor, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[#031132] font-bold">Working Hours:</span>
                <span className="text-slate-400">24X7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#031132]/10 mt-12 pt-8 text-center">
          <p className="text-slate-500">
            © 2016 - 2026 ProTech Planner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}