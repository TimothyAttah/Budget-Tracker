/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';

import { Icon } from 'semantic-ui-react';
import { v4 } from 'uuid';

import { GlobalContext } from '../../context/BudgetContext';

const IncomeForm = () => {
  const { addIncome } = useContext( GlobalContext );
  const [ income, setIncome ] = useState( {
    content: '',
    value: 0
  } );

  const { content, value } = income;

  const handleIncome = ( e ) => {
    setIncome( { ...income, [ e.target.name ]: e.target.value } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if ( content !== '' ) {
      const newIncome = {
        id: v4(),
        content,
        value: parseInt( value )
      };
      addIncome( newIncome );
      setIncome( {
        content: '',
        value: ''
      } );
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>Income</label>
        <input type='text' placeholder='add income content' name='content' value={ content } onChange={ handleIncome } />
        <label>Value</label>
        <input type='number' placeholder='add income value' name='value' value={ value } onChange={ handleIncome } />
        <button type='button'><Icon name='check circle' color='green' /></button>
      </form>
    </div>
  );
};

export default IncomeForm;
