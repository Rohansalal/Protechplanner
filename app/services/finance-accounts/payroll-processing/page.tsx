import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { DollarSign, Clock, Shield, Zap, Users, Target } from "lucide-react"

export default function PayrollProcessingPage() {
  return (
    <FinanceSubServiceTemplate
      title="Payroll Processing"
      description="Accurate and compliant payroll processing for businesses of all sizes"
      heroDescription="Streamline your payroll operations with our comprehensive payroll processing services. We ensure accurate, timely, and compliant payroll processing while handling all tax filings and compliance requirements, giving you peace of mind and more time to focus on your business."
      icon={DollarSign}
      features={[
        "Accurate Payroll Calculation & Processing",
        "Federal & State Tax Withholding & Filing",
        "Direct Deposit & Check Processing",
        "Payroll Tax Compliance & Reporting",
        "Employee Self-Service Portals",
        "Year-end W-2 & 1099 Preparation"
      ]}
      processes={[
        {
          step: "1",
          title: "Data Collection",
          description: "Gather hours, bonuses, and deduction information"
        },
        {
          step: "2",
          title: "Calculation",
          description: "Accurate calculation of gross pay and deductions"
        },
        {
          step: "3",
          title: "Processing",
          description: "Execute payroll runs and distribute payments"
        },
        {
          step: "4",
          title: "Reporting",
          description: "Generate payroll reports and file taxes"
        }
      ]}
      benefits={[
        {
          icon: Clock,
          title: "Time Saving",
          description: "Save 15-20 hours monthly on payroll administration"
        },
        {
          icon: Shield,
          title: "Compliance Guarantee",
          description: "100% compliance with ever-changing payroll regulations"
        },
        {
          icon: Users,
          title: "Employee Satisfaction",
          description: "Timely, accurate payments boost employee morale"
        },
        {
          icon: Target,
          title: "Cost Effective",
          description: "Reduce payroll processing costs by up to 40%"
        }
      ]}
      tools={[
        "ADP Workforce Now",
        "Gusto",
        "Paychex Flex",
        "QuickBooks Payroll",
        "OnPay",
        "BambooHR Integration",
        "Time Tracking Software"
      ]}
      caseStudies={[
        {
          title: "Multi-State Restaurant Chain",
          description: "Implemented centralized payroll for 250+ employees across 5 states",
          result: "Reduced payroll errors by 98% and saved $50k annually"
        },
        {
          title: "Tech Company Expansion",
          description: "Scaled payroll system for rapidly growing tech company",
          result: "Seamlessly onboarded 100+ new employees in 6 months"
        },
        {
          title: "Non-Profit Compliance",
          description: "Managed complex payroll for non-profit with multiple funding sources",
          result: "Ensured 100% grant compliance and accurate allocation"
        }
      ]}
    />
  )
}