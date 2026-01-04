import * as yup from 'yup';

export const expenseSchema = yup.object().shape({
    title: yup.string().required('Description is required'),
    amount: yup.number().required('Amount is required'),
    expense_mode: yup.string().required('Expense mode is required'),
    expense_for: yup.string().required('Expense for is required'),
    category: yup.string().required('Category is required'),
    date: yup.string().required('Date is required'),
})