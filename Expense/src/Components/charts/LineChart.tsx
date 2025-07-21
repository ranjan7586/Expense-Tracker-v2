import React from 'react'
import { LineChart, CartesianGrid, Line, XAxis, YAxis, Legend } from 'recharts';

type Props = {}
const data = [
    { month: 'Jan', expense: 400 },
    { month: 'Feb', expense: 250 },
    { month: 'Mar', expense: 300 },
    { month: 'Apr', expense: 200 },
    { month: 'May', expense: 210 },
    { month: 'Jun', expense: 240 },
    { month: 'Jul', expense: 220 },
];
const LineChartGraph: React.FC<Props> = (props: Props) => {
    return (
        <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="expense" stroke="purple" strokeWidth={2} name="Expense" />
            <XAxis dataKey="month" />
            <YAxis width={80} label={{ value: 'Expense', position: 'insideLeft', angle: -90 }} />
            <Legend align="right" />
        </LineChart>
    )
}

export default LineChartGraph