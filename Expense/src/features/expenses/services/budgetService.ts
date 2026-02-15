import axiosAuth from "@/api/axiosAuth";

class budgetService {
  getBudget(period: string) {
    return axiosAuth.get(`/budget/get-budget/${period}`);
  }
  addEditBudget(budget: object) {
    return axiosAuth.post(`/budget/createorupdate`, budget);
  }
}
export default new budgetService();
