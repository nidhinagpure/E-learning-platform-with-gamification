import React from 'react';
import ReactDOM from 'react-dom/client';
import './../../componet/headsection/Headsection.css';
import studyvideo from './../../images/headersection/video-lesson.png';

   export function Headsection(props){
    const {image , title , heaidng} = props;
    return(

      <>

      <div>

      <div className='headerdiv'>
       <span className="first-title">Quality courses at affordable pricing, <br></br>trusted by 2000+ students.</span><br></br><br></br>
       <span className="sec-title">We help you to learn the latest technologies and tools to kickstart your career<br></br> in tech.</span><br></br><br></br>
       <span className="thrid-title">Learn, Practice, Master and Achieve.</span>
      </div>
       <div className='header-button'>
       <button className="action-button header-btn">Courses</button> 
       <button className="action-button header-btn">Login</button>
       </div>
       
            
      <div className="headsection-container">
        <div className="">

          <div>
           <img src={ studyvideo } className="head-image"></img>
          </div>

           <span className="head-title">Enroll and get started.</span><br></br>
           <span className="head-heading">Join live interactive classes and learn from the best instructors.</span>
      </div>

      </div>      

       
      </div>

      

      </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
   <Headsection />
  </>
)