import React, { useState } from 'react';
import VerifyEmail from './components/SignUp/VerifyEmail';


import './App.css';
import SignupForm from './components/SignUp/SignUpForm';
import HomePage from './components/HomePage/HomePage';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
 



  const handleSuccessfulLogin = (name, photoUrl) => {
    // Set the state variables and mark the user as logged in
    setFullName(name);
    setProfilePhotoUrl(photoUrl);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="profile-page">
        <SignupForm onSuccessfulLogin={handleSuccessfulLogin} />
      </div>
    );
  }

  return (
    <div>
      <HomePage fullName={fullName} profilePhotoUrl={profilePhotoUrl} />
      <VerifyEmail />
    </div>
  );
}


export default App;
