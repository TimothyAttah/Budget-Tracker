import React from 'react'
import { Icon } from 'semantic-ui-react';

const IncomeTransactions = ({income}) => {
  return (
    <div>
       <li>{ income.content }<span>{ income.value }</span> <span><Icon name='trash' /></span></li>
    </div>
  )
}

export default IncomeTransactions;
