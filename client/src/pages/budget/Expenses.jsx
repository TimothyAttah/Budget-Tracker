import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Icon} from 'semantic-ui-react'


const Expenses = () => {
  // const expenses = useSelector(state => state.expenses.expenses )
  // console.log(expenses)
  // const dispatch = useDispatch()
  // useEffect( () => {
  //   dispatch(listBudget())
  // },[dispatch])
  return (
    <div>
      <h1>Expenses Transaction</h1>
      {/* {expenses.length ? (
        expenses.map( expense => {
          return (
            <ul key={expense.id}>
              <li>{ expense.content }<span>{ expense.value }</span> <span><Icon name='trash' /></span></li>
            </ul>
          )
        })
      ): (
        <div><h2>You have no expenses </h2></div>
      )} */}
    </div>
  )
}

export default Expenses;
