import { ArrowRight, CheckCircle, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProcessJourney() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      duration: "15-30 Mins",
      description: "We discuss your business needs, pain points, and specific requirements to identify the perfect VA profile for you.",
      active: true
    },
    {
      number: "02",
      title: "Custom Matching",
      duration: "24-48 Hours",
      description: "Our team selects candidates from our pre-vetted pool who match your industry, time zone, and skill requirements.",
      active: false
    },
    {
      number: "03",
      title: "Meet Your VA",
      duration: "Video Interview",
      description: "Interview the best match. If it's a fit, great! If not, we provide more options until you're 100% satisfied.",
      active: false
    },
    {
      number: "04",
      title: "Onboarding & Launch",
      duration: "Day 1",
      description: "We handle contracts and setup. Your new VA integrates into your workflow, ready to start tackling tasks immediately.",
      active: false
    }
  ]

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content */}
          <div className="flex-1 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#213959]"></span>
                <span className="text-xs font-bold text-[#213959] uppercase tracking-widest">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#213959] mb-4 tracking-tight">
                From Chaos to Clarity in 4 Steps
              </h2>
              <p className="text-lg text-slate-600 font-light">
                We've optimized the hiring process to get you the support you need without the headache.
              </p>
            </div>

            <div className="relative space-y-8 pl-8 border-l-2 border-slate-200">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-slate-50 ${index === 0 ? 'bg-indigo-600' : 'bg-slate-300'}`} />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-indigo-600">{step.number}</span>
                      <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                      <Badge variant="outline" className="bg-white border-slate-200 text-slate-500 font-normal">{step.duration}</Badge>
                    </div>
                    <p className="text-slate-500 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-[#213959] text-white hover:bg-indigo-700 shadow-lg">
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full relative perspective-1000 hidden lg:block">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 transform rotate-y-[-10deg] rotate-x-[5deg] hover:transform-none transition-transform duration-700">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Workflow className="w-32 h-32 text-[#213959]" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#213959]">Success Guarantee</div>
                    <div className="text-sm text-slate-500">We don't stop untill you are happy</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#213959] font-medium">Onboarding Velocity</span>
                    <span className="text-indigo-600 font-bold">2 Days</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#213959] w-[95%] h-full rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>Industry Avg: 3 Weeks</span>
                    <span>ProTech: 48 Hours</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#213959] mb-1">98%</div>
                    <div className="text-xs text-slate-600">Retention Rate</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#213959] mb-1">12hrs</div>
                    <div className="text-xs text-slate-600">Avg. Matching Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
