import { v4 } from 'uuid';
import { CREATE_BUDGET, LIST_BUDGET, DELETE_BUDGET, EDIT_BUDGET } from '../type';

const initialState = {
  incomes: [ 
    {content: 'Salary', value: 5000, id: v4()},
    {content: 'Sold car', value: 2000, id: v4()},
    {content: 'Project', value: 3000, id: v4()},
  ]
}

const incomeReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LIST_BUDGET:
      return {
        ...state
      }
    case CREATE_BUDGET: 
      return {
        ...state,
        incomes: [action.payload, ...state.incomes]
      }
    case DELETE_BUDGET:
      return {
        ...state,
        incomes: state.incomes.filter( income => {
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

export default incomeReducer;