import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  theme: themeReducer,
});

export default rootReducer;
