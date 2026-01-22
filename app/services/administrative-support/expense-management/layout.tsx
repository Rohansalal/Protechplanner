import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Management Services | Financial Tracking & Reporting | ProTech Planner",
  description: "Professional expense management services. Our virtual assistants track expenses, process reimbursements, and create financial reports. Expert support. Free consultation.",
  keywords: [
    "expense management",
    "expense management services",
    "expense tracking",
    "virtual assistant expense",
    "financial tracking service",
    "expense reporting",
    "reimbursement processing",
  ],
  openGraph: {
    title: "Expense Management Services | ProTech Planner",
    description: "Professional expense management from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/expense-management",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/expense-management",
  },
};

export default function ExpenseManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
