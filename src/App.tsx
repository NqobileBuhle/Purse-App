<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp" 
import Dashboard from "./Dashboard";
=======
import { FilterDay } from './Components/FilterDay'

const App = () => {
  const currentUser = {
    name: "Elizabeth Gatalskaya",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
  };
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
=======
    <div className='App'>
      <SignUp/>
      <SignIn/>
      <FilterDay currentUser= {currentUser} />
      <TransactionsReport/>
      <AddTransaction/>
      
    </div>
  )
>>>>>>> ed1c6707ff5a242d7e75b4058d3bee7aaea1a063
}

export default App;
