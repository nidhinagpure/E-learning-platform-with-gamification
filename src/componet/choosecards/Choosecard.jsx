import React from 'react';

import './../../componet/choosecards/Choosecard.css';


export function Choosecard({ imageUrl, title, information }) {
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




export default Choosecard;