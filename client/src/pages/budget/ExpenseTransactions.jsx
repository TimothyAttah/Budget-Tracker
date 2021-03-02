import React from 'react';
import { Icon } from 'semantic-ui-react';

const ExpenseTransactions = ({expense}) => {
  return (
    <div>
       <li>{ expense.content }<span>{ expense.value }</span> <span><Icon name='trash' /></span></li>
    </div>
  )
}

export default ExpenseTransactions;
