import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { GlobalContext } from '../../context/BudgetContext';


const ExpenseTransactions = ( { expense } ) => {
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
       <li>{ expense.content }<span>{ expense.value }</span> <span><Icon name='trash' onClick={()=> deleteTransaction(expense.id)} /></span></li>
    </div>
  )
}

export default ExpenseTransactions;
