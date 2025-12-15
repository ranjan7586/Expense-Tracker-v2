import { TrendingUp } from 'lucide-react';
import React from 'react'
import { LineChart, CartesianGrid, Line, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {}
const data = [
    { month: 'Jan', income: 3500, expenses: 2100, net: 1400 },
    { month: 'Feb', income: 3600, expenses: 2300, net: 1300 },
    { month: 'Mar', income: 3400, expenses: 1900, net: 1500 },
    { month: 'Apr', income: 3800, expenses: 2400, net: 1400 },
    { month: 'May', income: 3700, expenses: 2200, net: 1500 },
    { month: 'Jun', income: 3900, expenses: 2600, net: 1300 }
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
const LineChartGraph: React.FC<Props> = (props: Props) => {
    return (
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Monthly Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
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
    )
}

export default LineChartGraph