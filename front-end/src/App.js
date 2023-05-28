import React, { useState, useEffect } from 'react';
import { auth } from './firebase/firebase-utilities'; // Import the necessary Firebase services from your Firebase configuration file
import Article from './pages/article/article';
import Navbar from './components/navbar';
import SignUp from "./pages/Auth/signUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when the component unmounts
    };
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Logout successful
        setUser(null);
      })
      .catch((error) => {
        console.log('Error logging out:', error);
        // Handle logout error if needed
      });
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      {user ? (
        <Article />
      ) : (
        <SignUp />
      )}
    </>
  );
}

export default App;
