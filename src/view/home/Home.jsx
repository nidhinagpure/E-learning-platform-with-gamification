import React from 'react';
import './../home/Home.css';
import { Navbar } from './../../componet/navbar/Navbarr';

import { Button } from './../../componet/button/Button';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <div>

        <div>
          <p>Quality courses at affordable pricing, <br></br>trusted by 2000+ students.</p>
          <p>We help you to learn the latest technologies and tools to kickstart your career in tech.</p>
          <p>Learn, Practice, Master and Achieve.</p>
          <Button />
        </div>

        <div>
          
        


        </div>

      </div>
      
    </div>
  );
};

export default HomePage;