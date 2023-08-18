import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import SignupForm from './components/SignUp/SignUpForm';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');

  const handleSuccessfulLogin = (name, photoUrl) => {
    setFullName(name);
    setProfilePhotoUrl(photoUrl);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setFullName('');
    setProfilePhotoUrl('');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            {!isLoggedIn && (
              <li>
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button className='button-top-right' onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggedIn ? (
                <HomePage fullName={fullName} profilePhotoUrl={profilePhotoUrl} />
              ) : (
                <div className="profile-page">
                  <SignupForm onSuccessfulLogin={handleSuccessfulLogin} />
                </div>
              )
            }
          />
          <Route path="/login" element={<SignupForm onSuccessfulLogin={handleSuccessfulLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
