
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp" 
import Dashboard from "./Dashboard";
import UserSettings from "./UserSettings";
import TransactionDashboard from "./Components/AddTransaction"
import TransactionsReport from "./Pages/TransactionsReport"

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
        <Route path="/Settings" element={<UserSettings />}/>
        <Route path="/addTrans" element={<TransactionDashboard />} />
        <Route path="/transreport" element={<TransactionsReport />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
