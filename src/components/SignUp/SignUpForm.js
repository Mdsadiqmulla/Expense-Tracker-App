import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignupForm.css';

const SignupForm = ({ onSuccessfulLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    try {
        let endpoint = '';
      let message = '';

      if (isLogin) {
        endpoint =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVIbdHb1HjOT4pjxuuD7s0sq-EzzC1uQo';
        message = 'Login successful!';
      } else {
        if (password !== confirmPassword) {
          console.error('Passwords do not match');
          setAlert('Passwords do not match');
          return;
        }
        endpoint =
        endpoint =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVIbdHb1HjOT4pjxuuD7s0sq-EzzC1uQo';
        message = 'Signup successful!';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Operation successful', data);
        setAlert(message);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
          // Call the onSuccessfulLogin callback with the user's information
          onSuccessfulLogin(data.displayName, data.photoUrl);
      } else {
        const errorData = await response.json();
        console.error('Operation failed', errorData);
        setAlert('Operation failed');
        // Clear form fields
        
      }
    } catch (error) {
      console.error('Error:', error);
      setAlert('Error occurred during operation');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {alert && <div className="alert">{alert}</div>}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}
      <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      <div>
        {isLogin ? 'Need an account? ' : 'Already have an account? '}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SignupForm;
