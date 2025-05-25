import './../../componet/button/Button.css';
import './../../componet/headsection/Headsection.css';


export function Headsection() {
  return (
    <>
      <div className='header-div'>
        <span className="first-title">Quality courses at affordable pricing, <br></br>trusted by 2000+ students.</span><br></br><br></br>
        <span className="sec-title">We help you to learn the latest technologies and tools to kickstart your career<br></br> in tech.</span><br></br><br></br>
        <span className="thrid-title">Learn, Practice, Master and Achieve.</span>
      </div>
      <div className='header-button'>
        <button className="action-button header-btn">🚀Courses</button>
        <button className="action-button header-btn">🔐Login</button>
      </div>
    </>
  );
}

export function Headerdiv(props) {
  const { image, title, heading } = props;
  return (

    <div className="header-box">

      <img src={image} className="head-image"></img>


      <div className='header-lines'>
        <span className="head-title">{title}</span><br></br>
        <span className="head-heading">{heading}</span>
      </div>

    </div>
  );
}
