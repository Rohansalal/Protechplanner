import { FinanceSubServiceTemplate } from "@/components/finance-subservice-template"
import { BarChart3, Target, PieChart, Zap, TrendingUp, Shield } from "lucide-react"

export default function BudgetPlanningPage() {
  return (
    <FinanceSubServiceTemplate
      title="Budget Planning"
      description="Strategic budget planning and financial forecasting for business success"
      heroDescription="Take control of your financial future with our comprehensive budget planning services. We help you create realistic budgets, accurate forecasts, and implement monitoring systems that keep your business on track to achieve its financial goals and drive sustainable growth."
      icon={BarChart3}
      features={[
        "Annual Operating Budget Development",
        "Cash Flow Forecasting & Projections",
        "Departmental Budget Allocation",
        "Variance Analysis & Performance Tracking",
        "Scenario Planning & What-If Analysis",
        "Capital Expenditure Budgeting"
      ]}
      processes={[
        {
          step: "1",
          title: "Goal Setting",
          description: "Define financial objectives and growth targets"
        },
        {
          step: "2",
          title: "Budget Development",
          description: "Create detailed, realistic budget projections"
        },
        {
          step: "3",
          title: "Implementation",
          description: "Set up tracking systems and accountability"
        },
        {
          step: "4",
          title: "Monitoring",
          description: "Regular review and adjustment of budgets"
        }
      ]}
      benefits={[
        {
          icon: Target,
          title: "Goal Alignment",
          description: "Ensure financial resources support business objectives"
        },
        {
          icon: PieChart,
          title: "Cash Flow Control",
          description: "Maintain positive cash flow and avoid surprises"
        },
        {
          icon: TrendingUp,
          title: "Growth Planning",
          description: "Plan for sustainable growth and expansion"
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Identify and mitigate financial risks early"
        }
      ]}
      tools={[
        "QuickBooks Budgeting",
        "LivePlan",
        "Microsoft Excel Advanced",
        "Adaptive Insights",
        "PlanGuru",
        "Float Cash Flow",
        "Scoro"
      ]}
      caseStudies={[
        {
          title: "Manufacturing Expansion",
          description: "Developed 3-year budget for new production facility",
          result: "Secured $2M financing and achieved 95% budget adherence"
        },
        {
          title: "Retail Chain Optimization",
          description: "Created store-level budgets for 15-location chain",
          result: "Improved profitability by 22% through better cost control"
        },
        {
          title: "Startup Funding Preparation",
          description: "Built investor-ready financial model and budgets",
          result: "Successfully raised $1.5M in seed funding"
        }
      ]}
    />
  )
}