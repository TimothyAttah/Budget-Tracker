import { CREATE_BUDGET, LIST_BUDGET, DELETE_BUDGET, EDIT_BUDGET } from '../type';

export const listBudget = () => {
  return {
    type: LIST_BUDGET
  }
}

export const createBudget = ( expenses ) => {
  return {
    type: CREATE_BUDGET,
    payload: expenses
  }
}

export const deleteBudget = ( id ) => {
  return {
    type: DELETE_BUDGET,
    payload: id
  }
}

export const editBudget = ( id ) => {
  return {
    type: EDIT_BUDGET,
    payload: id
  }
}