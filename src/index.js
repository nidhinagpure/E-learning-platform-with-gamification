import { createRoot }from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from "./view/home/Home";
import Intership from "./view/courses/Intership";
import Feedback from "./view/feedback/Feedback";
import Login from "./view/login/Login";
import Doudt from "./view/doudt/Doudt";
import Register from "./view/register/Register";
import Notes from "./view/notes/Notes";
import Condition from "./view/conditions/Condition";
import Teams from "./../../"


import CoursePage  from './componet/courses/Courses';




createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />

       <Route path="/Home" element={<Home />} />
       <Route path="/Intership" element={<Intership />} />
       <Route path="/Notes" element={<Notes />} />
       <Route path="/Doudt" element={<Doudt />} />

       <Route path="/Condition" element={<Condition />} />
       <Route path="/Feedback" element={<Feedback />} />

       <Route path="/Awsmore/:id/:slug" element={<CoursePage/>} />
       <Route path="/Fullmore/:id/:slug" element={<CoursePage/>} />
       <Route path="/Pythonmore/:id/:slug" element={<CoursePage/>} />
       
       <Route path="/Teams" element={<Teams/>} />
       <Route path="/Refund" element={<Refund/>} />
       

     </Routes>
  </BrowserRouter>

);

 
