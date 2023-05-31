import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; 
import './navbar.scss';

const Navbar = (props) => {
  const { user, handleLogout } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1 className="logo-text">My News Classifier</h1>
      </div>
      <div className="user-container">
        {user ? (
          <div className="dropdown">
            <div className="dropdown-button-group">
              <p className="user-text">Welcome, {user.displayName}</p>
              <button className="dropdown-button" onClick={toggleDropdown}>
                <i className="fas fa-chevron-down">
                  <img width="40" height="40" src="https://img.icons8.com/office/40/test-account.png" alt="test-account"/>
                </i>
              </button>
            </div>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <p className="user-text">
              Please <Link to="/">sign in</Link> or <Link to="/signup">sign up</Link>
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
