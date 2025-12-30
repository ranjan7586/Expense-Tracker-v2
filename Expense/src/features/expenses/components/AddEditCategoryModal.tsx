import { Button } from "@/components/ui";
import { X } from "lucide-react";
import React from "react";

type Props = {
  operation: string;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditCategoryModal = ({ setShowEditModal }: Props) => {
  const [catName, setCatName] = React.useState("");
  const [catType, setCatType] = React.useState("");

  const handleCreateAndUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(catName, catType);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
        {/* ---------- HEADER ---------- */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            Update Expense Category
          </h2>
          <div className="side_actions flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => setShowEditModal(false)}
              className="p-2"
            >
              <X className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>

        {/* ---------- BODY ---------- */}
        <form className="space-y-4 p-6" onSubmit={handleCreateAndUpdate}>
          <div>
            <div className="block text-sm font-medium text-white/80 mb-2">
              Category Name
            </div>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCatName(e.target.value)
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter category name"
            />
          </div>
          <div>
            <div className="block text-sm font-medium text-white/80 mb-2">
              Category Type
            </div>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCatType(e.target.value)
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter category type"
            />
          </div>
          {/* ---------- FOOTER ---------- */}
          <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-4">
            <Button
              type="submit"
              variant="primary"
              onClick={() => setShowEditModal(false)}
              className="bg-white/70 hover:bg-white"
            >
              Save
            </Button>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
