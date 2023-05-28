import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../../firebase/firebase-utilities';
import { SignInAnime } from '../../../components/export';
import './signIn.scss';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      </div>
    </div>
  );
};

export default SignInPage;
