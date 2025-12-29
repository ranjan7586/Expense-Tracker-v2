import axiosAuth from "@/api/axiosAuth";
import type { ApiResponse } from "@/types/api";
import type { ExpenseCategory } from "../types/expense";

export const categoryService = {
  getAll() {
    return axiosAuth.get<ApiResponse<ExpenseCategory[]>>("/expense-categories");
  },
};
