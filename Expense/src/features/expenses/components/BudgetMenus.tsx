import { ActionButton } from "@/components/ui";
import Modal from "@/components/ui/Modal";
import React from "react";
import AddBudgetModal from "./AddBudgetModal";
import budgetService from "../services/budgetService";
import { toast } from "react-toastify";
import { useBudget } from "@/contexts/useBudget";

type Props = {
  onClose: () => void;
};

const BudgetMenus: React.FC<Props> = ({ onClose }: Props) => {
  const { refreshBudget } = useBudget();
  // const [showAnyMonth, setShowAnyMonth] = React.useState(false);
  const [showCurrentMonth, setShowCurrentMonth] = React.useState(false);

  const handleSubmit = async (budget: any) => {
    try {
      const { data } = await budgetService.addEditBudget(budget);
      console.log(data);
      toast.success(data.message);
      onClose();
      await refreshBudget();
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <Modal onClose={onClose} title="Manage Budget">
      <div className="menu_list">
        <div className="menu_options flex flex-col space-y-3 justify-center">
          <ActionButton
            variant="secondary"
            onClick={() => setShowCurrentMonth(true)}
          >
            Add Budget For Current Month
          </ActionButton>
          <ActionButton
            variant="secondary"
            // onClick={() => setShowAnyMonth(true)}
          >
            Add Budget For Any Month
          </ActionButton>
        </div>
        {showCurrentMonth && (
          <AddBudgetModal
            onClose={() => setShowCurrentMonth(false)}
            onSubmit={handleSubmit}
            scope={"current"}
            period={"monthly"}
          />
        )}
      </div>
    </Modal>
  );
};

export default BudgetMenus;
