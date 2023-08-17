import React from 'react';

const HomePage = ({ fullName}) => {
  return (
    <div className="profile-page">
      <h2>Welcome, {fullName}!</h2>
      <p>This is the homepage content.</p>
    </div>
  );
};
  


export default HomePage;