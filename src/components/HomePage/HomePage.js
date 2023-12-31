import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addExpense, deleteExpense } from '../store/expensesActions';

const HomePage = () => {
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const expenses = useSelector((state) => state.expenses);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleMoneySpentChange = (event) => {
    setMoneySpent(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new expense object
    const newExpense = {
      moneySpent: parseInt(moneySpent),
      description,
      category,
    };

    dispatch(addExpense(newExpense));

    // Reset the form
    setMoneySpent('');
    setDescription('');
    setCategory('');
  };

  const handleDeleteExpense = (index) => {
    dispatch(deleteExpense(index));
  };
  const totalExpenses = expenses.reduce((total, expense) => total + expense.moneySpent, 0);
  const showActivatePremium = totalExpenses > 10000;


  return (
    
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* <button onClick={handleThemeToggle}>{darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}</button> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="moneySpent">Money Spent:</label>
          <input
            type="number"
            id="moneySpent"
            value={moneySpent}
            onChange={handleMoneySpentChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <div>
        <h2>Expenses:</h2>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                <strong>Money Spent:</strong> {expense.moneySpent},{' '}
                <strong>Description:</strong> {expense.description},{' '}
                <strong>Category:</strong> {expense.category}
                <button onClick={() => handleDeleteExpense(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showActivatePremium && (
        <div>
          <button>Activate Premium</button>
        </div>
      )}
    </div>
  );
};
export default HomePage;