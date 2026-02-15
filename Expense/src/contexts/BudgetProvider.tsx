import React, { useEffect } from "react";
import BudgetContext from "./BudgetContext";
import budgetService from "@/features/expenses/services/budgetService";

interface BudgetProviderProps {
  children: React.ReactNode;
}

const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [amount, setAmount] = React.useState(0);
  const getBudget = async () => {
    try {
      const data = await budgetService.getBudget("monthly");
      setAmount(data.data.data.amount);
    } catch (error) {}
  };
  useEffect(() => {
    getBudget();
  }, [getBudget]);
  return (
    <BudgetContext.Provider
      value={{ budget: amount, refreshBudget: getBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
