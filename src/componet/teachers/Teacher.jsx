import react from 'react';

import './../../componet/teachers/Teacher.css';

import Teacher1 from './../../images/teachers/teacher1.jpg';
import Teacher2 from './../../images/teachers/teacher2.jpg';
import Teacher3 from './../../images/teachers/teacher3.jpg';
import Teacher4 from './../../images/teachers/teacher4.jpg';

import Peerlist from './../../images/teachers/peerlist.jpg';
import Linkdin from './../../images/teachers/linkedin.png';
import Github from './../../images/teachers/github.png';

const TEACHERS = [

    {
        image: Teacher1,
        name: "Nidhi Nagpure",
        linkdin: Linkdin,
        github: Github,
        peerlist: Peerlist,
    },

    {
        image: Teacher2,
        name: "Suraj Shende",
        linkdin: Linkdin,
        github: Github,
        peerlist: Peerlist,
    },

    {
        image: Teacher3,
        name: "Suraj Shende",
        linkdin: Linkdin,
        github: Github,
        peerlist: Peerlist,
    },

    {
        image: Teacher4,
        name: "Suraj Shende",
        linkdin: Linkdin,
        github: Github,
        peerlist: Peerlist,
    }
];

function Teacherline() {
    return (
        <>
            <span className="teach-heading">Our <span className="teach-team">Team</span></span>
            <span className="teach-content">We are mad teachers/programmers who love ♥️ to teach and make students learn.</span>
        </>
    );
}

function Teachers(props) {
    const { image, name, linkdin, github, peerlist } = props;
    return (
        <>
            <div className="teacher-container">
                <span><p className="teach-name">{name}</p></span>
                <img src={image} className="teach-image"></img>

                <div className="teach-job">
                    <span><a href='https://www.linkedin.com/feed/' target="_blank"><img src={linkdin} className="job-image"></img></a></span>
                    <span><a href='https://github.com/nidhinagpure' target="_blank"><img src={github} className="job-image"></img></a></span>
                    <span><a href='https://peerlist.io/' target="_blank"><img src={peerlist} className="job-image"></img></a></span>
                </div>
                <a href='./../../view/teacherinfo/Teacherinfo.jsx'><p className="click-teach">Click Here</p></a>
            </div>
        </>

    );
}

export default function Teachercard() {
    return (
        <>
            <Teacherline />
            <div>
                <div className="teach-map">
                    {TEACHERS.map((terachinfo) => {
                        return (
                            <Teachers
                                image={terachinfo.image}
                                name={terachinfo.name}
                                linkdin={terachinfo.linkdin}
                                github={terachinfo.github}
                                peerlist={terachinfo.peerlist}

                            />
                        );
                    })}
                </div>

            </div>
        </>
    );
}



