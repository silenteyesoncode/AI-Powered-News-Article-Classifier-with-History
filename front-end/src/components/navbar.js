import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>My News App</h1>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed', // Fix the navbar position
    top: 0, // Position the navbar at the top of the page
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 123, 255, 0.5)',
    padding: '15px 50px',
    fontFamily: 'Roboto, sans-serif',
    zIndex: 999, // Set a high z-index to ensure the navbar appears above other elements
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
    margin: 0,
  },
};

export default Navbar;
