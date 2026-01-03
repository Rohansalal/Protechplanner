import { PageLoader } from "@/components/ui/loading"

export default function GlobalLoading() {
  return (
    <PageLoader 
      message="Loading VirtueAssist Pro..." 
      showProgress={true}
      progress={75}
    />
  )
}
