import * as yup from 'yup';

export const currentMonthBudgetSchema = yup.object().shape({
    amount: yup.number().required('Amount is required').moreThan(0, 'Amount must be greater than 0')
})