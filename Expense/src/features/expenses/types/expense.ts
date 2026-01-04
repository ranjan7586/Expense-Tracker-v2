export interface Expense {
  _id: string;
  title: string;
  amount: number;
  expense_mode: string;
  expense_for: string;
  category: ExpenseCategory;
  date: string;
}

export interface ExpenseCategory {
  _id: string;
  name: string;
  type: string;
}

export interface ExpenseCategoryForm {
  _id?: string; // optional (only for edit)
  name: string;
  type: string;
}

export interface ExpenseForm {
  _id?: string; // optional (only for edit)
  title: string;
  amount: number;
  expense_mode: string;
  expense_for: string;
  category: string;
  date: string;
}
