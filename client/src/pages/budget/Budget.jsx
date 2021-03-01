import React from 'react'
import ExpenseForm from '../../components/form/ExpenseForm'
import IncomeForm from '../../components/form/IncomeForm'
import BudgetList from './BudgetList'

const Budget = () => {
  return (
    <div>
      <IncomeForm />
      <ExpenseForm />
      <BudgetList />
    </div>
  )
}

export default Budget
