import React from 'react'
import { X } from 'lucide-react'

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddExpenseModal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Add New Expense</h3>
                    <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
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
                        <div className="block text-sm font-medium text-gray-700 mb-2">Payment Method</div>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-gray-700 mb-2">Expense For</div>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                            <option>For Personal</option>
                            <option>For Others</option>
                        </select>
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
                            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpenseModal