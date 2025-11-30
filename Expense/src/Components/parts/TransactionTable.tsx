import React from 'react'
import type { Expense } from '../../Types/expense'
import { DollarSign, ShoppingCart, Car, Coffee, Gamepad2, Home as HomeIcon, Zap, Gift, Utensils } from 'lucide-react';


type Props = {
    expenses: Expense[]
}

const TransactionTable: React.FC<Props> = ({ expenses }: Props) => {

    const getIcon = (iconName: string, className = "w-4 h-4") => {
        const icons: any = {
            Zap: <Zap className={className} />,
            Car: <Car className={className} />,
            Gift: <Gift className={className} />,
            Home: <HomeIcon className={className} />,
            Coffee: <Coffee className={className} />,
            Gamepad2: <Gamepad2 className={className} />,
            Utensils: <Utensils className={className} />,
            DollarSign: <DollarSign className={className} />,
            ShoppingCart: <ShoppingCart className={className} />,
        };
        return icons[iconName] || <DollarSign className={className} />;
    };
    return (
        <div className="lg:col-span-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className={`p-2 rounded-lg mr-3 ${expense.type === 'income'
                                            ? 'bg-green-100 text-green-600'
                                            : expense.category === 'Food'
                                                ? 'bg-orange-100 text-orange-600'
                                                : expense.category === 'Transport'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : expense.category === 'Entertainment'
                                                        ? 'bg-purple-100 text-purple-600'
                                                        : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {getIcon(expense.icon)}
                                        </div>
                                        <span className="text-gray-900 font-medium">{expense.title}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {expense.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                                    <span className={expense.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                                        {expense.type === 'income' ? '+' : '-'}${expense.amount}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransactionTable