import { createRoot } from "react-dom/client";
import "./../navbar/Navbar.css";

const root = createRoot(document.getElementById("root"));

export function Navbar(){
    return(
      <div>
         <div>
            <img src="" alt="project-logo"></img>

            <div>
              <a href=""><span><img src="" alt=""></img>Home</span></a>
              <a href=""><span><img src=""alt=""></img>Courses</span></a>
              <a href=""><span><img src=""alt=""></img>Notes</span></a>
              <a href=""><span><img src=""alt=""></img>Doudt</span></a>
              <a href=""><span><img src=""alt=""></img>Feedback</span></a>
            </div>

         </div>
      </div>
    );
}

root.render(
    <> </>
) 

    // File: Navbar.jsx
