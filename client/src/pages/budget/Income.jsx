import React, { useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/BudgetContext';
import IncomeTransactions from './IncomeTransactions';


const Income = () => {
 const {incomes} = useContext(GlobalContext)
  useEffect( () => {
    
  },[incomes])
 
  return (
    <div>
      <div>
        <h3>Income Transactions</h3>
        { incomes.length ? (
          incomes.map( income => {
            return (
              <ul key={income.id}>
                <IncomeTransactions income={income} />
              </ul>
            )
          })
        ): (
           <div><h2>You have no income </h2></div>
        )}
      </div>
    </div>
  )
}

export default Income;
