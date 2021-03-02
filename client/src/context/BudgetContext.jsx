import React, { createContext, useReducer } from 'react';
import BudgetReducer from './BudgetReducer';
import {v4} from 'uuid'

const initialState = {
  incomes: [ 
    {content: 'Salary', value: 5000, id: v4()},
    {content: 'Sold car', value: 2000, id: v4()},
    {content: 'Project', value: 3000, id: v4()},
  ],
expenses: [ 
    {content: 'Grocery', value: 2000, id: v4()},
    {content: 'Tithe', value: 5000, id: v4()},
    {content: 'Brought Car', value: 1000, id: v4()},
  ]
}

export const GlobalContext = createContext( initialState )

export const GlobalContextProvider = ({children}) => {
  const [ state, dispatch ] = useReducer( BudgetReducer, initialState )
  return (
    <GlobalContext.Provider value={ {
      incomes: state.incomes,
      expenses: state.expenses
    }}>
      {children}
    </GlobalContext.Provider>
  )
}