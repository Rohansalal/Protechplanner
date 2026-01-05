import Image from "next/image"

export function ProcessJourney() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      duration: "15 - 30 min",
      description:
        "We discuss your business needs, pain points, and specific requirements to identify the perfect VA profile for you.",
      cardStyle: {
        background: "#215ACD",
        boxShadow: "0px 4px 6.099999904632568px rgba(32.95, 90.38, 205.23, 0.10)",
        outline: "1px #215ACD solid",
        outlineOffset: "-1px",
      },
      titleColor: "text-white",
      durationBg: "bg-white",
      durationText: "text-black/60",
      descColor: "text-[#E3E3E3]",
      badgeBg: "bg-[#215ACD]",
      badgeText: "text-white",
      lineColor: "border-[#215ACD]"
    },
    {
      number: "02",
      title: "Custom Matching",
      duration: "24-48 Hours",
      description:
        "Our team selects candidates from our pre-vetted pool who match your industry, time zone, and skill requirements.",
      cardStyle: {
        background: "#215ACD",
        borderRadius: "11px",
      },
      titleColor: "text-white",
      durationBg: "bg-white",
      durationText: "text-[#414141]",
      descColor: "text-[#E3E3E3]",
      badgeBg: "bg-[#215ACD]",
      badgeText: "text-[#F1F5FF]",
      lineColor: "border-[#215ACD]"
    },
    {
      number: "03",
      title: "Meet Your VA",
      duration: "Video Interview",
      description:
        "Interview the best match. If it's a fit, great! If not, we provide more options until you're 100% satisfied.",
      cardStyle: {
        background: "#215ACD",
        borderRadius: "11px",
      },
      titleColor: "text-white",
      durationBg: "bg-white",
      durationText: "text-[#414141]",
      descColor: "text-[#CBD2E0]",
      badgeBg: "bg-[#215ACD]",
      badgeText: "text-[#F1F5FF]",
      lineColor: "border-[#F1F5FF]"
    },
    {
      number: "04",
      title: "Discovery Call",
      duration: "15 - 30 min",
      description:
        "We discuss your business needs, pain points, and specific requirements to identify the perfect VA profile for you.",
      cardStyle: {
        background: "#F1F5FF",
        borderRadius: "11px",
      },
      titleColor: "text-[#1E1E1E]",
      durationBg: "bg-white",
      durationText: "text-[#414141]",
      descColor: "text-[#414141]",
      badgeBg: "bg-[#F1F5FF]",
      badgeText: "text-black",
      lineColor: "transparent" // Last item has no line
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-center font-['Inter']">
            <span className="text-[#414141]">From Chaos to Clarity in </span>
            <span className="text-[#215ACD]">4 Steps</span>
          </h2>
          <p className="text-base text-black text-center max-w-[533px] font-['Inter'] font-normal">
            We've optimized the hiring process to get you the support you need
            without the headache.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Step Cards */}
          <div className="relative flex flex-col gap-6 lg:pl-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-5 lg:gap-6 w-full group">
                {/* Connecting Line (Dashed) */}
                {index !== steps.length - 1 && (
                  <div
                    className="absolute left-[18px] top-[40px] bottom-[-24px] w-[1px] border-l border-dashed z-0"
                    style={{ borderColor: step.lineColor === "border-[#215ACD]" ? "#215ACD" : "#F1F5FF" }}
                  />
                )}

                {/* Step Number Badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center`}
                    style={{ background: step.badgeBg === "bg-[#215ACD]" ? "#215ACD" : "#F1F5FF" }}
                  >
                    <span
                      className={`text-sm font-normal font-['Inter'] ${step.badgeText}`}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Card */}
                <div
                  className="flex-1 rounded-[11px] p-4 lg:px-5 lg:py-5 flex flex-col gap-3 shadow-sm w-full relative"
                  style={step.cardStyle}
                >
                  <div className="flex justify-between items-center w-full">
                    <h3
                      className={`text-[20px] font-semibold font-['Inter'] leading-tight ${step.titleColor}`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`${step.durationBg} rounded-[4px] px-[10px] py-[6px] flex items-center justify-center`}
                    >
                      <span
                        className={`text-[14px] font-normal font-['Inter'] ${step.durationText}`}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <p
                    className={`text-[16px] font-normal font-['Inter'] leading-normal ${step.descColor}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Illustration */}
          <div className="hidden lg:flex justify-center items-center h-full pt-8">
            <div className="relative w-full max-w-[500px] aspect-[1.1]">
              <Image
                src="/va-collaboration-premium.png"
                alt="Virtual Assistant Process Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
