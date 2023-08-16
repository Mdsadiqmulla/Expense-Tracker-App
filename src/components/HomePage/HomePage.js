import React from 'react';

const HomePage = ({ fullName, profilePhotoUrl }) => {
  return (
    <div className="profile-page">
      <h2>Welcome, {fullName}!</h2>
      <img src={profilePhotoUrl} alt="Profile" />
      <p>This is the homepage content.</p>
    </div>
  );
};
  


export default HomePage;