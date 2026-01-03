export interface Expense {
  id: string | number;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: string;
  icon: string;
}

export interface ExpenseCategory {
  _id: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ExpenseCategoryForm {
  _id?: string;       // optional (only for edit)
  name: string;
  type: string;
}
