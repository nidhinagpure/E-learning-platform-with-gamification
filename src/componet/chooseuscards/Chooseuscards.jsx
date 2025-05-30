import React from 'react';
import Choosecard from '../choosecards/Choosecard';
import './../../componet/chooseuscards/Chooseuscards.css';

import Affordable from './../../images/choosecards/affordable.png';
import Live from './../../images/choosecards/affordable.png';
import Recorded from './../../images/choosecards/recording.png';
import Doubt from './../../images/choosecards/doudt.png';
import Language from './../../images/choosecards/language.png';
import Notes from './../../images/choosecards/notes.png';
import Feedback from './../../images/choosecards/feedback.png';
import Group from './../../images/choosecards/group.png';
import Resume from './../../images/choosecards/resume.png';
import Interviews from './../../images/choosecards/interview.png';
import Network from './../../images/choosecards/network.png';
import Code from './../../images/choosecards/code.png';

const CARDS = [
  {
    imageUrl: Affordable,
    title: "Affordable Pricing",
    information: "Our course price are around ₹2999. Which is less than 1% of the cost of a college degree in India, and we provide more practical and industry-oriented knowledge.",
  },
  {
    imageUrl: Live,
    title: "Live Interactive Classes",
    information: "Attend live class and get your doubts cleared by the instructor in real-time just like a physical classroom. No boring pre-recorded videos.",
  },
  {
    imageUrl: Recorded,
    title: "Recorded Videos of Live Classes",
    information: "Missed a class? or want to revise? No worries, watch the recorded sessions of live classes multiple times at your own pace and time to understand the concepts better.",
  },
  {
    imageUrl: Doubt,
    title: "Quick Doubt Resolutions",
    information: "Get your doubts resolved quickly. No more waiting for the next class. Once you ask a doubt our teaching assistants will resolve it as soon as possible.",
  },
  {
    imageUrl: Language,
    title: "Language Support",
    information: "We teach in Hindi and English(Hinglish) to make sure that language is not a barrier in your learning journey. We also support doubt resolution in Hindi, English and Marathi(मराठी).",
  },
  {
    imageUrl: Notes,
    title: "Lifetime Free Notes",
    information: "Get lifetime access of the notes that you can refer anytime in the future. High-quality notes prepared by the instructor. No need to buy any books.",
  },
  {
    imageUrl: Feedback,
    title: "Assignments & Feedback",
    information: "Weekly 4-5 assignments and feedback from the instructor to keep you on track.",
  },
  {
    imageUrl: Group,
    title: "Group Projects",
    information: "Work on real-world projects in a group to get the feel of working in a team.",
  },
  {
    imageUrl: Resume,
    title: 'Resume Building',
    information: "We help you to build a professional resume that stands out from the crowd.",
  },
  {
    imageUrl: Interviews,
    title: "Mock Interviews",
    information: "Get prepared for the job interviews with our mock interviews and feedback from the industry experts.",
  },
  {
    imageUrl: Network,
    title: "Professional Network",
    information: "Unlock opportunities by learning correct way of using Peerlist and LinkedIn for hunting jobs and internships.",
  },
  {
    imageUrl: Code,
    title: "Practic, Learn, Grow",
    information: "Practice each day with dedication,Let your effort shape your journey,Become better than you were yesterday.",
  },
]


function Choosecards() {
  return (
    <>
      <div>
        <div className="cards-map">
          {CARDS.map((card) => {
            return (
              <Choosecard imageUrl={card.imageUrl}
                title={card.title}
                information={card.information} />)
          })
          }
        </div>
      </div>
    </>

  );

}
export default Choosecards;




