import { NavigationLoader } from "@/components/ui/loading"
import { HeroLoader } from "@/components/ui/loading"
import { ContentLoader } from "@/components/ui/loading"
import { Skeleton } from "@/components/ui/loading"

export default function ContactLoading() {
  return (
    <main className="min-h-screen">
      <NavigationLoader />
      
      <HeroLoader />
      
      {/* Contact Form Section Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Loading */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="h-8 w-64 bg-accent animate-pulse rounded-md" />
                <div className="h-6 w-full bg-accent animate-pulse rounded-md" />
                <div className="h-6 w-5/6 bg-accent animate-pulse rounded-md" />
              </div>
              
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent animate-pulse rounded-lg" />
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-accent animate-pulse rounded-md" />
                      <div className="h-3 w-48 bg-accent animate-pulse rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Loading */}
            <div className="border rounded-lg p-8">
              <div className="space-y-6">
                <div className="h-8 w-48 bg-accent animate-pulse rounded-md" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-20 bg-accent animate-pulse rounded-md" />
                    <div className="h-10 w-full bg-accent animate-pulse rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-accent animate-pulse rounded-md" />
                    <div className="h-10 w-full bg-accent animate-pulse rounded-md" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-accent animate-pulse rounded-md" />
                  <div className="h-10 w-full bg-accent animate-pulse rounded-md" />
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-accent animate-pulse rounded-md" />
                  <div className="h-32 w-full bg-accent animate-pulse rounded-md" />
                </div>
                
                <div className="h-12 w-32 bg-accent animate-pulse rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Loading */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-12 w-80 mx-auto bg-accent animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          </div>
          
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div className="h-6 w-3/4 bg-accent animate-pulse rounded-md" />
                  <div className="h-6 w-6 bg-accent animate-pulse rounded-md" />
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
          <div className="h-12 w-48 mx-auto bg-primary-foreground/20 animate-pulse rounded-md" />
        </div>
      </section>
    </main>
  )
}
