import React from "react";
import LineChartGraph from "../components/charts/LineChart";
import type { Expense } from "../features/expenses/types/expense";
import TransactionTable from "../components/transaction/TransactionTable";
import {
  Calendar,
  ChartArea,
  ChevronDown,
  CreditCard,
  Filter,
  IndianRupee,
  List,
  Plus,
  Settings,
  Table,
  TrendingUp,
  User,
} from "lucide-react";
import AddExpenseModal from "../features/expenses/components/AddExpenseModal";
import AppHeader from "../components/layout/AppHeader";
import TopDtlsBar from "../components/layout/TopDtlsBar";
import { ActionButton, Button, ToggleButton } from "@/components/ui";
import ExpenseCatListModal from "@/features/expenses/components/ExpenseCatListModal";
import expenseService from "@/features/expenses/services/expenseService";
import DropdownMenu from "@/components/ui/DropdownMenu";
import BudgetMenus from "@/features/expenses/components/BudgetMenus";
import CustomDateRangeModal from "@/features/expenses/components/CustomDateRangeModal";

type Props = {};
const Home: React.FC<Props> = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showBudgetMenu, setShowBudgetMenu] = React.useState(false);
  const [showExCatModal, setShowExCatModal] = React.useState(false);
  const [currentView, setCurrentView] = React.useState("overview");
  const [expenses, setExpenses] = React.useState<Expense[]>([]);
  const [selectedPeriod, setSelectedPeriod] = React.useState("Monthly");
  const periods = ["Daily", "Weekly", "Monthly", "Yearly", "Custom Range"];
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({ start: "", end: "" });
  const fetchExpenses = async () => {
    try {
      const res = await expenseService.getAll();
      setExpenses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 3. Create a handler for the dropdown selection
  const handlePeriodSelect = (period: string) => {
    if (period === "Custom Range") {
      setShowDatePicker(true);
    } else {
      setSelectedPeriod(period);
      setDateRange({ start: "", end: "" }); // Reset dates if switching back to standard periods
      // TODO: Call your context or API refresh function here
    }
  };

  // 4. Create a handler for when the custom range is applied
  const handleCustomRangeApply = (start: string, end: string) => {
    setDateRange({ start, end });
    console.log(dateRange)
    setSelectedPeriod("Custom Range");
    setShowDatePicker(false);
    // TODO: Call your context or API refresh function here with the specific dates
  };

  React.useEffect(() => {
    fetchExpenses();
  }, []);

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
          <div className="add_filter_inner flex gap-5 flex-wrap">
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
            <div className="settings_btn relative">
              <DropdownMenu
                trigger={
                  <ActionButton icon={<Settings />}>Settings</ActionButton>
                }
              >
                {/* These are the menu items that appear when the dropdown 
      open */}
                <ActionButton
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10"
                  icon={<IndianRupee />}
                  onClick={() => setShowBudgetMenu(true)}
                >
                  Manage Budget
                </ActionButton>
                <ActionButton
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10"
                  icon={<User />}
                >
                  Profile
                </ActionButton>
              </DropdownMenu>
            </div>
            <div className="period_switch ml-auto">
              {/* ml-auto pushes it to the right edge */}
              <DropdownMenu
                trigger={
                  <Button
                    variant="secondary"
                    className="gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl"
                  >
                    <Calendar className="w-4 h-4" />
                    {selectedPeriod}
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </Button>
                }
              >
                {periods.map((period) => (
                  <Button
                    key={period}
                    variant="ghost"
                    className={`w-full justify-start text-white hover:bg-white/10 ${
                      selectedPeriod === period ? "bg-white/20 font-bold" : ""
                    }`}
                    onClick={() => handlePeriodSelect(period)} // <-- Use the new handler here
                  >
                    {period}
                  </Button>
                ))}
              </DropdownMenu>
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
      {showModal && (
        <AddExpenseModal
          setShowModal={setShowModal}
          onSuccess={fetchExpenses}
        />
      )}
      {showExCatModal && (
        <ExpenseCatListModal setShowExCatModal={setShowExCatModal} />
      )}
      {showBudgetMenu && (
        <BudgetMenus onClose={() => setShowBudgetMenu(false)} />
      )}
      {/* NEW: Date Picker Modal */}
      {showDatePicker && (
        <CustomDateRangeModal
          onClose={() => setShowDatePicker(false)}
          onApply={handleCustomRangeApply}
        />
      )}
    </div>
  );
};

export default Home;
