import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Management Services | Professional Email Support | ProTech Planner",
  description: "Expert email management services for busy professionals. Our virtual assistants handle your inbox, schedule, and communications 24/7. Expert support. Free consultation.",
  keywords: [
    "email management",
    "email management services",
    "email virtual assistant",
    "inbox management",
    "professional email support",
    "email handling services",
  ],
  openGraph: {
    title: "Email Management Services | ProTech Planner",
    description: "Professional email management from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/email-management",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/email-management",
  },
};

export default function EmailManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
