import React from 'react'
import { Calendar, DollarSign, TrendingUp } from 'lucide-react'

type Props = {}

const TopDtlsBar: React.FC<Props> = () => {
    return (
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
    )
}

export default TopDtlsBar