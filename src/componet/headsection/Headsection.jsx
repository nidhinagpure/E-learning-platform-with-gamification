
import react from "react";

export function Headsection(){
    const {image , title , heaidng} = headSection;
    return(
      <>
      
      <div className="headsection-container">

        <div className="">
            <img src={ image } className="head-image"> </img>
           <span className="head-title">{ title }</span>
           <span className="head-heading">{ heaidng }</span>
        </div>

      </div>
      </>
    );
}