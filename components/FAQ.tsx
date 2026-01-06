"use client"

import Link from "next/link"

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[425px_1fr] gap-6 items-stretch">

          {/* Left Column: Header Card */}
          <div className="bg-[#215ACD] rounded-lg p-8 lg:p-[23px] relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            <h2 className="text-white text-[42px] font-bold font-['Inter'] leading-[48px] max-w-[380px]">
              Frequently asked questions?
            </h2>

            <div className="mt-auto">
              <p className="text-white text-base font-normal font-['Inter'] mb-6 max-w-[340px]">
                Everything you need to know about working with ProTech.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded border border-white text-white text-sm font-medium font-['Inter'] hover:bg-white/10 transition-colors"
              >
                Ask us a question
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 h-full content-between">

            {/* FAQ Item 1 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                We can have you matched with a qualified VA and ready to launch within 24-48 hours after our initial discovery call
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                Is there a long-term contract?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                No. We operate on a month-to-month basis. We believe we should earn your business every month, not lock you into a contract.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                How do you vet your assistants?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                Our vetting process is rigorous. We test for skills (English proficiency, software tools), soft skills (communication, attitude), and perform background checks. Only the top 1% make the cut.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                What if I'm not happy with my match?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                We offer a replacement guarantee. if the fit isn't right, we will match you with a new VA at no extra cost to ensure you have the perfect support.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                Is my data secure?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                Absolutely. We sign strict NDAs and use enterprise-grade security tools (LastPass, VPNs) to ensure your data remains confidential and secure.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-[#F1F5FF] rounded-lg p-6 lg:p-[16px] h-full flex flex-col justify-center min-h-[170px]">
              <h3 className="text-[#6A6A6A] text-xl font-semibold font-['Montserrat'] mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-[#6A6A6A] text-base font-normal font-['Inter'] leading-relaxed">
                We can have you matched with a qualified VA and ready to launch within 24-48 hours after our initial discovery call
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}