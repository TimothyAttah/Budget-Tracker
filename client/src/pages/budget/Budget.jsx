import React from 'react'
import ExpenseForm from '../../components/form/ExpenseForm'
import IncomeForm from '../../components/form/IncomeForm'
import Balance from './Balance'
import BudgetList from './BudgetList'

const Budget = () => {
  return (
    <div>
      <Balance />
      <IncomeForm />
      <ExpenseForm />
      <BudgetList />
    </div>
  )
}

export default Budget
