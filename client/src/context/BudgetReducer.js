export default ( state, action ) => {
  switch ( action.type ) {
    // case LIST_BUDGET:
    //   return {
    //     ...state
    //   }
    // case CREATE_BUDGET: 
    //   return {
    //     ...state,
    //     incomes: [action.payload, ...state.incomes]
    //   }
    // case DELETE_BUDGET:
    //   return {
    //     ...state,
    //     incomes: state.incomes.filter( income => {
    //       return action.payload !== income.id
    //     })
    //   }
    // case EDIT_BUDGET: 
    //   return {
    //     ...state
    //   }
    default:
      return state;
  }
}
