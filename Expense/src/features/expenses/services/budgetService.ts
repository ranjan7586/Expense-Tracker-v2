import axiosAuth from "@/api/axiosAuth";

class budgetService {
  getBudget(period: string) {
    return axiosAuth.get(`/budget/get-budget/${period}`)
  }
}
export default new budgetService();