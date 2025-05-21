import React from 'react';
import './../home/Home.css';

import { Navbar } from './../../componet/navbar/Navbarr';
import { Headsection }  from './../../componet/headsection/Headsection';
import { Headerdiv } from './../../componet/headsection/Headsection';

import Video from './../../images/headersection/video-lesson.png';
import Practice from './../../images/headersection/practice.webp';
import Trophy from './../../images/headersection/trophy.webp';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />

      <div className="box-container">
        <div className="">
           <Headsection/>
        </div>   
        <div className="">        
          <Headerdiv image={ Video } title="Enroll and get started." heading="Join live interactive classes and learn from the best instructors." /><br></br>
          <Headerdiv image={ Practice } title="Learn, Practice, and Master." heading="Learn, resolve doubts, and practice with real-world projects."/><br></br>
          <Headerdiv image={ Trophy }title="Grab the opportunity." heading="Apply for internships and jobs with the skills you have learned."/><br></br>
        </div>

      </div>
      
    </div>
  );
};

export default HomePage;