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
    backgroundColor: '#007bff',
    padding: '10px 20px',
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
    margin: 0,
  },
};


export default Navbar;
