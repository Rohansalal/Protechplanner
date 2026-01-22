import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "File Organization Services | Professional File Management | ProTech Planner",
  description: "Professional file organization and management services. Our virtual assistants organize documents, create systems, and maintain digital filing. Expert support. Free consultation.",
  keywords: [
    "file organization",
    "file organization services",
    "file management",
    "document organization",
    "virtual assistant file management",
    "digital filing system",
    "file organizing services",
  ],
  openGraph: {
    title: "File Organization Services | ProTech Planner",
    description: "Professional file organization from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/file-organization",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/file-organization",
  },
};

export default function FileOrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
