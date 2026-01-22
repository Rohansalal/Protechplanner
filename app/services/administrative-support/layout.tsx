import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrative Support Services | Email Management, Data Entry & More | ProTech Planner",
  description: "Professional administrative support services from ProTech Planner. Expert virtual assistants for email management, document creation, data entry, file organization, and more. 24/7 global team. Free consultation.",
  keywords: [
    "administrative support",
    "administrative support services",
    "administrative virtual assistant",
    "email management services",
    "document creation services",
    "data entry services",
    "file organization",
    "travel coordination",
    "expense management",
    "virtual assistant administrative",
    "admin support outsourcing",
    "business administration services",
    "office support services",
    "clerical support services",
  ],
  openGraph: {
    title: "Administrative Support Services | ProTech Planner",
    description: "Complete administrative support solutions. Email management, document creation, data entry, file organization and more. Expert virtual assistants 24/7.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support",
  },
};

export default function AdministrativeSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
