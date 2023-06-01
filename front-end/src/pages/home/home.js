import React from 'react';
import SignInPage from '../Auth/sign-in/sign-in';
import "./home.scss"


const HomePage = () => {
  return (
    <>
      <SignInPage />

        <div className="home-page">
          <h1>Welcome to the AI-Powered News Article Classifier with History</h1>
          <p>
            This application allows you to classify news articles into categories using AI and keeps track of past classification requests.
          </p>
          <h2>How to Use:</h2>
          <ol>
            <li>Go to the Prediction Page.</li>
            <li>Enter the URL of a news article you want to classify.</li>
            <li>Click the Submit button.</li>
            <li>View the predicted category of the article and the history of past classification requests.</li>
          </ol>
        </div>
    </>
  );
};

export default HomePage;
