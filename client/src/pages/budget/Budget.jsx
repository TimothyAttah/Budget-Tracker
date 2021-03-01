import React from 'react'
import ExpenseForm from '../../components/form/ExpenseForm'
import IncomeForm from '../../components/form/IncomeForm'

const Budget = () => {
  return (
    <div>
      <IncomeForm />
      <ExpenseForm />
    </div>
  )
}

export default Budget
