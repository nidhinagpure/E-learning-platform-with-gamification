import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './../../componet/interslider/Interslider.css';

import Boy1 from './../../images/interscards/boy.jpg';
import Boy2 from './../../images/interscards/boy1.jpg';
import Boy3 from './../../images/interscards/boy3.jpg';
import Boy4 from './../../images/interscards/boy4.jpg';
import Boy5 from './../../images/interscards/boy5.jpg';




const INTERS = [
    {
        title: "Frontend Developer Intern",
        image: Boy1,
        name: "Alice Johnson",
        company: "TechCorp",
        logo: Boy2,
    },
    {
        title: "Backend Developer Intern",
        image: Boy1,
        name: "Bob Smith",
        company: "CodeWorks",
        logo: Boy4,
    },
    {
        title: "UI/UX Designer Intern",
        image: Boy2,
        name: "Cathy Lee",
        company: "Designify",
        logo: Boy2,
    },
    {
        title: "Data Analyst Intern",
        image: Boy3,
        name: "Daniel Kim",
        company: "DataNest",
        logo: Boy5,
    },
    {
        title: "Software Engineer Intern",
        image: Boy5,
        name: "Eva Brown",
        company: "SoftServe",
        logo: Boy1,
    },
    {
        title: "Machine Learning Intern",
        image: Boy1,
        name: "Frank White",
        company: "AIverse",
        logo: Boy3,
    },
    {
        title: "Cloud Intern",
        image: Boy2,
        name: "Grace Liu",
        company: "CloudZen",
        logo: Boy4,
    },
    {
        title: "DevOps Intern",
        image: Boy3,
        name: "Henry Green",
        company: "OpsPro",
        logo: Boy2,
    },
    {
        title: "Product Manager Intern",
        image: Boy5,
        name: "Isla Parker",
        company: "ProdMate",
        logo: Boy2,
    },
    {
        title: "QA Tester Intern",
        image: Boy4,
        name: "Jack Lee",
        company: "BugTrack",
        logo: Boy1,
    }
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

function Interslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true, // hide arrows
        swipe: true,  // enable touch swipe
        draggable: true, // enable mouse drag
        accessibility: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />, // disable keyboard nav if you want
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <div className="inters-wrapper">
            <span className="inter-heading">Internship Achievers</span><br></br>
            <span className="inter-info">Students who got an internship after learning from us 😊!!!</span>
            <Slider {...settings}>
                {INTERS.map((inter, index) => (
                    <div className="inter-slide" key={index}>
                        <div className="inters-container">
                            <div className="inter-title">
                                <span>{inter.title}</span>
                            </div>

                            <div className="inter-content">
                                <img src={inter.image} className="inter-image" alt="intern" />
                                <p className="inter-name">{inter.name}</p>
                            </div>
                            <div className="inter-company">
                                <img src={inter.logo} className="inter-logo" alt="logo" />
                                <p className="inter-name">{inter.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


// ✅ FIXED EXPORT
export default Interslider;
