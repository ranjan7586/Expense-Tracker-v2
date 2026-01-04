import React from "react";
import type { Expense } from "../../features/expenses/types/expense";
import TransactionRow from "./TransactionRow";

type Props = {
  expenses: Expense[];
};

const TransactionTable: React.FC<Props> = ({ expenses }: Props) => {
  return (
    <div className="lg:col-span-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {expenses.map((expense) => (
              <TransactionRow key={expense._id} expense={expense} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
