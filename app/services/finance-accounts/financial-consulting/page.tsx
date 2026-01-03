import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { Clock, Users, Target, PieChart, Zap, Shield } from "lucide-react"

export default function FinancialConsultingPage() {
  return (
    <FinanceSubServiceTemplate
      title="Financial Consulting"
      description="Strategic financial consulting to optimize performance and drive growth"
      heroDescription="Get expert financial guidance tailored to your unique business challenges. Our financial consultants provide strategic advice, performance optimization strategies, and growth planning to help you navigate complex financial decisions and achieve sustainable business success."
      icon={Clock}
      features={[
        "Business Valuation & Financial Health Assessment",
        "Strategic Financial Planning & Roadmapping",
        "Profitability Analysis & Improvement Strategies",
        "Investment Analysis & Capital Allocation",
        "M&A Due Diligence & Financial Modeling",
        "Succession Planning & Exit Strategy Development"
      ]}
      processes={[
        {
          step: "1",
          title: "Assessment",
          description: "Comprehensive analysis of current financial position"
        },
        {
          step: "2",
          title: "Strategy Development",
          description: "Create customized financial strategies and solutions"
        },
        {
          step: "3",
          title: "Implementation",
          description: "Guide implementation of recommended strategies"
        },
        {
          step: "4",
          title: "Ongoing Support",
          description: "Provide continuous guidance and adjustment"
        }
      ]}
      benefits={[
        {
          icon: Users,
          title: "Expert Guidance",
          description: "Access to seasoned financial experts with industry experience"
        },
        {
          icon: Target,
          title: "Strategic Clarity",
          description: "Clear roadmap for achieving financial objectives"
        },
        {
          icon: PieChart,
          title: "Performance Improvement",
          description: "Identify and capitalize on profit improvement opportunities"
        },
        {
          icon: Shield,
          title: "Risk Mitigation",
          description: "Proactive identification and management of financial risks"
        }
      ]}
      tools={[
        "Financial Modeling Software",
        "Valuation Tools",
        "Industry Benchmarking Databases",
        "Risk Analysis Software",
        "Scenario Planning Tools",
        "Investment Analysis Platforms"
      ]}
      caseStudies={[
        {
          title: "Private Equity Preparation",
          description: "Prepared manufacturing company for private equity investment",
          result: "Achieved 40% higher valuation through strategic improvements"
        },
        {
          title: "Turnaround Strategy",
          description: "Developed financial turnaround plan for struggling retailer",
          result: "Returned to profitability within 12 months, saving 150 jobs"
        },
        {
          title: "International Expansion",
          description: "Financial modeling and planning for global market entry",
          result: "Successful expansion into 3 new countries with 200% ROI"
        }
      ]}
    />
  )
}