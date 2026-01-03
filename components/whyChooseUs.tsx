import { Award, Clock, ShieldCheck, Zap } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Top 1% Talent",
      description: "Rigorous vetting process ensuring you work with only the most skilled professionals."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock support ensuring your business never stops, no matter the time zone."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Confidential",
      description: "Enterprise-grade security protocols to keep your sensitive business data protected."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Onboarding",
      description: "Get matched and start working with your dedicated VA in as little as 48 hours."
    }
  ]

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#213959] mb-4">
            The ProTech Advantage
          </h2>
          <p className="text-lg text-slate-600">
            We don't just provide assistants; we provide partners in your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center text-[#213959] mb-6 group-hover:bg-[#213959] group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}