const initialState = [];

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((expense, index) => index !== action.payload);
    default:
      return state;
  }
};

export default expensesReducer;