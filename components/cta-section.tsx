import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, Shield, Award } from "lucide-react"

export function CTASection() {
  return (
    <section className=" bg-secondary py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Join hundreds of successful businesses that have streamlined their operations with our expert virtual
              assistant services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-8 w-8 text-accent" />
              <div className="text-lg font-semibold">Quick Setup</div>
              <div className="text-sm text-primary-foreground/80 text-center">Get started within 24 hours</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-accent" />
              <div className="text-lg font-semibold">Secure & Reliable</div>
              <div className="text-sm text-primary-foreground/80 text-center">Your data is always protected</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-8 w-8 text-accent" />
              <div className="text-lg font-semibold">Proven Results</div>
              <div className="text-sm text-primary-foreground/80 text-center">98% client satisfaction rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
