import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Creation Services | Professional Document Writing | ProTech Planner",
  description: "Professional document creation services. Our virtual assistants create reports, proposals, and business documents. Expert writing. Available 24/7. Free consultation.",
  keywords: [
    "document creation",
    "document creation services",
    "professional document writing",
    "report writing service",
    "business document creation",
    "virtual assistant document",
  ],
  openGraph: {
    title: "Document Creation Services | ProTech Planner",
    description: "Professional document creation from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/document-creation",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/document-creation",
  },
};

export default function DocumentCreationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
