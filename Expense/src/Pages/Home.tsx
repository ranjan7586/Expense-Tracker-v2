import React from "react";
import LineChartGraph from "../components/charts/LineChart";
import type { Expense } from "../features/expenses/types/expense";
import TransactionTable from "../components/transaction/TransactionTable";
import {
  ChartArea,
  CreditCard,
  Filter,
  List,
  Plus,
  Table,
  TrendingUp,
} from "lucide-react";
import AddExpenseModal from "../features/expenses/components/AddExpenseModal";
import AppHeader from "../components/layout/AppHeader";
import TopDtlsBar from "../components/layout/TopDtlsBar";
import { ActionButton, ToggleButton } from "@/components/ui";
import ExpenseCatListModal from "@/features/expenses/components/ExpenseCatListModal";

type Props = {};
const expenses: Expense[] = [
  {
    id: 2,
    title: "Salary",
    amount: 3500.0,
    category: "Income",
    date: "2024-01-25",
    type: "income",
    icon: "DollarSign",
  },
  {
    id: 3,
    title: "Gas Station",
    amount: 45.2,
    category: "Transport",
    date: "2024-01-24",
    type: "expense",
    icon: "Car",
  },
  {
    id: 1,
    title: "Grocery Shopping",
    amount: 85.5,
    category: "Food",
    date: "2024-01-26",
    type: "expense",
    icon: "ShoppingCart",
  },
  {
    id: 4,
    title: "Netflix Subscription",
    amount: 15.99,
    category: "Entertainment",
    date: "2024-01-23",
    type: "expense",
    icon: "Gamepad2",
  },
];
const Home: React.FC<Props> = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showExCatModal, setShowExCatModal] = React.useState(false);
  const [currentView, setCurrentView] = React.useState("overview");
  return (
    <div className="container_main min-h-screen p-6">
      <AppHeader />
      <div className="inner_container max-w-7xl mx-auto space-y-6">
        <div className="hero_dtls_bar">
          <TopDtlsBar />
        </div>
        <div className="hero_toggle_bar">
          <div className="toggle_bar_inner bg-white/20 shadow-2xl rounded-2xl p-3 flex gap-5">
            <div className="overview_btn">
              {/* <button onClick={() => setCurrentView("overview")} className={`px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 cursor-pointer 
                                transition-all duration-300 ${currentView === "overview" ? "bg-white text-black" : "text-white hover:bg-white/20"}`}>
                                <Table /> Overview
                            </button> */}
              <ToggleButton
                active={currentView === "overview"}
                onClick={() => setCurrentView("overview")}
                icon={<Table />}
                label="Overview"
              />
            </div>
            <div className="analytics_btn">
              {/* <button onClick={() => setCurrentView("analytics")} className={`px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 cursor-pointer 
                                transition-all duration-300 ${currentView === "analytics" ? "bg-white text-black" : "text-white hover:bg-white/20"}`}>
                                <ChartArea /> Analytics
                            </button> */}
              <ToggleButton
                active={currentView === "analytics"}
                onClick={() => setCurrentView("analytics")}
                icon={<ChartArea />}
                label="Analytics"
              />
            </div>
          </div>
        </div>
        <div className="hero_add_filter">
          <div className="add_filter_inner flex gap-5">
            <div className="add_expense_btn">
              {/* <button onClick={() => setShowModal(true)} className='px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 cursor-pointer bg-white'>
                                <Plus /> Add Expense
                            </button> */}
              <ActionButton onClick={() => setShowModal(true)} icon={<Plus />}>
                Add Expense
              </ActionButton>
            </div>
            <div className="add_expense_cat_btn">
              {/* <button onClick={() => setShowModal(true)} className='px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 cursor-pointer bg-white'>
                                <Plus /> Add Expense
                            </button> */}
              <ActionButton
                onClick={() => setShowExCatModal(true)}
                icon={<List />}
              >
                Categories
              </ActionButton>
            </div>
            <div className="filter_btn">
              <button
                className="px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 cursor-pointer
                             bg-white/20 backdrop-blur-lg border border-white/30 text-white"
              >
                <Filter /> Filter
              </button>
            </div>
          </div>
        </div>
        {currentView == "overview" && (
          <div className="hero_transactions flex flex-col md:flex-row md:gap-[5%] gap-5">
            <div className="hero_trsac_sec md:w-[60%] w-full">
              <TransactionTable expenses={expenses} />
            </div>
            <div className="category_wise_exp_sec md:w-[35%] w-full">
              <div className="category_wise_exp_sec_inner space-y-3">
                {/* Category Breakdown - Dark Card */}
                <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl text-white">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Food & Dining</span>
                      <span className="font-semibold">$456.80</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transportation</span>
                      <span className="font-semibold">$245.20</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Entertainment</span>
                      <span className="font-semibold">$189.60</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-400 h-2 rounded-full"
                        style={{ width: "27%" }}
                      ></div>
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
          </div>
        )}
        {currentView == "analytics" && (
          <div className="hero_chart grid grid-cols-1 md:grid-cols-2 gap-6 p-8 my-4 bg-white shadow-2xl rounded-2xl mb-8">
            <LineChartGraph />
            <LineChartGraph />
          </div>
        )}
      </div>
      {showModal && <AddExpenseModal setShowModal={setShowModal} />}
      {showExCatModal && (
        <ExpenseCatListModal setShowExCatModal={setShowExCatModal} />
      )}
    </div>
  );
};

export default Home;
