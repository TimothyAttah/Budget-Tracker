import React, {useContext} from 'react'
import { Icon } from 'semantic-ui-react';

import { GlobalContext } from '../../context/BudgetContext';

const IncomeTransactions = ( { income } ) => {
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
       <li>{ income.content }<span>{ income.value }</span> <span><Icon name='trash' onClick={()=> deleteTransaction(income.id)} /></span></li>
    </div>
  )
}

export default IncomeTransactions;
