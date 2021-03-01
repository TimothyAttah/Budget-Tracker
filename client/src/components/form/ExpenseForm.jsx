import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const ExpenseForm = () => {
  return (
    <div>
      <form>
       
          <label>Expenses</label>
          <input type='text' />
          <label>Value</label>
          <input type='number' />
        <button ><Icon name='check circle' color='red' /></button>
      </form>
    </div>
  )
}

export default ExpenseForm;
