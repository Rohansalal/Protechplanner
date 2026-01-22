import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Entry & Management Services | Accurate Data Processing | ProTech Planner",
  description: "Professional data entry and management services. Our virtual assistants handle data input, database management, and accuracy verification. 24/7 support. Free consultation.",
  keywords: [
    "data entry",
    "data entry services",
    "data management",
    "data entry virtual assistant",
    "professional data entry",
    "database management",
    "data processing services",
  ],
  openGraph: {
    title: "Data Entry & Management Services | ProTech Planner",
    description: "Accurate data entry and management from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/data-entry",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/data-entry",
  },
};

export default function DataEntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
