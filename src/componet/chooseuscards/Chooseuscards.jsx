import React from 'react';
import './../../componet/chooseuscards/Chooseuscards.css';



   const CARDS = [
         {
           imageUrl:'../../../images/chooseuscards/group.png',
           title:"Affordable Pricing",
           information:"Our course price are around ₹2999. Which is less than 1% of the cost of a college degree in India, and we provide more practical and industry-oriented knowledge.",
         },
         {
           imageUrl:'',
           title:"Live interactive classes",
           information:"Attend live class and get your doubts cleared by the instructor in real-time just like a physical classroom. No boring pre-recorded videos.",
         },
         {
           imageUrl:'./../',
           title:"Recorded Videos of Live Classes",
           information:"Missed a class? or want to revise? No worries, watch the recorded sessions of live classes multiple times at your own pace and time to understand the concepts better.",
         },
         {
           imageUrl:'./../',
           title:"Quick Doubt Resolutions",
           information:"Get your doubts resolved quickly. No more waiting for the next class. Once you ask a doubt our teaching assistants will resolve it as soon as possible.",
         },
         {
           imageUrl:'./../',
           title:"Language Support",
           information:"We teach in Hindi and English(Hinglish) to make sure that language is not a barrier in your learning journey. We also support doubt resolution in Hindi, English and Marathi(मराठी).",
         },
         {
           imageUrl:'./../',
           title:"Lifetime Free Notes",
           information:"Get lifetime access of the notes that you can refer anytime in the future. High-quality notes prepared by the instructor. No need to buy any books.",
         },
         {
           imageUrl:'./../',
           title:"Assignments and Feedback",
           information:"Weekly 4-5 assignments and feedback from the instructor to keep you on track.",
         },
         {
           imageUrl:'./../',
           title:"Group Projects",
           information:"Work on real-world projects in a group to get the feel of working in a team.",
         },
         {
           imageUrl:'./../',
           title: 'Resume Building',
           information:"We help you to build a professional resume that stands out from the crowd.",
         },
         {
           imageUrl:'./../',
           title:"Mock Interviews",
           information:"Get prepared for the job interviews with our mock interviews and feedback from the industry experts.",
         },
         {
           imageUrl:'',
           title:"Professional Network",
           information:"Unlock opportunities by learning correct way of using Peerlist and LinkedIn for hunting jobs and internships.",
         },
   ]

 export function Chooseuscards({ imageUrl, title, information }) {
    return (
        <>
            <div className=" fixed-box">

                <div className="choose-content">
                    <img src={imageUrl} className="choose-image" alt="image"></img>
                    <span className="choose-title">{title}</span>
                </div>
                    <p className="choose-lines">{information}</p>
            </div>
        </>

    );
}

export default Chooseuscards

