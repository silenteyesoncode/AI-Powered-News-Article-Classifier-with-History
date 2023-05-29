import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase-utilities';
import Article from './pages/article/article';
import Navbar from './components/navbar';
import SignUp from './pages/Auth/sign-up/signUp';
import SignIn from './pages/Auth/sign-in/sign-in';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log('Error logging out:', error);
      });
  };

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />
      {user ? (
        <Routes>
        <Route path="/" element={<Article/>  } />
        <Route path="/signup" element={<Article/>  } />
      </Routes>
      ) : (
        <Routes>
          <Route path="/" element={ <SignIn/> } />
          <Route path="/signup" element={<SignUp/> } />
      </Routes>
      ) }
      {/* <Routes>
        <Route path="/" element={user ? <Article /> : <SignIn/> } />
        <Route path="/signup" element={user ? <Article /> : <SignUp/> } />
      </Routes> */}
    </Router>
  );
}

export default App;
