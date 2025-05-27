import './../home/Home.css';

import { Navbar } from './../../componet/navbar/Navbarr';
import { Headsection } from './../../componet/headsection/Headsection';
import { Headerdiv } from './../../componet/headsection/Headsection';
import { Information } from './../../componet/infromation/Information';
import Chooseus from './../../componet/infromation/Information';
import Choosecards from './../../componet/chooseuscards/Chooseuscards';
import Interslider from './../../componet/interslider/Interslider';


import Video from './../../images/headersection/video-lesson.png';
import Practice from './../../images/headersection/practice.webp';
import Trophy from './../../images/headersection/trophy.webp';

import Students from './../../images/information/students.png';
import Employee from './../../images/information/employee.png';
import Education from './../../images/information/education.png';
import Baches from './../../images/information/baches.png';



const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />

      <div className="box-container">
        <div className="">
          <Headsection />
        </div>
        <div className="">
          <Headerdiv image={Video} title="Enroll and get started." heading="Join live interactive classes and learn from the best instructors." /><br></br>
          <Headerdiv image={Practice} title="Learn, Practice, and Master." heading="Learn, resolve doubts, and practice with real-world projects." /><br></br>
          <Headerdiv image={Trophy} title="Grab the opportunity." heading="Apply for internships and jobs with the skills you have learned." /><br></br>
        </div>
      </div>

      <div className="info-div">
        <Information image={Students} plusnum="3000+" about="Total Students" />
        <Information image={Employee} plusnum="110+" about="Colleges" />
        <Information image={Education} plusnum="3000+" about="Enrollments" />
        <Information image={Baches} plusnum="30+" about="Completed Batches" />
      </div>
      <div className="Chooseus"><Chooseus /></div>
      <div className="cars-maping">
        <Choosecards/>
      </div>
      <div>
        <Interslider/>
        </div>
    </div>
  );
};

export default HomePage;