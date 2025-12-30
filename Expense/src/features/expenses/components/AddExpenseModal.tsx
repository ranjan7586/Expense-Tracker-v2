import React from 'react'
import { X } from 'lucide-react'
import Button from '@/components/ui/Button'

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddExpenseModal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-white/20 backdrop-blur-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Add New Expense</h3>
                    <Button
                        variant="ghost"
                        onClick={() => setShowModal(false)}
                        className="text-white"
                    >
                        <X className="w-6 h-6" />
                    </Button>
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="block text-sm font-medium text-white/80 mb-2">Description</div>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            placeholder="Enter description..."
                        />
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-white/80 mb-2">Amount</div>
                        <input
                            type="number"
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            placeholder="0.00"
                        />
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-white/80 mb-2">Payment Method</div>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                            <option className="bg-gray-800">Online</option>
                            <option className="bg-gray-800">Offline</option>
                        </select>
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-white/80 mb-2">Expense For</div>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                            <option className="bg-gray-800">For Personal</option>
                            <option className="bg-gray-800">For Others</option>
                        </select>
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-white/80 mb-2">Category</div>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                            <option className="bg-gray-800">Food & Dining</option>
                            <option className="bg-gray-800">Transportation</option>
                            <option className="bg-gray-800">Entertainment</option>
                            <option className="bg-gray-800">Shopping</option>
                        </select>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button
                            variant='primary'
                            className="flex-1"
                        >
                            Add Expense
                        </Button>
                        <Button
                            variant='secondary'
                            onClick={() => setShowModal(false)}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpenseModal