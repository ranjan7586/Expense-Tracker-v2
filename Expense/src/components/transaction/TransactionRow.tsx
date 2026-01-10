import React, { useMemo } from "react";
import { ucfirst } from "@/helpers/helpers";
import type { Expense } from "@/features/expenses/types/expense";
import { getCategoryDisplay } from "@/features/expenses/helpers/categoryHelpers.tsx";

type Props = {
  expense: Expense;
};

const TransactionRow: React.FC<Props> = ({ expense }) => {
  const { icon, colors } = useMemo(
    () => getCategoryDisplay(expense.category?.type),
    [expense.category?.type]
  );

  const formattedDateTime = new Date(expense.date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${colors}`}>{icon}</div>
          <span className="text-gray-900 font-medium">{expense.title}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
        <span className="text-red-600">₹ {expense.amount}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {expense.category?.name}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formattedDateTime}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {ucfirst(expense.expense_mode)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        For {ucfirst(expense.expense_for)}
      </td>
    </tr>
  );
};

export default React.memo(TransactionRow);
