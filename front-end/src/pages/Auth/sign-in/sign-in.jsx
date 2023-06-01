import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../../firebase/firebase-utilities';
import { SignInAnime } from '../../../components/export';
import './signIn.scss';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for controlling the visibility of the pop-up

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        console.log('Error signing in:', error);
        // Handle sign in error if needed
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="signIn-container">
      <div className="signIn-form">
        <SignInAnime />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
          </div>
          <button type="submit" className="button animate-hover">
            Submit
          </button>
        </form>
        <button className="button animate-hover" onClick={handlePopupToggle}>
          How To Use
        </button>

        {showPopup && (
          <div className="popup">
            {/* Add your HTML content for the pop-up here */}
            <h3>How To Use:</h3>
            <p>1. Go to the Prediction Page.</p>
            <p>2. Enter the URL of a news article you want to classify.</p>
            <p>3. Click the Submit button.</p>
            <p>4. View the predicted category of the article and the history of past classification requests.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
