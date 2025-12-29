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
