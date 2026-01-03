import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { Shield, FileCheck, Zap, Target, Calculator, PieChart } from "lucide-react"

export default function TaxPreparationPage() {
  return (
    <FinanceSubServiceTemplate
      title="Tax Preparation & Filing"
      description="Expert tax preparation and filing services for maximum savings and compliance"
      heroDescription="Navigate complex tax regulations with confidence. Our expert tax professionals ensure complete compliance while maximizing your deductions and credits. We handle all aspects of tax preparation, from planning to filing and audit support."
      icon={Shield}
      features={[
        "Business & Personal Tax Return Preparation",
        "Tax Planning & Strategy Development",
        "Deduction Maximization & Credit Optimization",
        "Quarterly Estimated Tax Calculations",
        "IRS & State Tax Compliance",
        "Audit Defense & Representation Services"
      ]}
      processes={[
        {
          step: "1",
          title: "Tax Planning",
          description: "Strategic planning to minimize tax liability"
        },
        {
          step: "2",
          title: "Document Preparation",
          description: "Organize and prepare all necessary tax documents"
        },
        {
          step: "3",
          title: "Return Preparation",
          description: "Accurate preparation of all tax forms and schedules"
        },
        {
          step: "4",
          title: "Filing & Follow-up",
          description: "Electronic filing and ongoing support"
        }
      ]}
      benefits={[
        {
          icon: FileCheck,
          title: "Maximum Savings",
          description: "Average 20-30% higher deductions identified vs self-preparation"
        },
        {
          icon: Shield,
          title: "Audit Protection",
          description: "Complete audit support and representation services"
        },
        {
          icon: Calculator,
          title: "Accuracy Guarantee",
          description: "100% accuracy guarantee on all prepared returns"
        },
        {
          icon: Target,
          title: "Strategic Planning",
          description: "Proactive tax planning to reduce future liabilities"
        }
      ]}
      tools={[
        "TurboTax Professional",
        "Drake Tax Software",
        "ProSeries Tax",
        "CCH Axcess Tax",
        "Thomson Reuters UltraTax",
        "Excel Tax Templates",
        "Tax Planning Software"
      ]}
      caseStudies={[
        {
          title: "Small Business Tax Optimization",
          description: "Comprehensive tax strategy for family-owned manufacturing business",
          result: "Saved $68,000 in taxes through strategic deductions and credits"
        },
        {
          title: "Startup R&D Credits",
          description: "Identified and claimed R&D tax credits for tech startup",
          result: "Recovered $125,000 in qualified research expenses"
        },
        {
          title: "Multi-State Tax Compliance",
          description: "Managed complex multi-state tax filings for expanding business",
          result: "Ensured 100% compliance across 12 states, avoiding $25k in penalties"
        }
      ]}
    />
  )
}