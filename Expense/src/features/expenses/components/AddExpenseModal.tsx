import React from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { expenseSchema } from "@/validations/expense";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { categoryService } from "../services/categoryServie";
import { type ExpenseForm, type ExpenseCategory } from "../types/expense";
import expenseService from "../services/expenseService";
import { toast } from "react-toastify";

type Props = {
  onSuccess: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddExpenseModal = ({ setShowModal, onSuccess }: Props) => {
  const today = new Date().toISOString().split("T")[0];
  const [loadingCats, setLoadingCats] = React.useState(false);
  const [cats, setCats] = React.useState<ExpenseCategory[]>([]);

  const initialValues: ExpenseForm = {
    title: "",
    amount: 0,
    category: "",
    expense_mode: "online",
    expense_for: "personal",
    date: today,
  };

  const fetchCategories = async () => {
    setLoadingCats(true);
    try {
      const res = await categoryService.getAll();
      setCats(res.data.data);
    } catch (error) {
      toast.error("Failed to load categories");
    } finally {
      setLoadingCats(false);
    }
  };

  const handleSubmitForm = async (
    data: ExpenseForm,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const res = await expenseService.create(data);
      toast.success(res.data.message);
      onSuccess();
      setShowModal(false);
      resetForm();
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

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
        <Formik
          initialValues={initialValues}
          validationSchema={expenseSchema}
          onSubmit={handleSubmitForm}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Description
                </label>
                <Field
                  name="title"
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter description..."
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Amount
                </label>
                <Field
                  name="amount"
                  type="number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="0.00"
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="expense_mode"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Payment Method
                </label>
                <Field
                  name="expense_mode"
                  as="select"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="online" className="bg-gray-800">
                    Online
                  </option>
                  <option value="offline" className="bg-gray-800">
                    Offline
                  </option>
                </Field>
                <ErrorMessage
                  name="expense_mode"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="expense_for"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Expense For
                </label>
                <Field
                  name="expense_for"
                  as="select"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="personal" className="bg-gray-800">
                    For Personal
                  </option>
                  <option value="others" className="bg-gray-800">
                    For Others
                  </option>
                </Field>
                <ErrorMessage
                  name="expense_for"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Category
                </label>
                <Field
                  name="category"
                  as="select"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  disabled={loadingCats}
                >
                  <option value="" className="bg-gray-800">
                    {loadingCats ? "Loading..." : "Select a Category"}
                  </option>
                  {cats.map((cat) => (
                    <option
                      key={cat._id}
                      value={cat._id}
                      className="bg-gray-800"
                    >
                      {cat.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Date
                </label>
                <Field
                  name="date"
                  type="date"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="0.00"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="primary"
                  className="flex-1"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add Expense
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddExpenseModal;
