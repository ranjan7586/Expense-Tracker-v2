import React from "react";
import { categoryService } from "../services/categoryServie";
import type { ExpenseCategory } from "../types/expense";
import { Edit, Plus, Trash2, X } from "lucide-react";
import Button from "@/components/ui/Button";

type Props = {
  setShowExCatModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpenseCatListModal = ({ setShowExCatModal }: Props) => {
  const [wait, setWait] = React.useState<boolean>(true);
  const [cats, setCats] = React.useState<ExpenseCategory[]>([]);

  React.useEffect(() => {
    categoryService.getAll().then((res) => {
      setCats(res.data.data);
      setWait(false);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
        {/* ---------- HEADER ---------- */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            Expense Categories
          </h2>
          <div className="side_actions flex items-center gap-2">
            <Button variant="secondary" icon={<Plus className="w-5 h-5" />}>
              Add New
            </Button>
            <Button
              variant="ghost"
              onClick={() => setShowExCatModal(false)}
              className="p-2"
            >
              <X className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>

        {wait && (
          <div className="p-6 text-center text-white/70">Loading...</div>
        )}
        {!wait && (
          <div className="max-h-[60vh] overflow-y-auto">
            {cats.length === 0 ? (
              <div className="p-6 text-center text-white/70">
                No categories found.
              </div>
            ) : (
              <table className="w-full text-sm text-white">
                <thead className="text-white/70 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium">Name</th>
                    <th className="px-6 py-3 text-left font-medium">Type</th>
                    <th className="px-6 py-3 text-right font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {cats.map((cat) => (
                    <tr
                      key={cat._id}
                      className="hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-4 font-medium">{cat.name}</td>
                      <td className="px-6 py-4 capitalize text-white/80">
                        {cat.type}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-3">
                          <Button
                            variant="ghost"
                            className="text-white hover:bg-blue-500/20"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            className="text-white hover:bg-red-500/20"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---------- FOOTER ---------- */}
        <div className="px-6 py-4 border-t border-white/10 flex justify-end">
          <Button variant="secondary" onClick={() => setShowExCatModal(false)}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCatListModal;
