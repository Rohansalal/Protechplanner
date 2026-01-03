import { NavigationLoader } from "@/components/ui/loading"
import { HeroLoader } from "@/components/ui/loading"
import { ContentLoader } from "@/components/ui/loading"
import { Skeleton } from "@/components/ui/loading"

export default function AboutLoading() {
  return (
    <main className="min-h-screen">
      <NavigationLoader />
      
      <HeroLoader />
      
      {/* Stats Section Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center border-2 rounded-lg p-6">
                <div className="w-16 h-16 bg-accent animate-pulse rounded-full mx-auto mb-4" />
                <div className="h-8 w-20 mx-auto bg-accent animate-pulse rounded-md mb-2" />
                <div className="h-4 w-24 mx-auto bg-accent animate-pulse rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section Loading */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="h-12 w-80 mx-auto bg-accent animate-pulse rounded-md" />
          <div className="space-y-3">
            <div className="h-6 w-full bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-5/6 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-4/5 mx-auto bg-accent animate-pulse rounded-md" />
          </div>
        </div>
      </section>

      {/* Team Section Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-96 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border-2 rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-accent animate-pulse rounded-full mx-auto mb-4" />
                <div className="h-6 w-40 mx-auto bg-accent animate-pulse rounded-md mb-2" />
                <div className="h-4 w-32 mx-auto bg-accent animate-pulse rounded-md mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-5/6 mx-auto bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-4/5 mx-auto bg-accent animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section Loading */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-80 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border-2 rounded-lg p-6">
                <div className="h-6 w-32 bg-accent animate-pulse rounded-md mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-5/6 bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-4/5 bg-accent animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Loading */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="h-12 w-96 mx-auto bg-primary-foreground/20 animate-pulse rounded-md" />
          <div className="h-6 w-2/3 mx-auto bg-primary-foreground/20 animate-pulse rounded-md" />
          <div className="flex justify-center space-x-4">
            <div className="h-12 w-56 bg-primary-foreground/20 animate-pulse rounded-md" />
            <div className="h-12 w-40 bg-primary-foreground/20 animate-pulse rounded-md" />
          </div>
        </div>
      </section>
    </main>
  )
}
