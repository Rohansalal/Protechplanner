import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { FileText, Calculator, Shield, Zap, Target, PieChart } from "lucide-react"

export default function BookkeepingPage() {
  return (
    <FinanceSubServiceTemplate
      title="Bookkeeping Services"
      description="Professional bookkeeping services to maintain accurate financial records"
      heroDescription="Maintain pristine financial records with our comprehensive bookkeeping services. We handle all aspects of your financial transactions, ensuring accuracy, compliance, and real-time visibility into your business finances."
      icon={FileText}
      features={[
        "Daily Transaction Recording & Categorization",
        "Bank & Credit Card Reconciliation",
        "Accounts Payable & Receivable Management",
        "Chart of Accounts Maintenance",
        "Financial Data Organization & Cleanup",
        "Monthly Closing Procedures"
      ]}
      processes={[
        {
          step: "1",
          title: "Data Collection",
          description: "Gather all financial documents and transaction records"
        },
        {
          step: "2",
          title: "Transaction Categorization",
          description: "Systematically categorize all income and expenses"
        },
        {
          step: "3",
          title: "Reconciliation",
          description: "Match records with bank statements for accuracy"
        },
        {
          step: "4",
          title: "Reporting",
          description: "Generate comprehensive financial reports"
        }
      ]}
      benefits={[
        {
          icon: Calculator,
          title: "Accuracy Guaranteed",
          description: "99.9% accuracy rate in financial recording and reconciliation"
        },
        {
          icon: Shield,
          title: "Audit Ready",
          description: "Always prepared for financial audits and compliance checks"
        },
        {
          icon: Target,
          title: "Real-time Insights",
          description: "Access to up-to-date financial data for better decisions"
        },
        {
          icon: PieChart,
          title: "Time Saving",
          description: "Save 20+ hours monthly on financial administration"
        }
      ]}
      tools={[
        "QuickBooks Online",
        "Xero",
        "FreshBooks",
        "Sage 50cloud",
        "Wave Accounting",
        "Zoho Books",
        "Excel Advanced"
      ]}
      caseStudies={[
        {
          title: "Retail Business Transformation",
          description: "Implemented complete bookkeeping system for multi-location retail business",
          result: "Reduced accounting errors by 95% and saved 30 hours weekly"
        },
        {
          title: "Startup Financial Foundation",
          description: "Set up scalable bookkeeping processes for tech startup",
          result: "Enabled successful Series A funding with clean financials"
        },
        {
          title: "Manufacturing Company Cleanup",
          description: "Cleaned up 2 years of backlogged financial records",
          result: "Recovered $45,000 in missed deductions and improved cash flow"
        }
      ]}
    />
  )
}