import './../../componet/footer/Footer.css';

import { Link } from 'react-router-dom';

import logo from './../../images/main-logo.png';
import github from './../../images/footer/github.png';
import instagram from './../../images/footer/instagram.png';
import youtube from './../../images/footer/youtube.png';
import peerlist from './../../images/footer/peerlists.jpg';
import Linkdin from './../../images/footer/linkedin (2).png';
import twitter from './../../images/footer/twitter.png';
import mail from './../../images/footer/mail.png';
import location from './../../images/footer/location.png';
import contact from './../../images/footer/call.png';

const Footer = () => {
    const socialMediaLink = [
        {
            icon: github,
            alt: 'Github',
            href: 'https://github.com/',
        },
        {
            icon: instagram,
            alt: 'Instagram',
            href: 'https://www.instagram.com/',

        },
        {
            icon: youtube,
            alt: 'Youtube',
            href: 'https://www.youtube.com/',
        },
        {
            icon: peerlist,
            alt: 'Peerlist',
            href: 'https://peerlist.io/',
        },
        {
            icon: twitter,
            alt: 'Twitter',
            href: 'https://x.com/',

        },
    ];

    const contacInfo = [
        {
            icon: mail,
            alt: 'Mail',
            href: 'mailto:agrimart@gmail.com',
        },
        {
            icon: location,
            alt: '404, Laxmi Heights, Above Lotus Multi-speciality Hospital shewalewadi(Hadapsar),pune-412307 ',
            href: 'https://www.google.com/maps',
        },
        {
            icon: contact,
            alt: '+91 9284011752',
            href: 'tel:+9284011752'
        },
    ];

    const footerRoutes = [
        { path: '/Home', name: 'Home' },
        { path: '/Courses', name: 'Courses' },
        { path: '/Teams-Of-Service', name: 'Teams Of Service' },
        { path: '/Refund-Policy', name: 'Refund Policy' },
    ];

    const learn = [
        { path: '/Enroll', name: 'Full Stack Deveploment' },
        { path: '/Enroll', name: 'Python Programming' },
        { path: '/Enroll', name: 'Aws Services' },
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-logo">
                    <div>
                        <div className="footer-info">
                            <span><img src={logo} className="footer-icon" ></img></span>
                            <span className="footer-name">   Road To Code</span>
                        </div>
                        <div className="footer-paragraph">
                            <p>Affordable Computer Science Education For Everyone. We Provide Quality courses which are trusted by 3000+  students.</p>

                        </div>
                    </div>

                    <div className="footer-social">
                        {socialMediaLink.map((image, index) => (
                            <div key={index}>

                                <Link to={image.href} target="_blank">
                                    <span><img src={image.icon} className="footer-icon" alt={image.alt}></img></span>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>


                <div>
                    <span>Quick Links</span>
                    <div>
                        {footerRoutes.map((quick, index) => (
                            <p key={index} >
                                <Link to={quick.path}>
                                    {quick.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>

                <div>
                    <span>Learn</span>
                    <div>
                        {learn.map((learn, index) => (
                            <p key={index}>
                                <Link to={learn.path}>
                                    {learn.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>

                <div>
                    <span>Contact us</span>
                    {contacInfo.map((contacts, index) => (
                        <div key={index}>
                            <Link to={contacts.href}>
                             <span><img src={contacts.icon} className="footer-icon" alt={contacts.alt}></img></span>
                             <span className="footer-contant">{contacts.alt}</span>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </footer>
    );

}

export default Footer;

