import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { TrendingUp, BarChart, Target, PieChart, Zap, Shield } from "lucide-react"

export default function FinancialReportingPage() {
  return (
    <FinanceSubServiceTemplate
      title="Financial Reporting"
      description="Comprehensive financial reporting and analysis for informed decision-making"
      heroDescription="Transform raw financial data into actionable insights with our professional financial reporting services. We provide clear, comprehensive reports that help you understand your business performance and make strategic decisions with confidence."
      icon={TrendingUp}
      features={[
        "Monthly Financial Statements (P&L, Balance Sheet, Cash Flow)",
        "Key Performance Indicator (KPI) Dashboards",
        "Budget vs Actual Analysis & Variance Reporting",
        "Cash Flow Forecasting & Projections",
        "Custom Management Reports",
        "Industry Benchmarking & Comparative Analysis"
      ]}
      processes={[
        {
          step: "1",
          title: "Data Analysis",
          description: "Comprehensive review of financial data and trends"
        },
        {
          step: "2",
          title: "Report Generation",
          description: "Create customized financial statements and dashboards"
        },
        {
          step: "3",
          title: "Insight Development",
          description: "Identify key trends and actionable insights"
        },
        {
          step: "4",
          title: "Strategic Review",
          description: "Present findings and recommendations"
        }
      ]}
      benefits={[
        {
          icon: BarChart,
          title: "Data-Driven Decisions",
          description: "Make informed strategic decisions based on accurate financial data"
        },
        {
          icon: Target,
          title: "Performance Tracking",
          description: "Monitor business performance against goals and benchmarks"
        },
        {
          icon: PieChart,
          title: "Cash Flow Optimization",
          description: "Identify opportunities to improve cash flow and reduce costs"
        },
        {
          icon: Shield,
          title: "Investor Ready",
          description: "Professional reports that impress investors and stakeholders"
        }
      ]}
      tools={[
        "QuickBooks Reporting",
        "Microsoft Power BI",
        "Tableau",
        "Excel Advanced Analytics",
        "Google Data Studio",
        "Fathom Analytics",
        "LivePlan"
      ]}
      caseStudies={[
        {
          title: "E-commerce Growth Analysis",
          description: "Developed comprehensive financial dashboards for scaling e-commerce business",
          result: "Identified 25% cost savings and accelerated growth by 40%"
        },
        {
          title: "Non-Profit Grant Reporting",
          description: "Created donor-friendly financial reports for foundation grants",
          result: "Secured $500,000 in additional funding with transparent reporting"
        },
        {
          title: "Manufacturing Efficiency",
          description: "Implemented KPI tracking for production efficiency",
          result: "Improved gross margins by 15% through data-driven decisions"
        }
      ]}
    />
  )
}