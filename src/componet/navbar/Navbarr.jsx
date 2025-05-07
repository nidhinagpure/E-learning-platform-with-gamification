import React from "react";
import { Link } from 'react-router-dom';
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

export function Navbar() {
    return (
        <div className="navbar-container">
            <img src={mainlogo} alt="project-logo" className="main-logo" />
            <div className="navbar-heads">
                <Link to="#" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faHouse} className="navbar-icon" /> Home
                    </span>
                </Link>
                <Link to="/Courses" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faBook} className="navbar-icon" /> Courses
                    </span>
                </Link>
                <Link to="/Notes" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faFileAlt} className="navbar-icon" /> Notes
                    </span>
                </Link>
                <Link to="/Doubt" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faQuestionCircle} className="navbar-icon" /> Doubt
                    </span>
                </Link>
                <Link to="/Feedback" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faCommentDots} className="navbar-icon" /> Feedback
                    </span>
                </Link>
            </div>
        </div>
    );
}
