import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Icon} from 'semantic-ui-react'

import {listBudget} from '../../redux/actions/incomeActions'

const Income = () => {
  const incomes = useSelector(state => state.incomes.incomes )
  console.log(incomes)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(listBudget())
  },[dispatch])
  return (
    <div>
      <h1>Incomes</h1>
      {incomes.length ? (
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
  )
}

export default Income
