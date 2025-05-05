import { createRoot }from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from "./view/home/Home";
import Courses from "./view/courses/Courses";
import Feedback from "./view/feedback/Feedback";
import Login from "./view/login/Login";
import Doudt from "./view/doudt/Doudt";
import Register from "./view/register/Register";
import Notes from "./view/notes/Notes";
import Condition from "./view/conditions/Condition";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />

       <Route path="/Home" element={<Home />} />
       <Route path="/Courses" element={<Courses />} />
       <Route path="/Doudt" element={<Doudt />} />
       <Route path="/Notes" element={<Notes />} />

       <Route path="/Condition" element={<Condition />} />
       <Route path="/Feedback" element={<Feedback />} />
     </Routes>

  </BrowserRouter>
);

 
