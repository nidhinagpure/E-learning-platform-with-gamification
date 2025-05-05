import React from 'react';
import { Navbar } from './../../componet/navbar/Navbarr';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React.js Home Page component.</p>
    </div>
  );
};

export default HomePage;