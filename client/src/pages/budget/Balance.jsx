import React, { useContext } from 'react';
import { GlobalContext } from '../../context/BudgetContext';

const Balance = () => {
  const { incomes, expenses } = useContext( GlobalContext )
  
  const incomeTransaction = incomes.map(income=> income.value)
  const expenseTransaction = expenses.map( expense => expense.value )
  
  const totalIncome = incomeTransaction.reduce( ( result, item ) => ( result += item ), 0 ).toFixed( 2 );
  
  const totalExpenses = expenseTransaction.reduce( ( result, item ) => ( result += item ), 0 ).toFixed( 2);

  const totalBalance = (totalIncome - totalExpenses).toFixed(2)
  return (
    <div>
      <h2>Your Balance</h2>
      <h3>${ totalBalance }</h3>
      <div>
        <h3>Income:</h3>
        <p>+${ totalIncome }</p>
        <h3>Expenses:</h3>
        <p>-${ totalExpenses }</p>
      </div>
    </div>
  )
}

export default Balance;
