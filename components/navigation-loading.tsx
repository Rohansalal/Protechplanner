"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { LoadingSpinner } from "@/components/ui/loading"

interface NavigationLoadingProps {
  children: React.ReactNode
}

export function NavigationLoading({ children }: NavigationLoadingProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingPath, setLoadingPath] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Reset loading state when pathname changes
    setIsLoading(false)
    setLoadingPath(null)
  }, [pathname])

  const handleLinkClick = (href: string) => {
    if (href !== pathname) {
      setIsLoading(true)
      setLoadingPath(href)
      
      router.push(href)
    }
  }

  return (
    <>
      {children}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <LoadingSpinner size="sm" className="mr-2" />
              <span className="text-sm text-muted-foreground">
                Loading {loadingPath === '/' ? 'Home' : loadingPath?.replace('/', '') || 'page'}...
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
