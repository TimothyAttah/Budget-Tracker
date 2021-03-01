import { v4 } from 'uuid';
import { CREATE_BUDGET, LIST_BUDGET, DELETE_BUDGET, EDIT_BUDGET } from '../type';

const initialState = {
 expenses: [ 
    {content: 'Grocery', value: 2000, id: v4()},
    {content: 'Tithe', value: 5000, id: v4()},
    {content: 'Brought Car', value: 1000, id: v4()},
  ]
}

const expenseReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LIST_BUDGET:
      return {
        ...state
      }
    case CREATE_BUDGET: 
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      }
    case DELETE_BUDGET:
      return {
        ...state,
        expenses: state.expenses.filter( income => {
          return action.payload !== income.id
        })
      }
    case EDIT_BUDGET: 
      return {
        ...state
      }
    default:
      return state;
  }
}

export default expenseReducer;