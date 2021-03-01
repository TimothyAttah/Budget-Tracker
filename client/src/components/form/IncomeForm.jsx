import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const IncomeForm = () => {
  return (
    <div>
      <form>
       
          <label>Income</label>
          <input type='text' />
          <label>Value</label>
          <input type='number' />
        <button ><Icon name='check circle' color='green' /></button>
      </form>
    </div>
  )
}

export default IncomeForm;
