import React, {useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Icon} from 'semantic-ui-react'
import { GlobalContext } from '../../context/BudgetContext'



const Income = () => {
 const {incomes} = useContext(GlobalContext)
  console.log( incomes )
  
  useEffect( () => {
    
  },[incomes])
 
  return (
    <div>
      <div>
        <h1>Income Transactions</h1>
        { incomes.length ? (
          incomes.map( income => {
            return (
              <ul key={income.id}>
                <li>{ income.content }<span>{ income.value }</span> <span><Icon name='trash' /></span></li>
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

export default Income
