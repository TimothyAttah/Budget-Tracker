import React, { useContext } from 'react';

import { GlobalContext } from '../../context/BudgetContext';
import ExpenseTransaction from './ExpenseTransactions';

const Expenses = () => {
  const { expenses } = useContext( GlobalContext );
  return (
    <div>
      <h3>Expense Transactions</h3>
      {expenses.length ? (
        expenses.map( expense => {
          return (
            <ul key={expense.id}>
              <ExpenseTransaction expense={expense} />
            </ul>
          )
        })
      ): (
        <div><h2>You have no expenses</h2></div>
      )}
    </div>
  )
}

export default Expenses;
