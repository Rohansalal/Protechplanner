import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-20 bg-white">
      <div className="text-center mb-12 max-w-[669px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#414141] mb-4">
          Choosing ProTech <span className="text-[#215ACD]">Advantage</span>
        </h2>
        <p className="text-base text-black">
          We don't just provide assistants; we provide partners in your success.
        </p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column - Stats Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 1% Top Talent Card */}
            <div className="rounded-lg bg-[#215ACD] p-6 lg:p-8 min-h-[276px] flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-semibold text-white font-montserrat">1%</span>
                  <span className="text-base text-white opacity-90">Top Talent</span>
                </div>
              </div>
              <p className="text-base text-white max-w-[291px] leading-relaxed">
                Rigorous vetting process ensuring you work with only the most skilled professionals.
              </p>
            </div>

            {/* 48 Hours Card */}
            <div className="rounded-lg bg-[#F1F5FF] p-6 lg:p-8 min-h-[276px] flex flex-col justify-between">
              <h3 className="text-5xl font-semibold text-[#215ACD] font-montserrat">48 hours</h3>
              <p className="text-sm text-[#6A6A6A] max-w-[337px] leading-relaxed">
                Get matched and start working with your dedicated VA in as little as 48 hours.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-6">
            {/* 24/7 Card */}
            <div className="rounded-lg bg-[#F1F5FF] p-6 min-h-[276px] flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-semibold text-[#215ACD] font-montserrat mb-4">24/7</h3>
                <p className="text-base text-[#414141] font-medium">Support Available</p>
              </div>
              <p className="text-sm text-[#6A6A6A] leading-relaxed">
                Round-the-clock support ensuring your business never stops.
              </p>
            </div>

            {/* Secure & Confidential Card */}
            <div className="rounded-lg bg-[#F1F5FF] p-6 min-h-[276px] flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-[#215ACD] font-montserrat">
                Secure & Confidential
              </h3>
              <p className="text-sm text-[#6A6A6A] leading-relaxed">
                Enterprise-grade security protocols to keep your sensitive business data protected.
              </p>
            </div>

            {/* 500+ Card */}
            <div className="rounded-lg bg-[#CDF3AC] p-6 min-h-[276px] flex flex-col justify-between">
              <h3 className="text-5xl font-semibold text-[#215ACD] font-montserrat">500+</h3>
              <p className="text-base text-[#414141] font-semibold">Happy clients served</p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative rounded-lg overflow-hidden bg-[#E5E5E5] min-h-[400px] lg:min-h-full">
          <Image
            src="/image advantage.png"
            alt="Professional Virtual Assistant"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}