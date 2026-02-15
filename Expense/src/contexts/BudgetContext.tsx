import { createContext } from "react"

interface BudgetContextType {
    budget: number,
    refreshBudget: () => void
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);
export default BudgetContext;