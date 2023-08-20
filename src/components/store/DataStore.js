import { configureStore, createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});

export default store;