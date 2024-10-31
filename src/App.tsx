
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp" 
import Dashboard from "./Dashboard";

import { FilterDay } from './Components/FilterDay'

const App = () => {
  const currentUser = {
    name: "Elizabeth Gatalskaya",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
  };
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 997d80b92e25dd90186ece776260f80df27be73a
