import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Replace './logo.png' with the path to your logo image
import './navbar.scss';

const Navbar = (props) => {
  const { user, handleLogout } = props;

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1 className="logo-text">My News App</h1>
      </div>
      <div className="user-container">
        {user ? (
          <>
            <p className="user-text">Welcome, {user.displayName}</p>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="user-text">
              Please <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
