import axiosAuth from "@/api/axiosAuth";
import type { ApiResponse } from "@/types/api";
import type { Expense, ExpenseForm } from "../types/expense";

class ExpenseService {
  getAll() {
    return axiosAuth.get<ApiResponse<Expense[]>>("/expenses");
  }

  getById(id: string) {
    return axiosAuth.get<ApiResponse<Expense>>(`/expenses/${id}`);
  }

  create(data: ExpenseForm) {
    return axiosAuth.post<ApiResponse<Expense>>("/expenses/create", data);
  }

  update(id: string, data: ExpenseForm) {
    return axiosAuth.patch<ApiResponse<Expense>>(
      `/expenses/update/${id}`,
      data
    );
  }

  delete(id: string) {
    return axiosAuth.delete<ApiResponse<Expense>>(`/expenses/delete/${id}`);
  }

  getTotalExpense(period: string) {
    return axiosAuth.get<ApiResponse<number>>(
      `/expenses/get-total-expense/${period}`
    );
  }
}

export default new ExpenseService();
