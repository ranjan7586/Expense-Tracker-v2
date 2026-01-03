import React from "react";
import { toast } from "react-toastify";
import Button from "@/components/ui/Button";
import { Edit, Plus, Trash2, X } from "lucide-react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditCategoryModal from "./AddEditCategoryModal";
import { categoryService } from "../services/categoryServie";
import type { ExpenseCategory, ExpenseCategoryForm } from "../types/expense";

type Props = {
  setShowExCatModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Modal = "add" | "edit" | "delete" | null;

const ExpenseCatListModal = ({ setShowExCatModal }: Props) => {
  const [wait, setWait] = React.useState<boolean>(true);
  const [cats, setCats] = React.useState<ExpenseCategory[]>([]);
  const [activeModal, setActiveModal] = React.useState<Modal>(null);
  const [deletingCatId, setDeletingCatId] = React.useState<string | null>(null);
  const [selectedCat, setSelectedCat] = React.useState<ExpenseCategoryForm>({
    name: "",
    type: "",
  });

  const resetForm = () => {
    setSelectedCat({ name: "", type: "" });
  };

  const fetchCategories = async () => {
    try {
      setWait(true);
      const res = await categoryService.getAll();
      setCats(res.data.data);
    } catch {
      toast.error("Failed to load categories");
    } finally {
      setWait(false);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleCreate = async (values: ExpenseCategoryForm) => {
    try {
      const res = await categoryService.create(values);
      toast.success(res.data.message);
      resetForm();
      fetchCategories();
      setActiveModal(null);
    } catch (error: any) {
      toast.error("Failed to create category - " + error.response.data.message);
    }
  };

  const handleDelete = async () => {
    try {
      if (deletingCatId) {
        const res = await categoryService.delete(deletingCatId);
        toast.success(res.data.message);
        resetForm();
        fetchCategories();
        setActiveModal(null);
        setDeletingCatId(null);
      }
    } catch (error: any) {
      toast.error("Failed to delete category - " + error.response.data.message);
    }
  };

  const handleUpdate = async (values: ExpenseCategoryForm) => {
    try {
      if (!values._id) return;
      const res = await categoryService.update(values._id, values);
      toast.success(res.data.message);
      fetchCategories();
      setActiveModal(null);
      setDeletingCatId(null);
    } catch (error: any) {
      toast.error("Failed to update category - " + error.response.data.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="w-full max-w-xl bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
          {/* ---------- HEADER ---------- */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-semibold text-white">
              Expense Categories
            </h2>
            <div className="side_actions flex items-center gap-2">
              <Button
                onClick={() => {
                  resetForm();
                  setActiveModal("add");
                }}
                variant="secondary"
                icon={<Plus className="w-5 h-5" />}
              >
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
                      <tr key={cat._id} className="hover:bg-white/5 transition">
                        <td className="px-6 py-4 font-medium">{cat.name}</td>
                        <td className="px-6 py-4 capitalize text-white/80">
                          {cat.type}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-end gap-3">
                            <Button
                              variant="ghost"
                              className="text-green-500 hover:bg-green-500/20"
                              title="Edit"
                              onClick={() => {
                                setSelectedCat(cat);
                                setActiveModal("edit");
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              className="text-red-600 hover:bg-red-500/20"
                              title="Delete"
                              onClick={() => {
                                setActiveModal("delete");
                                setDeletingCatId(cat._id);
                              }}
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
            <Button
              variant="secondary"
              onClick={() => setShowExCatModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
      {(activeModal === "add" || activeModal === "edit") && (
        <EditCategoryModal
          operation={activeModal}
          selectedCat={selectedCat}
          onClose={() => setActiveModal(null)}
          onSubmit={activeModal === "add" ? handleCreate : handleUpdate}
        />
      )}
      {activeModal === "delete" && (
        <DeleteConfirmModal
          onConfirm={handleDelete}
          onCancel={() => {
            setActiveModal(null);
            setDeletingCatId(null);
          }}
          title="Delete Category"
          message="Are you sure you want to delete this category? This action cannot be undone."
        />
      )}
    </>
  );
};

export default ExpenseCatListModal;
