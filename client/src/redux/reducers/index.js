import { combineReducers } from 'redux';
import expenses from './expenseReducer';
import incomes from './incomeReducer';

export default combineReducers( {
  incomes,
  expenses
} );