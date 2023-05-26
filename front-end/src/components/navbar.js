import React from 'react';
import logoImage from '../assets/logo.png'; // Replace './logo.png' with the path to your logo image

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logoImage} alt="Logo" style={styles.logo} />
        <h1 style={styles.logoText}>My News App</h1>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed', // Fix the navbar position
    top: 0, // Position the navbar at the top of the page
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px 50px',
    fontFamily: 'Roboto, sans-serif',
    zIndex: 999, // Set a high z-index to ensure the navbar appears above other elements
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content at the start of the flex container
  },
  logo: {
    width: '40px', 
    height: '40px', 
    padding: '5px',
    backgroundColor: '#FFFFFF',
    marginRight: '20px', // Add spacing between the logo and the text
  },
  logoText: {
    color: '#fff',
    fontSize: '24px',
    margin: 0,
    textAlign: 'center', // Center the text
  },
};

export default Navbar;
