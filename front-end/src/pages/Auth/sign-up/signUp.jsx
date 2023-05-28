import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../../../firebase/firebase-utilities';
import { SignUpAnime } from '../../../components/export';
import './SignUp.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, username);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        console.log('Error signing up:', error);
        // Handle signup error if needed
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <SignUpAnime />
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
          <div className="form-group">
            <label className="label" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
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

export default SignUp;
