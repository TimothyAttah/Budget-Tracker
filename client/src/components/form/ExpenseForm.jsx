import React, {useState, useContext} from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { v4 } from 'uuid';

import {GlobalContext} from '../../context/BudgetContext'

const ExpenseForm = () => {
  const {addExpenses} = useContext(GlobalContext)
  const [ expenses, setExpenses ] = useState( {
    content: '',
    value: 0
  } )

  const {content, value } = expenses
  
 const handleExpenses = ( e ) => {
    setExpenses({...expenses,[e.target.name]: e.target.value})
  }

 const handleSubmit = ( e ) => {
   e.preventDefault()
   if ( content != "" ) {
      const newExpenses = {
     id: v4(),
     content,
     value: parseInt(value)
   }
   addExpenses( newExpenses )
 
   setExpenses( {
     content: '',
     value: ''
   })
   }
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Expenses</label>
          <input type='text' placeholder='add expense content' name='content' value={content} onChange={handleExpenses} />
          <label>Value</label>
          <input type='number'  placeholder='add expense value' name='value' value={value} onChange={handleExpenses} />
        <button ><Icon name='check circle' color='red' /></button>
      </form>
    </div>
  )
}

export default ExpenseForm;
