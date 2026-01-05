import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-20">
      <div className="text-center mb-12 max-w-[669px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#414141]">Comprehensive Virtual Assistant </span>
          <span className="text-[#215ACD]">Services</span>
        </h2>
        <p className="text-base text-black">
          We provide a wide range of professional services tailored to meet the unique needs of your business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Administrative Support */}
        <div className="rounded-lg border border-[#F2F2F2] bg-gradient-to-b from-white to-[#F5F5F5] p-6 min-h-[346px] flex flex-col justify-center gap-4">
          <h3 className="text-xl font-medium text-[#414141]">Administrative Support</h3>
          <p className="text-base text-[#5C5C5C] leading-relaxed">
            Optimize your day-to-day with expert email, scheduling, and document management
          </p>
        </div>

        {/* Customer Service */}
        <div className="rounded-lg border border-[#F5F5F5] bg-gradient-to-b from-white to-[#F8F8F8] p-6 min-h-[346px] flex flex-col justify-center gap-4">
          <h3 className="text-xl font-medium text-[#414141]">Customer Service</h3>
          <p className="text-base text-[#5C5C5C] leading-relaxed">
            Elevate your support with our team of dedicated customer service professionals
          </p>
        </div>

        {/* Appointment Scheduling */}
        <div className="rounded-lg border border-[#F5F5F5] bg-gradient-to-b from-white to-[#F8F8F8] p-6 min-h-[346px] flex flex-col justify-center gap-4">
          <h3 className="text-xl font-medium text-[#414141]">Appointment Scheduling</h3>
          <p className="text-base text-[#5C5C5C] leading-relaxed">
            Streamline your schedule and optimize availability with expert calendar support.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/services">
          <button className="px-4 py-2.5 bg-[#215ACD] hover:bg-[#1a4aa8] text-white text-sm font-normal rounded flex items-center gap-2 transition-colors">
            View more
            <ArrowRight className="w-3 h-6" />
          </button>
        </Link>
      </div>
    </section>
  )
}
