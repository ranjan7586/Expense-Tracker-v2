import React from 'react';
import { Plus, CreditCard, TrendingUp, Calendar, DollarSign, Filter, X, BarChart3, PieChart, ShoppingCart, Car, Coffee, Gamepad2, Home as HomeIcon, Zap, Gift, Utensils } from 'lucide-react';
import LineChartGraph from '../Components/charts/LineChart';

type Props = {}
const expenses = [
    { id: 1, title: 'Grocery Shopping', amount: 85.50, category: 'Food', date: '2024-01-26', type: 'expense', icon: 'ShoppingCart' },
    { id: 2, title: 'Salary', amount: 3500.00, category: 'Income', date: '2024-01-25', type: 'income', icon: 'DollarSign' },
    { id: 3, title: 'Gas Station', amount: 45.20, category: 'Transport', date: '2024-01-24', type: 'expense', icon: 'Car' },
    { id: 4, title: 'Netflix Subscription', amount: 15.99, category: 'Entertainment', date: '2024-01-23', type: 'expense', icon: 'Gamepad2' }
];
const Home: React.FC<Props> = (props: Props) => {
    const getIcon = (iconName: string, className = "w-4 h-4") => {
        const icons: any = {
            ShoppingCart: <ShoppingCart className={className} />,
            DollarSign: <DollarSign className={className} />,
            Car: <Car className={className} />,
            Gamepad2: <Gamepad2 className={className} />,
            Coffee: <Coffee className={className} />,
            Home: <HomeIcon className={className} />,
            Zap: <Zap className={className} />,
            Gift: <Gift className={className} />,
            Utensils: <Utensils className={className} />
        };
        return icons[iconName] || <DollarSign className={className} />;
    };
    return (
        <div className='container_main min-h-screen'>
            <div className="inner_container p-4 max-w-7xl mx-auto space-y-6">
                <div className="top_hero_sec flex flex-col md:flex-row justify-around items-stretch md:items-center mt-8 gap-5 mb-8">
                    {/* Total Balance */}
                    <div className="total_bal border rounded-lg bg-white/20 w-full md:w-1/3 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 backdrop-blur-lg border-white/10 flex items-center justify-between p-5">
                        <div className="dis_text">
                            <p className='text-sm text-white/70 font-medium'>Total Balance</p>
                            <p className='text-3xl font-bold text-white'>$2000</p>
                        </div>
                        <div className="dis_logo p-3 rounded-xl bg-white/20">
                            <DollarSign className='text-white w-6 h-6' />
                        </div>
                    </div>

                    {/* Expenses */}
                    <div className="expenses border rounded-lg bg-white w-full md:w-1/3 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 backdrop-blur-lg border-white/10 flex items-center justify-between p-5">
                        <div className="dis_text">
                            <p className='text-sm font-medium text-gray-400'>Expenses</p>
                            <p className='text-3xl font-bold'>$5900</p>
                        </div>
                        <div className="dis_logo p-3 rounded-xl bg-red-100">
                            <TrendingUp className='text-red-600 w-6 h-6' />
                        </div>
                    </div>

                    {/* Remaining */}
                    <div className="rem_bal border rounded-lg bg-white/20 w-full md:w-1/3 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 backdrop-blur-lg border-white/10 flex items-center justify-between p-5">
                        <div className="dis_text">
                            <p className='text-sm text-white/70 font-medium'>Remaining</p>
                            <p className='text-3xl font-bold text-white'>$3900</p>
                        </div>
                        <div className="dis_logo p-3 rounded-xl bg-green-400/30">
                            <Calendar className='text-white w-6 h-6' />
                        </div>
                    </div>
                </div>

                <div className="hero_chart flex justify-around items-center p-8 my-4 bg-white shadow-2xl rounded-2xl mb-8">
                    <LineChartGraph />
                    <LineChartGraph />
                </div>
                <div className="hero_transactions lg:col-span-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
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
            </div>
        </div>
    )
}

export default Home