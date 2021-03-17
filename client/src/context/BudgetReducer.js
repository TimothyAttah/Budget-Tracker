export default ( state, action ) => {
  switch ( action.type ) {
    // case LIST_BUDGET:
    //   return {
    //     ...state
    //   }
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [ action.payload, ...state.incomes ]
      };
    case 'ADD_EXPENSES':
      return {
        ...state,
        expenses: [ action.payload, ...state.expenses ]
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        incomes: state.incomes.filter( income => {
          return action.payload !== income.id;
        } ),
        expenses: state.expenses.filter( expense => {
          return action.payload !== expense.id;
        } )
      };

    // case EDIT_BUDGET:
    //   return {
    //     ...state
    //   }
    default:
      return state;
  }
};
