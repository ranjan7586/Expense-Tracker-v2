import axiosAuth from "@/api/axiosAuth";
import type { ApiResponse } from "@/types/api";
import type { ExpenseCategory, ExpenseCategoryForm } from "../types/expense";

export const categoryService = {
  getAll() {
    return axiosAuth.get<ApiResponse<ExpenseCategory[]>>("/expense-categories");
  },
  create(data: ExpenseCategoryForm) {
    return axiosAuth.post<ApiResponse<ExpenseCategory>>(
      "/expense-categories/create",
      data
    );
  },
  update(id: string, data: ExpenseCategoryForm) {
    return axiosAuth.patch<ApiResponse<ExpenseCategory>>(
      `/expense-categories/update/${id}`,
      data
    );
  },
  delete(id: string) {
    return axiosAuth.delete<ApiResponse<ExpenseCategory>>(
      `/expense-categories/delete/${id}`
    );
  },
};
