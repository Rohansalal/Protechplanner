import { NavigationLoader } from "@/components/ui/loading"
import { HeroLoader } from "@/components/ui/loading"
import { ServiceCardLoader } from "@/components/ui/loading"
import { ContentLoader } from "@/components/ui/loading"
import { Skeleton } from "@/components/ui/loading"

export default function DigitalMarketingLoading() {
  return (
    <main className="min-h-screen">
      <NavigationLoader />
      
      <HeroLoader />
      
      {/* Services Overview Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-96 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <ServiceCardLoader key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Loading */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-80 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent animate-pulse rounded-full mx-auto" />
                <div className="h-6 w-32 mx-auto bg-accent animate-pulse rounded-md" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-5/6 mx-auto bg-accent animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-80 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>
          
          <ContentLoader type="grid" count={3} />
        </div>
      </section>

      {/* CTA Section Loading */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="h-12 w-96 mx-auto bg-primary-foreground/20 animate-pulse rounded-md" />
          <div className="h-6 w-2/3 mx-auto bg-primary-foreground/20 animate-pulse rounded-md" />
          <div className="flex justify-center space-x-4">
            <div className="h-12 w-48 bg-primary-foreground/20 animate-pulse rounded-md" />
            <div className="h-12 w-32 bg-primary-foreground/20 animate-pulse rounded-md" />
          </div>
        </div>
      </section>
    </main>
  )
}
