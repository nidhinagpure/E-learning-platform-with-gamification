import React from 'react';
import './../home/Home.css';
import { Navbar } from './../../componet/navbar/Navbarr';
import { Headsection }  from './../../componet/headsection/Headsection';
import { Button } from './../../componet/button/Button';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <div>

        <div>
          <Headsection />
          <Button />
        </div>

        <div>
          
        


        </div>
      </div>
      
    </div>
  );
};

export default HomePage;