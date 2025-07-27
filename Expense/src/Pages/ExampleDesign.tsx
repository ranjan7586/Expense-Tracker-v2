import React, { useState } from 'react';
import { Plus, CreditCard, TrendingUp, Calendar, DollarSign, Filter, X, BarChart3, PieChart, ShoppingCart, Car, Coffee, Gamepad2, Home, Zap, Gift, Utensils } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ExpenseTrackerDesign = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const expenses = [
        { id: 1, title: 'Grocery Shopping', amount: 85.50, category: 'Food', date: '2024-01-26', type: 'expense', icon: 'ShoppingCart' },
        { id: 2, title: 'Salary', amount: 3500.00, category: 'Income', date: '2024-01-25', type: 'income', icon: 'DollarSign' },
        { id: 3, title: 'Gas Station', amount: 45.20, category: 'Transport', date: '2024-01-24', type: 'expense', icon: 'Car' },
        { id: 4, title: 'Netflix Subscription', amount: 15.99, category: 'Entertainment', date: '2024-01-23', type: 'expense', icon: 'Gamepad2' }
    ];

    // Icon mapping function
    const getIcon = (iconName: string, className = "w-4 h-4") => {
        const icons: any = {
            ShoppingCart: <ShoppingCart className={className} />,
            DollarSign: <DollarSign className={className} />,
            Car: <Car className={className} />,
            Gamepad2: <Gamepad2 className={className} />,
            Coffee: <Coffee className={className} />,
            Home: <Home className={className} />,
            Zap: <Zap className={className} />,
            Gift: <Gift className={className} />,
            Utensils: <Utensils className={className} />
        };
        return icons[iconName] || <DollarSign className={className} />;
    };

    // Chart data
    const monthlyData = [
        { month: 'Jan', income: 3500, expenses: 2100, net: 1400 },
        { month: 'Feb', income: 3600, expenses: 2300, net: 1300 },
        { month: 'Mar', income: 3400, expenses: 1900, net: 1500 },
        { month: 'Apr', income: 3800, expenses: 2400, net: 1400 },
        { month: 'May', income: 3700, expenses: 2200, net: 1500 },
        { month: 'Jun', income: 3900, expenses: 2600, net: 1300 }
    ];

    const categoryData = [
        { name: 'Food & Dining', value: 456.80, color: '#8B5CF6' },
        { name: 'Transportation', value: 245.20, color: '#06B6D4' },
        { name: 'Entertainment', value: 189.60, color: '#10B981' },
        { name: 'Shopping', value: 320.40, color: '#F59E0B' },
        { name: 'Bills', value: 890.30, color: '#EF4444' }
    ];

    const dailySpending = [
        { day: 'Mon', amount: 45 },
        { day: 'Tue', amount: 78 },
        { day: 'Wed', amount: 125 },
        { day: 'Thu', amount: 89 },
        { day: 'Fri', amount: 156 },
        { day: 'Sat', amount: 203 },
        { day: 'Sun', amount: 67 }
    ];
    interface CustomTooltipProps {
        active?: boolean;
        payload?: any[];
        label?: string;
    }

    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-lg p-3 shadow-xl">
                    <p className="text-gray-800 font-semibold">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="font-medium">
                            {entry.name}: ${entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div
            className="min-h-screen p-6"
            style={{ backgroundImage: 'linear-gradient(315deg, #03e5b7 0%, #037ade 74%)' }}
        >
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Expense Tracker</h1>
                    <p className="text-white/80">Manage your finances with style</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Glass Card - Primary */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/70 text-sm font-medium">Total Balance</p>
                                <p className="text-3xl font-bold text-white">$4,285.20</p>
                            </div>
                            <div className="bg-white/20 p-3 rounded-xl">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Solid White Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Monthly Expenses</p>
                                <p className="text-3xl font-bold text-gray-800">$1,456.80</p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-xl">
                                <TrendingUp className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>

                    {/* Gradient Card */}
                    <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/80 text-sm font-medium">This Month</p>
                                <p className="text-3xl font-bold text-white">+$2,140.60</p>
                            </div>
                            <div className="bg-green-400/30 p-3 rounded-xl">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex gap-2 mb-6 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'overview'
                            ? 'bg-white text-gray-800 shadow-lg'
                            : 'text-white hover:bg-white/20'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('charts')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'charts'
                            ? 'bg-white text-gray-800 shadow-lg'
                            : 'text-white hover:bg-white/20'
                            }`}
                    >
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                    </button>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Add Expense
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Transactions Table Card */}
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

                        {/* Sidebar Cards */}
                        <div className="space-y-6">

                            {/* Category Breakdown - Dark Card */}
                            <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl text-white">
                                <h3 className="text-lg font-bold mb-4">Categories</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Food & Dining</span>
                                        <span className="font-semibold">$456.80</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Transportation</span>
                                        <span className="font-semibold">$245.20</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Entertainment</span>
                                        <span className="font-semibold">$189.60</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '27%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions - Colorful Cards */}
                            <div className="space-y-3">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-5 h-5" />
                                        <span className="font-semibold">Add Income</span>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="w-5 h-5" />
                                        <span className="font-semibold">View Reports</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Charts Tab */}
                {activeTab === 'charts' && (
                    <div className="space-y-6">

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* Monthly Income vs Expenses - Line Chart */}
                            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                    Monthly Trends
                                </h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={monthlyData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#6b7280', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#6b7280', fontSize: 12 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line
                                            type="monotone"
                                            dataKey="income"
                                            stroke="#10B981"
                                            strokeWidth={3}
                                            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="expenses"
                                            stroke="#EF4444"
                                            strokeWidth={3}
                                            dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 6, stroke: '#EF4444', strokeWidth: 2 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                                <div className="flex justify-center gap-6 mt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600">Income</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600">Expenses</span>
                                    </div>
                                </div>
                            </div>

                            {/* Category Breakdown - Pie Chart */}
                            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <PieChart className="w-5 h-5 text-purple-600" />
                                    Expense Categories
                                </h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <RechartsPieChart>
                                        <Pie
                                            data={categoryData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={120}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {categoryData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </RechartsPieChart>
                                </ResponsiveContainer>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {categoryData.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            ></div>
                                            <span className="text-xs text-gray-600 truncate">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Full Width Charts */}
                        <div className="grid grid-cols-1 gap-6">

                            {/* Net Income Area Chart */}
                            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-white mb-6">Net Income Trend</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <AreaChart data={monthlyData}>
                                        <defs>
                                            <linearGradient id="netGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0.2} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'white', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'white', fontSize: 12 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Area
                                            type="monotone"
                                            dataKey="net"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#netGradient)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Daily Spending Bar Chart */}
                            <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-white mb-6">Weekly Spending</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={dailySpending}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                        <XAxis
                                            dataKey="day"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'white', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'white', fontSize: 12 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar
                                            dataKey="amount"
                                            fill="#06B6D4"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Add New Expense</h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="block text-sm font-medium text-gray-700 mb-2">Description</div>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        placeholder="Enter description..."
                                    />
                                </div>

                                <div>
                                    <div className="block text-sm font-medium text-gray-700 mb-2">Amount</div>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        placeholder="0.00"
                                    />
                                </div>

                                <div>
                                    <div className="block text-sm font-medium text-gray-700 mb-2">Category</div>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                                        <option>Food & Dining</option>
                                        <option>Transportation</option>
                                        <option>Entertainment</option>
                                        <option>Shopping</option>
                                    </select>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        Add Expense
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenseTrackerDesign;