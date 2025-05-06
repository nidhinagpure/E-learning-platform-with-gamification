import { createRoot } from "react-dom/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faBook,
    faFileAlt,
    faQuestionCircle,
    faCommentDots
} from '@fortawesome/free-solid-svg-icons';

import "./../navbar/Navbar.css";
import mainlogo from './../../images/main-logo.png';

const root = createRoot(document.getElementById("root"));

export function Navbar() {
    return (
        <div className="navbar-container">
            <img src={mainlogo} alt="project-logo" className="main-logo" />
            <div className="navbar-heads">
                <a href="#">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faHouse} className="navbar-icon" /> Home
                    </span>
                </a>
                <a href="#">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faBook} className="navbar-icon" /> Courses
                    </span>
                </a>
                <a href="#">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faFileAlt} className="navbar-icon" /> Notes
                    </span>
                </a>
                <a href="#">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faQuestionCircle} className="navbar-icon" /> Doubt
                    </span>
                </a>
                <a href="">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faCommentDots} className="navbar-icon" /> Feedback
                    </span>
                </a>
            </div>
        </div>
    );
}

root.render(
    <> </>
);
