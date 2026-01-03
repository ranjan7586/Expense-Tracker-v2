import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui";
import { categorySchema } from "@/validations/category";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { ExpenseCategoryForm } from "../types/expense";

type Props = {
  onClose: () => void;
  onSubmit: (values: ExpenseCategoryForm) => void;
  operation: "add" | "edit";
  selectedCat: ExpenseCategoryForm;
};

const EditCategoryModal:React.FC<Props> = ({
  onClose,
  onSubmit,
  operation,
  selectedCat,
}: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            {operation === "add" ? "Add" : "Update"} Expense Category
          </h2>
          <Button variant="ghost" onClick={onClose} className="p-2">
            <X className="w-5 h-5 text-white" />
          </Button>
        </div>

        <Formik
          initialValues={selectedCat}
          validationSchema={categorySchema}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 p-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Category Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter category name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Category Type
                </label>
                <Field
                  type="text"
                  name="type"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter category type"
                />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-white/70 hover:bg-white"
                  disabled={isSubmitting}
                >
                  {operation === "add" ? "Create" : "Update"}
                </Button>
                <Button variant="secondary" onClick={onClose}>
                  Close
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditCategoryModal;
