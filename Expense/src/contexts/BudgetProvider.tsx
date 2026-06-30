import React, { useCallback, useEffect } from "react";
import BudgetContext from "./BudgetContext";
import budgetService from "@/features/expenses/services/budgetService";
import { useAuth } from "./useAuth";

interface BudgetProviderProps {
  children: React.ReactNode;
}

const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [amount, setAmount] = React.useState(0);
  const { token, isAuthLoading } = useAuth();

  const getBudget = useCallback(async () => {
    if (isAuthLoading || !token) {
      setAmount(0);
      return;
    }

    try {
      const data = await budgetService.getBudget("monthly");
      setAmount(data.data.data.amount);
    } catch (error) {
      setAmount(0);
    }
  }, [isAuthLoading, token]);

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
