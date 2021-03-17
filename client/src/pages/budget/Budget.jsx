import React from 'react';

import ExpenseForm from '../../components/form/ExpenseForm';
import IncomeForm from '../../components/form/IncomeForm';
import { GlobalContextProvider } from '../../context/BudgetContext';
import Balance from './Balance';
import BudgetList from './BudgetList';

const Budget = () => {
  return (
    <GlobalContextProvider>
    <div>
      <Balance />
      <IncomeForm />
      <ExpenseForm />
      <BudgetList />
      </div>
      </GlobalContextProvider>
  )
}

export default Budget;
