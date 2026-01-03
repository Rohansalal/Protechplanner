import { NavigationLoader } from "@/components/ui/loading"
import { ContentLoader } from "@/components/ui/loading"
import { Skeleton } from "@/components/ui/loading"

export default function RefundPolicyLoading() {
  return (
    <main className="min-h-screen">
      <NavigationLoader />
      
      {/* Hero Section Loading */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="h-16 w-96 mx-auto bg-accent animate-pulse rounded-md" />
          <div className="h-6 w-3/4 mx-auto bg-accent animate-pulse rounded-md" />
          <div className="h-6 w-1/2 mx-auto bg-accent animate-pulse rounded-md" />
        </div>
      </section>

      {/* Content Loading */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-64 bg-accent animate-pulse rounded-md" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-5/6 bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-4/5 bg-accent animate-pulse rounded-md" />
                  <div className="h-4 w-3/4 bg-accent animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
