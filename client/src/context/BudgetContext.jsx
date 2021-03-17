import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import BudgetReducer from './BudgetReducer';

const initialState = {
  incomes: JSON.parse( localStorage.getItem( 'incomeTransaction' ) ) || [],
  expenses: JSON.parse( localStorage.getItem( 'expenseTransaction' ) ) || []
};

export const GlobalContext = createContext( initialState );

export const GlobalContextProvider = ( { children } ) => {
  GlobalContextProvider.propTypes = {
    children: PropTypes.func.isRequired
  };
  const [ state, dispatch ] = useReducer( BudgetReducer, initialState );

  useEffect( () => {
    localStorage.setItem(
      'incomeTransaction', JSON.stringify( state.incomes )
    );
    localStorage.setItem(
      'expenseTransaction', JSON.stringify( state.expenses )
    );
  } );

  const addIncome = ( income ) => {
    dispatch( {
      type: 'ADD_INCOME',
      payload: income
    } );
  };
  const addExpenses = ( expense ) => {
    dispatch( {
      type: 'ADD_EXPENSES',
      payload: expense
    } );
  };

  const deleteTransaction = ( id ) => {
    dispatch( {
      type: 'DELETE_TRANSACTION',
      payload: id
    } );
  };

  return (
    <GlobalContext.Provider value={ {
      incomes: state.incomes,
      expenses: state.expenses,
      addIncome,
      addExpenses,
      deleteTransaction
    } }
    >
      {children }
    </GlobalContext.Provider>
  );
};
