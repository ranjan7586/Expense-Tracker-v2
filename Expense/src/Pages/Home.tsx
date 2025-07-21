import React from 'react'
import LineChartGraph from '../Components/charts/LineChart'
import { IndianRupee, Luggage } from 'lucide-react'

type Props = {}

const Home: React.FC<Props> = (props: Props) => {
    return (
        <div className='container_main min-h-screen'>
            <div className="inner_container p-4">
                <div className="top_hero_sec flex justify-around items-center p-8 gap-5 ">
                    <div className="expenses border-1 rounded-lg bg-mintTeal w-1/3 shadow-2xl border-green-400 min-h-50 flex flex-col p-5">
                        <div className="dis_text flex-1">
                            <p className='text-4xl font-semibold'>Expenses</p>
                        </div>
                        <div className="dis_amount flex-1">
                            <p className='text-6xl font-bold text-white'>$5900</p>
                        </div>
                    </div>
                    <div className="total_bal border-1 rounded-lg bg-mintTeal w-1/3 shadow-2xl border-green-400 min-h-50 flex flex-col p-5">
                        <div className="dis_text flex-1">
                            <p className='text-4xl font-semibold'>Total Balance</p>
                        </div>
                        <div className="dis_amount flex-1">
                            <p className='text-6xl font-bold text-white'>$2000</p>
                        </div>
                    </div>
                    <div className="rem_bal border-1 rounded-lg bg-mintTeal w-1/3 shadow-2xl border-green-400 min-h-50 flex flex-col p-5">
                        <div className="dis_text flex-1">
                            <p className='text-4xl font-semibold'>Remaining</p>
                        </div>
                        <div className="dis_amount flex-1">
                            <p className='text-6xl font-bold text-white'>$3900</p>
                        </div>
                    </div>
                </div>

                <div className="hero_chart flex justify-around items-center p-8 mx-8 my-4 bg-white shadow-2xl rounded-2xl">
                    <LineChartGraph />
                    <LineChartGraph />
                </div>
                <div className="hero_transactions flex justify-around items-center p-8 mx-8 my-8 bg-mintTeal shadow-2xl rounded-2xl">
                    <table className='w-full table-auto border-separate border-spacing-y-5'>
                        <thead className='text-2xl'>
                            <tr className=''>
                                <th>Recent Transactions</th>
                                <th>Amount</th>
                                <th>Mode</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className='text-xl font-bold text-white'>
                            <tr className=''>
                                <td className='text-center'><span><span className='px-2 mr-2  py-2'><Luggage className='inline' /></span>Groceries</span></td>
                                <td className='text-center'><span><IndianRupee className='inline' />1000</span></td>
                                <td className='text-center'>Cash</td>
                                <td className='text-center'>21-07-2025</td>
                            </tr>
                            <tr className=''>
                                <td className='text-center'><span><span className='px-2 mr-2  py-2'><Luggage className='inline' /></span>Groceries</span></td>
                                <td className='text-center'><span><IndianRupee className='inline' />1000</span></td>
                                <td className='text-center'>Cash</td>
                                <td className='text-center'>21-07-2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home