import { Button } from "@/components/ui";
import Modal from "@/components/ui/Modal";
import { currentMonthBudgetSchema } from "@/validations/budget";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

type Props = {
  scope: string;
  period: string;
  onClose: () => void;
  onSubmit: (values: any) => void;
};

const AddBudgetModal: React.FC<Props> = ({
  scope,
  period,
  onClose,
  onSubmit,
}: Props) => {
  return (
    <Modal
      title="Add Budget For Current Month"
      onClose={onClose}
      bgColor="bg-black/60"
    >
      <Formik
        initialValues={{ amount: 0, month: 0, year: 0, period}}
        validationSchema={currentMonthBudgetSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (scope === "current") {
            values.year = new Date().getFullYear();
            values.month = new Date().getMonth() + 1;
          }
          values.period = period;
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Category Name
              </label>
              <Field
                type="number"
                name="amount"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter amount"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-white/70 hover:bg-white"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
                <Button variant="secondary" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddBudgetModal;
