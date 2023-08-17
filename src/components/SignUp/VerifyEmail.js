import React, { useState } from 'react';

const VerifyEmail = ({ idToken }) => {
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerifyEmail = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAVIbdHb1HjOT4pjxuuD7s0sq-EzzC1uQo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requestType: 'VERIFY_EMAIL',
            idToken: idToken,
          }),
        }
      );

      if (response.ok) {
        setVerificationSent(true);
      } else {
        console.error('Error sending email verification');
      }
    } catch (error) {
      console.error('Error sending email verification:', error);
    }

    setLoading(false);
  };

  return (
    <div>
      {verificationSent ? (
        <p>Check your email. You should have received a verification link.</p>
      ) : (
        <button onClick={handleVerifyEmail} disabled={loading}>
          {loading ? 'Sending verification email...' : 'Send verification email'}
        </button>
      )}
    </div>
  );
};

export default VerifyEmail;